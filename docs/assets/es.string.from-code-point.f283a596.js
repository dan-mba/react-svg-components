import{p as i,C as v,O as d}from"./iframe.7a9db8ed.js";var s=i,C=v,f=d,g=RangeError,e=String.fromCharCode,n=String.fromCodePoint,m=C([].join),u=!!n&&n.length!=1;s({target:"String",stat:!0,arity:1,forced:u},{fromCodePoint:function(h){for(var t=[],a=arguments.length,o=0,r;a>o;){if(r=+arguments[o++],f(r,1114111)!==r)throw g(r+" is not a valid code point");t[o]=r<65536?e(r):e(((r-=65536)>>10)+55296,r%1024+56320)}return m(t,"")}});
//# sourceMappingURL=es.string.from-code-point.f283a596.js.map