"use strict";(self.webpackChunk_financial_charts_stories=self.webpackChunk_financial_charts_stories||[]).push([[590],{"./src/templates/candlestickChart/index.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var _Template$parameters,_Template$parameters2,_Template$parameters3,objectSpread2=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("../../node_modules/react/index.js"),dist=__webpack_require__("../../node_modules/react-google-charts/dist/index.js"),CandlestickChart=function(_a){var _b=_a.width,width=void 0===_b?"100%":_b,_c=_a.height,height=void 0===_c?"100%":_c,data=_a.data,_d=_a.options,options=void 0===_d?{}:_d;return react.createElement(dist.ZP,{chartType:"CandlestickChart",data,width,height,options})},withAxis=__webpack_require__("./src/data/withAxis.ts"),dummy=__webpack_require__("./src/data/dummy.ts"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),CandlestickChartTemplate=function CandlestickChartTemplate(_ref){var _ref$data=_ref.data,data=void 0===_ref$data?(0,withAxis.N)(dummy.e).map((function(v){return v.slice(0,5)})):_ref$data,width=_ref.width,height=_ref.height,options=_ref.options;return(0,jsx_runtime.jsx)(CandlestickChart,{data,height:width,width:height,options})};try{CandlestickChartTemplate.displayName="CandlestickChartTemplate",CandlestickChartTemplate.__docgenInfo={description:"",displayName:"CandlestickChartTemplate",props:{data:{defaultValue:{value:"withAxis(DATA_SET).map((v) => v.slice(0, 5))"},description:"",name:"data",required:!1,type:{name:"PriceData[]"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/templates/candlestickChart/CandlestickChart.tsx#CandlestickChartTemplate"]={docgenInfo:CandlestickChartTemplate.__docgenInfo,name:"CandlestickChartTemplate",path:"src/templates/candlestickChart/CandlestickChart.tsx#CandlestickChartTemplate"})}catch(__react_docgen_typescript_loader_error){}const index_stories={title:"Templates/CandlestickChart",component:CandlestickChartTemplate,argTypes:{width:{control:{type:"number"}},height:{control:{type:"number"}}}};var Template={args:{}};Template.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Template.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Template$parameters=Template.parameters)||void 0===_Template$parameters?void 0:_Template$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {}\n}"},null===(_Template$parameters2=Template.parameters)||void 0===_Template$parameters2||null===(_Template$parameters3=_Template$parameters2.docs)||void 0===_Template$parameters3?void 0:_Template$parameters3.source)})});var __namedExportsOrder=["Template"]},"./src/data/dummy.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>DATA_SET});var DATA_SET=[[138807e7,"737000","755000","755000","737000","3.78"],[13881564e5,"750000","750000","750000","750000","12"],[13882428e5,"750000","739000","750000","728000","19.058"],[13883292e5,"740000","768000","772000","740000","9.488973"],[13884156e5,"768000","768000","800000","763000","18.65035033"],[1388502e6,"768000","777000","795000","765000","65.38033381"],[13885884e5,"776000","778000","788000","773000","83.20397752"],[13886748e5,"778000","834000","840000","774000","124.33029182"],[13887612e5,"831000","846000","846000","819000","107.75704665"],[13888476e5,"846000","925000","925000","845000","140.70979378"],[1388934e6,"928000","1010000","1050000","920000","222.72262804"],[13890204e5,"1001000","935000","1026000","900000","169.05011477"],[13891068e5,"935000","897000","960000","825000","194.55961145"],[13891932e5,"880000","865000","909000","860000","140.51522769"],[13892796e5,"875000","890000","905000","862000","126.60366906"],[1389366e6,"889000","932000","950000","880000","144.63517814"],[13894524e5,"935000","910000","952000","904000","129.84153237"],[13895388e5,"920000","881000","925000","872000","105.8332088"],[13896252e5,"877000","874000","905000","872000","119.62287814"],[13897116e5,"889000","905000","918000","875000","138.06056544"],[1389798e6,"895000","910000","940000","892000","216.14782104"],[13898844e5,"904000","885000","913000","872000","201.18492756"],[13899708e5,"888000","885000","906000","868000","133.53712889"],[13900572e5,"887000","893000","899000","870000","147.45643678"],[13901436e5,"893000","898000","914000","890000","198.08278124"],[139023e7,"898000","899000","906000","891000","204.65155445"],[13903164e5,"895000","892000","904000","891000","228.7038422"],[13904028e5,"895000","888000","898000","886000","223.74829689"],[13904892e5,"891000","870000","891000","848000","358.41597676"],[13905756e5,"864000","870000","874000","858000","192.06581564"],[1390662e6,"867000","892000","894000","866000","267.95278315"],[13907484e5,"893000","886000","903000","879000","285.27768931"],[13908348e5,"880000","879000","885000","848000","244.29252255"],[13909212e5,"871000","864000","876000","857000","130.50348362"],[13910076e5,"865000","874000","874000","863000","121.4175575"],[1391094e6,"874000","883000","886000","874000","110.71834803"],[13911804e5,"882000","899000","899000","879000","159.01831297"],[13912668e5,"900000","902000","907000","887000","208.17334755"],[13913532e5,"902000","896000","904000","890000","209.50152278"],[13914396e5,"897000","891000","897000","882000","141.13545967"],[1391526e6,"892000","890000","892000","886000","119.86970917"],[13916124e5,"888000","866000","889000","857000","230.93727352"],[13916988e5,"866000","824000","869000","751000","582.19373117"],[13917852e5,"824000","821000","874000","790000","266.73130187"],[13918716e5,"821000","805000","821000","782000","211.85764079"],[1391958e6,"805000","756000","825000","700000","609.6699087"],[13920444e5,"760000","776000","801000","739000","507.90070803"],[13921308e5,"777000","729000","777000","713000","373.10717116"],[13922172e5,"728000","715000","738000","708000","250.73406164"],[13923036e5,"710000","681000","716000","551000","560.03562174"],[139239e7,"686000","687000","771000","682000","327.92850964"],[13924764e5,"689000","681000","711000","665000","110.87317765"],[13925628e5,"683000","693000","709000","645000","400.56506482"],[13926492e5,"699000","678000","699000","652000","256.64485641"],[13927356e5,"679000","676000","689000","675000","243.30067524"],[1392822e6,"678000","655000","682000","637000","335.47867266"],[13929084e5,"644000","642000","670000","580000","501.15539524"],[13929948e5,"633000","618000","642000","601000","167.98700984"],[13930812e5,"625000","670000","693000","619000","266.03109447"],[13931676e5,"670000","633000","676000","617000","389.69032522"],[1393254e6,"629000","576000","635000","490000","746.42944787"],[13933404e5,"580000","600000","628000","577000","453.25668613"],[13934268e5,"604000","610000","624000","603000","214.3489589"],[13935132e5,"610000","605000","615000","597000","205.29156729"],[13935996e5,"600000","598000","607000","583000","67.71346259"],[1393686e6,"598000","600000","607000","598000","47.83875485"],[13937724e5,"599000","605000","616000","596000","239.70793771"],[13938588e5,"610000","736000","736000","610000","554.11606408"],[13939452e5,"733000","690000","736000","670000","315.50685809"],[13940316e5,"690000","685000","700000","680000","254.9425926"],[1394118e6,"680000","657000","688000","608000","324.75856813"],[13942044e5,"655000","646000","662000","631000","157.82364116"],[13942908e5,"644000","656000","667000","634000","163.22582534"],[13943772e5,"652000","654000","669000","647000","169.00026625"],[13944636e5,"649000","652000","659000","646000","224.34737065"],[139455e7,"652000","664000","670000","650000","352.80721224"],[13946364e5,"664000","669000","675000","661000","225.05414224"],[13947228e5,"669000","669000","680000","667000","279.74805383"],[13948092e5,"668000","670000","673000","665000","88.41220492"],[13948956e5,"670000","674000","678000","669000","110.99737402"],[1394982e6,"673000","668000","677000","657000","289.87505043"],[13950684e5,"667000","649000","669000","645000","224.6539174"],[13951548e5,"649000","653000","664000","649000","233.06790478"],[13952412e5,"652000","638000","658000","630000","304.07344056"],[13953276e5,"633000","620000","655000","615000","479.67618167"],[1395414e6,"621000","601000","628000","594000","211.06852219"],[13955004e5,"606000","610000","615000","602000","128.14801516"],[13955868e5,"611000","601000","618000","591000","362.74517425"],[13956732e5,"604000","619000","627000","600000","368.10804774"],[13957596e5,"618000","624000","626000","613000","510.59664114"],[1395846e6,"625000","552000","626000","548000","695.16945889"],[13959324e5,"549000","539000","571000","502000","801.27252866"],[13960188e5,"533000","527000","540000","524000","214.92547577"]]},"./src/data/withAxis.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>withAxis});var _home_runner_work_financial_charts_financial_charts_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js"),withAxis=function withAxis(data){var _step,result=[["Date","Open","Close","High","Low","Volume"]],_iterator=(0,_home_runner_work_financial_charts_financial_charts_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__.Z)(data);try{for(_iterator.s();!(_step=_iterator.n()).done;){var price=_step.value;result.push(price.map(Number))}}catch(err){_iterator.e(err)}finally{_iterator.f()}return result}}}]);