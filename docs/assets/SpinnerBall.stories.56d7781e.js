var m=Object.defineProperty;var a=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var l=(e,r,n)=>r in e?m(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,t=(e,r)=>{for(var n in r||(r={}))u.call(r,n)&&l(e,n,r[n]);if(a)for(var n of a(r))y.call(r,n)&&l(e,n,r[n]);return e};import{P as o}from"./index.65f1d40b.js";import{a as f,j as i}from"./jsx-runtime.541dbc39.js";import"./index.65470a28.js";const g="_progress_yb8l1_13",B="_animate_yb8l1_1",C="_svg_yb8l1_21";var p={progress:g,animate:B,svg:C};const s=({size:e,primaryColor:r,secondaryColor:n,duration:d})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 200 200",className:p.svg,children:[i("circle",{cx:"100",cy:"100",r:"100",fill:n}),i("circle",{cx:"100",cy:"100",r:"50",fill:"none",strokeWidth:"100",stroke:r,className:p.progress,style:{animationDuration:d}})]});s.defaultProps={size:200,primaryColor:"blue",secondaryColor:"#eeeeee",duration:"3s"};s.propTypes={size:o.number,primaryColor:o.string,secondaryColor:o.string,duration:o.string};var c=s;s.__docgenInfo={description:"",methods:[],displayName:"SpinnerBall",props:{size:{defaultValue:{value:"200",computed:!1},type:{name:"number"},required:!1,description:""},primaryColor:{defaultValue:{value:"'blue'",computed:!1},type:{name:"string"},required:!1,description:""},secondaryColor:{defaultValue:{value:"'#eeeeee'",computed:!1},type:{name:"string"},required:!1,description:""},duration:{defaultValue:{value:"'3s'",computed:!1},type:{name:"string"},required:!1,description:""}}};var w={parameters:{storySource:{source:`import SB from './SpinnerBall';

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
`,locationsMap:{"spinner-ball":{startLoc:{col:17,line:26},endLoc:{col:43,line:26},startBody:{col:17,line:26},endBody:{col:43,line:26}}}}},title:"Components/SpinnerBall",component:c,argTypes:{size:{description:"width & height of graph",default:200},primaryColor:{description:"primary color for spinner",control:"color"},secondaryColor:{description:"secondary color for spinner",control:"color"},duration:{description:"duration of spinning animation",default:"3s"}}};const h=e=>i(c,t({},e)),S=h.bind({});S.args={size:200,primaryColor:"blue",secondaryColor:"#eeeeee",duration:"3s"};const T=["SpinnerBall"];export{S as SpinnerBall,T as __namedExportsOrder,w as default};
//# sourceMappingURL=SpinnerBall.stories.56d7781e.js.map
