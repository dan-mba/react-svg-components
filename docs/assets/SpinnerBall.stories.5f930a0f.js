import{P as r}from"./index.65f1d40b.js";import{a as p,j as o}from"./jsx-runtime.3e25ebe3.js";import"./index.a696e993.js";const c="_progress_yb8l1_13",d="_animate_yb8l1_1",m="_svg_yb8l1_21";var s={progress:c,animate:d,svg:m};const n=({size:e,primaryColor:a,secondaryColor:l,duration:t})=>p("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 200 200",className:s.svg,children:[o("circle",{cx:"100",cy:"100",r:"100",fill:l}),o("circle",{cx:"100",cy:"100",r:"50",fill:"none",strokeWidth:"100",stroke:a,className:s.progress,style:{animationDuration:t}})]});n.defaultProps={size:200,primaryColor:"blue",secondaryColor:"#eeeeee",duration:"3s"};n.propTypes={size:r.number,primaryColor:r.string,secondaryColor:r.string,duration:r.string};var i=n;n.__docgenInfo={description:"",methods:[],displayName:"SpinnerBall",props:{size:{defaultValue:{value:"200",computed:!1},type:{name:"number"},required:!1,description:""},primaryColor:{defaultValue:{value:"'blue'",computed:!1},type:{name:"string"},required:!1,description:""},secondaryColor:{defaultValue:{value:"'#eeeeee'",computed:!1},type:{name:"string"},required:!1,description:""},duration:{defaultValue:{value:"'3s'",computed:!1},type:{name:"string"},required:!1,description:""}}};var C={parameters:{storySource:{source:`import SB from './SpinnerBall';

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
`,locationsMap:{"spinner-ball":{startLoc:{col:17,line:26},endLoc:{col:43,line:26},startBody:{col:17,line:26},endBody:{col:43,line:26}}}}},title:"Components/SpinnerBall",component:i,argTypes:{size:{description:"width & height of graph",default:200},primaryColor:{description:"primary color for spinner",control:"color"},secondaryColor:{description:"secondary color for spinner",control:"color"},duration:{description:"duration of spinning animation",default:"3s"}}};const u=e=>o(i,{...e}),y=u.bind({});y.args={size:200,primaryColor:"blue",secondaryColor:"#eeeeee",duration:"3s"};const h=["SpinnerBall"];export{y as SpinnerBall,h as __namedExportsOrder,C as default};
//# sourceMappingURL=SpinnerBall.stories.5f930a0f.js.map
