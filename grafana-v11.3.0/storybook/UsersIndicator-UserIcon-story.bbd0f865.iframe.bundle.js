"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[2959],{"./src/components/UsersIndicator/UserIcon.story.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:function(){return Basic},default:function(){return UserIcon_story}});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),UserIcon=__webpack_require__("./src/components/UsersIndicator/UserIcon.tsx"),lib=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js")),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"MDX|UserIcon",component:UserIcon.n}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"usericon",children:"UserIcon"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"UserIcon"})," a component that takes in the ",(0,jsx_runtime.jsx)(_components.code,{children:"UserIconProps"})," interface as a prop. It renders a user icon and displays the user's name or initials along with the user's active status or last viewed date."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["To use the ",(0,jsx_runtime.jsx)(_components.code,{children:"UserIcon"})," component, import it and pass in the required ",(0,jsx_runtime.jsx)(_components.code,{children:"UserIconProps"}),". The component can be used as follows:"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { UserIcon } from '@grafana/ui';\n\nconst ExampleComponent = () => {\n  const userView = {\n    user: { id: 1, name: 'John Smith', avatarUrl: 'https://example.com/avatar.png' },\n    lastActiveAt: '2023-04-18T15:00:00.000Z',\n  };\n\n  return (\n    <div>\n      <UserIcon userView={userView} showTooltip={true} className={styles.custom} />\n    </div>\n  );\n};\n"})}),"\n",(0,jsx_runtime.jsxs)(_components.h3,{id:"with-custom-children",children:["With custom ",(0,jsx_runtime.jsx)(_components.code,{children:"children"})]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"children"})," prop can be used to display a custom content inside ",(0,jsx_runtime.jsx)(_components.code,{children:"UserIcon"}),". This is useful to show the data about extra users."]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { UserIcon } from '@grafana/ui';\n\nconst ExampleComponent = () => {\n  const userView = {\n    user: { id: 1, name: 'John Smith', avatarUrl: 'https://example.com/avatar.png' },\n    lastActiveAt: '2023-04-18T15:00:00.000Z',\n  };\n\n  return (\n    <div>\n      <UserIcon userView={userView} showTooltip={false}>\n        +10\n      </UserIcon>\n    </div>\n  );\n};\n"})}),"\n",(0,jsx_runtime.jsx)(dist.ov,{of:UserIcon.n}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"userview-type",children:"UserView type"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:"import { DateTimeInput } from '@grafana/data';\n\nexport interface UserView {\n  user: {\n    /** User's name, containing first + last name */\n    name: string;\n    /** URL to the user's avatar */\n    avatarUrl?: string;\n  };\n  /** Datetime string when the user was last active */\n  lastActiveAt: DateTimeInput;\n}\n"})})]})}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}var meta={title:"General/UsersIndicator/UserIcon",component:UserIcon.n,argTypes:{},parameters:{docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},knobs:{disabled:!0},controls:{exclude:["className","onClick"]},actions:{disabled:!0}},args:{showTooltip:!1,onClick:void 0}},Basic=function(args){return(0,jsx_runtime.jsx)(UserIcon.n,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},args),{userView:{user:{name:"John Smith",avatarUrl:"https://picsum.photos/id/1/200/200"},lastActiveAt:"2023-04-18T15:00:00.000Z"}}))};Basic.args={showTooltip:!0,onClick:void 0};var UserIcon_story=meta;Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"args => {\n  const userView = {\n    user: {\n      name: 'John Smith',\n      avatarUrl: 'https://picsum.photos/id/1/200/200'\n    },\n    lastActiveAt: '2023-04-18T15:00:00.000Z'\n  };\n  return <UserIcon {...args} userView={userView} />;\n}",...Basic.parameters?.docs?.source}}}}}]);