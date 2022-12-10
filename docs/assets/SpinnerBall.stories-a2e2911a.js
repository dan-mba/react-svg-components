var c=Object.defineProperty;var o=(e,r)=>c(e,"name",{value:r,configurable:!0});import{p as n}from"./index-a2f37619.js";import{a as d,j as s}from"./jsx-runtime-145e6dbe.js";import"./index-a6053a7a.js";import"./es.object.get-own-property-descriptor-bc2d8f9c.js";const m="_progress_yb8l1_13",u="_animate_yb8l1_1",y="_svg_yb8l1_21",t={progress:m,animate:u,svg:y},i=o(({size:e=200,primaryColor:r="blue",secondaryColor:l="#eeeeee",duration:p="3s"})=>d("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 200 200",className:t.svg,children:[s("circle",{cx:"100",cy:"100",r:"100",fill:l}),s("circle",{cx:"100",cy:"100",r:"50",fill:"none",strokeWidth:"100",stroke:r,className:t.progress,style:{animationDuration:p}})]}),"SpinnerBall$1");i.propTypes={size:n.exports.number,primaryColor:n.exports.string,secondaryColor:n.exports.string,duration:n.exports.string};const a=i;i.__docgenInfo={description:"",methods:[],displayName:"SpinnerBall",props:{size:{defaultValue:{value:"200",computed:!1},type:{name:"number"},required:!1,description:""},primaryColor:{defaultValue:{value:"'blue'",computed:!1},type:{name:"string"},required:!1,description:""},secondaryColor:{defaultValue:{value:"'#eeeeee'",computed:!1},type:{name:"string"},required:!1,description:""},duration:{defaultValue:{value:"'3s'",computed:!1},type:{name:"string"},required:!1,description:""}}};const _={parameters:{storySource:{source:`import SB from './SpinnerBall';

export default {
  title: 'Components/SpinnerBall',
  component: SB,
  argTypes: {
    size: {
      description: 'width & height of graph',
      default: 200
    },
    primaryColor: {
      description: 'primary color for spinner',
      control: 'color'
    },
    secondaryColor: {
      description: 'secondary color for spinner',
      control: 'color'
    },
    duration: {
      description: 'duration of spinning animation',
      default: '3s'
    }
  },
};

const Template = (args) => <SB {...args} />;

export const SpinnerBall = Template.bind({});
SpinnerBall.args = {
  size: 200,
  primaryColor: 'blue',
  secondaryColor: '#eeeeee',
  duration: '3s'
};
`,locationsMap:{"spinner-ball":{startLoc:{col:17,line:26},endLoc:{col:43,line:26},startBody:{col:17,line:26},endBody:{col:43,line:26}}}}},title:"Components/SpinnerBall",component:a,argTypes:{size:{description:"width & height of graph",default:200},primaryColor:{description:"primary color for spinner",control:"color"},secondaryColor:{description:"secondary color for spinner",control:"color"},duration:{description:"duration of spinning animation",default:"3s"}}},f=o(e=>s(a,{...e}),"Template"),g=f.bind({});g.args={size:200,primaryColor:"blue",secondaryColor:"#eeeeee",duration:"3s"};const b=["SpinnerBall"];export{g as SpinnerBall,b as __namedExportsOrder,_ as default};
//# sourceMappingURL=SpinnerBall.stories-a2e2911a.js.map
