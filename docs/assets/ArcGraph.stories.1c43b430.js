var g=Object.defineProperty;var p=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var s=(r,e,o)=>e in r?g(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,i=(r,e)=>{for(var o in e||(e={}))h.call(e,o)&&s(r,o,e[o]);if(p)for(var o of p(e))b.call(e,o)&&s(r,o,e[o]);return r};import{P as t}from"./index.65f1d40b.js";import{i as k}from"./percentage.74b6045d.js";import{a as x,j as c}from"./jsx-runtime.3e25ebe3.js";import"./index.a696e993.js";const y="_progress_lodek_7",C="_animate_lodek_1",v="_move_lodek_14",_="_percentage_lodek_19";var a={progress:y,animate:C,move:v,percentage:_};const l=({size:r,percentage:e,color:o,backgroundColor:m,textColor:u})=>{if(typeof e!="number"||e<0||e>100)return null;const n=200*Math.PI,f=e/100*n;return x("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r*.5,viewBox:"0 0 240 120",children:[c("circle",{cx:"120",cy:"123",r:"100",fill:"none",strokeWidth:"25",strokeDasharray:`${n*.5} ${n}`,strokeLinecap:"butt",stroke:m,className:a.move}),c("circle",{cx:"120",cy:"123",r:"100",fill:"none",strokeWidth:"25",stroke:o,strokeDasharray:`${f*.5} ${n}`,strokeLinecap:"butt",className:`${a.progress} ${a.move}`}),c("text",{x:"125",y:"115",fill:u,className:a.percentage,children:`${e}%`})]})};l.defaultProps={size:500,color:"blue",backgroundColor:"#efefef",textColor:"black"};l.propTypes={size:t.number,percentage:k,color:t.string,backgroundColor:t.string,textColor:t.string};var d=l;l.__docgenInfo={description:"",methods:[],displayName:"CircleGraph",props:{size:{defaultValue:{value:"500",computed:!1},type:{name:"number"},required:!1,description:""},color:{defaultValue:{value:"'blue'",computed:!1},type:{name:"string"},required:!1,description:""},backgroundColor:{defaultValue:{value:"'#efefef'",computed:!1},type:{name:"string"},required:!1,description:""},textColor:{defaultValue:{value:"'black'",computed:!1},type:{name:"string"},required:!1,description:""},percentage:{type:{name:"custom",raw:"function isPercentage(props, propName, componentName) {\n  if(typeof props[propName] === 'number') {\n    if(props[propName] < 0 || props[propName] > 100) {\n      return new Error(`Invalid prop ${propName} passed to ${componentName}. Expected a number between 0 - 100`);\n    }\n  } else {\n    return new Error(`Invalid prop ${propName} passed to ${componentName}. Expected a number`);\n  }\n}"},required:!1,description:""}}};var P={parameters:{storySource:{source:`import AG from './ArcGraph';

export default {
  title: 'Components/ArcGraph',
  component: AG,
  argTypes: {
    percentage: {
      description: 'percentage to be displayed',
      control: 'range',
      min: 0,
      max: 100
    },
    size: {
      description: 'width & height of graph',
      default: 500
    },
    color: {
      description: 'fill color for graph',
      control: 'color'
    },
    backgroundColor: {
      description: 'background color for unfilled area of graph',
      control: 'color'
    },
    textColor: {
      description: 'color of text percentage',
      control: 'color'
    }
  },
};

const Template = (args) => <AG {...args} />;

export const ArcGraph = Template.bind({});
ArcGraph.args = {
  percentage: 66,
  size: 500,
  color: 'blue',
  backgroundColor: '#efefef',
  textColor: 'black'
};
`,locationsMap:{"arc-graph":{startLoc:{col:17,line:32},endLoc:{col:43,line:32},startBody:{col:17,line:32},endBody:{col:43,line:32}}}}},title:"Components/ArcGraph",component:d,argTypes:{percentage:{description:"percentage to be displayed",control:"range",min:0,max:100},size:{description:"width & height of graph",default:500},color:{description:"fill color for graph",control:"color"},backgroundColor:{description:"background color for unfilled area of graph",control:"color"},textColor:{description:"color of text percentage",control:"color"}}};const G=r=>c(d,i({},r)),N=G.bind({});N.args={percentage:66,size:500,color:"blue",backgroundColor:"#efefef",textColor:"black"};const q=["ArcGraph"];export{N as ArcGraph,q as __namedExportsOrder,P as default};
//# sourceMappingURL=ArcGraph.stories.1c43b430.js.map
