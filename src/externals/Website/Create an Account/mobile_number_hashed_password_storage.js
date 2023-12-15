
async function createUser(mobile, password) {
  const phoneNumber = phoneUtil.parse(mobile);
  if (!phoneUtil.isValidNumber(phoneNumber)) {
    throw new Error('Invalid phone number format.');
  }
  const countryCode = phoneUtil.getRegionCodeForNumber(phoneNumber);
  if (!supportedCountryCodes.includes(countryCode)) {
    throw new Error('Phone number is not valid in a supported country.');
  }
  const user = new User({
    mobile: mobile,
    password: password
  });
  await user.save();
}

// Get the phone number input field and the country select field
const phoneNumberInput = document.getElementById("phone-number");
const countrySelect = document.getElementById("country");

// Define the regular expressions for each country's phone number format
const afghanistanRegex = /^(\+93)?\d{9}$/;
const albaniaRegex = /^[0-9]{3}\s[0-9]{3}\s[0-9]{3,4}$/;
const algeriaRegex = /^(00213|\+213|0)(5|6|7)[0-9]{8}$/;
const americanSamoaRegex = /^1[0-9]{10}$/;
const andorraRegex = /^(\+376)\d{6}$/;
const angolaRegex = /^((\+244)|0)[9][1236]\d{7}$/;
const anguillaRegex = /^1(\-\d{3}){2}\-\d{4}$/;
const antiguaAndBarbudaRegex = /^(+0)?1-\d{3}-\d{7}$/;
const argentinaRegex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
const armeniaRegex = /^(\+374|0)[\d]{8}$/;
const arubaRegex = /^(\+297|0)[569][0-9]{6}$/;
const australiaRegex = /^(\+61|0)[2-478]( ?\d){8}$/;
const austriaRegex = /^(?:\+43|0)([1-9]\d{0,3})\/(\d{1,2}){1,2}$/;
const azerbaijanRegex = /^(?:\+994|0)([1-9][0-9]{7})$/;
const bahamasRegex = /^(?:\+1|1)?(?:242|424)([1-9]\d{6})$/;
const bahrainRegex = /^(?:\+973|0)([1-9]\d{3})(\d{4})$/;
const bangladeshRegex = /^(?:\+880|0)(?:\d{1,4}|\d{6})(\d{6})$/;
const barbadosRegex = /^(?:\+1|1)?(?:246)([1-9]\d{6})$/;
const belarusRegex = /^(?:\+375|8)([1-9]\d{7})$/;
const belgiumRegex = /^(?:\+32|0)([1-9]{1}[0-9]{7})$/;
const belizeRegex = /^(?:\+501|0)?(?:[26]\d{3})(?:\d{4})$/;
const beninRegex = /^(?:\+229|0)?(?:[67]\d{2})(?:\d{4})$/;
const bermudaRegex = /^(?:\+1|1)?(?:441)([1-9]\d{6})$/;
const bhutanRegex = /^(?:\+975|0)?(?:17|2[0-4]|7[7-9])(\d{6})$/;
const boliviaRegex = /^(?:\+591|0)?(?:[67]\d{3})(?:\d{4})$/;
const bosniaAndHerzegovinaRegex = /^(?:\+387|0)([1-9]\d{7})$/;
const botswanaRegex = /^(?:\+267|0)?(?:7[2-9]|75|76|77)(\d{6})$/;
const brazilRegex = /^(?:\+55|0)?(?:[1-9][1-9]|[2-9]1|[2-9]3|[2-9]4|[2-9]7|[2-9]8)\d{7}$/;
const britishIndianOceanTerritory = /^246\d{7}$/;
const bruneiRegex = /^(?:\+673|0)?(?:7|8)\d{7}$/;
const bulgariaRegex = /^(?:\+359|0)?(?:[2-9]|[3-9]0)\d{7}$/;
const burkinaFasoRegex = /^(?:\+226|0)([1-9]\d{6})$/;
const burundiRegex = /^(?:\+257|0)?(?:[79]\d{7})$/;
const cambodiaRegex = /^(?:\+855|0)?(?:[1-9]\d{7,8})$/;
const cameroonRegex = /^(?:\+237|0)?(?:[2368]\d{7,8}|7[01278]\d{6})$/;
const canadaRegex = /^(?:\+1|1)?(?:[2-9][0-9]{2})[0-9]{7}$/;
const capeVerdeRegex = /^(?:\+238|0)?(?:9[1-9])(\d{6})$/;
const caymanIslandsRegex = /^(?:\+1|1)?(?:345)([239]\d{6})$/;
const centralAfricanRepublicRegex = /^(?:\+236|0)[67]\d{7}$/;
const chadRegex = /^(?:\+235|0)[679]\d{7}$/;
const chileRegex = /^(?:\+56|0)[1-9]\d{8}$/;
const chinaRegex = /^(?:(?:\+|00)86)?1\d{10}$/;
const christimasIslandRegex = /^(?:(?:+|00)61)?4\d{8}$/;
const cocosIslandsRegex = /^(?:(?:+|00)61)?4\d{8}$/;
const colombiaRegex = /^(?:(?:\+|00)57)?(?:(?:0)|(?:1)|(?:3))\d{8,9}$/;
const comorosRegex = /^(?:\+269)?\d{7}$/;
const cookIslandsRegex = /^(\+682)?\d{5}$/
const costaRicaRegex = /^(?:(?:\+|00)506)?[2-8]\d{7}$/;
const croatiaRegex = /^(?:\+385|\+385\s)?(?:0|\d{2})\d{7,8}$/;
const cubaRegex = /^(?:\+53|53)?(?:5|7)\d{7}$/;
const curacaoRegex = /^(?:(?:\+599)|(?:00599)|0)?(?:6|7|9)\d{6}$/;
const cyprusRegex = /^(?:(?:\+|00)357)?9\d{7}$/;
const czechRepublicRegex = /^(?:(?:\+|00)420)?(?:[1-79]|6\d)\d{8}$/;
const congoDRCRegex = /^(?:\+243|243)?\d{9}$/;
const denmarkRegex = /^(?:(?:\+|00)45)?(?:\d{8})$/;
const djiboutiRegex = /^(?:\+253|253)?[77-9]\d{6}$/;
const dominicaRegex = /^(?:\+1|1)?(?:767)\d{6}$/;
const dominicanRepublicRegex = /^(?:\+1|1)?(?:809|829|849)\d{7}$/;
const eastTimorRegex = /^(?:\+62|62)?(?:\d{2}|\d{3})?\d{8,10}$/;
const ecuadorRegex = /^(?:(?:\+|00)593|0)?(?:[1-9]|2[1-9]|3[2-9]|4[2-9]|5[2-9]|6[2-9])\d{6,7}$/;
const egyptRegex = /^(?:(?:\+|00)20)?1\d{10}$/;
const elSalvadorRegex = /^(?:\+503)?[67]\d{7}$/;
const equatorialGuineaRegex = /^(?:\+240|240)?[01]\d{8}$/;
const eritreaRegex = /^(?:\+291|0)?1\d{6}$/;
const estoniaRegex = /^(?:(?:\+|00)372)?\d{7}(?:\d{2})?$/;
const ethiopiaRegex = /^(?:\+251|0)?[1-59]\d{8}$/;
const falklandIslandsRegex = /^(?:\+500)?\d{4}$/;
const faroeIslandsRegex = /^(?:\+298)?\d{6}$/;
const fijiRegex = /^(?:\+679)?\d{7}$/;
const finlandRegex = /^(?:\+358|\(?\b0\b\)?\s?)\d{9}$/;
const franceRegex = /^(?:\+33|0)[67]\d{8}$/;
const frenchGuianaRegex = /^(?:\+594|0)[67]\d{8}$/;
const frenchPolynesiaRegex = /^(?:\+689)?\d{6}$/;
const frenchSouthernTerritoriesRegex = /^(?:\+33|0)[67]\d{8}$/; 
const gabonRegex = /^(?:\+241|0)(?:[014]\d|5[0123456]|7[01234569])\d{5}$/;
const gambiaRegex = /^(?:\+220)?\d{7}$/;
const georgiaRegex = /^(?:\+995|\b8[0-9]\d{7})$/;
const germanyRegex = /^(?:\+49|0)[1-9]\d{10}$/;
const ghanaRegex = /^(?:\+233|0)(?:[2356]\d{8}|7[0123678]\d{7})$/;
const gibraltarRegex = /^(?:\+350|0)?\d{8}$/;
const greeceRegex = /^(?:\+30|0)?(?:2\d{8,9}|69\d{8})$/;
const greenlandRegex = /^(?:\+299)?\d{6}$/;
const grenadaRegex = /^(?:\+1473)?\d{7}$/;
const guadeloupeRegex = /^(?:\+590|0)?[67]\d{8}$/;
const guamRegex = /^(?:\+1|1)?(?:671)\d{7}$/;
const guatemalaRegex = /^(?:\+502)?(?:3|4)\d{7}$/;
const guernseyRegex = /^(?:\+44|0)?1481\d{6}$/;
const guineaRegex = /^(?:\+224|0)?[67]\d{7}$/;
const guineaBissauRegex = /^(?:\+245)?\d{7}$/;
const guyanaRegex = /^(?:\+592)?\d{7}$/;
const haitiRegex = /^(?:\+509)?\d{8}$/;
const heardIslandAndMcDonaldIslands = /^(\+61|0)[2-478]( ?\d){8}$/;
const holySeeRegex = /^(?:\+39|0)([37]\d{1}|\\d{2})\d{7,8}$/;
const hondurasRegex = /^(?:\+504)?\d{8}$/;
const hongKongRegex = /^(?:\+852-?)?[569]\d{3}-?\d{4}$/;
const hungaryRegex = /^(?:\+36)(?:20|30|31|70)\d{7}$/;
const icelandRegex = /^(?:\+354|354)?\d{7}$/;
const indiaRegex = /^(?:\+91|91)?[6789]\d{9}$/;
const indonesiaRegex = /^(?:\+62|62)?(?:\d{2}|\d{3})?\d{8,10}$/;
const iranRegex = /^(?:\+98|0)?9\d{9}$/;
const iraqRegex = /^(?:\+964|0)?7[0-9]\d{8}$/;
const irelandRegex = /^(?:\+353|0)[1-9]\d{7,9}$/;
const isleOfManRegex = /^(?:\+44|0)1624\d{6}$/;
const israelRegex = /^(?:\+972|0)([23489]|5[0248]|77)[1-9]\d{6}$/;
const italyRegex = /^(?:\+39|0)([37]\d{1}|\\d{2})\d{7,8}$/;
const ivoryCoastRegex = /^(?:\+226|0)([1-9]\d{6})$/;
const jamaicaRegex = /^(?:\+1|1)?(?:876|658|876|876|876)[0-9]{7}$/;
const japanRegex = /^(?:\+81|0)[789]0\d{8}$/;
const jerseyRegex = /^(?:\+44|0)1534([4567]\d{6})$/;
const jordanRegex = /^(?:\+962|0)?7[789]\d{7}$/;
const kazakhstanRegex = /^(?:\+7|8)?7\d{9}$/;
const kenyaRegex = /^(?:\+254|0)([17]\d{1}|20|2[34]|3[1234567]|4[123567]|5[12456]|6[1235679]|8[124]|9[01256])\d{6,7}$/;
const kiribatiRegex = /^(?:\+686|686)\d{5}$/;i
const kosovoRegex = /^(?:\+381)?[ ]?(?:6[123456789]|[7-9])\d{7,8}$/;
const kuwaitRegex = /^(?:\+965|0)?[569]\d{7}$/;
const kyrgyzstanRegex = /^(?:\+996|996)(?:\d{3}|\d{5})\d{6}$/;
const laosRegex = /^(?:\+856|0)(20|[69])\d{7,8}$/;
const latviaRegex = /^(?:\+371|0)?2\d{7}$/;
const lebanonRegex = /^(?:\+961|0)?((?:3|7)[\d])\d{6}$/;
const lesothoRegex = /^(?:\+266|0)?[56]\d{7}$/;
const liberiaRegex = /^(?:\+231|0)?\d{6,8}$/;
const libyaRegex = /^(?:\+218|0)?(9[1-9]|[1-8]\d)\d{6,7}$/;
const liechtensteinRegex = /^(?:\+423|0)?7[7-9]\d{5}$/;
const lithuaniaRegex = /^(?:\+370|8)\d{8}$/;
const luxembourgRegex = /^(?:\+352|0)?[26]\d{8}$/;
const macauRegex = /^(?:\+853|0)?6\d{7}$/;
const macedoniaRegex = /^(?:\+389|0)?2[3-5]\d{6}$/;
const madagascarRegex = /^(?:\+261|0)?3[2368]\d{7}$/;
const malawiRegex = /^(?:\+265|0)\d{8}$/;
const malaysiaRegex = /^(?:\+60|0)\d{1,3}\-?\d{7,8}$/;
const maldivesRegex = /^(?:\+960)?\s*(9|7|1)\s*\d{7}$/;
const maliRegex = /^(?:\+223|0)([24579])\d{7}$/;
const maltaRegex = /^(?:\+356)?(77|79|99|21|27|22|25|79|98)\d{6}$/;
const marshallIslandsRegex = /^(?:\+692)?\d{7}$/;
const martiniqueRegex = /^(?:\+33|0)[67](?:\d{2}){3}$/;
const mauritaniaRegex = /^(?:\+222|0)\d{8}$/;
const mauritiusRegex = /^(?:\+230|0)\d{7}$/;
const mayotteRegex = /^(?:\+33|0)[67](?:\d{2}){3}$/;
const mexicoRegex = /^(?:\+52|01)?\d{10}$/;
const micronesiaRegex = /^(?:\+691)?\d{7}$/;
const moldovaRegex = /^(?:\+373|0)\d{8}$/;
const monacoRegex = /^(?:\+377|0)\d{8}$/;
const mongoliaRegex = /^(?:\+976|0)\d{8}$/;
const montenegroRegex = /^(?:\+382|0)\d{8}$/;
const montserratRegex = /^(?:\+1|1)?664\d{7}$/;
const moroccoRegex = /^(?:\+212|0)[567]\d{8}$/;
const mozambiqueRegex = /^(?:\+258|0)\d{8,9}$/;
const myanmarRegex = /^(?:\+95|0)[1-9]\d{8}$/;
const namibiaRegex = /^(?:\+264|0)[67]\d{7}$/;
const nauruRegex = /^(?:\+674)?\d{5}$/;
const nepalRegex = /^(?:\+977|0)\d{9}$/;
const netherlandsRegex = /^(?:\+31|0)[1-9]{1}[0-9]{8}$/;
const newCaledoniaRegex = /^(\+687|0)[568]\d{5}$/;
const newZealandRegex = /^(\+64|0)[28]\d{7}$/;
const nicaraguaRegex = /^(?:\+505)?\d{8}$/;
const nigerRegex = /^(?:\+227)?\d{8}$/;
const nigeriaRegex = /^(?:\+234|0)[7-9]\d{9}$/;
const niueRegex = /^(?:\+683|0)\d{4}$/;
const norfolkIslandRegex = /^(\+61|0)[2-478]( ?\d){8}$/;
const northMacedoniaRegex = /^(?:\+389|0)2[3-9]\d{5}$/;
const northernMarianaIslandRegex = /^(?:\+1|1)?670\d{7}$/;
const norwayRegex = /^(?:\+47)?\d{8,10}$/;
const omanRegex = /^(?:\+968)?\d{8}$/;
const pakistanRegex = /^(?:\+92|0)\d{10}$/;
const palauRegex = /^(?:\+680|0)\d{7}$/;
const palestineRegex = /^(?:\+970|0)\d{9}$/;
const panamaRegex = /^(?:\+507)?\d{7,8}$/;
const papuaNewGuineaRegex = /^(?:\+675)?\d{7}$/;
const paraguayRegex = /^(?:\+595|0)9[89]\d{7}$/;
const peruRegex = /^(?:\+51)?\d{9}$/;
const philippinesRegex = /^(?:\+63|0)?\d{10}$/;
const pitcairnRegex = /^(?:\+44|0)(?:\d\s?){9,10}$/;
const polandRegex = /^(?:\+48)?(?:\d{9}|\d{3}-\d{3}-\d{3})$/;
const portugalRegex = /^(?:\+351)?9(?:[1236]\d|4[125679]|5[0-8]|9[0-3])\d{6}$/;
const puertoRicoRegex = /^(?:\+1|1)?(?:787|939)\d{7}$/;
const qatarRegex = /^(?:\+974|0)?[235679]\d{6}$/;
const reunionRegex = /^(\+|0)262(\s|-)?(\d{2}(\s|-)?){4}$/;
const romaniaRegex = /^(?:\+40|0)?7[0-8]\d{7}$/;
const rwandaRegex = /^(?:\+250)?(?:0)?\d{9}$/;
const saintBarthelemyRegex = /^(?:\+590|0)?690\d{6}$/;
const saintHelenaRegex = /^(?:\+290)?[ ]?\d{4}$/;
const saintKittsAndNevisRegex = /^(?:\+1|1)?(?:869)[ ]?\d{7}$/;
const saintLuciaRegex = /^(?:\+1|1)?(?:758)[ ]?\d{7}$/;
const saintMartinRegex = /^(?:\+590|590|1(?:-| ))?(?:690|721)[ ]?\d{6}$/;
const saintPierreAndMiquelonRegex = /^(?:\+508)?[ ]?\d{6}$/;
const saintVincentAndTheGrenadinesRegex = /^(?:\+1|1)?(?:784)[ ]?\d{7}$/;
const samoaRegex = /^(?:\+685)?[ ]?\d{7}$/;
const sanMarinoRegex = /^(?:\+378)?[ ]?(?:0549|66\d{2})\d{4}$/;
const saoTomeAndPrincipeRegex = /^(?:\+239)?[ ]?\d{7}$/;
const saudiArabiaRegex = /^(?:\+966|00966)?[ ]?5\d{8}$/;
const senegalRegex = /^(?:\+221|00221)?[ ]?7[056][0-9]{7}$/;
const serbiaRegex = /^(?:\+381)?[ ]?(?:6[123456789]|[7-9])\d{7,8}$/;
const seychellesRegex = /^(?:\+248)?[ ]?[28]00\d{4}$/;
const sierraLeoneRegex = /^(?:\+232|00232)?[ ]?\d{7,8}$/;
const singaporeRegex = /^(?:\+65)?[ ]?\d{4}[ ]?\d{4}$/;
const sintMaartenRegex = /^(?:\+1|1)?(?:721)[ ]?\d{7}$/;
const slovakiaRegex = /^(?:\+421|00421)?[ ]?[689][0-9]{7}$/;
const sloveniaRegex = /^(?:\+386|00386)?[ ]?(?:[13][0-9]{7,8}|[46][0-9]{6})$/;
const solomonIslandsRegex = /^(?:\+677)?[ ]?\d{5}$/;
const somaliaRegex = /^(?:\+252|00252)?[ ]?\d{5,8}$/;
const southAfricaRegex = /^(?:\+27|0027)?[ ]?(?:0|82|83|84|76|79|72|73|74|78)[ ]?\d{3}[ ]?\d{4}$/;
const southKoreaRegex = /^(?:\+82|0082)?[ ]?1(?:0|1|[6-9])[ ]?\d{3}[ ]?\d{4}$/;
const southSudanRegex = /^(?:\+211|00211)?[ ]?\d{9}$/;
const spainRegex = /^(?:\+34)?[ ]?(?:6|7)[ ]?\d{8}$/;
const sriLankaRegex = /^(?:\+94|0094)?[ ]?7[1-9][ ]?\d{2}[ ]?\d{3,4}$/;
const sudanRegex = /^(?:\+249|00249)?[ ]?[1-9]\d{7,8}$/;
const surinameRegex = /^(?:\+597)?[2-9]\d{6}$/;
const svalbardAndJanMayenRegex = /^(?:\+47)?(?:79)(\d{4})$/;
const swazilandRegex = /^(?:\+268)?[76]\d{6}$/;
const swedenRegex = /^(?:\+46|0)[\d-]{6,10}\d$/;
const switzerlandRegex = /^(?:\+41|0)(?:[1-9]|6\d)\d{7}$/;
const syriaRegex = /^(?:\+963|0)?9\d{8}$/;
const taiwanRegex = /^(?:\+886|0)[2-9]\d{7}$/;
const tajikistanRegex = /^(?:\+992|0)?[578]\d{8}$/;
const tanzaniaRegex = /^(?:\+255|0)?[67]\d{8}$/;
const thailandRegex = /^(?:\+66|0)(?:\d{1}-?\d{3}-?\d{3,4})$/;
const timorLesteRegex = /^(?:(?:\+|00)670)\s?(?:[2-5]|[7-9]0)\d{7}$/;
const togoRegex = /^(?:\+228)?[9]\d{7}$/;
const tokelauRegex = /^(?:\+690)?(?:[45]\d{3}|7[069]\d{2})$/;
const tongaRegex = /^(?:\+676)?(?:\d{2}[-\s]?\d{4}|\d{3}[-\s]?\d{3})$/;
const trinidadAndTobagoRegex = /^(?:\+1|1)?(?:868)[2-9]\d{6}$/;
const tunisiaRegex = /^(?:\+216|0)?[2459]\d{7}$/;
const turkeyRegex = /^(?:\+90|0)?5\d{9}$/;
const turkmenistanRegex = /^(?:\+993|0)?[1-9]\d{7}$/;
const turksAndCaicosIslandsRegex = /^(?:\+1|1)?(?:649)[2-9]\d{6}$/;
const tuvaluRegex = /^(?:\+688)?(?:90|91)\d{4}$/;
const ugandaRegex = /^(?:\+256|0)?[7]\d{8}$/;
const ukraineRegex = /^(?:\+380|0)?(?:50|66|95)\d{7}$/;
const unitedArabEmiratesRegex = /^(?:\+971|0)?5[024568]\d{7}$/;
const unitedKingdomRegex = /^(?:\+44|0)(?:\d{10}|\d{9}|[1-9]\d{8})$/;
const unitedStatesRegex = /^(?:\+1|1)?(?:[2-9][0-8][0-9])[2-9]\d{6}$/;
const uruguayRegex = /^(?:\+598|0)[234569]\d{6}$/;
const uzbekistanRegex = /^(?:\+998|0)?[13-79]\d{8}$/;
const vanuatuRegex = /^(?:\+678)?[57]\d{3}$/;
const vaticanCityRegex = /^(?:\+39|0)([37]\d{1}|\\d{2})\d{7,8}$/;
const venezuelaRegex = /^(?:\+58|0)?[1-9]\d{9}$/;
const vietnamRegex = /^(?:\+84|0)?[1-9]\d{8}$/;
const virginIslandsBritishRegex = /^(?:\+1|1)?(?:284)\d{7}$/;
const virginIslandsUSRegex = /^(?:\+1|1)?(?:340)[2-9]\d{6}$/;
const wallisAndFutunaRegex = /^(?:\+681)?\d{6}$/;
const westernSaharaRegex = /^(?:\+212|0)?(?:528|544|655|662|666)\d{4}$/;
const yemenRegex = /^(?:\+967)?(?:7|9)\d{7}$/;
const zambiaRegex = /^(?:\+260)?9[567]\d{7}$/;
const zimbabweRegex = /^(?:\+263|263)?(?:1|2|3|4|5|7|8)[1-9]\d{6}$/; 

// Add an event listener to the country select field to dynamically update the phone number format
countrySelect.addEventListener("change", () => {
  const selectedCountry = countrySelect.value;

  // Update the regular expression used for validation based on the selected country
  switch (selectedCountry) {
    case "Afghanistan": 
      phoneNumberInput.setAttribute("pattern", afghanistanRegex.source);
      break;

    case "Albania": 
      phoneNumberInput.setAttribute("pattern", albaniaRegex.source);
      break;
      
    case "Algeria":
      phoneNumberInput.setAttribute("pattern", algeriaRegex.source);
      break;

    case "American Samoa":
      phoneNumberInput.setAttribute("pattern", americanSamoaRegex.source);
      break;

    case "Andorra":
      phoneNumberInput.setAttribute("pattern", andorraRegex.source);
      break;

    case "Angola":
      phoneNumberInput.setAttribute("pattern", angolaRegex.source);
      break;

    case "Anguilla":
      phoneNumberInput.setAttribute("pattern", anguillaRegex.source);
      break;

    case "Antigua and Barbuda":
      phoneNumberInput.setAttribute("pattern", antiguaAndBarbudaRegex.source);
      break;

    case "Argentina": 
      phoneNumberInput.setAttribute("pattern", argentinaRegex.source);
      break;

    case "Armenia":
      phoneNumberInput.setAttribute("pattern", armeniaRegex.source);
      break;

    case "Aruba":
      phoneNumberInput.setAttribute("pattern", arubaRegex.source);
      break; 

    case "Australia":
      phoneNumberInput.setAttribute("pattern", australiaRegex.source);
      break;

    case "Austria":
      phoneNumberInput.setAttribute("pattern", austriaRegex.source);
      break;

    case "Azerbaijan":
      phoneNumberInput.setAttribute("pattern", azerbaijanRegex.source);
      break; 

    case "Bahamas":
      phoneNumberInput.setAttribute("pattern", bahamasRegex.source);
      break; 

    case "Bahrain":
      phoneNumberInput.setAttribute("pattern", bahrainRegex.source);
      break; 

    case "Bangladesh":
      phoneNumberInput.setAttribute("pattern", bangladeshRegex.source);
      break; 

    case "Barbados":
      phoneNumberInput.setAttribute("pattern", barbadosRegex.source);
      break; 

    case "Belarus":
      phoneNumberInput.setAttribute("pattern", belarusRegex.source);
      break; 

    case "Belgium":
      phoneNumberInput.setAttribute("pattern", belgiumRegex.source);
      break; 

    case "Belize":
      phoneNumberInput.setAttribute("pattern", belizeRegex.source);
      break;

    case "Benin":
      phoneNumberInput.setAttribute("pattern", beninRegex.source);
      break;

    case "Bermuda":
      phoneNumberInput.setAttribute("pattern", bermudaRegex.source);
      break; 

    case "Bhutan":
      phoneNumberInput.setAttribute("pattern", bhutanRegex.source);
      break;

    case "Bolivia":
      phoneNumberInput.setAttribute("pattern", boliviaRegex.source);
      break; 

    case "Bosnia and Herzegovina":
      phoneNumberInput.setAttribute("pattern", bosniaAndHerzegovinaRegex.source);
      break; 

    case "Botswana":
      phoneNumberInput.setAttribute("pattern", botswanaRegex.source);
      break; 

    case "Brazil":
      phoneNumberInput.setAttribute("pattern", brazilRegex.source);
      break;

    case "British Indian Ocean Territory":
      phoneNumberInput.setAttribute("pattern", britishIndianOceanTerritory.source);
      break;

    case "British Virgin Islands":
      phoneNumberInput.setAttribute("pattern", virginIslandsBritishRegex.source);
      break;

    case "Brunei":
      phoneNumberInput.setAttribute("pattern", bruneiRegex.source);
      break;
   
    case "Bulgaria":
      phoneNumberInput.setAttribute("pattern", bulgariaRegex.source);
      break;

    case "Burkina Faso":
      phoneNumberInput.setAttribute("pattern", burkinaFasoRegex.source);
      break;

    case "Burundi":
      phoneNumberInput.setAttribute("pattern", burundiRegex.source);
      break;

    case "Cambodia":
      phoneNumberInput.setAttribute("pattern", cambodiaRegex.source);
      break;

    case "Cameroon":
      phoneNumberInput.setAttribute("pattern", cameroonRegex.source);
      break;

    case "Canada":
      phoneNumberInput.setAttribute("pattern", canadaRegex.source);
      break;

    case "Cape Verde":
      phoneNumberInput.setAttribute("pattern", capeVerdeRegex.source);
      break;

    case "Cayman Islands":
      phoneNumberInput.setAttribute("pattern", caymanIslandsRegex.source);
      break;

    case "Central African Republic":
      phoneNumberInput.setAttribute("pattern", centralAfricanRepublicRegex.source);
      break;

    case "Chad":
      phoneNumberInput.setAttribute("pattern", chadRegex.source);
      break;

    case "Chile":
      phoneNumberInput.setAttribute("pattern", chileRegex.source);
      break;

    case "China":
      phoneNumberInput.setAttribute("pattern", chinaRegex.source);
      break;

    case "Christmas Island":
      phoneNumberInput.setAttribute("pattern", christimasIslandRegex.source);
      break;

    case "Cocos Islands":
      phoneNumberInput.setAttribute("pattern", cocosIslandsRegex.source);
      break;

    case "Colombia":
      phoneNumberInput.setAttribute("pattern", colombiaRegex.source);
      break;

    case "Comoros":
      phoneNumberInput.setAttribute("pattern", comorosRegex.source);
      break;

    case "Cook Islands":
      phoneNumberInput.setAttribute("pattern", cookIslandsRegex.source);
      break; 

    case "Costa Rica":
      phoneNumberInput.setAttribute("pattern", costaRicaRegex.source);
      break;

    case "Croatia":
      phoneNumberInput.setAttribute("pattern", croatiaRegex.source);
      break; 

    case "Cuba":
      phoneNumberInput.setAttribute("pattern", cubaRegex.source);
      break;

    case "Curacao":
      phoneNumberInput.setAttribute("pattern", curacaoRegex.source);
      break; 

    case "Cyprus":
      phoneNumberInput.setAttribute("pattern", cyprusRegex.source);
      break;

    case "Czech Republic":
      phoneNumberInput.setAttribute("pattern", czechRepublicRegex.source);
      break; 

    case "Democratic Republic of the Congo":
      phoneNumberInput.setAttribute("pattern", congoDRCRegex.source);
      break; 

    case "Denmark":
      phoneNumberInput.setAttribute("pattern", denmarkRegex.source);
      break;

    case "Djibouti":
      phoneNumberInput.setAttribute("pattern", djiboutiRegex.source);
      break;

    case "Dominica":
      phoneNumberInput.setAttribute("pattern", dominicaRegex.source);
      break;

    case "Dominican Republic":
      phoneNumberInput.setAttribute("pattern", dominicanRepublicRegex.source);
      break;

    case "East Timor": 
      phoneNumberInput.setAttribute("pattern", eastTimorRegex); 
      break; 

    case "Ecuador":
      phoneNumberInput.setAttribute("pattern", ecuadorRegex.source);
      break;

    case "Egypt":
      phoneNumberInput.setAttribute("pattern", egyptRegex.source);
      break;

    case "El Salvador":
      phoneNumberInput.setAttribute("pattern", elSalvadorRegex.source);
      break; 

    case "Equatorial Guinea":
      phoneNumberInput.setAttribute("pattern", equatorialGuineaRegex.source);
      break; 

    case "Eritrea":
      phoneNumberInput.setAttribute("pattern", eritreaRegex.source);
      break;

    case "Estonia":
      phoneNumberInput.setAttribute("pattern", estoniaRegex.source);
      break;

    case "Ethiopia":
      phoneNumberInput.setAttribute("pattern", ethiopiaRegex.source);
      break;

    case "Falkland Islands":
      phoneNumberInput.setAttribute("pattern", falklandIslandsRegex.source);
      break; 

    case "Faroe Islands":
      phoneNumberInput.setAttribute("pattern", faroeIslandsRegex.source);
      break;

    case "Fiji":
      phoneNumberInput.setAttribute("pattern", fijiRegex.source);
      break;

    case "Finland":
      phoneNumberInput.setAttribute("pattern", finlandRegex.source);
      break; 

    case "France":
      phoneNumberInput.setAttribute("pattern", franceRegex.source);
      break;

    case "French Guiana":
      phoneNumberInput.setAttribute("pattern", frenchGuianaRegex.source);
      break; 

    case "French Polynesia":
      phoneNumberInput.setAttribute("pattern", frenchPolynesiaRegex.source);
      break;

    case "French Southern Territories":
      phoneNumberInput.setAttribute("pattern", frenchSouthernTerritoriesRegex);
      break; 

    case "Gabon":
      phoneNumberInput.setAttribute("pattern", gabonRegex.source);
      break;

    case "Gambia":
      phoneNumberInput.setAttribute("pattern", gambiaRegex.source);
      break; 

    case "Georgia":
      phoneNumberInput.setAttribute("pattern", georgiaRegex.source);
      break;

    case "Germany":
      phoneNumberInput.setAttribute("pattern", germanyRegex.source);
      break;

    case "Ghana":
      phoneNumberInput.setAttribute("pattern", ghanaRegex.source);
      break;

    case "Gibraltar":
      phoneNumberInput.setAttribute("pattern", gibraltarRegex.source);
      break; 

    case "Greece":
      phoneNumberInput.setAttribute("pattern", greeceRegex.source);
      break;

    case "Greenland":
      phoneNumberInput.setAttribute("pattern", greenlandRegex.source);
      break;

    case "Grenada":
      phoneNumberInput.setAttribute("pattern", grenadaRegex.source);
      break;

    case "Guadeloupe":
      phoneNumberInput.setAttribute("pattern", guadeloupeRegex.source);
      break;

    case "Guam":
      phoneNumberInput.setAttribute("pattern", guamRegex.source);
      break;

    case "Guatemala":
      phoneNumberInput.setAttribute("pattern", guatemalaRegex.source);
      break; 

    case "Guinea":
      phoneNumberInput.setAttribute("pattern", guineaRegex.source);
      break;

    case "Guinea-Bissau":
      phoneNumberInput.setAttribute("pattern", guineaBissauRegex.source);
      break; 

    case "Guyana":
      phoneNumberInput.setAttribute("pattern", guyanaRegex.source);
      break;

    case "Haiti":
      phoneNumberInput.setAttribute("pattern", haitiRegex.source);
      break;

    case "Honduras":
      phoneNumberInput.setAttribute("pattern", hondurasRegex.source);
      break;

    case "Hong Kong":
      phoneNumberInput.setAttribute("pattern", hongKongRegex.source);
      break;

    case "Hungary":
      phoneNumberInput.setAttribute("pattern", hungaryRegex.source);
      break;

    case "Iceland":
      phoneNumberInput.setAttribute("pattern", icelandRegex.source);
      break;

    case "India":
      phoneNumberInput.setAttribute("pattern", indiaRegex.source);
      break;

    case "Indonesia":
      phoneNumberInput.setAttribute("pattern", indonesiaRegex.source);
      break;

    case "Iran":
      phoneNumberInput.setAttribute("pattern", iranRegex.source);
      break;

    case "Iraq":
      phoneNumberInput.setAttribute("pattern", iraqRegex.source);
      break;

    case "Ireland":
      phoneNumberInput.setAttribute("pattern", irelandRegex.source);
      break;

    case "Israel":
      phoneNumberInput.setAttribute("pattern", israelRegex.source);
      break;

    case "Italy":
      phoneNumberInput.setAttribute("pattern", italyRegex.source);
      break;

    case "Jamaica":
      phoneNumberInput.setAttribute("pattern", jamaicaRegex.source);
      break;

    case "Japan":
      phoneNumberInput.setAttribute("pattern", japanRegex.source);
      break;

    case "Jordan":
      phoneNumberInput.setAttribute("pattern", jordanRegex.source);
      break;

    case "Kazakhstan":
      phoneNumberInput.setAttribute("pattern", kazakhstanRegex.source);
      break;

    case "Kenya":
      phoneNumberInput.setAttribute("pattern", kenyaRegex.source);
      break; 

    case "Kiribati":
      phoneNumberInput.setAttribute("pattern", kiribatiRegex.source);
      break;

    case "Kuwait":
      phoneNumberInput.setAttribute("pattern", kuwaitRegex.source);
      break;

    case "Kyrgyzstan":
      phoneNumberInput.setAttribute("pattern", kyrgyzstanRegex.source);
      break;
      
    case "Laos":
      phoneNumberInput.setAttribute("pattern", laosRegex.source);
      break;

    case "Latvia":
      phoneNumberInput.setAttribute("pattern", latviaRegex.source);
      break; 

    case "Lebanon":
      phoneNumberInput.setAttribute("pattern", lebanonRegex.source);
      break;

    case "Lesotho":
      phoneNumberInput.setAttribute("pattern", lesothoRegex.source);
      break;

    case "Liberia":
      phoneNumberInput.setAttribute("pattern", liberiaRegex.source);
      break;

    case "Libya":
      phoneNumberInput.setAttribute("pattern", libyaRegex.source);
      break;

    case "Liechtenstein":
      phoneNumberInput.setAttribute("pattern", liechtensteinRegex.source);
      break; 

    case "Lithuania":
      phoneNumberInput.setAttribute("pattern", lithuaniaRegex.source);
      break;

    case "Luxembourg":
      phoneNumberInput.setAttribute("pattern", luxembourgRegex.source);
      break;

    case "Macau":
      phoneNumberInput.setAttribute("pattern", macauRegex.source);
      break;

    case "Macedonia":
      phoneNumberInput.setAttribute("pattern", macedoniaRegex.source);
      break; 

    case "Madagascar":
      phoneNumberInput.setAttribute("pattern", madagascarRegex.source);
      break;

    case "Malawi":
      phoneNumberInput.setAttribute("pattern", malawiRegex.source);
      break;

    case "Malaysia":
      phoneNumberInput.setAttribute("pattern", malaysiaRegex.source);
      break;

    case "Maldives":
      phoneNumberInput.setAttribute("pattern", maldivesRegex.source);
      break;

    case "Mali":
      phoneNumberInput.setAttribute("pattern", maliRegex.source);
      break;

    case "Malta":
      phoneNumberInput.setAttribute("pattern", maltaRegex.source);
      break;

    case "Marshall Islands":
      phoneNumberInput.setAttribute("pattern", marshallIslandsRegex.source);
      break;

    case "Martinique":
      phoneNumberInput.setAttribute("pattern", martiniqueRegex.source);
      break;

    case "Mauritania":
      phoneNumberInput.setAttribute("pattern", mauritaniaRegex.source);
      break;

    case "Mauritius":
      phoneNumberInput.setAttribute("pattern", mauritiusRegex.source);
      break;

    case "Mayotte":
      phoneNumberInput.setAttribute("pattern", mayotteRegex.source);
      break;

    case "Mexico":
      phoneNumberInput.setAttribute("pattern", mexicoRegex.source);
      break;

    case "Micronesia":
      phoneNumberInput.setAttribute("pattern", micronesiaRegex.source);
      break;

    case "Moldova":
      phoneNumberInput.setAttribute("pattern", moldovaRegex.source);
      break;

    case "Monaco":
      phoneNumberInput.setAttribute("pattern", monacoRegex.source);
      break;

    case "Mongolia":
      phoneNumberInput.setAttribute("pattern", mongoliaRegex.source);
      break; 

    case "Montenegro":
      phoneNumberInput.setAttribute("pattern", montenegroRegex.source);
      break;

    case "Montserra":
      phoneNumberInput.setAttribute("pattern", montserratRegex.source);
      break;

    case "Morocco":
      phoneNumberInput.setAttribute("pattern", moroccoRegex.source);
      break;

    case "Mozambique":
      phoneNumberInput.setAttribute("pattern", mozambiqueRegex.source);
      break;

    case "Myanmar (Burma)":
      phoneNumberInput.setAttribute("pattern", myanmarRegex.source);
      break;

    case "Namibia":
      phoneNumberInput.setAttribute("pattern", namibiaRegex.source);
      break;

    case "Nauru":
      phoneNumberInput.setAttribute("pattern", nauruRegex.source);
      break;

    case "Nepal":
      phoneNumberInput.setAttribute("pattern", nepalRegex.source);
      break;

    case "Netherlands":
      phoneNumberInput.setAttribute("pattern", netherlandsRegex.source);
      break;

    case "New Caledonia":
      phoneNumberInput.setAttribute("pattern", newCaledoniaRegex.source);
      break;

    case "New Zealand":
      phoneNumberInput.setAttribute("pattern", newZealandRegex.source);
      break;

    case "Nicaragua":
      phoneNumberInput.setAttribute("pattern", nicaraguaRegex.source);
      break;

    case "Niger":
      phoneNumberInput.setAttribute("pattern", nigerRegex.source);
      break;

    case "Nigeria":
      phoneNumberInput.setAttribute("pattern", nigeriaRegex.source);
      break;

    case "Niue":
      phoneNumberInput.setAttribute("pattern", niueRegex.source);
      break;

    case "Norfolk Island":
      phoneNumberInput.setAttribute("pattern", norfolkIslandRegex.source);
      break;

    case "Northern Mariana Island":
      phoneNumberInput.setAttribute("pattern", northernMarianaIslandRegex.source);
      break;

    case "Norway":
      phoneNumberInput.setAttribute("pattern", norwayRegex.source);
      break;

    case "Oman":
      phoneNumberInput.setAttribute("pattern", omanRegex.source);
      break;

    case "Pakistan":
      phoneNumberInput.setAttribute("pattern", pakistanRegex.source);
      break;

    case "Palau":
      phoneNumberInput.setAttribute("pattern", palauRegex.source);
      break;

    case "Palestine":
      phoneNumberInput.setAttribute("pattern", palestineRegex.source);
      break;

    case "Panama":
      phoneNumberInput.setAttribute("pattern", panamaRegex.source);
      break;

    case "Papua New Guinea":
      phoneNumberInput.setAttribute("pattern", papuaNewGuineaRegex.source);
      break;

    case "Paraguay":
      phoneNumberInput.setAttribute("pattern", paraguayRegex.source);
      break;

    case "Peru":
      phoneNumberInput.setAttribute("pattern", peruRegex.source);
      break;

    case "Philippines":
      phoneNumberInput.setAttribute("pattern", philippinesRegex.source);
      break;

    case "Poland":
      phoneNumberInput.setAttribute("pattern", polandRegex.source);
      break;

    case "Portugal":
      phoneNumberInput.setAttribute("pattern", portugalRegex.source);
      break;

    case "Puerto Rico":
      phoneNumberInput.setAttribute("pattern", puertoRicoRegex.source);
      break;

    case "Qatar":
      phoneNumberInput.setAttribute("pattern", qatarRegex.source);
      break;

    case "Réunion":
      phoneNumberInput.setAttribute("pattern", reunionRegex.source);
      break;

    case "Romania":
      phoneNumberInput.setAttribute("pattern", romaniaRegex.source);
      break;

    case "Rwanda":
      phoneNumberInput.setAttribute("pattern", rwandaRegex.source);
      break;

    case "Saint Barthélemy":
      phoneNumberInput.setAttribute("pattern", saintBarthelemyRegex.source);
      break;

    case "Saint Helena":
      phoneNumberInput.setAttribute("pattern", saintHelenaRegex.source);
      break;

    case "Saint Kitts and Nevi":
      phoneNumberInput.setAttribute("pattern", saintKittsAndNevisRegex.source);
      break;

    case "Saint Lucia":
      phoneNumberInput.setAttribute("pattern", saintLuciaRegex.source);
      break;

    case "Saint Martin":
      phoneNumberInput.setAttribute("pattern", saintMartinRegex.source);
      break;

    case "Saint Pierre and Miquelon":
      phoneNumberInput.setAttribute("pattern", saintPierreAndMiquelonRegex.source);
      break;

    case "Saint Vincent and the Grenadines":
      phoneNumberInput.setAttribute("pattern", saintVincentAndTheGrenadinesRegex.source);
      break;

    case "Samoa":
      phoneNumberInput.setAttribute("pattern", samoaRegex.source);
      break;

    case "San Marino":
      phoneNumberInput.setAttribute("pattern", sanMarinoRegex.source);
      break;

    case "São Tomé and Príncipe":
      phoneNumberInput.setAttribute("pattern", saoTomeAndPrincipeRegex.source);
      break;

    case "Saudi Arabia":
      phoneNumberInput.setAttribute("pattern", saudiArabiaRegex.source);
      break;

    case "Senegal":
      phoneNumberInput.setAttribute("pattern", senegalRegex.source);
      break;

    case "Serbia":
      phoneNumberInput.setAttribute("pattern", serbiaRegex.source);
      break;

    case "Seychelles":
      phoneNumberInput.setAttribute("pattern", seychellesRegex.source);
      break;

    case "Sierra Leone":
      phoneNumberInput.setAttribute("pattern", sierraLeoneRegex.source);
      break;

    case "Singapore":
      phoneNumberInput.setAttribute("pattern", singaporeRegex.source);
      break;

    case "Sint Maarten":
      phoneNumberInput.setAttribute("pattern", sintMaartenRegex.source);
      break;

    case "Slovakia":
      phoneNumberInput.setAttribute("pattern", slovakiaRegex.source);
      break;

    case "Slovenia":
      phoneNumberInput.setAttribute("pattern", sloveniaRegex.source);
      break;

    case "Solomon Islands":
      phoneNumberInput.setAttribute("pattern", solomonIslandsRegex.source);
      break;

    case "Somalia":
      phoneNumberInput.setAttribute("pattern", somaliaRegex.source);
      break;

    case "South Africa":
      phoneNumberInput.setAttribute("pattern", southAfricaRegex.source);
      break;

    case "South Korea":
      phoneNumberInput.setAttribute("pattern", southKoreaRegex.source);
      break;

    case "South Sudan":
      phoneNumberInput.setAttribute("pattern", southSudanRegex.source);
      break;

    case "Spain":
      phoneNumberInput.setAttribute("pattern", spainRegex.source);
      break;

    case "Sri Lanka":
      phoneNumberInput.setAttribute("pattern", sriLankaRegex.source);
      break;

    case "Sudan":
      phoneNumberInput.setAttribute("pattern", sudanRegex.source);
      break;

    case "Suriname":
      phoneNumberInput.setAttribute("pattern", surinameRegex.source);
      break;

    case "Svalbard and Jan Mayen":
      phoneNumberInput.setAttribute("pattern", svalbardAndJanMayenRegex.source);
      break;

    case "Swaziland":
      phoneNumberInput.setAttribute("pattern", swazilandRegex.source);
      break;

    case "Sweden":
      phoneNumberInput.setAttribute("pattern", swedenRegex.source);
      break;

    case "Switzerland":
      phoneNumberInput.setAttribute("pattern", switzerlandRegex.source);
      break;

    case "Syria":
      phoneNumberInput.setAttribute("pattern", syriaRegex.source);
      break;

    case "Taiwan":
      phoneNumberInput.setAttribute("pattern", taiwanRegex.source);
      break;

    case "Tajikistan":
      phoneNumberInput.setAttribute("pattern", tajikistanRegex.source);
      break;

    case "Tanzania":
      phoneNumberInput.setAttribute("pattern", tanzaniaRegex.source);
      break;

    case "Thailand":
      phoneNumberInput.setAttribute("pattern", thailandRegex.source);
      break;

    case "Timor-Leste":
      phoneNumberInput.setAttribute("pattern", timorLesteRegex.source);
      break;

    case "Togo":
      phoneNumberInput.setAttribute("pattern", togoRegex.source);
      break;

    case "Tokelau":
      phoneNumberInput.setAttribute("pattern", tokelauRegex.source);
      break;

    case "Tonga":
      phoneNumberInput.setAttribute("pattern", tongaRegex.source);
      break;

    case "Trinidad and Tobago":
      phoneNumberInput.setAttribute("pattern", trinidadAndTobagoRegex.source);
      break;

    case "Tunisia":
      phoneNumberInput.setAttribute("pattern", tunisiaRegex.source);
      break;

    case "Turkey":
      phoneNumberInput.setAttribute("pattern", turkeyRegex.source);
      break;

    case "Turkmenistan":
      phoneNumberInput.setAttribute("pattern", turkmenistanRegex.source);
      break;

    case "Turks and Caicos Islands":
      phoneNumberInput.setAttribute("pattern", turksAndCaicosIslandsRegex.source);
      break;

    case "Tuvalu":
      phoneNumberInput.setAttribute("pattern", tuvaluRegex.source);
      break;

    case "Uganda":
      phoneNumberInput.setAttribute("pattern", ugandaRegex.source);
      break;

    case "Ukraine":
      phoneNumberInput.setAttribute("pattern", ukraineRegex.source);
      break;

    case "United Arab Emirates":
      phoneNumberInput.setAttribute("pattern", unitedArabEmiratesRegex.source);
      break;

    case "United Kingdom":
      phoneNumberInput.setAttribute("pattern", unitedKingdomRegex.source);
      break;

    case "United States":
      phoneNumberInput.setAttribute("pattern", unitedStatesRegex.source);
      break;

    case "Uruguay":
      phoneNumberInput.setAttribute("pattern", uruguayRegex.source);
      break;

    case "Uzbekistan":
      phoneNumberInput.setAttribute("pattern", uzbekistanRegex.source);
      break;

    case "Vanuatu":
      phoneNumberInput.setAttribute("pattern", vanuatuRegex.source);
      break;

    case "Vatican City":
      phoneNumberInput.setAttribute("pattern", vaticanCityRegex.source);
      break;

    case "Venezuela":
      phoneNumberInput.setAttribute("pattern", venezuelaRegex.source);
      break;

    case "Vietnam":
      phoneNumberInput.setAttribute("pattern", vietnamRegex.source);
      break;

    case "Virgin Islands, U.S.":
      phoneNumberInput.setAttribute("pattern", virginIslandsUSRegex.source);
      break;

    case "Wallis and Futuna":
      phoneNumberInput.setAttribute("pattern", wallisAndFutunaRegex.source);
      break;

    case "Western Sahara":
      phoneNumberInput.setAttribute("pattern", westernSaharaRegex.source);
      break;

    case "Yemen":
      phoneNumberInput.setAttribute("pattern", yemenRegex.source);
      break;

    case "Zambia":
      phoneNumberInput.setAttribute("pattern", zambiaRegex.source);
      break;

    case "Zimbabwe":
      phoneNumberInput.setAttribute("pattern", zimbabweRegex.source);
      break;
  }
});
