(this["webpackJsonpsd-0x-project-trybewallet"]=this["webpackJsonpsd-0x-project-trybewallet"]||[]).push([[0],{44:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(19),c=n.n(r),o=n(23),s=n(12),l=n(15),u=n(33),d=n(34),b=n(4),p=n(25),h=n(35),j=function(){return fetch("https://economia.awesomeapi.com.br/json/all").then((function(e){return e.json()})).then((function(e){return e}))},x="LOGIN",m="CURRENCY_TYPE_ACTION",y="EXPENSES_TYPE",f="TOTAL_EXPENSE_TYPE",O="EDIT_EXPENSE_ARRAY",g="HABILITY_EDIT_TO_REDUX",v="CLICK_GET_EXPENSE_TYPE",E="TYPE_NUMBERLESS",C=function(e){return{type:y,expenses:e}},R=function(e,t,n){return{type:g,editHability:e,name:t,value:n}},w=function(){return function(){var e=Object(h.a)(Object(p.a)().mark((function e(t){var n;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j();case 3:n=e.sent,t({type:m,payload:n}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:"CURRENCY_TYPE_ACTION_ERROR",error:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},S={email:"",password:""},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;return t.type===x?Object(b.a)(Object(b.a)({},e),{},{email:t.email,password:t.password}):e},H={currencies:[],error:"",exchange:{},errorExchange:"",total:0,expenses:[],currenciesDetails:[],editArrayExpenses:!1,name:"",value:"",editHability:!1,gasto:{},numberLess:0},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(b.a)(Object(b.a)({},e),{},{currencies:Object.keys(t.payload).filter((function(e){return"USDT"!==e})),currenciesDetails:t.payload});case y:return Object(b.a)(Object(b.a)({},e),{},{expenses:t.expenses});case f:return Object(b.a)(Object(b.a)({},e),{},{total:t.total});case O:return Object(b.a)(Object(b.a)({},e),{},{editArrayExpenses:t.editExpensesArray,editTotal:t.total});case g:return Object(b.a)(Object(b.a)({},e),{},{editHability:t.editHability,name:t.name,value:t.value});case v:return Object(b.a)(Object(b.a)({},e),{},{gasto:t.gasto});case E:return Object(b.a)(Object(b.a)({},e),{},{numberLess:t.numberLess});default:return e}},k=Object(l.combineReducers)({user:T,wallet:F}),L=Object(l.createStore)(k,Object(u.composeWithDevTools)(Object(l.applyMiddleware)(d.a)));window.Cypress&&(window.store=L);var N=L,B=(n(44),n(3)),A=n(17),D=n(9),P=n(10),_=n(11),I=n(13),M=n(1),Y=function(e){Object(_.a)(n,e);var t=Object(I.a)(n);function n(){var e;Object(D.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={email:"",password:"",emailHabilityButton:!1,passwordHabilityButton:!1},e.habilityButton=function(t){var n=t.target,a=n.name,i=n.value;t.preventDefault();console.log(a),"email"===a&&i.includes("@")&&i.includes(".com")&&e.setState({emailHabilityButton:!0}),"password"===a&&i.length>=6&&e.setState({passwordHabilityButton:!0}),"email"!==a||i.includes("@")&&i.includes(".com")||e.setState({emailHabilityButton:!1}),"password"===a&&i.length<6&&e.setState({passwordHabilityButton:!1}),e.setState(Object(A.a)({},a,i))},e.handleClick=function(){var t=e.state,n=t.email,a=t.password,i=e.props,r=i.LoginInformation,c=i.history;r(n,a),c.push("/carteira")},e}return Object(P.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.emailHabilityButton,a=t.passwordHabilityButton;return console.log(this.state),Object(M.jsxs)("div",{className:"forms-container",children:[Object(M.jsx)("h3",{children:"TrybeWallet"}),Object(M.jsxs)("form",{className:"forms-content",children:[Object(M.jsxs)("label",{htmlFor:"email-input",children:["Email:"," ",Object(M.jsx)("input",{type:"email","data-testid":"email-input",id:"email-input",name:"email",onChange:function(t){return e.habilityButton(t)}})]}),Object(M.jsxs)("label",{htmlFor:"password-input",children:["Password:"," ",Object(M.jsx)("input",{type:"password","data-testid":"password-input",id:"password-input",name:"password",onChange:function(t){return e.habilityButton(t)}})]}),Object(M.jsx)("button",{type:"submit",disabled:!(n&&a),onClick:this.handleClick,children:"Entrar"})]})]})}}]),n}(i.a.Component),V=Object(s.b)(null,(function(e){return{LoginInformation:function(t,n){return e(function(e,t){return{type:x,email:e,password:t}}(t,n))}}}))(Y),U=n(28),W=function(e){Object(_.a)(n,e);var t=Object(I.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return Object(P.a)(n,[{key:"render",value:function(){var e=this.props,t=e.value,n=e.description,a=e.currency,i=e.currencyList,r=e.method,c=e.tag,o=e.editHability,s=e.habilityFromBtn,l=e.handleChange,u=e.handleClick;return Object(M.jsxs)("form",{className:"header-forms-wallet",children:[" ",Object(M.jsxs)("label",{htmlFor:"value-input",children:["Valor:"," ",Object(M.jsx)("input",{name:"value",type:"number","data-testid":"value-input",id:"value-input",value:t,onChange:function(e){return l(e)}})]}),Object(M.jsxs)("label",{htmlFor:"description-input",children:["Descri\xe7\xe3o:"," ",Object(M.jsx)("textarea",{name:"description","data-testid":"description-input",id:"description-input",value:n,onChange:function(e){return l(e)}})]}),Object(M.jsxs)("label",{htmlFor:"currency-input",children:["Moeda:"," ",Object(M.jsx)("select",{name:"currency","data-testid":"currency-input",id:"currency-input",value:a,onChange:function(e){return l(e)},children:i.map((function(e,t){return Object(M.jsx)("option",{children:e},t)}))})]}),Object(M.jsxs)("label",{htmlFor:"method-input",children:["M\xe9todo de Pagamento:"," ",Object(M.jsxs)("select",{name:"method","data-testid":"method-input",id:"method-input",value:r,onChange:function(e){return l(e)},children:[Object(M.jsx)("option",{children:"Dinheiro"}),Object(M.jsx)("option",{children:"Cart\xe3o de cr\xe9dito"}),Object(M.jsx)("option",{children:"Cart\xe3o de d\xe9bito"})]})]}),Object(M.jsxs)("label",{htmlFor:"tag-input",children:["Categoria:"," ",Object(M.jsxs)("select",{name:"tag","data-testid":"tag-input",id:"tag-input",value:c,onChange:function(e){return l(e)},children:[Object(M.jsx)("option",{children:"Alimenta\xe7\xe3o"}),Object(M.jsx)("option",{children:"Lazer"}),Object(M.jsx)("option",{children:"Trabalho"}),Object(M.jsx)("option",{children:"Transporte"}),Object(M.jsx)("option",{children:"Sa\xfade"})]})]}),o&&!s||!o&&s?Object(M.jsx)("button",{type:"button",onClick:u,children:"Editar despesa"}):Object(M.jsx)("button",{type:"button",onClick:u,children:"Adicionar despesa"})]})}}]),n}(i.a.Component),X=function(e){Object(_.a)(n,e);var t=Object(I.a)(n);function n(){var e;return Object(D.a)(this,n),(e=t.call(this)).calculateTotal=function(t){var n=e.state.total;e.setState({total:n.filter((function(e){return e!==Number(t)}))})},e.habilityEditChange=function(){return e.props.editHability&&e.setState((function(e){return{habilityEditChangeState:!e.habilityEditChangeState}}))},e.handleInputEditExpense=function(t){var n=e.state.total;e.setState((function(e){return{id:t.id,value:t.value,currency:t.currency,method:t.method,tag:t.tag,description:t.description,exchangeRates:t.exchangeRates,habilityEditChangeState:!e.habilityEditChangeState,total:n.filter((function(e,n){return n!==t.id}))}}))},e.handleEditTotalState=function(t){var n=e.props.totalExpense;e.setState({total:t});var a=t.reduce((function(e,t){return e+Number(t)}),0);n(Number(a.toFixed(2))),e.setState({totalExpenseCalculator:Number(a.toFixed(2))})},e.handleDeleteExpense=function(){var t=e.props.expensesStateRedux;e.setState({expenses:t})},e.getExchangeValue=function(){var t=e.state.expenses;t.filter((function(n){return e.setState({exchange:Object.values(t[0].exchangeRates).find((function(e){return n.currency===e.code})).ask})})),e.setState({exchangeValueHability:!1,multiplicationWithExchange:!0})},e.getMultiplicationWithExchange=function(){var t=e.state,n=t.expenses,a=t.exchange,i=n.map((function(e){return e.value*parseFloat(a)}));e.setState((function(e){return{multiplicationWithExchange:!1,total:[].concat(Object(U.a)(e.total),[Number(i[i.length-1].toFixed(2))]),sumTotalHability:!0}}))},e.getExpenseTotal=function(){var t=e.state.total.reduce((function(e,t){return e+Number(t)}),0);e.setState({totalExpenseCalculator:Number(t.toFixed(2)),sumTotalHability:!1,totalHability:!0})},e.handleGetPropsTotal=function(){var t=e.state.totalExpenseCalculator;(0,e.props.totalExpense)(t),e.setState({totalHability:!1})},e.handleChange=function(t){var n=t.target,a=n.name,i=n.value,r=e.props,c=r.habilityEditFromRedux,o=r.editHability;return e.setState(Object(A.a)({},a,i)),!0===o&&c(o,a,i)},e.handleClick=function(){var t=e.state,n=t.value,a=t.description,i=t.currency,r=t.method,c=t.tag,o=t.id;e.handleDeleteExpense();var s=e.props,l=s.exchangeRatesAction,u=s.editHability;return e.setState((function(e){return{expenses:[].concat(Object(U.a)(e.expenses),[{id:o,value:n,currency:i,method:r,tag:c,description:a,exchangeRates:l}]),id:e.id+1,value:"",description:""}})),e.setState({exchangeValueHability:!0}),u?e.setState({habilityFromBtn:!0}):e.setState({habilityFromBtn:!1})},e.state={id:0,value:0,description:"",currency:"USD",method:"Dinheiro",tag:"Alimenta\xe7\xe3o",expenses:[],exchangeRates:[],total:[0],exchange:0,exchangeValueHability:!1,multiplicationWithExchange:!1,sumTotalHability:!1,totalExpenseCalculator:0,totalHability:!1,habilityEditChangeState:!1,habilityFromBtn:!1},e}return Object(P.a)(n,[{key:"componentDidUpdate",value:function(){var e=this.state,t=e.exchangeValueHability,n=e.multiplicationWithExchange,a=e.habilityFromBtn,i=e.total,r=e.sumTotalHability,c=e.totalHability,o=e.expenses,s=e.habilityEditChangeState,l=this.props,u=l.expensesAction,d=l.getCurrencyAPIThunkReq,b=l.editExpenseHability,p=l.editTotal,h=l.gastoRedux,j=l.editHability,x=l.numberForLess,m=l.totalOfRedux,y=l.totalExpense;console.log(m),void 0!==p&&this.handleEditTotalState(i.filter((function(e){return e!==Number(p)}))),!0===b&&this.handleDeleteExpense(),!0===t&&(this.getExchangeValue(),d()),!0===n&&this.getMultiplicationWithExchange(),!0===r&&this.getExpenseTotal(),!0===c&&(this.handleGetPropsTotal(),u(o)),!j||a||s||(this.handleInputEditExpense(h),u(o.filter((function(e){return e.id!==h.id}))),y((m-x).toFixed(2)),this.calculateTotal(x))}},{key:"render",value:function(){var e=this.props,t=e.currencyList,n=e.editHability,a=this.state,i=a.value,r=a.description,c=a.currency,o=a.method,s=a.tag,l=a.exchangeRates,u=a.habilityFromBtn;return console.log(l),Object(M.jsx)(W,{value:i,description:r,currency:c,currencyList:t,method:o,tag:s,editHability:n,habilityFromBtn:u,handleChange:this.handleChange,handleClick:this.handleClick})}}]),n}(a.Component);X.defaultProps={currencyList:{},editTotal:void 0,editExpenseHability:!1};var G=Object(s.b)((function(e){return{currencyList:e.wallet.currencies,exchangeRatesAction:e.wallet.currenciesDetails,expensesStateRedux:e.wallet.expenses,editExpenseHability:e.wallet.editArrayExpenses,editTotal:e.wallet.editTotal,editHability:e.wallet.editHability,gastoRedux:e.wallet.gasto,numberForLess:e.wallet.numberLess,totalOfRedux:e.wallet.total}}),(function(e){return{totalExpense:function(t){return e(function(e){return{type:f,total:e}}(t))},expensesAction:function(t){return e(C(t))},getCurrencyAPIThunkReq:function(){return e(w())},habilityEditFromRedux:function(t,n,a){return e(R(t,n,a))}}}))(X),q=function(e){Object(_.a)(n,e);var t=Object(I.a)(n);function n(){var e;Object(D.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={habilityReloadExpense:!1,habilityEdit:!1},e.handleListExpense=function(t){var n=e.props,a=n.gastos,i=n.expenses,r=n.editExpenseHability,c=a.map((function(e){return(Object.values(e.exchangeRates).filter((function(e){return t.currency===e.code&&"BRLT"!==e.codein})).map((function(e){return Number(e.ask)}))*Number(t.value)).toFixed(2)}))[0];console.log(c),r(null,c),i(a.filter((function(e){return e!==t}))),e.setState({habilityReloadExpense:!0}),e.setState({habilityReloadExpense:!1})},e.editListExpense=function(t){var n=e.props.gastos,a=e.props,i=a.getExpenseClick,r=a.numberForLess;e.setState((function(e){return{habilityEdit:!e.habilityEdit}})),r(n.map((function(e){return(Object.values(e.exchangeRates).filter((function(e){return t.currency===e.code&&"BRLT"!==e.codein})).map((function(e){return Number(e.ask)}))*Number(t.value)).toFixed(2)}))[0]),i(t)},e}return Object(P.a)(n,[{key:"componentDidUpdate",value:function(){var e=this.props,t=e.editExpenseHability,n=e.habilityEditFromRedux,a=this.state,i=a.habilityReloadExpense,r=a.habilityEdit;t(i),n(r)}},{key:"render",value:function(){var e=this,t=this.props.gastos;return Object(M.jsxs)("table",{children:[Object(M.jsx)("thead",{children:Object(M.jsxs)("tr",{children:[Object(M.jsx)("th",{scope:"col",children:"Descri\xe7\xe3o"}),Object(M.jsx)("th",{scope:"col",children:"Tag"}),Object(M.jsx)("th",{scope:"col",children:"M\xe9todo de pagamento"}),Object(M.jsx)("th",{scope:"col",children:"Valor"}),Object(M.jsx)("th",{scope:"col",children:"Moeda"}),Object(M.jsx)("th",{scope:"col",children:"C\xe2mbio utilizado"}),Object(M.jsx)("th",{scope:"col",children:"Valor convertido"}),Object(M.jsx)("th",{scope:"col",children:"Moeda de convers\xe3o"}),Object(M.jsx)("th",{scope:"col",children:"Editar/Excluir"})]})}),t.sort((function(e,t){return e.id-t.id})).map((function(t){return Object(M.jsx)("tbody",{children:Object(M.jsxs)("tr",{children:[Object(M.jsx)("td",{children:t.description}),Object(M.jsx)("td",{children:t.tag}),Object(M.jsx)("td",{children:t.method}),Object(M.jsx)("td",{children:Number(t.value).toFixed(2)}),Object(M.jsx)("td",{children:Object.values(t.exchangeRates).filter((function(e){return t.currency===e.code&&"BRLT"!==e.codein})).map((function(e){return e.name}))}),Object(M.jsx)("td",{children:Object.values(t.exchangeRates).filter((function(e){return t.currency===e.code&&"BRLT"!==e.codein})).map((function(e){return parseFloat(e.ask).toFixed(2)}))}),Object(M.jsx)("td",{children:(Object.values(t.exchangeRates).filter((function(e){return t.currency===e.code&&"BRLT"!==e.codein})).map((function(e){return Number(e.ask)}))*Number(t.value)).toFixed(2)}),Object(M.jsx)("td",{children:"Real"}),Object(M.jsxs)("td",{id:"buttons-td",children:[Object(M.jsx)("button",{type:"button","data-testid":"edit-btn",onClick:function(){return e.editListExpense(t)},children:"Editar despesa"}),Object(M.jsx)("button",{type:"button","data-testid":"delete-btn",onClick:function(){return e.handleListExpense(t)},children:"Excluir"})]})]})},t.id)}))]})}}]),n}(a.Component),z=Object(s.b)((function(e){return{gastos:e.wallet.expenses,nameRedux:e.wallet.name,valueRedux:e.wallet.value}}),(function(e){return{expenses:function(t){return e(C(t))},editExpenseHability:function(t,n){return e({type:O,editExpensesArray:t,total:n})},habilityEditFromRedux:function(t){return e(R(t))},getExpenseClick:function(t){return e(function(e){return{type:v,gasto:e}}(t))},numberForLess:function(t){return e({type:E,numberLess:t})}}}))(q),J=function(e){Object(_.a)(n,e);var t=Object(I.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return Object(P.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.currency)()}},{key:"render",value:function(){var e=this.props,t=e.email,n=e.totalExpense;return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)("div",{className:"informations-container",children:[Object(M.jsx)("p",{"data-testid":"email-field",children:t}),Object(M.jsx)("p",{"data-testid":"total-field",children:0===n?Number(n).toFixed(2):n}),Object(M.jsx)("p",{"data-testid":"header-currency-field",children:"BRL"})]}),Object(M.jsx)(G,{}),Object(M.jsx)(z,{})]})}}]),n}(i.a.Component);J.defaultProps={totalExpense:""};var K=Object(s.b)((function(e){return{email:e.user.email,totalExpense:e.wallet.total}}),(function(e){return{currency:function(){return e(w())}}}))(J);var Q=function(){return Object(M.jsxs)(B.c,{children:[Object(M.jsx)(B.a,{exact:!0,path:"/",render:function(e){return Object(M.jsx)(V,Object(b.a)({},e))}}),Object(M.jsx)(B.a,{path:"/carteira",render:function(e){return Object(M.jsx)(K,Object(b.a)({},e))}})]})};c.a.render(Object(M.jsx)(o.a,{basename:"/project-trybewallet",children:Object(M.jsx)(s.a,{store:N,children:Object(M.jsx)(Q,{})})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.a9b0dad1.chunk.js.map