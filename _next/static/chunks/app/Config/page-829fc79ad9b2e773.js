(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[609],{9336:function(e,n,a){Promise.resolve().then(a.bind(a,4053))},4053:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return App}});var l=a(7437),r=a(2265),i=a(2816),o=a(1507),c=a(100),t=a(3159),s=a(7427),h=a(5272),d=a(2953),u=a(3167),KernelSource_KernelSource=e=>{let{updateKernelSource:n,template:a}=e,onChange=e=>{let l=e.target.id,r=e.target.value;switch(l){case"kernelSourceName":a.kernelSource.name=r;break;case"kernelSourceRepo":a.kernelSource.repo=r;break;case"kernelSourceBranch":a.kernelSource.branch=r;break;case"kernelSourceDevice":a.kernelSource.device=r;break;case"kernelSourceDefconfig":a.kernelSource.defconfig=r}n({...a,kernelSource:a.kernelSource})};return(0,l.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,l.jsx)(u.Z,{variant:"outlined",label:"Name",value:a.kernelSource.name,id:"kernelSourceName",onChange:onChange}),(0,l.jsx)(u.Z,{variant:"outlined",label:"Repo",value:a.kernelSource.repo,id:"kernelSourceRepo",onChange:onChange}),(0,l.jsx)(u.Z,{variant:"outlined",label:"Branch",value:a.kernelSource.branch,id:"kernelSourceBranch",onChange:onChange}),(0,l.jsx)(u.Z,{variant:"outlined",label:"Device code",value:a.kernelSource.device,id:"kernelSourceDevice",onChange:onChange}),(0,l.jsx)(u.Z,{variant:"outlined",label:"Defconfig",value:a.kernelSource.defconfig,id:"kernelSourceDefconfig",onChange:onChange})]})},p=a(9396),m=a(3724),x=a(6175),g=a(3729),C=a(6446),b=a(2653),j=a(6055),v=a(5544),repoToolchain=function(e){let{toolchain:n,index:a,onChange:r,onDelete:i}=e;function onInputChange(e){let l=e.target.id,i=e.target.value;switch(l){case"repoToolchianName":r(a,{...n,name:i});break;case"repoToolchianRepo":r(a,{...n,repo:i});break;case"repoToolchianBranch":r(a,{...n,branch:i})}}function addBinPathInput(){r(a,{...n,binPath:[...n.binPath,""]})}function removeBinPathInput(e){let l=n.binPath.filter((n,a)=>a!==e);r(a,{...n,binPath:l})}function onBinPathChange(e,l){let i=[...n.binPath];i[e]=l.target.value,r(a,{...n,binPath:i})}return(0,l.jsx)(g.Z,{component:"section",sx:{p:2,border:"1px solid grey"},children:(0,l.jsxs)(d.Z,{container:!0,className:"w-full",spacing:2,children:[(0,l.jsx)(d.Z,{xs:1,children:(0,l.jsx)("div",{className:"h-full grid items-center",children:(0,l.jsx)(b.Z,{color:"primary",sx:{p:"10px"},onClick:()=>{i()},children:(0,l.jsx)(C.Z,{})})})}),(0,l.jsxs)(d.Z,{xs:11,children:[(0,l.jsxs)("div",{className:"grid grid-cols-3 gap-x-4",children:[(0,l.jsx)(u.Z,{label:"Name",value:n.name,id:"repoToolchianName",onChange:onInputChange}),(0,l.jsx)(u.Z,{label:"Repo",value:n.repo,id:"repoToolchianRepo",onChange:onInputChange}),(0,l.jsx)(u.Z,{label:"Branch",value:n.branch,id:"repoToolchianBranch",onChange:onInputChange})]}),(0,l.jsx)(m.Z,{fullWidth:!0,size:"small",variant:"outlined",startIcon:(0,l.jsx)(p.Z,{}),onClick:addBinPathInput,children:"Add bin path"}),(0,l.jsx)("div",{className:"grid grid-cols-2 gap-x-4",children:n.binPath.map((e,n)=>(0,l.jsx)("div",{children:(0,l.jsxs)(j.Z,{component:"form",sx:{p:"2px 4px",display:"flex",alignItems:"center",width:"100%"},children:[(0,l.jsx)("div",{children:"binPath_"+(n+1)}),(0,l.jsx)(v.ZP,{sx:{ml:1,flex:1},placeholder:"Add your bin path",value:e,onChange:e=>onBinPathChange(n,e)}),(0,l.jsx)(b.Z,{color:"primary",sx:{p:"10px"},"aria-label":"directions",onClick:()=>removeBinPathInput(n),children:(0,l.jsx)(C.Z,{})})]})},n))})]})]})})},downloadToolchain=function(e){let{toolchain:n,index:a,onChange:r,onDelete:i}=e;function onInputChange(e){let l=e.target.id,i=e.target.value;switch(l){case"repoToolchianName":r(a,{...n,name:i});break;case"repoToolchianUrl":r(a,{...n,url:i})}}function addBinPathInput(){r(a,{...n,binPath:[...n.binPath,""]})}function removeBinPathInput(e){let l=n.binPath.filter((n,a)=>a!==e);r(a,{...n,binPath:l})}function onBinPathChange(e,l){let i=[...n.binPath];i[e]=l.target.value,r(a,{...n,binPath:i})}return(0,l.jsx)(g.Z,{component:"section",sx:{p:2,border:"1px solid grey"},children:(0,l.jsxs)(d.Z,{container:!0,className:"w-full",spacing:2,children:[(0,l.jsx)(d.Z,{xs:1,children:(0,l.jsx)("div",{className:"h-full grid items-center",children:(0,l.jsx)(b.Z,{color:"primary",sx:{p:"10px"},onClick:()=>{i()},children:(0,l.jsx)(C.Z,{})})})}),(0,l.jsxs)(d.Z,{xs:11,children:[(0,l.jsxs)("div",{className:"grid grid-cols-2 gap-x-4",children:[(0,l.jsx)(u.Z,{label:"Name",value:n.name,id:"repoToolchianName",onChange:onInputChange}),(0,l.jsx)(u.Z,{label:"Url",value:n.url,id:"repoToolchianUrl",onChange:onInputChange})]}),(0,l.jsx)(m.Z,{fullWidth:!0,size:"small",variant:"outlined",startIcon:(0,l.jsx)(p.Z,{}),onClick:addBinPathInput,children:"Add bin path"}),(0,l.jsx)("div",{className:"grid grid-cols-2 gap-x-4",children:n.binPath.map((e,n)=>(0,l.jsx)("div",{children:(0,l.jsxs)(j.Z,{component:"form",sx:{p:"2px 4px",display:"flex",alignItems:"center",width:"100%"},children:[(0,l.jsx)("div",{children:"binPath_"+(n+1)}),(0,l.jsx)(v.ZP,{sx:{ml:1,flex:1},placeholder:"Add your bin path",value:e,onChange:e=>onBinPathChange(n,e)}),(0,l.jsx)(b.Z,{color:"primary",sx:{p:"10px"},"aria-label":"directions",onClick:()=>removeBinPathInput(n),children:(0,l.jsx)(C.Z,{})})]})},n))})]})]})})},Toolchains_Toolchains=e=>{let{updateToolchains:n,template:a}=e,addToolchain=e=>{let l=[];switch(e){case"repo":l=[...a.toolchains,{name:"",repo:"",branch:"",binPath:[]}];break;case"download":l=[...a.toolchains,{name:"",url:"",binPath:[]}]}let r={...a,toolchains:l};n(r)},removeToolchain=e=>{let l={...a,toolchains:a.toolchains.filter((n,a)=>a!==e)};n(l)},onToolchainChange=(e,l)=>{let r={...a,toolchains:a.toolchains.map((n,a)=>a===e?l:n)};n(r)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(x.Z,{fullWidth:!0,variant:"outlined",children:[(0,l.jsx)(m.Z,{size:"small",variant:"outlined",startIcon:(0,l.jsx)(p.Z,{}),onClick:()=>addToolchain("repo"),children:"Add tool chain (Repo)"}),(0,l.jsx)(m.Z,{size:"small",variant:"outlined",startIcon:(0,l.jsx)(p.Z,{}),onClick:()=>addToolchain("download"),children:"Add tool chain (Download)"})]}),a.toolchains.map((e,n)=>"repo"in e?(0,l.jsx)(repoToolchain,{toolchain:e,index:n,onChange:onToolchainChange,onDelete:()=>removeToolchain(n)},n):(0,l.jsx)(downloadToolchain,{toolchain:e,index:n,onChange:onToolchainChange,onDelete:()=>removeToolchain(n)},n))]})},f=a(2104);let k=["arm64","arm"];var Buildparams=e=>{let{updateParams:n,template:a}=e,[i,o]=(0,r.useState)(""),[c,t]=(0,r.useState)(!1);function onChange(e){let l=e.target.id,r=e.target.value,i={ARCH:a.params.ARCH,CC:a.params.CC,externalCommand:a.params.externalCommand};switch(l){case"paramsArch":i.ARCH=r;break;case"paramsCC":i.CC=r;break;case"paramsExternalCommand":o(r);let c={};try{c=JSON.parse(r),t(!0)}catch(e){c={},t(!1)}finally{i.externalCommand=c}}let s={...a,params:i};n(s)}return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"grid grid-cols-2 gap-x-4",children:[(0,l.jsx)(f.Z,{id:"paramsArch",disablePortal:!0,fullWidth:!0,options:k,onChange:(e,l)=>{if(l){let e={...a,params:{ARCH:l,CC:a.params.CC,externalCommand:a.params.externalCommand}};n(e)}},onInputChange:(e,l)=>{let r={...a,params:{ARCH:l,CC:a.params.CC,externalCommand:a.params.externalCommand}};n(r)},renderInput:e=>(0,l.jsx)(u.Z,{...e,label:"Arch",value:a.params.ARCH})}),(0,l.jsx)(u.Z,{id:"paramsCC",fullWidth:!0,variant:"outlined",label:"Compiler",value:a.params.CC,onChange:onChange}),(0,l.jsx)(u.Z,{className:"col-span-2",label:"Edit your params",multiline:!0,placeholder:'{\n    "CLANG_TRIPLE": "gcc/bin/aarch64-linux-android-",\n    "CROSS_COMPILE": "gcc/bin/aarch64-linux-android-",\n    "CROSS_COMPILE_ARM32": "gcc/bin/arm-linux-androideabi-",\n    "LD": "clang/bin/ld.lld",\n    "AR": "clang/bin/llvm-ar",\n    "NM": "clang/bin/llvm-nm",\n    "OBJCOPY": "clang/bin/llvm-objcopy",\n    "OBJDUMP": "clang/bin/llvm-objdump",\n    "READELF": "clang/bin/llvm-readelf",\n    "OBJSIZE": "clang/bin/llvm-size",\n    "STRIP": "clang/bin/llvm-strip",\n    "LDGOLD": "clang/bin/aarch64-linux-gnu-ld.gold",\n    "LLVM_AR": "clang/bin/llvm-ar",\n    "LLVM_DIS": "clang/bin/llvm-dis"\n}',variant:"filled",id:"paramsExternalCommand",value:i,onChange:onChange,error:!c})]})})},Anykernel3=e=>{let{updateAnykernel3:n,template:a}=e,onChange=e=>{let l=e.target.id,r=e.target.name,i=e.target.value,o=a.AnyKernel3;switch(l){case"anykernel3Repo":o.repo=i;break;case"anykernel3Branch":o.branch=i}switch(r){case"anykernel3Use":o.use=e.target.checked;break;case"anykernel3Release":o.release=e.target.checked}console.log(o,e.target.checked,l,e);let c={...a,AnyKernel3:o};n(c)};return(0,l.jsxs)("div",{className:"grid grid-cols-2 gap-x-4",children:[(0,l.jsx)(c.K,{name:"anykernel3Use",isSelected:a.AnyKernel3.use,onChange:onChange,children:"Use Anykernel3 pack your kernel?"}),(0,l.jsx)(c.K,{name:"anykernel3Release",isSelected:a.AnyKernel3.release,onChange:onChange,children:"Publish to github release?"}),(0,l.jsx)(u.Z,{id:"anykernel3Repo",fullWidth:!0,variant:"outlined",label:"Repo",value:a.AnyKernel3.repo,onChange:onChange}),(0,l.jsx)(u.Z,{id:"anykernel3Branch",fullWidth:!0,variant:"outlined",label:"Branch",value:a.AnyKernel3.branch,onChange:onChange})]})};let S={kernelSource:{name:"",repo:"",branch:"",device:"",defconfig:""},withKernelSU:!1,toolchains:[],ccache:!1,params:{ARCH:"",CC:"",externalCommand:{}},AnyKernel3:{use:!1,release:!1,repo:"",branch:""}};var Configuarion_Configuration=()=>{let[e,n]=r.useState(S);return(0,l.jsx)(i.w,{className:"h-full w-full",children:(0,l.jsxs)(d.Z,{container:!0,spacing:2,children:[(0,l.jsx)(d.Z,{xs:8,children:(0,l.jsx)(o.G,{className:"space-x-1 h-full place-items-center",children:(0,l.jsxs)(t.d,{className:"config-panel",children:[(0,l.jsx)(s.G,{title:"Kernel Source",children:(0,l.jsx)(KernelSource_KernelSource,{updateKernelSource:n,template:e})},"1"),(0,l.jsx)(s.G,{title:"Toolchains",children:(0,l.jsx)(Toolchains_Toolchains,{updateToolchains:n,template:e})},"2"),(0,l.jsx)(s.G,{title:"Build params",children:(0,l.jsx)(Buildparams,{updateParams:n,template:e})},"3"),(0,l.jsx)(s.G,{title:"AnyKernel3",children:(0,l.jsx)(Anykernel3,{updateAnykernel3:n,template:e})},"4"),(0,l.jsx)(s.G,{title:"Other Configuration",children:(0,l.jsxs)("div",{className:"grid grid-cols-2 gap-x-4",children:[(0,l.jsx)(c.K,{isSelected:e.withKernelSU,onValueChange:a=>{n({...e,withKernelSU:a})},children:"Is build with KernelSU"}),(0,l.jsx)(c.K,{isSelected:e.ccache,onValueChange:a=>{n({...e,ccache:a})},children:"Use ccache"})]})},"5")]})})}),(0,l.jsx)(d.Z,{xs:4,children:(0,l.jsx)(o.G,{className:"config-output min-h-full",children:(0,l.jsx)(h.Y,{isReadOnly:!0,label:"Output",variant:"bordered",placeholder:JSON.stringify({output:e},null,"	"),value:JSON.stringify(e,null,"	"),className:"min-w-full min-h-full",minRows:30,maxRows:100})})})]})})};function App(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(Configuarion_Configuration,{})})}}},function(e){e.O(0,[4,756,87,363,971,472,744],function(){return e(e.s=9336)}),_N_E=e.O()}]);