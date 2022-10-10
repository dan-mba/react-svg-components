var i=Object.defineProperty;var t=(n,e)=>i(n,"name",{value:e,configurable:!0});function u(n,e,r){if(typeof n[e]=="number"){if(n[e]<0||n[e]>100)return new Error(`Invalid prop ${e} passed to ${r}. Expected a number between 0 - 100`)}else return new Error(`Invalid prop ${e} passed to ${r}. Expected a number`)}t(u,"isPercentage");export{u as i};
//# sourceMappingURL=percentage.74b6045d.js.map
