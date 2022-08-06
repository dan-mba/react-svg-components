import{p as r}from"./index.d9fbabd1.js";import{a as p,j as o}from"./jsx-runtime.bf3a6d41.js";import"./iframe.88b8cb8c.js";const c="_progress_yb8l1_13",d="_animate_yb8l1_1",m="_svg_yb8l1_21",s={progress:c,animate:d,svg:m},n=({size:e,primaryColor:t,secondaryColor:a,duration:l})=>p("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 200 200",className:s.svg,children:[o("circle",{cx:"100",cy:"100",r:"100",fill:a}),o("circle",{cx:"100",cy:"100",r:"50",fill:"none",strokeWidth:"100",stroke:t,className:s.progress,style:{animationDuration:l}})]});n.defaultProps={size:200,primaryColor:"blue",secondaryColor:"#eeeeee",duration:"3s"};n.propTypes={size:r.exports.number,primaryColor:r.exports.string,secondaryColor:r.exports.string,duration:r.exports.string};const i=n;n.__docgenInfo={description:"",methods:[],displayName:"SpinnerBall",props:{size:{defaultValue:{value:"200",computed:!1},type:{name:"number"},required:!1,description:""},primaryColor:{defaultValue:{value:"'blue'",computed:!1},type:{name:"string"},required:!1,description:""},secondaryColor:{defaultValue:{value:"'#eeeeee'",computed:!1},type:{name:"string"},required:!1,description:""},duration:{defaultValue:{value:"'3s'",computed:!1},type:{name:"string"},required:!1,description:""}}};const C={parameters:{storySource:{source:`import SB from './SpinnerBall';

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
`,locationsMap:{"spinner-ball":{startLoc:{col:17,line:26},endLoc:{col:43,line:26},startBody:{col:17,line:26},endBody:{col:43,line:26}}}}},title:"Components/SpinnerBall",component:i,argTypes:{size:{description:"width & height of graph",default:200},primaryColor:{description:"primary color for spinner",control:"color"},secondaryColor:{description:"secondary color for spinner",control:"color"},duration:{description:"duration of spinning animation",default:"3s"}}},u=e=>o(i,{...e}),y=u.bind({});y.args={size:200,primaryColor:"blue",secondaryColor:"#eeeeee",duration:"3s"};const h=["SpinnerBall"];export{y as SpinnerBall,h as __namedExportsOrder,C as default};
//# sourceMappingURL=SpinnerBall.stories.f3af26db.js.map
