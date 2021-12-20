(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{10:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);n(9);var a=n(1),c=n.n(a),s=n(11),r=n.n(s),i=n(12),o=n(6),u=n(2),b=n(3),l=n(5),d=n(4),h=(n(10),n(0)),j=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var t=this,e=this.props.habit,n=e.name,a=e.count;return Object(h.jsxs)("li",{className:"habit",children:[Object(h.jsx)("span",{className:"habit-name",children:n}),Object(h.jsx)("span",{className:"habit-count",children:a}),Object(h.jsx)("button",{className:"habit-button habit-increase",onClick:function(){return t.props.onIncrement(t.props.habit)},children:Object(h.jsx)("i",{className:"fas fa-plus-square"})}),Object(h.jsx)("button",{className:"habit-button habit-decrease",onClick:function(){return t.props.onDecrement(t.props.habit)},children:Object(h.jsx)("i",{className:"fas fa-minus-square"})}),Object(h.jsx)("button",{className:"habit-button habit-delete",onClick:function(){return t.props.onDelete(t.props.habit)},children:Object(h.jsx)("i",{className:"fas fa-trash"})})]})}}]),n}(a.PureComponent),p=Object(a.memo)((function(t){var e=c.a.createRef(),n=c.a.createRef();return Object(h.jsxs)("form",{ref:e,className:"add-form",onSubmit:function(a){a.preventDefault();var c=n.current.value;c&&t.onAdd(c),e.current.reset()},children:[Object(h.jsx)("input",{ref:n,className:"add-input",type:"text",placeholder:"Habit"}),Object(h.jsx)("button",{className:"add-button",children:"Add"})]})})),m=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var t=this;return Object(h.jsxs)("div",{className:"habits",children:[Object(h.jsx)(p,{onAdd:this.props.onAdd}),Object(h.jsx)("ul",{children:this.props.habits.map((function(e){return Object(h.jsx)(j,{habit:e,onIncrement:t.props.onHandleIncrement,onDecrement:t.props.onHandleDecrement,onDelete:t.props.onHandleDelete,onAddItem:t.handleAddItem},e.id)}))}),Object(h.jsx)("div",{className:"habits-reset",onClick:this.props.onReset,children:"Reset All"})]})}}]),n}(a.Component),f=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"navbar",children:[Object(h.jsx)("i",{className:"fas fa-leaf navbar-logo"}),Object(h.jsx)("span",{className:"nav-title",children:"Habit Tracker"}),Object(h.jsx)("span",{className:"navbar-count",children:this.props.totalCount})]})}}]),n}(a.PureComponent),O=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={habits:[{id:1,name:"Reading",count:0},{id:2,name:"Running",count:0},{id:3,name:"Coding",count:0}]},t.handleIncrement=function(e){var n=t.state.habits.map((function(t){return t.id===e.id?Object(o.a)(Object(o.a)({},e),{},{count:e.count+1}):t}));t.setState({habits:n})},t.handleDecrement=function(e){var n=t.state.habits.map((function(t){if(t.id===e.id){var n=e.count-1;return Object(o.a)(Object(o.a)({},e),{},{count:n<0?0:n})}return t}));t.setState({habits:n})},t.handleDelete=function(e){var n=t.state.habits.filter((function(t){return t.id!==e.id}));t.setState({habits:n})},t.handleReset=function(){var e=t.state.habits.map((function(t){return 0!==t.count?Object(o.a)(Object(o.a)({},t),{},{count:0}):t}));t.setState({habits:e})},t.handleAdd=function(e){var n=[].concat(Object(i.a)(t.state.habits.filter((function(t){return t.name!==e}))),[{id:Date.now(),name:e,count:0}]);t.setState({habits:n})},t}return Object(b.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{totalCount:this.state.habits.filter((function(t){return t.count>0})).length}),Object(h.jsx)(m,{habits:this.state.habits,onHandleIncrement:this.handleIncrement,onHandleDecrement:this.handleDecrement,onHandleDelete:this.handleDelete,onAddItem:this.handleAddItem,onReset:this.handleReset,onAdd:this.handleAdd})]})}}]),n}(a.Component);n(21);r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.2153011f.chunk.js.map