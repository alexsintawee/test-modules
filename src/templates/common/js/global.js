import { testData } from './testData';
import SVGs from '../../_global/SVGs/js/svgs';

function {{module_name}}CCT() {
    let genHTML = ''; let cnt = 0;
    const dataElems = document.querySelectorAll('[data-{{module_name}}]');
    for (const dataElem of dataElems) {
        const dataJsons = dataElem.getAttribute('data-json') !== null && dataElem.getAttribute('data-json') !== ''? JSON.parse(dataElem.getAttribute('data-json')):testData.data;
        genHTML = `<div class="{{module_name}}--wrapper">`;
            for (const dataJson of dataJsons) {
                genHTML += `<div class="{{module_name}}--wrapper--container">
                <div class="bx-item bx-item--image bx-image">
                    <img src="${dataJson.image}" />
                </div>
                <div class="bx-item bx-item--content bx-content">
                    <h2 class="title">${dataJson.headline}</h2>
                    <div class="content">${dataJson.content}</div>
                </div>
                </div>`;
            }
        genHTML += `</div>`;
        dataElem.innerHTML = genHTML;
        dataElem.removeAttribute('data-{{module_name}}');
        if (dataElem && dataElem.getAttribute('data-json')) {
            dataElem.removeAttribute('data-json');
        }
        cnt++;
    }
}
(function(){
    'use strict';
    {{module_name}}CCT();
    new SVGs();
}());
