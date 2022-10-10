var f=Object.defineProperty;var c=(o,e)=>f(o,"name",{value:e,configurable:!0});import{p as r}from"./index.d9fbabd1.js";import{i as u}from"./percentage.74b6045d.js";import{a as g,j as t}from"./jsx-runtime.96b8dfe1.js";import"./iframe.fdda414e.js";const h="_progress_m90ct_7",C="_animate_m90ct_1",b="_move_m90ct_14",x="_percentage_m90ct_19",n={progress:h,animate:C,move:b,percentage:x},a=c(({size:o,percentage:e,color:s,backgroundColor:i,textColor:d})=>{if(typeof e!="number"||e<0||e>100)return null;const l=200*Math.PI,m=e/100*l;return g("svg",{xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 230 230",children:[t("circle",{cx:"115",cy:"115",r:"100",fill:"none",strokeWidth:"25",stroke:i,className:n.move}),t("circle",{cx:"115",cy:"115",r:"100",fill:"none",strokeWidth:"25",stroke:s,strokeDasharray:`${m} ${l}`,strokeLinecap:"butt",className:`${n.progress} ${n.move}`}),t("text",{x:"120",y:"130",fill:d,className:n.percentage,children:`${e}%`})]})},"CircleGraph$1");a.defaultProps={size:500,color:"blue",backgroundColor:"#efefef",textColor:"black"};a.propTypes={size:r.exports.number,percentage:u,color:r.exports.string,backgroundColor:r.exports.string,textColor:r.exports.string};const p=a;a.__docgenInfo={description:"",methods:[],displayName:"CircleGraph",props:{size:{defaultValue:{value:"500",computed:!1},type:{name:"number"},required:!1,description:""},color:{defaultValue:{value:"'blue'",computed:!1},type:{name:"string"},required:!1,description:""},backgroundColor:{defaultValue:{value:"'#efefef'",computed:!1},type:{name:"string"},required:!1,description:""},textColor:{defaultValue:{value:"'black'",computed:!1},type:{name:"string"},required:!1,description:""},percentage:{type:{name:"custom",raw:"function isPercentage(props, propName, componentName) {\n  if(typeof props[propName] === 'number') {\n    if(props[propName] < 0 || props[propName] > 100) {\n      return new Error(`Invalid prop ${propName} passed to ${componentName}. Expected a number between 0 - 100`);\n    }\n  } else {\n    return new Error(`Invalid prop ${propName} passed to ${componentName}. Expected a number`);\n  }\n}"},required:!1,description:""}}};const $={parameters:{storySource:{source:`import CG from './CircleGraph';

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
`,locationsMap:{"circle-graph":{startLoc:{col:17,line:32},endLoc:{col:43,line:32},startBody:{col:17,line:32},endBody:{col:43,line:32}}}}},title:"Components/CircleGraph",component:p,argTypes:{percentage:{description:"percentage to be displayed",control:"range",min:0,max:100},size:{description:"width & height of graph",default:500},color:{description:"fill color for graph",control:"color"},backgroundColor:{description:"background color for unfilled area of graph",control:"color"},textColor:{description:"color of text percentage",control:"color"}}},y=c(o=>t(p,{...o}),"Template"),k=y.bind({});k.args={percentage:66,size:500,color:"blue",backgroundColor:"#efefef",textColor:"black"};const T=["CircleGraph"];export{k as CircleGraph,T as __namedExportsOrder,$ as default};
//# sourceMappingURL=CircleGraph.stories.6387a5e4.js.map
