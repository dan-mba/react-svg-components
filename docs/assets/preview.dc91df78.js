import{w as s,j as m,S as v,k as c}from"./iframe.755c6e0d.js";import{m as u}from"./make-decorator.3769f4d4.js";var k="links",f=s.document,L=s.HTMLElement,p=function(e){return m.getChannel().emit(c,e)},l=function(e){var n=e.target;if(n instanceof L){var d=n,a=d.dataset,i=a.sbKind,o=a.sbStory;(i||o)&&(e.preventDefault(),p({kind:i,story:o}))}},r=!1,h=function(){r||(r=!0,f.addEventListener("click",l))},E=function(){r&&(r=!1,f.removeEventListener("click",l))},w=u({name:"withLinks",parameterName:k,wrapper:function(e,n){return h(),m.getChannel().once(v,E),e(n)}});module&&module.hot&&module.hot.decline&&module.hot.decline();var T=[w];export{T as decorators};
//# sourceMappingURL=preview.dc91df78.js.map
