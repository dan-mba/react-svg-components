import{p as r}from"./index.d9fbabd1.js";import{i as m}from"./percentage.74b6045d.js";import{a as f,j as t}from"./jsx-runtime.96b8dfe1.js";import"./iframe.fdda414e.js";const u="_progress_m90ct_7",g="_animate_m90ct_1",h="_move_m90ct_14",C="_percentage_m90ct_19",n={progress:u,animate:g,move:h,percentage:C},a=({size:o,percentage:e,color:p,backgroundColor:s,textColor:i})=>{if(typeof e!="number"||e<0||e>100)return null;const c=200*Math.PI,d=e/100*c;return f("svg",{xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 230 230",children:[t("circle",{cx:"115",cy:"115",r:"100",fill:"none",strokeWidth:"25",stroke:s,className:n.move}),t("circle",{cx:"115",cy:"115",r:"100",fill:"none",strokeWidth:"25",stroke:p,strokeDasharray:`${d} ${c}`,strokeLinecap:"butt",className:`${n.progress} ${n.move}`}),t("text",{x:"120",y:"130",fill:i,className:n.percentage,children:`${e}%`})]})};a.defaultProps={size:500,color:"blue",backgroundColor:"#efefef",textColor:"black"};a.propTypes={size:r.exports.number,percentage:m,color:r.exports.string,backgroundColor:r.exports.string,textColor:r.exports.string};const l=a;a.__docgenInfo={description:"",methods:[],displayName:"CircleGraph",props:{size:{defaultValue:{value:"500",computed:!1},type:{name:"number"},required:!1,description:""},color:{defaultValue:{value:"'blue'",computed:!1},type:{name:"string"},required:!1,description:""},backgroundColor:{defaultValue:{value:"'#efefef'",computed:!1},type:{name:"string"},required:!1,description:""},textColor:{defaultValue:{value:"'black'",computed:!1},type:{name:"string"},required:!1,description:""},percentage:{type:{name:"custom",raw:"function isPercentage(props, propName, componentName) {\n  if(typeof props[propName] === 'number') {\n    if(props[propName] < 0 || props[propName] > 100) {\n      return new Error(`Invalid prop ${propName} passed to ${componentName}. Expected a number between 0 - 100`);\n    }\n  } else {\n    return new Error(`Invalid prop ${propName} passed to ${componentName}. Expected a number`);\n  }\n}"},required:!1,description:""}}};const G={parameters:{storySource:{source:`import CG from './CircleGraph';

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
`,locationsMap:{"circle-graph":{startLoc:{col:17,line:32},endLoc:{col:43,line:32},startBody:{col:17,line:32},endBody:{col:43,line:32}}}}},title:"Components/CircleGraph",component:l,argTypes:{percentage:{description:"percentage to be displayed",control:"range",min:0,max:100},size:{description:"width & height of graph",default:500},color:{description:"fill color for graph",control:"color"},backgroundColor:{description:"background color for unfilled area of graph",control:"color"},textColor:{description:"color of text percentage",control:"color"}}},b=o=>t(l,{...o}),x=b.bind({});x.args={percentage:66,size:500,color:"blue",backgroundColor:"#efefef",textColor:"black"};const N=["CircleGraph"];export{x as CircleGraph,N as __namedExportsOrder,G as default};
//# sourceMappingURL=CircleGraph.stories.6387a5e4.js.map
