(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],[,,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(5),i=a.n(n),s=a(2),c=a(1),l=(a(10),a(4)),r=a.n(l),o=(a(11),a(0)),u=function(e){var t=e.images,a=e.position,n=e.animationDuration,i=e.frameSize,s=e.actualImageWidth,c=e.isPrevButtonActive,l=e.isNextButtonActive,u=e.hadlePrevButtonClick,m=e.hadleNextButtonClick,d=i*s,j=a*-s;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"Carousel",children:[Object(o.jsx)("div",{className:"Carousel__content",style:{maxWidth:"".concat(d,"px")},children:Object(o.jsx)("ul",{className:"Carousel__list",style:{transform:"translateX(".concat(j,"px)"),transition:"transform ".concat(n,"ms linear")},children:t.map((function(e){return Object(o.jsx)("li",{className:"Carousel__item",style:{flexBasis:"".concat(s,"px")},children:Object(o.jsx)("img",{src:e,alt:"".concat(e),className:"Carousel__image"})},e)}))})}),Object(o.jsxs)("div",{className:"Carousel__buttons",children:[Object(o.jsx)("button",{type:"button",disabled:!c,className:r()("Carousel__button__prev",{"is-disabled":!c}),onClick:u,children:"Back"}),Object(o.jsx)("button",{type:"button",disabled:!l,className:r()("Carousel__button__next",{"is-disabled":!l}),onClick:m,"data-cy":"next",children:"Go!"})]})]})})},m=(a(13),function(e){var t=e.itemWidth,a=e.imageCount,n=e.frameSize,i=e.step,s=e.animationDuration,c=e.setItemWidth,l=e.setFrameSize,r=e.setStep,u=e.setAnimationDuration;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"SlideContainer__wrapper",children:[Object(o.jsxs)("div",{className:"SlideContainer__width",children:[Object(o.jsx)("label",{className:"Settings__label",htmlFor:"itemWidth",children:"Image width:"}),Object(o.jsx)("span",{className:"Settings__currentValue",children:t}),Object(o.jsx)("input",{className:"Slider",type:"range",value:t,min:50,max:300,onChange:function(e){return c(+e.target.value)},id:"itemWidth"})]}),Object(o.jsxs)("div",{className:"SlideContainer__count",children:[Object(o.jsx)("label",{className:"Settings__label",htmlFor:"frameSize",children:"Images count:"}),Object(o.jsx)("span",{className:"Settings__currentValue",children:n}),Object(o.jsx)("input",{className:"Slider",type:"range",min:1,max:Math.floor(a/2),value:n,onChange:function(e){return l(+e.target.value)},id:"frameSize"})]}),Object(o.jsxs)("div",{className:"SlideContainer__step",children:[Object(o.jsx)("label",{className:"Settings__label",htmlFor:"step",children:"Scrolling step:"}),Object(o.jsx)("span",{className:"Settings__currentValue",children:i}),Object(o.jsx)("input",{className:"Slider",type:"range",value:i,min:1,max:a,onChange:function(e){return r(+e.target.value)},id:"step"})]}),Object(o.jsxs)("div",{className:"SlideContainer__animation",children:[Object(o.jsx)("label",{className:"Settings__label",htmlFor:"animationDuration",children:"Animation speed:"}),Object(o.jsx)("span",{className:"Settings__currentValue",children:s}),Object(o.jsx)("input",{className:"Slider",type:"range",min:300,max:1500,value:s,onChange:function(e){return u(+e.target.value)},id:"animationDuration"})]})]})})}),d=["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],j=d.length,b=function(){var e=130;return window.innerWidth<500?e=60:window.innerWidth<690&&(e=100),e},g=function(){var e=Object(c.useState)(b),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)(3),l=Object(s.a)(i,2),r=l[0],g=l[1],h=Object(c.useState)(3),p=Object(s.a)(h,2),_=p[0],x=p[1],O=Object(c.useState)(1e3),S=Object(s.a)(O,2),v=S[0],N=S[1],f=Object(c.useState)(0),C=Object(s.a)(f,2),y=C[0],B=C[1],W=Object(c.useState)(!1),w=Object(s.a)(W,2),k=w[0],A=w[1],z=Object(c.useState)(!0),D=Object(s.a)(z,2),F=D[0],I=D[1],P=r*a/r,V=j-r;return Object(c.useEffect)((function(){A(y>0),I(y<V)}),[y]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("h1",{"data-cy":"title",className:"App__title",children:["Carousel with",j,"images"]}),Object(o.jsx)(m,{itemWidth:a,setItemWidth:n,imageCount:j,frameSize:r,step:_,animationDuration:v,setFrameSize:g,setStep:x,setAnimationDuration:N}),Object(o.jsx)(u,{images:d,position:y,animationDuration:v,frameSize:r,actualImageWidth:P,isPrevButtonActive:k,isNextButtonActive:F,hadlePrevButtonClick:function(){B((function(e){return y-_>=0?e-_:0}))},hadleNextButtonClick:function(){B((function(e){return y+_<=V?e+_:V}))}})]})};i.a.render(Object(o.jsx)(g,{}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.6c826269.chunk.js.map