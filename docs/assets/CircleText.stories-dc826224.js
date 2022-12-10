var d=Object.defineProperty;var i=(e,o)=>d(e,"name",{value:o,configurable:!0});import{p as n}from"./index-a2f37619.js";import{a as x,j as t}from"./jsx-runtime-145e6dbe.js";import"./index-a6053a7a.js";import"./es.object.get-own-property-descriptor-bc2d8f9c.js";const m="_spin_1nf94_15",f="_animate_1nf94_1",u="_text_1nf94_26",l={spin:m,animate:f,text:u},r=i(({size:e=500,spin:o=!1,text:s="",textColor:c="black"})=>{const p={fontSize:`${Math.min(50,13.3/s.length*50)}px`,letterSpacing:`${Math.min(.3,Math.pow(13/s.length,.25)*.3)}em`,stroke:c};return x("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 210 210",children:[t("defs",{children:t("path",{id:"TestCircle",fill:"none",d:" M 105 105 m -100, 0 a 100,100 0 1,0 200,0 a 100,100 0 1,0 -200,0 "})}),t("text",{className:`${l.text} ${o?l.spin:""}`,style:p,children:t("textPath",{href:"#TestCircle",children:s})})]})},"CircleText$1");r.propTypes={size:n.exports.number,spin:n.exports.bool,text:n.exports.string,textColor:n.exports.string};const a=r;r.__docgenInfo={description:"",methods:[],displayName:"CircleText",props:{size:{defaultValue:{value:"500",computed:!1},type:{name:"number"},required:!1,description:""},spin:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},text:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},textColor:{defaultValue:{value:"'black'",computed:!1},type:{name:"string"},required:!1,description:""}}};const w={parameters:{storySource:{source:`import CG from './CircleText';

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
`,locationsMap:{"circle-text":{startLoc:{col:17,line:26},endLoc:{col:43,line:26},startBody:{col:17,line:26},endBody:{col:43,line:26}}}}},title:"Components/CircleText",component:a,argTypes:{size:{description:"width & height of text circle",default:500},spin:{description:"Rotate the text",control:"boolean"},text:{description:"text to display",control:"text"},textColor:{description:"color of text percentage",control:"color"}}},g=i(e=>t(a,{...e}),"Template"),h=g.bind({});h.args={size:500,spin:!1,text:"Testing Testing",textColor:"black"};const v=["CircleText"];export{h as CircleText,v as __namedExportsOrder,w as default};
//# sourceMappingURL=CircleText.stories-dc826224.js.map
