import{P as n}from"./index.65f1d40b.js";import{a as p,j as e}from"./jsx-runtime.3e25ebe3.js";import"./index.a696e993.js";const d="_spin_1nf94_15",x="_animate_1nf94_1",m="_text_1nf94_26";var s={spin:d,animate:x,text:m};const o=({size:t,spin:l,text:r,textColor:a})=>{const c={fontSize:`${Math.min(50,13.3/r.length*50)}px`,letterSpacing:`${Math.min(.3,Math.pow(13/r.length,.25)*.3)}em`,stroke:a};return p("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 210 210",children:[e("defs",{children:e("path",{id:"TestCircle",fill:"none",d:" M 105 105 m -100, 0 a 100,100 0 1,0 200,0 a 100,100 0 1,0 -200,0 "})}),e("text",{className:`${s.text} ${l?s.spin:""}`,style:c,children:e("textPath",{href:"#TestCircle",children:r})})]})};o.defaultProps={size:500,spin:!1,text:"Test",textColor:"black"};o.propTypes={size:n.number,spin:n.bool,text:n.string,textColor:n.string};var i=o;o.__docgenInfo={description:"",methods:[],displayName:"CircleText",props:{size:{defaultValue:{value:"500",computed:!1},type:{name:"number"},required:!1,description:""},spin:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},text:{defaultValue:{value:"'Test'",computed:!1},type:{name:"string"},required:!1,description:""},textColor:{defaultValue:{value:"'black'",computed:!1},type:{name:"string"},required:!1,description:""}}};var g={parameters:{storySource:{source:`import CG from './CircleText';

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
  text: 'Test',
  textColor: 'black'
};
`,locationsMap:{"circle-text":{startLoc:{col:17,line:26},endLoc:{col:43,line:26},startBody:{col:17,line:26},endBody:{col:43,line:26}}}}},title:"Components/CircleText",component:i,argTypes:{size:{description:"width & height of text circle",default:500},spin:{description:"Rotate the text",control:"boolean"},text:{description:"text to display",control:"text"},textColor:{description:"color of text percentage",control:"color"}}};const f=t=>e(i,{...t}),u=f.bind({});u.args={size:500,spin:!1,text:"Test",textColor:"black"};const y=["CircleText"];export{u as CircleText,y as __namedExportsOrder,g as default};
//# sourceMappingURL=CircleText.stories.04557151.js.map
