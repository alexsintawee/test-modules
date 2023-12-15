/*
--------------------
Base configurations
--------------------
*/

const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const fs = require('fs');
const glob = require('glob');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const cheerio = require('cheerio');

// Our function that generates our html plugins
function generateHtmlPlugins (templateDir) {
    // Read files in /html directory
    const templateFiles = fs
    .readdirSync(path.resolve(__dirname, templateDir))
    .filter(function(file){ //ignore folder
        return file.indexOf('.html') > -1
    });

    return templateFiles.map(item => {
        // Split names and extension
        const parts = item.split('.')
        const name = parts[0]
        const extension = parts[1]
        // Create new HTMLWebpackPlugin with options
        return new HtmlWebPackPlugin({
            'filename': `${name}.html`,
            'minify': false,
            'template': path.resolve(__dirname, `${templateDir}/${name}.${extension}`)
        });
    });
}

const htmlPlugins = generateHtmlPlugins('../src/html');

/**
 * Pre Process our HTML for any includes tags
 * @param {string} content - The contained content of the include tag
 * @param {object} loaderContext - The loader context
 * @param {string} filePath - The path to the file being processed
 * @returns
 */
const processNestedHtml = (content, loaderContext, filePath = null) => {
    // Get the file path
    const filePathToUse = filePath || loaderContext.resourcePath;

    // Get the project root
    const projectRoot = path.resolve(__dirname, '../');

    // Load the content as a cheerio object
    const $ = cheerio.load(content, { xmlMode: true, selfClosingTags: false, decodeEntities: false });

    // Find all the nested includes
    const includes = $('include').toArray();

    // For each nested include
    includes.forEach((include) => {
        // Get the src attribute
        const src = $(include).attr('src');

        // Get the src without any query params
        const srcWithoutQuery = src.split('?')[0];

        // Get the include type from the query params
        const includeType = src.split('?')[1];

        // Try to resolve the path to the nested include relative to the project root
        let nestedFilePath = path.resolve(projectRoot, srcWithoutQuery);

        // If the file does not exist, try to resolve it relative to the file being processed
        if (!fs.existsSync(nestedFilePath)) {
            nestedFilePath = path.resolve(
                path.dirname(filePathToUse),
                srcWithoutQuery
            );
        }

        // If the file can't be resolved, throw an error
        if (!fs.existsSync(nestedFilePath)) {
            throw new Error(
                `Could not resolve nested include: ${srcWithoutQuery}`
            );
        }

        // if transform attribute is present, evaluate the callback
        const transform = $(include).attr("transform")
        const transformFunction = transform
            ? Function(`return ${transform}`)()
            : (a) => a

        // Add the include file to the watched files
        loaderContext.addDependency(nestedFilePath);

        // Assume this is a text file
        // Read in the file as a string
        const fileContent = fs.readFileSync(nestedFilePath, 'utf8');
        // apply a transform to pre-process
        const transformedFileContent = transformFunction(fileContent)
        // Replace the include with the content of the file recursively checking for other html includes
        $(include).replaceWith(
            processNestedHtml(transformedFileContent, loaderContext, nestedFilePath)
        );
    });

    // Return the processed content,
    // with weird closing break tags removed
    return $.html().replace(/<\/br>/g, '');
};

// File arrays
let js_files = glob.sync('./src/modules/**/global.js') // Module JS

const copyWebPack = new CopyWebpackPlugin({
    patterns: [
        {
            from: path.resolve(__dirname,'../src/externals'),
            to: 'externals',
            globOptions: {
                ignore: ['__What is this folder for']
            }
        }
    ]
})

module.exports = {
    entry: {
        main: ['./src/index.js'].concat(js_files)
    },
    output: {
        path: path.resolve(__dirname, '../dist'), // Output folder
        filename: 'js/[name].js' // JS output path
    },
    resolve: {
        alias: {
            NodeModules: path.resolve(__dirname, '../node_modules/'),
            src: path.resolve(__dirname, '../src/')
        }
    },
    module: {
        rules: [
            { // HTML
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: {
                        minimize: false,
                        preprocessor: processNestedHtml,
                    }
                }]
            },
            { // JavaScript and JSX only (no JSON)
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader",
                ]
            },
            {
                oneOf: [
                    {
                        resourceQuery: /inline/,
                        type: 'asset/inline',
                    },
                    { // Images
                        test: /\.(png|svg|jpg|gif)$/,
                        type: 'asset/resource',
                        generator: {
                            filename: 'mysource_files/[name].[ext]'
                        }
                    }
                ]
            },
            { // Font files
                test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
                type: 'asset/resource',
                generator: {
                    filename: 'mysource_files/[name].[ext]'
                }
            }
        ]
    },
    plugins: htmlPlugins
        .concat(copyWebPack)
        .concat([new ESLintPlugin()]),
    optimization: {
        minimize: false,
        runtimeChunk: 'single',
    }
};