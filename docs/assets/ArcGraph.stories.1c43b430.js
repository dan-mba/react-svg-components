import{P as n}from"./index.65f1d40b.js";import{i as m}from"./percentage.74b6045d.js";import{a as u,j as a}from"./jsx-runtime.3e25ebe3.js";import"./index.a696e993.js";const f="_progress_lodek_7",g="_animate_lodek_1",h="_move_lodek_14",b="_percentage_lodek_19";var t={progress:f,animate:g,move:h,percentage:b};const c=({size:r,percentage:e,color:p,backgroundColor:s,textColor:i})=>{if(typeof e!="number"||e<0||e>100)return null;const o=200*Math.PI,d=e/100*o;return u("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:r*.5,viewBox:"0 0 240 120",children:[a("circle",{cx:"120",cy:"123",r:"100",fill:"none",strokeWidth:"25",strokeDasharray:`${o*.5} ${o}`,strokeLinecap:"butt",stroke:s,className:t.move}),a("circle",{cx:"120",cy:"123",r:"100",fill:"none",strokeWidth:"25",stroke:p,strokeDasharray:`${d*.5} ${o}`,strokeLinecap:"butt",className:`${t.progress} ${t.move}`}),a("text",{x:"125",y:"115",fill:i,className:t.percentage,children:`${e}%`})]})};c.defaultProps={size:500,color:"blue",backgroundColor:"#efefef",textColor:"black"};c.propTypes={size:n.number,percentage:m,color:n.string,backgroundColor:n.string,textColor:n.string};var l=c;c.__docgenInfo={description:"",methods:[],displayName:"CircleGraph",props:{size:{defaultValue:{value:"500",computed:!1},type:{name:"number"},required:!1,description:""},color:{defaultValue:{value:"'blue'",computed:!1},type:{name:"string"},required:!1,description:""},backgroundColor:{defaultValue:{value:"'#efefef'",computed:!1},type:{name:"string"},required:!1,description:""},textColor:{defaultValue:{value:"'black'",computed:!1},type:{name:"string"},required:!1,description:""},percentage:{type:{name:"custom",raw:"function isPercentage(props, propName, componentName) {\n  if(typeof props[propName] === 'number') {\n    if(props[propName] < 0 || props[propName] > 100) {\n      return new Error(`Invalid prop ${propName} passed to ${componentName}. Expected a number between 0 - 100`);\n    }\n  } else {\n    return new Error(`Invalid prop ${propName} passed to ${componentName}. Expected a number`);\n  }\n}"},required:!1,description:""}}};var G={parameters:{storySource:{source:`import AG from './ArcGraph';

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
`,locationsMap:{"arc-graph":{startLoc:{col:17,line:32},endLoc:{col:43,line:32},startBody:{col:17,line:32},endBody:{col:43,line:32}}}}},title:"Components/ArcGraph",component:l,argTypes:{percentage:{description:"percentage to be displayed",control:"range",min:0,max:100},size:{description:"width & height of graph",default:500},color:{description:"fill color for graph",control:"color"},backgroundColor:{description:"background color for unfilled area of graph",control:"color"},textColor:{description:"color of text percentage",control:"color"}}};const k=r=>a(l,{...r}),x=k.bind({});x.args={percentage:66,size:500,color:"blue",backgroundColor:"#efefef",textColor:"black"};const N=["ArcGraph"];export{x as ArcGraph,N as __namedExportsOrder,G as default};
//# sourceMappingURL=ArcGraph.stories.1c43b430.js.map
