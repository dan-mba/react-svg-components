var d=Object.defineProperty;var r=(e,s)=>d(e,"name",{value:s,configurable:!0});import{p as n}from"./index.d9fbabd1.js";import{a as x,j as t}from"./jsx-runtime.cc5524c8.js";import"./iframe.0bcbe671.js";const m="_spin_1nf94_15",f="_animate_1nf94_1",g="_text_1nf94_26",l={spin:m,animate:f,text:g},o=r(({size:e,spin:s,text:i,textColor:c})=>{const p={fontSize:`${Math.min(50,13.3/i.length*50)}px`,letterSpacing:`${Math.min(.3,Math.pow(13/i.length,.25)*.3)}em`,stroke:c};return x("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 210 210",children:[t("defs",{children:t("path",{id:"TestCircle",fill:"none",d:" M 105 105 m -100, 0 a 100,100 0 1,0 200,0 a 100,100 0 1,0 -200,0 "})}),t("text",{className:`${l.text} ${s?l.spin:""}`,style:p,children:t("textPath",{href:"#TestCircle",children:i})})]})},"CircleText$1");o.defaultProps={size:500,spin:!1,text:"Testing Testing",textColor:"black"};o.propTypes={size:n.exports.number,spin:n.exports.bool,text:n.exports.string,textColor:n.exports.string};const a=o;o.__docgenInfo={description:"",methods:[],displayName:"CircleText",props:{size:{defaultValue:{value:"500",computed:!1},type:{name:"number"},required:!1,description:""},spin:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},text:{defaultValue:{value:"'Testing Testing'",computed:!1},type:{name:"string"},required:!1,description:""},textColor:{defaultValue:{value:"'black'",computed:!1},type:{name:"string"},required:!1,description:""}}};const b={parameters:{storySource:{source:`import CG from './CircleText';

export default {
  title: 'Components/CircleText',
  component: CG,
  argTypes: {
    size: {
      description: 'width & height of text circle',
      default: 500
    },
    spin: {
      description: 'Rotate the text',
      control: 'boolean',
    },
    text: {
      description: 'text to display',
      control: 'text',
    },
    textColor: {
      description: 'color of text percentage',
      control: 'color'
    }
  },
};

const Template = (args) => <CG {...args} />;

export const CircleText = Template.bind({});
CircleText.args = {
  size: 500,
  spin: false,
  text: 'Testing Testing',
  textColor: 'black'
};
`,locationsMap:{"circle-text":{startLoc:{col:17,line:26},endLoc:{col:43,line:26},startBody:{col:17,line:26},endBody:{col:43,line:26}}}}},title:"Components/CircleText",component:a,argTypes:{size:{description:"width & height of text circle",default:500},spin:{description:"Rotate the text",control:"boolean"},text:{description:"text to display",control:"text"},textColor:{description:"color of text percentage",control:"color"}}},u=r(e=>t(a,{...e}),"Template"),T=u.bind({});T.args={size:500,spin:!1,text:"Testing Testing",textColor:"black"};const w=["CircleText"];export{T as CircleText,w as __namedExportsOrder,b as default};
//# sourceMappingURL=CircleText.stories.fd265a27.js.map
