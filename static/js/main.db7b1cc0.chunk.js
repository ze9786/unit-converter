(this.webpackJsonpunit_converter=this.webpackJsonpunit_converter||[]).push([[0],{44:function(e,t,a){},45:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var c=a(2),l=a.n(c),n=a(17),s=a.n(n),i=(a(44),a(11)),r=a(12),h=a(14),j=a(13),o=(a(45),a(6)),d=a(67),b=a(68),m=a(69),u=a(79),O=a(70),g=a(71),v=a(8),x=a(22),N=(a(51),a(0)),f=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){var c;return Object(i.a)(this,a),(c=t.call(this,e)).toggleNav=c.toggleNav.bind(Object(o.a)(c)),c.state={isNavOpen:!1},c}return Object(r.a)(a,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"render",value:function(){return Object(N.jsx)(d.a,{dark:!0,expand:"md",children:Object(N.jsxs)("div",{className:"header",children:[Object(N.jsx)(b.a,{onClick:this.toggleNav}),Object(N.jsx)(m.a,{className:"mr-auto",href:"/",children:" \u55ae\u4f4d\u8f49\u63db\u5668 Unit Converter"}),Object(N.jsx)(u.a,{isOpen:this.state.isNavOpen,navbar:!0,children:Object(N.jsxs)(O.a,{navbar:!0,children:[Object(N.jsx)(g.a,{children:Object(N.jsxs)(v.c,{className:"nav-link",exact:!0,to:"/unit-converter",id:"nav-home",onClick:this.toggleNav,children:[Object(N.jsx)(x.a,{icon:"home"})," \u4e3b\u9801"]})}),Object(N.jsx)(g.a,{children:Object(N.jsxs)(v.c,{className:"nav-link",to:"/unit-converter/bmi",onClick:this.toggleNav,children:[Object(N.jsx)(x.a,{icon:"user-md"})," BMI\u8a08\u7b97\u5668"]})}),Object(N.jsx)(g.a,{children:Object(N.jsxs)(v.c,{className:"nav-link",to:"/unit-converter/length",onClick:this.toggleNav,children:[Object(N.jsx)(x.a,{icon:"ruler"})," \u9577\u5ea6\u8f49\u63db\u5668"]})}),Object(N.jsx)(g.a,{children:Object(N.jsxs)(v.c,{className:"nav-link",to:"/unit-converter/weight",onClick:this.toggleNav,children:[Object(N.jsx)(x.a,{icon:"weight"})," \u91cd\u91cf\u8f49\u63db\u5668"]})}),Object(N.jsx)(g.a,{children:Object(N.jsxs)(v.c,{className:"nav-link",to:"/unit-converter/area",onClick:this.toggleNav,children:[Object(N.jsx)(x.a,{icon:"chart-area"})," \u9762\u7a4d\u8f49\u63db\u5668"]})})]})})]})})}}]),a}(c.Component);var C=function(e){return Object(N.jsx)("div",{className:"footer",children:Object(N.jsxs)("div",{className:"container",children:[Object(N.jsxs)("div",{className:"row justify-content-center",children:[Object(N.jsxs)("div",{className:"col-6 col-sm-2",children:[Object(N.jsx)("h6",{children:"\u7db2\u7ad9\u6307\u5357"}),Object(N.jsxs)("ul",{className:"list-unstyled",children:[Object(N.jsx)("li",{children:Object(N.jsx)(v.b,{to:"/unit-converter",children:"\u4e3b\u9801"})}),Object(N.jsx)("li",{children:Object(N.jsx)(v.b,{to:"/unit-converter/bmi",children:"BMI\u8a08\u7b97\u5668"})}),Object(N.jsx)("li",{children:Object(N.jsx)(v.b,{to:"/unit-converter/weight",children:"\u91cd\u91cf"})})]})]}),Object(N.jsxs)("div",{className:"col-6 col-sm-4 align-self-center",children:[Object(N.jsx)("h6",{children:"\u5bb9\u7a4d/\u9762\u7a4d"}),Object(N.jsxs)("ul",{className:"list-unstyled",children:[Object(N.jsx)("li",{children:Object(N.jsx)(v.b,{to:"/unit-converter/length",children:"\u9577\u5ea6"})}),Object(N.jsx)("li",{children:Object(N.jsx)(v.b,{to:"/unit-converter/area",children:"\u9762\u7a4d"})})]})]})]}),Object(N.jsx)("div",{className:"row justify-content-center",children:Object(N.jsx)("div",{className:"col-auto",children:Object(N.jsxs)("p",{children:["\xa9 Copyright 2021 ",Object(N.jsx)("a",{href:"",children:"Zelina TO"})]})})})]})})},p=a(72),k=a(73),y=a(74);var w=function(e){return Object(N.jsxs)(p.a,{children:[Object(N.jsx)(k.a,{children:Object(N.jsx)(y.a,{sm:"12",md:{size:6,offset:3},children:"\u55ae\u4f4d\u8f49\u63db\u5668"})}),Object(N.jsx)(k.a,{children:Object(N.jsx)(y.a,{sm:"12",md:{size:6,offset:3},children:"\u514d\u8cbb\u8f49\u63db\u4e0d\u540c\u55ae\u4f4d\uff0c\u800c\u4e14\u4e0d\u6703\u8a18\u9304\u4f60\u7684\u6578\u64da"})})]})},S=a(78),F=a(77),z=a(9),I=a(75),M=a(76),B=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={m:"",ft:"",cm:"",in:""},e.handleMChange=e.handleMChange.bind(Object(o.a)(e)),e.handleFtChange=e.handleFtChange.bind(Object(o.a)(e)),e.handleCmChange=e.handleCmChange.bind(Object(o.a)(e)),e.handleInChange=e.handleInChange.bind(Object(o.a)(e)),e.calculate=e.calculate.bind(Object(o.a)(e)),e}return Object(r.a)(a,[{key:"handleCmChange",value:function(e){this.setState({cm:e.target.value}),this.calculate("cm",e.target.value)}},{key:"handleInChange",value:function(e){this.setState({in:e.target.value}),this.calculate("in",e.target.value)}},{key:"handleMChange",value:function(e){this.setState({m:e.target.value}),this.calculate("m",e.target.value)}},{key:"handleFtChange",value:function(e){this.setState({ft:e.target.value}),this.calculate("ft",e.target.value)}},{key:"calculate",value:function(e,t){switch(e){case"m":this.setState({ft:3.28084*t,cm:100*t,in:t/.0254});break;case"ft":this.setState({m:t/3.28084,cm:t/30.48,in:12*t});break;case"cm":this.setState({ft:3.28084*t,m:10*t,in:t/2.54});break;case"in":this.setState({m:t/3.28084,cm:2.54*t,ft:t/12})}}},{key:"render",value:function(){return Object(N.jsxs)("div",{className:"container",children:[Object(N.jsxs)(I.a,{children:[Object(N.jsx)(M.a,{children:Object(N.jsx)(v.b,{to:"/unit-converter",children:"\u4e3b\u9801"})}),Object(N.jsx)(M.a,{active:!0,children:"\u9577\u5ea6\u8f49\u63db\u5668"})]}),Object(N.jsx)("div",{className:"row row-content",children:Object(N.jsx)("div",{className:"col-sm-12",children:Object(N.jsxs)("form",{children:[Object(N.jsxs)("div",{className:"row",children:[Object(N.jsxs)("div",{className:"form-group col-6",children:[Object(N.jsx)("legend",{children:"\u7c73"}),Object(N.jsx)("div",{className:"row",children:Object(N.jsxs)("div",{className:"col-12",children:[Object(N.jsx)("input",{className:"form-control",id:"m",type:"number",value:this.state.m,onChange:this.handleMChange}),Object(N.jsx)("label",{className:"control-label",htmlFor:"m",children:"m"})]})})]}),Object(N.jsxs)("div",{className:"form-group col-6",children:[Object(N.jsx)("legend",{children:"\u5c3a"}),Object(N.jsx)("div",{className:"row",children:Object(N.jsxs)("div",{className:"col-12",children:[Object(N.jsx)("input",{className:"form-control",id:"ft",type:"number",name:"ft",value:this.state.ft,onChange:this.handleFtChange}),Object(N.jsx)("label",{className:"control-label",htmlFor:"ft",children:"ft"})]})})]})]}),Object(N.jsx)("br",{}),Object(N.jsxs)("div",{className:"row",children:[Object(N.jsxs)("div",{className:"form-group col-6",children:[Object(N.jsx)("legend",{children:"\u5398\u7c73"}),Object(N.jsx)("div",{className:"row",children:Object(N.jsxs)("div",{className:"col-12",children:[Object(N.jsx)("input",{className:"form-control",id:"cm",type:"number",value:this.state.cm,onChange:this.handleCmChange}),Object(N.jsx)("label",{className:"control-label",htmlFor:"cm",children:"cm"})]})})]}),Object(N.jsxs)("div",{className:"form-group col-6",children:[Object(N.jsx)("legend",{children:"\u540b"}),Object(N.jsx)("div",{className:"row",children:Object(N.jsxs)("div",{className:"col-12",children:[Object(N.jsx)("input",{className:"form-control",id:"in",type:"number",name:"in",value:this.state.in,onChange:this.handleInChange}),Object(N.jsx)("label",{className:"control-label",htmlFor:"in",children:"in"})]})})]})]})]})})})]})}}]),a}(c.Component),T=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={kg:"",g:"",t:"",lb:"",oz:"",jin:"",tael:""},e.handleKgChange=e.handleKgChange.bind(Object(o.a)(e)),e.handleGChange=e.handleGChange.bind(Object(o.a)(e)),e.handleTChange=e.handleTChange.bind(Object(o.a)(e)),e.handleLbChange=e.handleLbChange.bind(Object(o.a)(e)),e.handleOzChange=e.handleOzChange.bind(Object(o.a)(e)),e.handleJinChange=e.handleJinChange.bind(Object(o.a)(e)),e.handleTaelChange=e.handleTaelChange.bind(Object(o.a)(e)),e.calculate=e.calculate.bind(Object(o.a)(e)),e}return Object(r.a)(a,[{key:"handleKgChange",value:function(e){this.setState({kg:e.target.value}),this.calculate("kg",e.target.value)}},{key:"handleGChange",value:function(e){this.setState({g:e.target.value}),this.calculate("g",e.target.value)}},{key:"handleTChange",value:function(e){this.setState({t:e.target.value}),this.calculate("t",e.target.value)}},{key:"handleLbChange",value:function(e){this.setState({lb:e.target.value}),this.calculate("lb",e.target.value)}},{key:"handleOzChange",value:function(e){this.setState({oz:e.target.value}),this.calculate("oz",e.target.value)}},{key:"handleJinChange",value:function(e){this.setState({jin:e.target.value}),this.calculate("jin",e.target.value)}},{key:"handleTaelChange",value:function(e){this.setState({tael:e.target.value}),this.calculate("tael",e.target.value)}},{key:"calculate",value:function(e,t){switch(e){case"kg":this.setState({g:1e3*t,t:t/1e3,lb:2.204*t,oz:35.274*t,jin:t/1.653,tael:26.45*t});break;case"g":this.setState({kg:t/1e3,t:t/1e6,lb:t/454,oz:28.35*t,jin:t/500,tael:t/37.79});break;case"t":this.setState({g:1e6*t,kg:1e3*t,lb:2205*t,oz:35274*t,jin:1653*t,tael:26888.97*t});break;case"lb":this.setState({g:454*t,t:t/2205,kg:t/2.205,oz:16*t,jin:t/1.653,tael:12*t});break;case"oz":this.setState({g:t/28.35,t:t/35274,lb:t/16,kg:t/35.274,jin:t/1.653,tael:1.33*t});break;case"jin":this.setState({g:500*t,t:t/2205,kg:t/2.205,oz:16*t,lb:1.653*t,tael:10*t});break;case"tael":this.setState({g:37.49*t,t:t/26888.97,lb:t/12,kg:t/26.45,jin:t/10,oz:t/1.33})}}},{key:"render",value:function(){return Object(N.jsxs)("div",{className:"container",children:[Object(N.jsxs)(I.a,{children:[Object(N.jsx)(M.a,{children:Object(N.jsx)(v.b,{to:"/unit-converter",children:"\u4e3b\u9801"})}),Object(N.jsx)(M.a,{active:!0,children:"\u91cd\u91cf\u8f49\u63db\u5668"})]}),Object(N.jsx)("div",{className:"row row-content",children:Object(N.jsx)("div",{className:"col-sm-12",children:Object(N.jsxs)("form",{children:[Object(N.jsxs)("div",{className:"row",children:[Object(N.jsxs)("div",{className:"form-group col-6",children:[Object(N.jsx)("legend",{children:"\u516c\u65a4"}),Object(N.jsx)("div",{className:"row",children:Object(N.jsxs)("div",{className:"col-12",children:[Object(N.jsx)("input",{className:"form-control",id:"KG",type:"number",value:this.state.kg,onChange:this.handleKgChange}),Object(N.jsx)("label",{className:"control-label",htmlFor:"kg",children:"kg"})]})})]}),Object(N.jsxs)("div",{className:"form-group col-6",children:[Object(N.jsx)("legend",{children:"\u514b"}),Object(N.jsx)("div",{className:"row",children:Object(N.jsxs)("div",{className:"col-12",children:[Object(N.jsx)("input",{className:"form-control",id:"g",type:"number",name:"g",value:this.state.g,onChange:this.handleGChange}),Object(N.jsx)("label",{className:"control-label",htmlFor:"g",children:"g"})]})})]})]}),Object(N.jsx)("br",{}),Object(N.jsxs)("div",{className:"row",children:[Object(N.jsxs)("div",{className:"form-group col-6",children:[Object(N.jsx)("legend",{children:"\u5678"}),Object(N.jsx)("div",{className:"row",children:Object(N.jsxs)("div",{className:"col-12",children:[Object(N.jsx)("input",{className:"form-control",id:"t",type:"number",value:this.state.t,onChange:this.handleTChange}),Object(N.jsx)("label",{className:"control-label",htmlFor:"t",children:"t"})]})})]}),Object(N.jsxs)("div",{className:"form-group col-6",children:[Object(N.jsx)("legend",{children:"\u78c5"}),Object(N.jsx)("div",{className:"row",children:Object(N.jsxs)("div",{className:"col-12",children:[Object(N.jsx)("input",{className:"form-control",id:"lb",type:"number",name:"lb",value:this.state.lb,onChange:this.handleLbChange}),Object(N.jsx)("label",{className:"control-label",htmlFor:"lb",children:"lb"})]})})]})]}),Object(N.jsx)("div",{className:"row",children:Object(N.jsxs)("div",{className:"form-group col-6",children:[Object(N.jsx)("legend",{children:"\u76ce\u53f8"}),Object(N.jsx)("div",{className:"row",children:Object(N.jsxs)("div",{className:"col-12",children:[Object(N.jsx)("input",{className:"form-control",id:"oz",type:"number",name:"oz",value:this.state.oz,onChange:this.handleOzChange}),Object(N.jsx)("label",{className:"control-label",htmlFor:"oz",children:"oz"})]})})]})}),Object(N.jsxs)("div",{className:"row",children:[Object(N.jsxs)("div",{className:"form-group col-6",children:[Object(N.jsx)("legend",{children:"\u65a4"}),Object(N.jsx)("div",{className:"row",children:Object(N.jsxs)("div",{className:"col-12",children:[Object(N.jsx)("input",{className:"form-control",id:"jin",type:"number",value:this.state.jin,onChange:this.handleJinChange}),Object(N.jsx)("label",{className:"control-label",htmlFor:"jin",children:"jin"})]})})]}),Object(N.jsxs)("div",{className:"form-group col-6",children:[Object(N.jsx)("legend",{children:"\u5169"}),Object(N.jsx)("div",{className:"row",children:Object(N.jsxs)("div",{className:"col-12",children:[Object(N.jsx)("input",{className:"form-control",id:"tael",type:"number",name:"tael",value:this.state.tael,onChange:this.handleTaelChange}),Object(N.jsx)("label",{className:"control-label",htmlFor:"tael",children:"tael"})]})})]})]})]})})})]})}}]),a}(c.Component);function J(e){return Object(N.jsxs)("div",{id:"bmiContainer",className:"bmi-result alert "+e.alertClass,children:[Object(N.jsx)("div",{children:e.bmi||"--.--"}),Object(N.jsx)("div",{children:e.label})]})}var L=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={weight:"",height:""},e.handleHeightChange=e.handleHeightChange.bind(Object(o.a)(e)),e.handleWeightChange=e.handleWeightChange.bind(Object(o.a)(e)),e.calculateBMI=e.calculateBMI.bind(Object(o.a)(e)),e}return Object(r.a)(a,[{key:"handleHeightChange",value:function(e){this.setState({height:e.target.value})}},{key:"handleWeightChange",value:function(e){this.setState({weight:e.target.value})}},{key:"calculateBMI",value:function(){if(this.state.weight&&this.state.height)var e=(this.state.weight/(this.state.height*this.state.height)).toFixed(2);return e}},{key:"getBMIResults",value:function(e){var t={label:"",alertClass:""};return e<=18.5?(t.label="\u904e\u8f15",t.alertClass="alert-danger"):e<=24.9?(t.label="\u6b63\u5e38",t.alertClass="alert-success"):e<=29.9?(t.label="\u904e\u91cd",t.alertClass="alert-warning"):e>=30?(t.label="\u80a5\u80d6",t.alertClass="alert-danger"):(t.label="BMI",t.alertClass="alert-primary"),t}},{key:"render",value:function(){var e=this.calculateBMI(),t=this.getBMIResults(e);return Object(N.jsxs)("div",{className:"container",children:[Object(N.jsxs)(I.a,{children:[Object(N.jsx)(M.a,{children:Object(N.jsx)(v.b,{to:"/unit-converter",children:"\u4e3b\u9801"})}),Object(N.jsx)(M.a,{active:!0,children:"BMI\u8a08\u7b97\u5668"})]}),Object(N.jsxs)("div",{className:"row row-content",children:[Object(N.jsx)("div",{className:"col-4 col-sm-3"}),Object(N.jsx)("div",{className:"col-sm-9",children:Object(N.jsx)("form",{children:Object(N.jsxs)("div",{className:"row",children:[Object(N.jsxs)("div",{className:"form-group col-sm-5",children:[Object(N.jsx)("legend",{children:"\u9ad4\u91cd"}),Object(N.jsxs)("div",{className:"col-8 col-xs-4",children:[Object(N.jsx)("input",{className:"form-control",id:"weight",type:"number",size:!0,value:this.state.weight,onChange:this.handleWeightChange}),Object(N.jsx)("label",{className:"control-label",htmlFor:"weight",children:"kg"})]})]}),Object(N.jsxs)("div",{className:"form-group col-sm-5",children:[Object(N.jsx)("legend",{children:"\u9ad8\u5ea6"}),Object(N.jsxs)("div",{className:"col-8 col-xs-4",children:[Object(N.jsx)("input",{className:"form-control",id:"height",type:"number",name:"height",value:this.state.height,onChange:this.handleHeightChange}),Object(N.jsx)("label",{className:"control-label",htmlFor:"height",children:"m"})]})]})]})})}),Object(N.jsx)("div",{className:"col-sm-3"}),Object(N.jsx)("div",{className:"col-10 col-sm-6",children:Object(N.jsx)(J,{bmi:e,label:t.label,alertClass:t.alertClass})}),Object(N.jsx)("div",{className:"col-sm-3"})]})]})}}]),a}(c.Component),G=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={m2:"",ft2:"",cm2:"",in:""},e.handleM2Change=e.handleM2Change.bind(Object(o.a)(e)),e.handleFt2Change=e.handleFt2Change.bind(Object(o.a)(e)),e.handleCm2Change=e.handleCm2Change.bind(Object(o.a)(e)),e.handleIn2Change=e.handleIn2Change.bind(Object(o.a)(e)),e.calculate=e.calculate.bind(Object(o.a)(e)),e}return Object(r.a)(a,[{key:"handleCm2Change",value:function(e){this.setState({cm2:e.target.value}),this.calculate("cm2",e.target.value)}},{key:"handleIn2Change",value:function(e){this.setState({in2:e.target.value}),this.calculate("in",e.target.value)}},{key:"handleM2Change",value:function(e){this.setState({m2:e.target.value}),this.calculate("m2",e.target.value)}},{key:"handleFt2Change",value:function(e){this.setState({ft2:e.target.value}),this.calculate("ft2",e.target.value)}},{key:"calculate",value:function(e,t){switch(e){case"m2":this.setState({ft2:10.764*t,cm2:1e4*t,in2:1550*t});break;case"ft2":this.setState({m2:t/10.764,cm2:929*t,in2:144*t});break;case"cm2":this.setState({ft2:t/929,m2:t/1e4,in2:t/6.452});break;case"in2":this.setState({m2:t/1550,cm2:6.452*t,ft2:t/144})}}},{key:"render",value:function(){return Object(N.jsxs)("div",{className:"container",children:[Object(N.jsxs)(I.a,{children:[Object(N.jsx)(M.a,{children:Object(N.jsx)(v.b,{to:"/unit-converter",children:"\u4e3b\u9801"})}),Object(N.jsx)(M.a,{active:!0,children:"\u9762\u7a4d\u8f49\u63db\u5668"})]}),Object(N.jsx)("div",{className:"row row-content",children:Object(N.jsx)("div",{className:"col-sm-12",children:Object(N.jsxs)("form",{children:[Object(N.jsxs)("div",{className:"row",children:[Object(N.jsxs)("div",{className:"form-group col-6",children:[Object(N.jsx)("legend",{children:"\u5e73\u65b9\u7c73"}),Object(N.jsx)("div",{className:"row",children:Object(N.jsxs)("div",{className:"col-12",children:[Object(N.jsx)("input",{className:"form-control",id:"m2",type:"number",value:this.state.m2,onChange:this.handleM2Change}),Object(N.jsx)("label",{className:"control-label",htmlFor:"m2",children:"m\xb2"})]})})]}),Object(N.jsxs)("div",{className:"form-group col-6",children:[Object(N.jsx)("legend",{children:"\u5e73\u65b9\u5c3a"}),Object(N.jsx)("div",{className:"row",children:Object(N.jsxs)("div",{className:"col-12",children:[Object(N.jsx)("input",{className:"form-control",id:"ft2",type:"number",name:"ft2",value:this.state.ft2,onChange:this.handleFt2Change}),Object(N.jsx)("label",{className:"control-label",htmlFor:"ft2",children:"ft\xb2"})]})})]})]}),Object(N.jsx)("br",{}),Object(N.jsxs)("div",{className:"row",children:[Object(N.jsxs)("div",{className:"form-group col-6",children:[Object(N.jsx)("legend",{children:"\u5e73\u65b9\u5398\u7c73"}),Object(N.jsx)("div",{className:"row",children:Object(N.jsxs)("div",{className:"col-12",children:[Object(N.jsx)("input",{className:"form-control",id:"cm2",type:"number",value:this.state.cm2,onChange:this.handleCm2Change}),Object(N.jsx)("label",{className:"control-label",htmlFor:"cm2",children:"cm\xb2"})]})})]}),Object(N.jsxs)("div",{className:"form-group col-6",children:[Object(N.jsx)("legend",{children:"\u5e73\u65b9\u540b"}),Object(N.jsx)("div",{className:"row",children:Object(N.jsxs)("div",{className:"col-12",children:[Object(N.jsx)("input",{className:"form-control",id:"in2",type:"number",name:"in2",value:this.state.in2,onChange:this.handleIn2Change}),Object(N.jsx)("label",{className:"control-label",htmlFor:"in2",children:"in\xb2"})]})})]})]})]})})})]})}}]),a}(c.Component),K=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(N.jsxs)("div",{children:[Object(N.jsx)(f,{}),Object(N.jsx)("div",{children:Object(N.jsx)(S.a,{children:Object(N.jsx)(F.a,{classNames:"page",timeout:300,children:Object(N.jsxs)(z.d,{location:this.props.location,children:[Object(N.jsx)(z.b,{exact:!0,path:"/unit-converter",component:function(){return Object(N.jsx)(w,{})}}),Object(N.jsx)(z.b,{exact:!0,path:"/unit-converter/bmi",component:function(){return Object(N.jsx)(L,{})}}),Object(N.jsx)(z.b,{exact:!0,path:"/unit-converter/length",component:function(){return Object(N.jsx)(B,{})}}),Object(N.jsx)(z.b,{exact:!0,path:"/unit-converter/weight",component:function(){return Object(N.jsx)(T,{})}}),Object(N.jsx)(z.b,{exact:!0,path:"/unit-converter/area",component:function(){return Object(N.jsx)(G,{})}}),Object(N.jsx)(z.a,{to:"/unit-converter"})]})},this.props.location.key)})}),Object(N.jsx)(C,{})]})}}]),a}(c.Component),H=Object(z.g)(K),W=a(18),P=a(38),R=a(23);W.b.add(P.a,R.b,R.c,R.d,R.e,R.a);var _=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(N.jsx)(v.a,{children:Object(N.jsx)("div",{className:"App",children:Object(N.jsx)(H,{})})})}}]),a}(c.Component),A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,80)).then((function(t){var a=t.getCLS,c=t.getFID,l=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),l(e),n(e),s(e)}))};a(62),a(63),a(64);s.a.render(Object(N.jsx)(l.a.StrictMode,{children:Object(N.jsx)(_,{})}),document.getElementById("root")),A()}},[[65,1,2]]]);
//# sourceMappingURL=main.db7b1cc0.chunk.js.map