(this.webpackJsonpunit_converter=this.webpackJsonpunit_converter||[]).push([[0],{44:function(e,t,a){},45:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var c=a(2),l=a.n(c),n=a(17),s=a.n(n),i=(a(44),a(11)),r=a(12),h=a(14),j=a(13),o=(a(45),a(5)),d=a(67),b=a(68),m=a(78),u=a(69),O=a(70),g=a(7),v=a(22),x=(a(51),a(0)),N=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(e){var c;return Object(i.a)(this,a),(c=t.call(this,e)).toggleNav=c.toggleNav.bind(Object(o.a)(c)),c.state={isNavOpen:!1},c}return Object(r.a)(a,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"render",value:function(){return Object(x.jsx)(d.a,{dark:!0,expand:"md",children:Object(x.jsxs)("div",{className:"header",children:[Object(x.jsx)(b.a,{onClick:this.toggleNav}),Object(x.jsx)(m.a,{isOpen:this.state.isNavOpen,navbar:!0,children:Object(x.jsxs)(u.a,{navbar:!0,children:[Object(x.jsx)(O.a,{children:Object(x.jsxs)(g.c,{className:"nav-link",to:"/unit-converter",onClick:this.toggleNav,children:[Object(x.jsx)(v.a,{icon:"home"})," \u4e3b\u9801"]})}),Object(x.jsx)(O.a,{children:Object(x.jsxs)(g.c,{className:"nav-link",to:"/unit-converter/bmi",onClick:this.toggleNav,children:[Object(x.jsx)(v.a,{icon:"user-md"})," BMI\u8a08\u7b97\u5668"]})}),Object(x.jsx)(O.a,{children:Object(x.jsxs)(g.c,{className:"nav-link",to:"/unit-converter/length",onClick:this.toggleNav,children:[Object(x.jsx)(v.a,{icon:"ruler"})," \u9577\u5ea6\u8f49\u63db\u5668"]})}),Object(x.jsx)(O.a,{children:Object(x.jsxs)(g.c,{className:"nav-link",to:"/unit-converter/weight",onClick:this.toggleNav,children:[Object(x.jsx)(v.a,{icon:"weight"})," \u91cd\u91cf\u8f49\u63db\u5668"]})}),Object(x.jsx)(O.a,{children:Object(x.jsxs)(g.c,{className:"nav-link",to:"/unit-converter/area",onClick:this.toggleNav,children:[Object(x.jsx)(v.a,{icon:"chart-area"})," \u9762\u7a4d\u8f49\u63db\u5668"]})})]})})]})})}}]),a}(c.Component);var f=function(e){return Object(x.jsx)("div",{className:"footer",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)("div",{className:"row justify-content-center",children:[Object(x.jsxs)("div",{className:"col-2 offset-1 col-sm-2",children:[Object(x.jsx)("h6",{children:"\u7db2\u7ad9\u6307\u5357"}),Object(x.jsxs)("ul",{className:"list-unstyled",children:[Object(x.jsx)("li",{children:Object(x.jsx)(g.b,{to:"/unit-converter",children:"\u4e3b\u9801"})}),Object(x.jsx)("li",{children:Object(x.jsx)(g.b,{to:"/unit-converter/bmi",children:"BMI\u8a08\u7b97\u5668"})}),Object(x.jsx)("li",{children:Object(x.jsx)(g.b,{to:"/unit-converter/weight",children:"\u91cd\u91cf"})})]})]}),Object(x.jsxs)("div",{className:"col-12 col-sm-4 align-self-center",children:[Object(x.jsx)("h6",{children:"\u5bb9\u7a4d/\u9762\u7a4d"}),Object(x.jsxs)("ul",{className:"list-unstyled",children:[Object(x.jsx)("li",{children:Object(x.jsx)(g.b,{to:"/unit-converter/length",children:"\u9577\u5ea6"})}),Object(x.jsx)("li",{children:Object(x.jsx)(g.b,{to:"/unit-converter/area",children:"\u9762\u7a4d"})})]})]})]}),Object(x.jsx)("div",{className:"row justify-content-center",children:Object(x.jsx)("div",{className:"col-auto",children:Object(x.jsxs)("p",{children:["\xa9 Copyright 2021 ",Object(x.jsx)("a",{href:"",children:"Zelina TO"})]})})})]})})},C=a(71),p=a(72),k=a(73);var y=function(e){return Object(x.jsxs)(C.a,{children:[Object(x.jsx)(p.a,{children:Object(x.jsx)(k.a,{sm:"12",md:{size:6,offset:3},children:"\u55ae\u4f4d\u8f49\u63db\u5668"})}),Object(x.jsx)(p.a,{children:Object(x.jsx)(k.a,{sm:"12",md:{size:6,offset:3},children:"\u514d\u8cbb\u8f49\u63db\u4e0d\u540c\u55ae\u4f4d\uff0c\u800c\u4e14\u4e0d\u6703\u8a18\u9304\u4f60\u7684\u6578\u64da"})})]})},w=a(77),S=a(76),F=a(9),z=a(74),I=a(75),M=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={m:"",ft:"",cm:"",in:""},e.handleMChange=e.handleMChange.bind(Object(o.a)(e)),e.handleFtChange=e.handleFtChange.bind(Object(o.a)(e)),e.handleCmChange=e.handleCmChange.bind(Object(o.a)(e)),e.handleInChange=e.handleInChange.bind(Object(o.a)(e)),e.calculate=e.calculate.bind(Object(o.a)(e)),e}return Object(r.a)(a,[{key:"handleCmChange",value:function(e){this.setState({cm:e.target.value}),this.calculate("cm",e.target.value)}},{key:"handleInChange",value:function(e){this.setState({in:e.target.value}),this.calculate("in",e.target.value)}},{key:"handleMChange",value:function(e){this.setState({m:e.target.value}),this.calculate("m",e.target.value)}},{key:"handleFtChange",value:function(e){this.setState({ft:e.target.value}),this.calculate("ft",e.target.value)}},{key:"calculate",value:function(e,t){switch(e){case"m":this.setState({ft:3.28084*t,cm:100*t,in:t/.0254});break;case"ft":this.setState({m:t/3.28084,cm:t/30.48,in:12*t});break;case"cm":this.setState({ft:3.28084*t,m:10*t,in:t/2.54});break;case"in":this.setState({m:t/3.28084,cm:2.54*t,ft:t/12})}}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)(z.a,{children:[Object(x.jsx)(I.a,{children:Object(x.jsx)(g.b,{to:"/unit-converter",children:"\u4e3b\u9801"})}),Object(x.jsx)(I.a,{active:!0,children:"\u9577\u5ea6\u8f49\u63db\u5668"})]}),Object(x.jsx)("div",{className:"row row-content",children:Object(x.jsx)("div",{className:"col-sm-12",children:Object(x.jsxs)("form",{children:[Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"form-group col-6",children:[Object(x.jsx)("legend",{children:"\u7c73"}),Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"col-12",children:[Object(x.jsx)("input",{className:"form-control",id:"m",type:"number",value:this.state.m,onChange:this.handleMChange}),Object(x.jsx)("label",{className:"control-label",htmlFor:"m",children:"m"})]})})]}),Object(x.jsxs)("div",{className:"form-group col-6",children:[Object(x.jsx)("legend",{children:"\u5c3a"}),Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"col-12",children:[Object(x.jsx)("input",{className:"form-control",id:"ft",type:"number",name:"ft",value:this.state.ft,onChange:this.handleFtChange}),Object(x.jsx)("label",{className:"control-label",htmlFor:"ft",children:"ft"})]})})]})]}),Object(x.jsx)("br",{}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"form-group col-6",children:[Object(x.jsx)("legend",{children:"\u5398\u7c73"}),Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"col-12",children:[Object(x.jsx)("input",{className:"form-control",id:"cm",type:"number",value:this.state.cm,onChange:this.handleCmChange}),Object(x.jsx)("label",{className:"control-label",htmlFor:"cm",children:"cm"})]})})]}),Object(x.jsxs)("div",{className:"form-group col-6",children:[Object(x.jsx)("legend",{children:"\u540b"}),Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"col-12",children:[Object(x.jsx)("input",{className:"form-control",id:"in",type:"number",name:"in",value:this.state.in,onChange:this.handleInChange}),Object(x.jsx)("label",{className:"control-label",htmlFor:"in",children:"in"})]})})]})]})]})})})]})}}]),a}(c.Component),B=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={kg:"",g:"",t:"",lb:"",oz:"",jin:"",tael:""},e.handleKgChange=e.handleKgChange.bind(Object(o.a)(e)),e.handleGChange=e.handleGChange.bind(Object(o.a)(e)),e.handleTChange=e.handleTChange.bind(Object(o.a)(e)),e.handleLbChange=e.handleLbChange.bind(Object(o.a)(e)),e.handleOzChange=e.handleOzChange.bind(Object(o.a)(e)),e.handleJinChange=e.handleJinChange.bind(Object(o.a)(e)),e.handleTaelChange=e.handleTaelChange.bind(Object(o.a)(e)),e.calculate=e.calculate.bind(Object(o.a)(e)),e}return Object(r.a)(a,[{key:"handleKgChange",value:function(e){this.setState({kg:e.target.value}),this.calculate("kg",e.target.value)}},{key:"handleGChange",value:function(e){this.setState({g:e.target.value}),this.calculate("g",e.target.value)}},{key:"handleTChange",value:function(e){this.setState({t:e.target.value}),this.calculate("t",e.target.value)}},{key:"handleLbChange",value:function(e){this.setState({lb:e.target.value}),this.calculate("lb",e.target.value)}},{key:"handleOzChange",value:function(e){this.setState({oz:e.target.value}),this.calculate("oz",e.target.value)}},{key:"handleJinChange",value:function(e){this.setState({jin:e.target.value}),this.calculate("jin",e.target.value)}},{key:"handleTaelChange",value:function(e){this.setState({tael:e.target.value}),this.calculate("tael",e.target.value)}},{key:"calculate",value:function(e,t){switch(e){case"kg":this.setState({g:1e3*t,t:t/1e3,lb:2.204*t,oz:35.274*t,jin:t/1.653,tael:26.45*t});break;case"g":this.setState({kg:t/1e3,t:t/1e6,lb:t/454,oz:28.35*t,jin:t/500,tael:t/37.79});break;case"t":this.setState({g:1e6*t,kg:1e3*t,lb:2205*t,oz:35274*t,jin:1653*t,tael:26888.97*t});break;case"lb":this.setState({g:454*t,t:t/2205,kg:t/2.205,oz:16*t,jin:t/1.653,tael:12*t});break;case"oz":this.setState({g:t/28.35,t:t/35274,lb:t/16,kg:t/35.274,jin:t/1.653,tael:1.33*t});break;case"jin":this.setState({g:500*t,t:t/2205,kg:t/2.205,oz:16*t,lb:1.653*t,tael:10*t});break;case"tael":this.setState({g:37.49*t,t:t/26888.97,lb:t/12,kg:t/26.45,jin:t/10,oz:t/1.33})}}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)(z.a,{children:[Object(x.jsx)(I.a,{children:Object(x.jsx)(g.b,{to:"/unit-converter",children:"\u4e3b\u9801"})}),Object(x.jsx)(I.a,{active:!0,children:"\u91cd\u91cf\u8f49\u63db\u5668"})]}),Object(x.jsx)("div",{className:"row row-content",children:Object(x.jsx)("div",{className:"col-sm-12",children:Object(x.jsxs)("form",{children:[Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"form-group col-6",children:[Object(x.jsx)("legend",{children:"\u516c\u65a4"}),Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"col-12",children:[Object(x.jsx)("input",{className:"form-control",id:"KG",type:"number",value:this.state.kg,onChange:this.handleKgChange}),Object(x.jsx)("label",{className:"control-label",htmlFor:"kg",children:"kg"})]})})]}),Object(x.jsxs)("div",{className:"form-group col-6",children:[Object(x.jsx)("legend",{children:"\u514b"}),Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"col-12",children:[Object(x.jsx)("input",{className:"form-control",id:"g",type:"number",name:"g",value:this.state.g,onChange:this.handleGChange}),Object(x.jsx)("label",{className:"control-label",htmlFor:"g",children:"g"})]})})]})]}),Object(x.jsx)("br",{}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"form-group col-6",children:[Object(x.jsx)("legend",{children:"\u5678"}),Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"col-12",children:[Object(x.jsx)("input",{className:"form-control",id:"t",type:"number",value:this.state.t,onChange:this.handleTChange}),Object(x.jsx)("label",{className:"control-label",htmlFor:"t",children:"t"})]})})]}),Object(x.jsxs)("div",{className:"form-group col-6",children:[Object(x.jsx)("legend",{children:"\u78c5"}),Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"col-12",children:[Object(x.jsx)("input",{className:"form-control",id:"lb",type:"number",name:"lb",value:this.state.lb,onChange:this.handleLbChange}),Object(x.jsx)("label",{className:"control-label",htmlFor:"lb",children:"lb"})]})})]})]}),Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"form-group col-6",children:[Object(x.jsx)("legend",{children:"\u76ce\u53f8"}),Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"col-12",children:[Object(x.jsx)("input",{className:"form-control",id:"oz",type:"number",name:"oz",value:this.state.oz,onChange:this.handleOzChange}),Object(x.jsx)("label",{className:"control-label",htmlFor:"oz",children:"oz"})]})})]})}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"form-group col-6",children:[Object(x.jsx)("legend",{children:"\u65a4"}),Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"col-12",children:[Object(x.jsx)("input",{className:"form-control",id:"jin",type:"number",value:this.state.jin,onChange:this.handleJinChange}),Object(x.jsx)("label",{className:"control-label",htmlFor:"jin",children:"jin"})]})})]}),Object(x.jsxs)("div",{className:"form-group col-6",children:[Object(x.jsx)("legend",{children:"\u5169"}),Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"col-12",children:[Object(x.jsx)("input",{className:"form-control",id:"tael",type:"number",name:"tael",value:this.state.tael,onChange:this.handleTaelChange}),Object(x.jsx)("label",{className:"control-label",htmlFor:"tael",children:"tael"})]})})]})]})]})})})]})}}]),a}(c.Component);function T(e){return Object(x.jsxs)("div",{id:"bmiContainer",className:"bmi-result alert "+e.alertClass,children:[Object(x.jsx)("div",{children:e.bmi||"--.--"}),Object(x.jsx)("div",{children:e.label})]})}var J=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={weight:"",height:""},e.handleHeightChange=e.handleHeightChange.bind(Object(o.a)(e)),e.handleWeightChange=e.handleWeightChange.bind(Object(o.a)(e)),e.calculateBMI=e.calculateBMI.bind(Object(o.a)(e)),e}return Object(r.a)(a,[{key:"handleHeightChange",value:function(e){this.setState({height:e.target.value})}},{key:"handleWeightChange",value:function(e){this.setState({weight:e.target.value})}},{key:"calculateBMI",value:function(){if(this.state.weight&&this.state.height)var e=(this.state.weight/(this.state.height*this.state.height)).toFixed(2);return e}},{key:"getBMIResults",value:function(e){var t={label:"",alertClass:""};return e<=18.5?(t.label="\u904e\u8f15",t.alertClass="alert-danger"):e<=24.9?(t.label="\u6b63\u5e38",t.alertClass="alert-success"):e<=29.9?(t.label="\u904e\u91cd",t.alertClass="alert-warning"):e>=30?(t.label="\u80a5\u80d6",t.alertClass="alert-danger"):(t.label="BMI",t.alertClass="alert-primary"),t}},{key:"render",value:function(){var e=this.calculateBMI(),t=this.getBMIResults(e);return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)(z.a,{children:[Object(x.jsx)(I.a,{children:Object(x.jsx)(g.b,{to:"/unit-converter",children:"\u4e3b\u9801"})}),Object(x.jsx)(I.a,{active:!0,children:"BMI\u8a08\u7b97\u5668"})]}),Object(x.jsxs)("div",{className:"row row-content",children:[Object(x.jsx)("div",{className:"col-4 col-sm-3"}),Object(x.jsx)("div",{className:"col-sm-9",children:Object(x.jsx)("form",{children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"form-group col-sm-5",children:[Object(x.jsx)("legend",{children:"\u9ad4\u91cd"}),Object(x.jsxs)("div",{className:"col-8 col-xs-4",children:[Object(x.jsx)("input",{className:"form-control",id:"weight",type:"number",size:!0,value:this.state.weight,onChange:this.handleWeightChange}),Object(x.jsx)("label",{className:"control-label",htmlFor:"weight",children:"kg"})]})]}),Object(x.jsxs)("div",{className:"form-group col-sm-5",children:[Object(x.jsx)("legend",{children:"\u9ad8\u5ea6"}),Object(x.jsxs)("div",{className:"col-8 col-xs-4",children:[Object(x.jsx)("input",{className:"form-control",id:"height",type:"number",name:"height",value:this.state.height,onChange:this.handleHeightChange}),Object(x.jsx)("label",{className:"control-label",htmlFor:"height",children:"m"})]})]})]})})}),Object(x.jsx)("div",{className:"col-sm-3"}),Object(x.jsx)("div",{className:"col-10 col-sm-6",children:Object(x.jsx)(T,{bmi:e,label:t.label,alertClass:t.alertClass})}),Object(x.jsx)("div",{className:"col-sm-3"})]})]})}}]),a}(c.Component),L=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={m2:"",ft2:"",cm2:"",in:""},e.handleM2Change=e.handleM2Change.bind(Object(o.a)(e)),e.handleFt2Change=e.handleFt2Change.bind(Object(o.a)(e)),e.handleCm2Change=e.handleCm2Change.bind(Object(o.a)(e)),e.handleIn2Change=e.handleIn2Change.bind(Object(o.a)(e)),e.calculate=e.calculate.bind(Object(o.a)(e)),e}return Object(r.a)(a,[{key:"handleCm2Change",value:function(e){this.setState({cm2:e.target.value}),this.calculate("cm2",e.target.value)}},{key:"handleIn2Change",value:function(e){this.setState({in2:e.target.value}),this.calculate("in",e.target.value)}},{key:"handleM2Change",value:function(e){this.setState({m2:e.target.value}),this.calculate("m2",e.target.value)}},{key:"handleFt2Change",value:function(e){this.setState({ft2:e.target.value}),this.calculate("ft2",e.target.value)}},{key:"calculate",value:function(e,t){switch(e){case"m2":this.setState({ft2:10.764*t,cm2:1e4*t,in2:1550*t});break;case"ft2":this.setState({m2:t/10.764,cm2:929*t,in2:144*t});break;case"cm2":this.setState({ft2:t/929,m2:t/1e4,in2:t/6.452});break;case"in2":this.setState({m2:t/1550,cm2:6.452*t,ft2:t/144})}}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)(z.a,{children:[Object(x.jsx)(I.a,{children:Object(x.jsx)(g.b,{to:"/unit-converter",children:"\u4e3b\u9801"})}),Object(x.jsx)(I.a,{active:!0,children:"\u9762\u7a4d\u8f49\u63db\u5668"})]}),Object(x.jsx)("div",{className:"row row-content",children:Object(x.jsx)("div",{className:"col-sm-12",children:Object(x.jsxs)("form",{children:[Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"form-group col-6",children:[Object(x.jsx)("legend",{children:"\u5e73\u65b9\u7c73"}),Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"col-12",children:[Object(x.jsx)("input",{className:"form-control",id:"m2",type:"number",value:this.state.m2,onChange:this.handleM2Change}),Object(x.jsx)("label",{className:"control-label",htmlFor:"m2",children:"m\xb2"})]})})]}),Object(x.jsxs)("div",{className:"form-group col-6",children:[Object(x.jsx)("legend",{children:"\u5e73\u65b9\u5c3a"}),Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"col-12",children:[Object(x.jsx)("input",{className:"form-control",id:"ft2",type:"number",name:"ft2",value:this.state.ft2,onChange:this.handleFt2Change}),Object(x.jsx)("label",{className:"control-label",htmlFor:"ft2",children:"ft\xb2"})]})})]})]}),Object(x.jsx)("br",{}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"form-group col-6",children:[Object(x.jsx)("legend",{children:"\u5e73\u65b9\u5398\u7c73"}),Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"col-12",children:[Object(x.jsx)("input",{className:"form-control",id:"cm2",type:"number",value:this.state.cm2,onChange:this.handleCm2Change}),Object(x.jsx)("label",{className:"control-label",htmlFor:"cm2",children:"cm\xb2"})]})})]}),Object(x.jsxs)("div",{className:"form-group col-6",children:[Object(x.jsx)("legend",{children:"\u5e73\u65b9\u540b"}),Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"col-12",children:[Object(x.jsx)("input",{className:"form-control",id:"in2",type:"number",name:"in2",value:this.state.in2,onChange:this.handleIn2Change}),Object(x.jsx)("label",{className:"control-label",htmlFor:"in2",children:"in\xb2"})]})})]})]})]})})})]})}}]),a}(c.Component),G=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(N,{}),Object(x.jsx)("div",{children:Object(x.jsx)(w.a,{children:Object(x.jsx)(S.a,{classNames:"page",timeout:300,children:Object(x.jsxs)(F.d,{location:this.props.location,children:[Object(x.jsx)(F.b,{exact:!0,path:"/unit-converter",component:function(){return Object(x.jsx)(y,{})}}),Object(x.jsx)(F.b,{exact:!0,path:"/unit-converter/bmi",component:function(){return Object(x.jsx)(J,{})}}),Object(x.jsx)(F.b,{exact:!0,path:"/unit-converter/length",component:function(){return Object(x.jsx)(M,{})}}),Object(x.jsx)(F.b,{exact:!0,path:"/unit-converter/weight",component:function(){return Object(x.jsx)(B,{})}}),Object(x.jsx)(F.b,{exact:!0,path:"/unit-converter/area",component:function(){return Object(x.jsx)(L,{})}}),Object(x.jsx)(F.a,{to:"/unit-converter"})]})},this.props.location.key)})}),Object(x.jsx)(f,{})]})}}]),a}(c.Component),K=Object(F.g)(G),H=a(18),W=a(38),P=a(23);H.b.add(W.a,P.b,P.c,P.d,P.e,P.a);var R=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(x.jsx)(g.a,{children:Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(K,{})})})}}]),a}(c.Component),_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,79)).then((function(t){var a=t.getCLS,c=t.getFID,l=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),l(e),n(e),s(e)}))};a(62),a(63),a(64);s.a.render(Object(x.jsx)(l.a.StrictMode,{children:Object(x.jsx)(R,{})}),document.getElementById("root")),_()}},[[65,1,2]]]);
//# sourceMappingURL=main.5b0d1b01.chunk.js.map