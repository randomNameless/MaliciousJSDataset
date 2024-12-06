var s=class{fetch(e,t=!0,n=!1){return new Promise((o,i)=>{let r=document.createElement("script");r.onload=o,r.onerror=i,r.async=t,n&&r.setAttribute("crossorigin",""),r.src=e,document.body.appendChild(r)})}fetchAll(e,t=!0,n=!1){if(!Array.isArray(e))throw new Error("Array error!");return Promise.all(e.map(o=>this.fetch(o,t,n)))}},c=new s;export{c as a};
//# sourceMappingURL=chunk-FE2D6PWX.js.map
