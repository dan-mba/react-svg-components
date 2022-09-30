var c=Object.defineProperty;var s=(e,o)=>c(e,"name",{value:o,configurable:!0});import{p as r}from"./index.d9fbabd1.js";import{a as d,j as i}from"./jsx-runtime.96b8dfe1.js";import"./iframe.fdda414e.js";const m="_progress_yb8l1_13",u="_animate_yb8l1_1",y="_svg_yb8l1_21",t={progress:m,animate:u,svg:y},n=s(({size:e,primaryColor:o,secondaryColor:l,duration:p})=>d("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 200 200",className:t.svg,children:[i("circle",{cx:"100",cy:"100",r:"100",fill:l}),i("circle",{cx:"100",cy:"100",r:"50",fill:"none",strokeWidth:"100",stroke:o,className:t.progress,style:{animationDuration:p}})]}),"SpinnerBall$1");n.defaultProps={size:200,primaryColor:"blue",secondaryColor:"#eeeeee",duration:"3s"};n.propTypes={size:r.exports.number,primaryColor:r.exports.string,secondaryColor:r.exports.string,duration:r.exports.string};const a=n;n.__docgenInfo={description:"",methods:[],displayName:"SpinnerBall",props:{size:{defaultValue:{value:"200",computed:!1},type:{name:"number"},required:!1,description:""},primaryColor:{defaultValue:{value:"'blue'",computed:!1},type:{name:"string"},required:!1,description:""},secondaryColor:{defaultValue:{value:"'#eeeeee'",computed:!1},type:{name:"string"},required:!1,description:""},duration:{defaultValue:{value:"'3s'",computed:!1},type:{name:"string"},required:!1,description:""}}};const x={parameters:{storySource:{source:`import SB from './SpinnerBall';

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
`,locationsMap:{"spinner-ball":{startLoc:{col:17,line:26},endLoc:{col:43,line:26},startBody:{col:17,line:26},endBody:{col:43,line:26}}}}},title:"Components/SpinnerBall",component:a,argTypes:{size:{description:"width & height of graph",default:200},primaryColor:{description:"primary color for spinner",control:"color"},secondaryColor:{description:"secondary color for spinner",control:"color"},duration:{description:"duration of spinning animation",default:"3s"}}},f=s(e=>i(a,{...e}),"Template"),g=f.bind({});g.args={size:200,primaryColor:"blue",secondaryColor:"#eeeeee",duration:"3s"};const _=["SpinnerBall"];export{g as SpinnerBall,_ as __namedExportsOrder,x as default};
//# sourceMappingURL=SpinnerBall.stories.8a2be2a9.js.map
