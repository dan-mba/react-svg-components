import{p as n}from"./index.d9fbabd1.js";import{i as m}from"./percentage.74b6045d.js";import{a as u,j as a}from"./jsx-runtime.869ed6e8.js";import"./iframe.7a9db8ed.js";const f="_progress_lodek_7",g="_animate_lodek_1",h="_move_lodek_14",b="_percentage_lodek_19",t={progress:f,animate:g,move:h,percentage:b},c=({size:o,percentage:e,color:s,backgroundColor:l,textColor:i})=>{if(typeof e!="number"||e<0||e>100)return null;const r=200*Math.PI,d=e/100*r;return u("svg",{xmlns:"http://www.w3.org/2000/svg",width:o,height:o*.5,viewBox:"0 0 240 120",children:[a("circle",{cx:"120",cy:"123",r:"100",fill:"none",strokeWidth:"25",strokeDasharray:`${r*.5} ${r}`,strokeLinecap:"butt",stroke:l,className:t.move}),a("circle",{cx:"120",cy:"123",r:"100",fill:"none",strokeWidth:"25",stroke:s,strokeDasharray:`${d*.5} ${r}`,strokeLinecap:"butt",className:`${t.progress} ${t.move}`}),a("text",{x:"125",y:"115",fill:i,className:t.percentage,children:`${e}%`})]})};c.defaultProps={size:500,color:"blue",backgroundColor:"#efefef",textColor:"black"};c.propTypes={size:n.exports.number,percentage:m,color:n.exports.string,backgroundColor:n.exports.string,textColor:n.exports.string};const p=c;c.__docgenInfo={description:"",methods:[],displayName:"CircleGraph",props:{size:{defaultValue:{value:"500",computed:!1},type:{name:"number"},required:!1,description:""},color:{defaultValue:{value:"'blue'",computed:!1},type:{name:"string"},required:!1,description:""},backgroundColor:{defaultValue:{value:"'#efefef'",computed:!1},type:{name:"string"},required:!1,description:""},textColor:{defaultValue:{value:"'black'",computed:!1},type:{name:"string"},required:!1,description:""},percentage:{type:{name:"custom",raw:"function isPercentage(props, propName, componentName) {\n  if(typeof props[propName] === 'number') {\n    if(props[propName] < 0 || props[propName] > 100) {\n      return new Error(`Invalid prop ${propName} passed to ${componentName}. Expected a number between 0 - 100`);\n    }\n  } else {\n    return new Error(`Invalid prop ${propName} passed to ${componentName}. Expected a number`);\n  }\n}"},required:!1,description:""}}};const G={parameters:{storySource:{source:`import AG from './ArcGraph';

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
`,locationsMap:{"arc-graph":{startLoc:{col:17,line:32},endLoc:{col:43,line:32},startBody:{col:17,line:32},endBody:{col:43,line:32}}}}},title:"Components/ArcGraph",component:p,argTypes:{percentage:{description:"percentage to be displayed",control:"range",min:0,max:100},size:{description:"width & height of graph",default:500},color:{description:"fill color for graph",control:"color"},backgroundColor:{description:"background color for unfilled area of graph",control:"color"},textColor:{description:"color of text percentage",control:"color"}}},x=o=>a(p,{...o}),k=x.bind({});k.args={percentage:66,size:500,color:"blue",backgroundColor:"#efefef",textColor:"black"};const N=["ArcGraph"];export{k as ArcGraph,N as __namedExportsOrder,G as default};
//# sourceMappingURL=ArcGraph.stories.c1f1875f.js.map
