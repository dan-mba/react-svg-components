var f=Object.defineProperty;var c=(o,e)=>f(o,"name",{value:e,configurable:!0});import{p as n}from"./index.d9fbabd1.js";import{i as u}from"./percentage.74b6045d.js";import{a as g,j as a}from"./jsx-runtime.a9d91538.js";import"./iframe.2da15ea4.js";const h="_progress_lodek_7",b="_animate_lodek_1",x="_move_lodek_14",k="_percentage_lodek_19",t={progress:h,animate:b,move:x,percentage:k},p=c(({size:o=500,percentage:e,color:l="blue",backgroundColor:i="#efefef",textColor:d="black"})=>{if(typeof e!="number"||e<0||e>100)return null;const r=200*Math.PI,m=e/100*r;return g("svg",{xmlns:"http://www.w3.org/2000/svg",width:o,height:o*.5,viewBox:"0 0 240 120",children:[a("circle",{cx:"120",cy:"123",r:"100",fill:"none",strokeWidth:"25",strokeDasharray:`${r*.5} ${r}`,strokeLinecap:"butt",stroke:i,className:t.move}),a("circle",{cx:"120",cy:"123",r:"100",fill:"none",strokeWidth:"25",stroke:l,strokeDasharray:`${m*.5} ${r}`,strokeLinecap:"butt",className:`${t.progress} ${t.move}`}),a("text",{x:"125",y:"115",fill:d,className:t.percentage,children:`${e}%`})]})},"CircleGraph");p.propTypes={size:n.exports.number,percentage:u,color:n.exports.string,backgroundColor:n.exports.string,textColor:n.exports.string};const s=p;p.__docgenInfo={description:"",methods:[],displayName:"CircleGraph",props:{size:{defaultValue:{value:"500",computed:!1},type:{name:"number"},required:!1,description:""},color:{defaultValue:{value:"'blue'",computed:!1},type:{name:"string"},required:!1,description:""},backgroundColor:{defaultValue:{value:"'#efefef'",computed:!1},type:{name:"string"},required:!1,description:""},textColor:{defaultValue:{value:"'black'",computed:!1},type:{name:"string"},required:!1,description:""},percentage:{type:{name:"custom",raw:"function isPercentage(props, propName, componentName) {\n  if(typeof props[propName] === 'number') {\n    if(props[propName] < 0 || props[propName] > 100) {\n      return new Error(`Invalid prop ${propName} passed to ${componentName}. Expected a number between 0 - 100`);\n    }\n  } else {\n    return new Error(`Invalid prop ${propName} passed to ${componentName}. Expected a number`);\n  }\n}"},required:!1,description:""}}};const A={parameters:{storySource:{source:`import AG from './ArcGraph';

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
`,locationsMap:{"arc-graph":{startLoc:{col:17,line:32},endLoc:{col:43,line:32},startBody:{col:17,line:32},endBody:{col:43,line:32}}}}},title:"Components/ArcGraph",component:s,argTypes:{percentage:{description:"percentage to be displayed",control:"range",min:0,max:100},size:{description:"width & height of graph",default:500},color:{description:"fill color for graph",control:"color"},backgroundColor:{description:"background color for unfilled area of graph",control:"color"},textColor:{description:"color of text percentage",control:"color"}}},y=c(o=>a(s,{...o}),"Template"),C=y.bind({});C.args={percentage:66,size:500,color:"blue",backgroundColor:"#efefef",textColor:"black"};const $=["ArcGraph"];export{C as ArcGraph,$ as __namedExportsOrder,A as default};
//# sourceMappingURL=ArcGraph.stories.b3f62801.js.map
