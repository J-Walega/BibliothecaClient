var j=Object.defineProperty;var k=(u,l,r)=>l in u?j(u,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):u[l]=r;var c=(u,l,r)=>(k(u,typeof l!="symbol"?l+"":l,r),r);import{d as g,H as S,o as _,v,w as a,i as f,I as w,f as T,J as E,r as d,K as N,L as q,b as t,M as i,k as p,G as B,N as F,O as $,P as V,m as y,h as A,T as H,y as L,a as M}from"./index-CDAGo256.js";const R=g({__name:"error",setup(u){const l=S("error");return(r,o)=>(_(),v(E,{color:"error",icon:"$error",title:"Error"},{default:a(()=>[f(w(T(l)),1)]),_:1}))}}),G=g({__name:"login-view",setup(u){const l=d(""),r=d(""),o=d(""),m=d(!1);q("error",o);const x=[n=>n?!0:"E-mail is requred.",n=>/.+@.+\..+/.test(n)?!0:"E-mail must be valid."];class C{constructor(s,e){c(this,"email");c(this,"password");this.email=s,this.password=e}}async function b(n){m.value=!0,o.value="";const e=await M().login(n).catch(h=>o.value=h);console.log(e),m.value=!1;try{((e==null?void 0:e.status)!=200||e!=null&&e.data.error.message)&&(o.value=e==null?void 0:e.data.error.message)}catch{o.value=e.message}}return(n,s)=>(_(),v(N,{fluid:"","fill-height":""},{default:a(()=>[t(V,null,{default:a(()=>[t(i,{class:"d-flex justify-center"},{default:a(()=>[t(p,{color:"primary",class:"mb",width:"600"},{default:a(()=>[t(B,null,{default:a(()=>[f(" Login ")]),_:1})]),_:1})]),_:1}),t(i,{class:"d-flex justify-center"},{default:a(()=>[t(p,{width:"600"},{default:a(()=>[t(F,{onSubmit:s[3]||(s[3]=$(()=>{},["prevent"])),ref:"loginForm"},{default:a(()=>[t(V,{cols:"auto"},{default:a(()=>[t(i,{md:"6",class:"d-flex justify-center"},{default:a(()=>[t(y,{modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=e=>l.value=e),label:"E-mail",color:"primary",rules:x,required:""},null,8,["modelValue"])]),_:1}),t(i,{md:"6",class:"d-flex justify-center"},{default:a(()=>[t(y,{modelValue:r.value,"onUpdate:modelValue":s[1]||(s[1]=e=>r.value=e),label:"Hasło",type:"password",color:"primary",autocomplete:"off",required:""},null,8,["modelValue"])]),_:1}),t(i,{class:"d-flex justify-center"},{default:a(()=>[t(A,{class:"mt-2",color:"primary",type:"submit",loading:m.value,onClick:s[2]||(s[2]=e=>b(new C(l.value,r.value)))},{default:a(()=>[f(" Zaloguj ")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1}),t(i,{class:"d-flex justify-center"},{default:a(()=>[t(H,{name:"fade"},{default:a(()=>[o.value?(_(),v(p,{key:0},{default:a(()=>[t(R,null,{default:a(()=>[f(w(o.value),1)]),_:1})]),_:1})):L("",!0)]),_:1})]),_:1})]),_:1})]),_:1}))}});export{G as default};
