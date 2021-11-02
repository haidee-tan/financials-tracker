(this["webpackJsonphello-world"]=this["webpackJsonphello-world"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(5),s=n.n(i),l=(n(21),n(10)),r=n(11),d=n(16),o=n(14),m=(n(22),n(3)),j=n(0),b=Object(m.b)((function(e){return{begBalance:e.begBalance,totalRevenue:e.totalRevenue,totalExpenses:e.totalExpenses,endBalance:e.endBalance,savings:e.savings}}),(function(e){return{moveToNewPeriod:function(){return e({type:"MOVE_TO_NEW_PERIOD"})}}}))((function(e){return Object(j.jsxs)("div",{className:"balance-sheet",children:[Object(j.jsx)("h2",{children:"Summary"}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:"Beginning Balance"}),Object(j.jsxs)("div",{children:["P ",e.begBalance.toLocaleString("en",{useGrouping:!0})]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:"Total Revenue"}),Object(j.jsx)("div",{children:e.totalRevenue.toLocaleString("en",{useGrouping:!0})})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:"Total Expenses"}),Object(j.jsx)("div",{children:e.totalExpenses.toLocaleString("en",{useGrouping:!0})})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:"Net Income"}),Object(j.jsx)("div",{children:e.savings.toLocaleString("en",{useGrouping:!0})})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:"Ending Balance"}),Object(j.jsxs)("div",{children:["P ",e.endBalance.toLocaleString("en",{useGrouping:!0})]})]})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:e.moveToNewPeriod,children:"Move to new period"})}),Object(j.jsxs)("div",{children:["Icons made by ",Object(j.jsx)("a",{href:"https://www.freepik.com",title:"Freepik",children:" Freepik "})," from ",Object(j.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:" www.flaticon.com"})]})]})})),p=n(7),u=n.p+"static/media/plus.04b527f2.png",O=Object(m.b)(null,(function(e){return{getTypeBalance:function(t,n,a){return e({type:"GET_TYPE_BALANCE",payload:{name:t,amt:n,itemType:a}})}}}))((function(e){var t=Object(a.useState)(0),n=Object(p.a)(t,2),c=n[0],i=n[1];return Object(j.jsx)("div",{children:!0===e.displayAddAmtForm?Object(j.jsxs)("div",{className:"add-amt-form",children:[Object(j.jsx)("p",{children:e.name}),Object(j.jsx)("input",{type:"number",min:0,onChange:function(e){i(1*e.target.value)},value:c}),Object(j.jsx)("button",{onClick:function(){e.getTypeBalance(e.name,c,e.itemType),i(0),e.displayAddAmt()},children:Object(j.jsx)("img",{src:u,alt:"add"})})]}):null})})),x=n.p+"static/media/remove.f2ffd9d2.png",h=function(e){var t=Object(a.useState)(!1),n=Object(p.a)(t,2),c=n[0],i=n[1],s=function(){i(!c)},l=e.statementItem,r=l.name,d=l.itemType,o=l.img,m=l.balance;return Object(j.jsxs)("div",{className:"income-statement-item",children:[!0===c?Object(j.jsx)("button",{onClick:s,className:"rmv-btn",children:Object(j.jsx)("img",{src:x,alt:r})}):Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:s,className:"itm-btn "+d,children:Object(j.jsx)("img",{alt:r,src:o})}),Object(j.jsx)("div",{children:r}),Object(j.jsxs)("div",{children:["P ",m.toLocaleString("en",{useGrouping:!0})]})]}),Object(j.jsx)("div",{children:Object(j.jsx)(O,{name:r,itemType:d,displayAddAmtForm:c,displayAddAmt:s})})]})},v=Object(m.b)((function(e){return{totalRevenue:e.totalRevenue,totalExpenses:e.totalExpenses,statementItems:e.statementItems}}))((function(e){return Object(j.jsxs)("div",{className:"income-statement",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:e.itemType}),"revenue"===e.itemType?Object(j.jsxs)("div",{children:["P ",e.totalRevenue.toLocaleString("en",{useGrouping:!0})]}):Object(j.jsxs)("div",{children:["P ",e.totalExpenses.toLocaleString("en",{useGrouping:!0})]})]}),Object(j.jsx)("div",{className:"income-statement-itemsbox",children:e.statementItems.filter((function(t){return t.itemType===e.itemType})).map((function(e){return Object(j.jsx)(h,{statementItem:e},e.name)}))})]})})),g=function(){return Object(j.jsxs)("div",{className:"main-box",children:[Object(j.jsxs)("div",{className:"heading",children:[Object(j.jsx)("h1",{children:"Cashflow Tracker"}),Object(j.jsx)("p",{children:"Save some. Spend some."})]}),Object(j.jsx)(b,{}),Object(j.jsxs)("div",{className:"income-statement-mainbox",children:[Object(j.jsx)(v,{itemType:"revenue"}),Object(j.jsx)(v,{itemType:"expenses"})]})]})},f=function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)(g,{})})}}]),n}(a.Component),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))},T=n(13),E=n(2),B=n(15),I=n.p+"static/media/monthly-salary.e8468209.png",w=n.p+"static/media/freelancing-income.3da10b88.png",N=n.p+"static/media/interest-income.a159b04b.png",S=n.p+"static/media/food.64e675a3.png",R=n.p+"static/media/clothing.ede57058.png",C=n.p+"static/media/utilities.1ad8cb02.png",P=n.p+"static/media/rent.52e080b5.png",A={begBalance:0,totalRevenue:0,totalExpenses:0,endBalance:0,savings:0,statementItems:[{name:"Monthly Salary",img:I,itemType:"revenue",balance:0},{name:"Freelance Income",img:w,itemType:"revenue",balance:0},{name:"Interest Income",img:N,itemType:"revenue",balance:0},{name:"Food",img:S,itemType:"expenses",balance:0},{name:"Health",img:n.p+"static/media/health.501f26f5.png",itemType:"expenses",balance:0},{name:"Utilities",img:C,itemType:"expenses",balance:0},{name:"Rent",img:P,itemType:"expenses",balance:0},{name:"Clothing",img:R,itemType:"expenses",balance:0},{name:"Entertainment",img:n.p+"static/media/entertainment.3decf40f.png",itemType:"expenses",balance:0}]},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0,n=Object(B.a)(e.statementItems);switch(t.type){case"MOVE_TO_NEW_PERIOD":return n.forEach((function(e){return e.balance=0})),Object(E.a)(Object(E.a)({},e),{},{begBalance:e.endBalance,totalRevenue:0,totalExpenses:0,savings:0,statementItems:n});case"GET_TYPE_BALANCE":var a=n.findIndex((function(e){return e.name===t.payload.name}));return n[a].balance+=t.payload.amt,"revenue"===t.payload.itemType?Object(E.a)(Object(E.a)({},e),{},{totalRevenue:e.totalRevenue+t.payload.amt,savings:e.savings+t.payload.amt,endBalance:e.endBalance+t.payload.amt,statementItems:n}):Object(E.a)(Object(E.a)({},e),{},{totalExpenses:e.totalExpenses+t.payload.amt,savings:e.savings-t.payload.amt,endBalance:e.endBalance-t.payload.amt,statementItems:n});default:return e}},k=Object(T.a)(L);s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(m.a,{store:k,children:Object(j.jsx)(f,{})})}),document.getElementById("root")),y()}},[[30,1,2]]]);
//# sourceMappingURL=main.910f953f.chunk.js.map