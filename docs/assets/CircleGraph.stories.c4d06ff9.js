var g=Object.defineProperty;var p=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var s=(r,e,o)=>e in r?g(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,i=(r,e)=>{for(var o in e||(e={}))h.call(e,o)&&s(r,o,e[o]);if(p)for(var o of p(e))C.call(e,o)&&s(r,o,e[o]);return r};import{P as n}from"./index.65f1d40b.js";import{i as b}from"./percentage.74b6045d.js";import{a as x,j as a}from"./jsx-runtime.3e25ebe3.js";import"./index.a696e993.js";const y="_progress_m90ct_7",k="_animate_m90ct_1",v="_move_m90ct_14",_="_percentage_m90ct_19";var t={progress:y,animate:k,move:v,percentage:_};const c=({size:r,percentage:e,color:o,backgroundColor:m,textColor:f})=>{if(typeof e!="number"||e<0||e>100)return null;const l=200*Math.PI,u=e/100*l;return x("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 230 230",children:[a("circle",{cx:"115",cy:"115",r:"100",fill:"none",strokeWidth:"25",stroke:m,className:t.move}),a("circle",{cx:"115",cy:"115",r:"100",fill:"none",strokeWidth:"25",stroke:o,strokeDasharray:`${u} ${l}`,strokeLinecap:"butt",className:`${t.progress} ${t.move}`}),a("text",{x:"120",y:"130",fill:f,className:t.percentage,children:`${e}%`})]})};c.defaultProps={size:500,color:"blue",backgroundColor:"#efefef",textColor:"black"};c.propTypes={size:n.number,percentage:b,color:n.string,backgroundColor:n.string,textColor:n.string};var d=c;c.__docgenInfo={description:"",methods:[],displayName:"CircleGraph",props:{size:{defaultValue:{value:"500",computed:!1},type:{name:"number"},required:!1,description:""},color:{defaultValue:{value:"'blue'",computed:!1},type:{name:"string"},required:!1,description:""},backgroundColor:{defaultValue:{value:"'#efefef'",computed:!1},type:{name:"string"},required:!1,description:""},textColor:{defaultValue:{value:"'black'",computed:!1},type:{name:"string"},required:!1,description:""},percentage:{type:{name:"custom",raw:"function isPercentage(props, propName, componentName) {\n  if(typeof props[propName] === 'number') {\n    if(props[propName] < 0 || props[propName] > 100) {\n      return new Error(`Invalid prop ${propName} passed to ${componentName}. Expected a number between 0 - 100`);\n    }\n  } else {\n    return new Error(`Invalid prop ${propName} passed to ${componentName}. Expected a number`);\n  }\n}"},required:!1,description:""}}};var q={parameters:{storySource:{source:`import CG from './CircleGraph';

export default {
  title: 'Components/CircleGraph',
  component: CG,
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

const Template = (args) => <CG {...args} />;

export const CircleGraph = Template.bind({});
CircleGraph.args = {
  percentage: 66,
  size: 500,
  color: 'blue',
  backgroundColor: '#efefef',
  textColor: 'black'
};
`,locationsMap:{"circle-graph":{startLoc:{col:17,line:32},endLoc:{col:43,line:32},startBody:{col:17,line:32},endBody:{col:43,line:32}}}}},title:"Components/CircleGraph",component:d,argTypes:{percentage:{description:"percentage to be displayed",control:"range",min:0,max:100},size:{description:"width & height of graph",default:500},color:{description:"fill color for graph",control:"color"},backgroundColor:{description:"background color for unfilled area of graph",control:"color"},textColor:{description:"color of text percentage",control:"color"}}};const G=r=>a(d,i({},r)),N=G.bind({});N.args={percentage:66,size:500,color:"blue",backgroundColor:"#efefef",textColor:"black"};const E=["CircleGraph"];export{N as CircleGraph,E as __namedExportsOrder,q as default};
//# sourceMappingURL=CircleGraph.stories.c4d06ff9.js.map
