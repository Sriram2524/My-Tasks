(this["webpackJsonpmy-tasks"]=this["webpackJsonpmy-tasks"]||[]).push([[0],{14:function(t,e,a){},16:function(t,e,a){},17:function(t,e,a){},18:function(t,e,a){"use strict";a.r(e);var s=a(2),n=a.n(s),c=a(4),i=a.n(c),o=a(6),l=a(5),r=a(8),d=a(7),u=a(9),h=a(20),j=(a(14),a(0)),p=function(t){var e=t.eachTag,a=t.clickTag,s=e.displayText,n=e.optionId;return Object(j.jsx)("li",{className:"tag-list",children:Object(j.jsx)("button",{onClick:function(){a(n)},type:"button",className:"tag-button",children:s})})},b=(a(16),function(t){var e=t.eachTaskItem,a=e.task,s=e.tagItem;return Object(j.jsxs)("li",{className:"tasks-list",children:[Object(j.jsx)("p",{className:"text",children:a}),Object(j.jsx)("p",{className:"tagItem",children:s})]})}),m=(a(17),[{optionId:"HEALTH",displayText:"Health"},{optionId:"EDUCATION",displayText:"Education"},{optionId:"ENTERTAINMENT",displayText:"Entertainment"},{optionId:"SPORTS",displayText:"Sports"},{optionId:"TRAVEL",displayText:"Travel"},{optionId:"OTHERS",displayText:"Others"}]),x=[],O=function(t){function e(){var t;Object(l.a)(this,e);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(t=Object(d.a)(this,e,[].concat(s))).state={searchInput:"",activeId:m[0].optionId,tasksList:x},t.onChangeDropdown=function(e){t.setState({activeId:e.target.value})},t.onChangeinput=function(e){t.setState({searchInput:e.target.value})},t.submitForm=function(e){e.preventDefault();var a=t.state,s=a.searchInput,n=a.activeId,c=m.filter((function(t){return t.optionId===n}));console.log(c);var i={id:Object(h.a)(),optId:c[0].optionId,task:s,tagItem:c[0].displayText};t.setState((function(t){return{tasksList:[].concat(Object(o.a)(t.tasksList),[i]),searchInput:"",activeId:m[0].optionId}}))},t.clickTag=function(e){var a=t.state.tasksList.filter((function(t){return t.optId===e}));console.log(a),t.setState({tasksList:a})},t}return Object(u.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this,e=this.state,a=e.tasksList,s=e.searchInput,n=e.activeId;return Object(j.jsxs)("div",{className:"bg-container",children:[Object(j.jsxs)("div",{className:"left-container",children:[Object(j.jsx)("h1",{className:"main-heading",children:"Create a task"}),Object(j.jsxs)("form",{onSubmit:this.submitForm,className:"form",children:[Object(j.jsx)("label",{className:"label",htmlFor:"taskLabel",children:"Task"}),Object(j.jsx)("input",{onChange:this.onChangeinput,id:"taskLabel",value:s,className:"input",placeholder:"Enter the task here",type:"text"}),Object(j.jsx)("label",{className:"label",htmlFor:"tagsLabel",children:"Tags"}),Object(j.jsx)("select",{className:"input",onChange:this.onChangeDropdown,value:n,id:"tagsLabel",children:m.map((function(t){return Object(j.jsx)("option",{value:t.optionId,children:t.displayText},t.optionId)}))}),Object(j.jsx)("div",{className:"button-con",children:Object(j.jsx)("button",{className:"button",type:"submit",children:"Add Task"})})]})]}),Object(j.jsxs)("div",{className:"right-con",children:[Object(j.jsx)("h1",{className:"tags",children:"Tags"}),Object(j.jsx)("ul",{className:"unordered-tags-list",children:m.map((function(e){return Object(j.jsx)(p,{clickTag:t.clickTag,eachTag:e},e.optionId)}))}),Object(j.jsx)("h1",{className:"tags",children:"Tasks"}),0===a.length?Object(j.jsx)("p",{className:"no-taska",children:"No Tasks Added Yet"}):Object(j.jsx)("ul",{className:"unordered-tasks-list",children:a.map((function(t){return Object(j.jsx)(b,{eachTaskItem:t},t.id)}))})]})]})}}])}(s.Component),g=O;i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.ff6e89cd.chunk.js.map