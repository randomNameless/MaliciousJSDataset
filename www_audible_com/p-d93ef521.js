class t{constructor(t,s){this.host=t,this.callback=s,this.host.addController(this),this.setTarget=this.setTarget.bind(this)}hostConnected(){this.connect()}hostDisconnected(){this.disconnect()}setTarget(t){this.target!==t&&(this.disconnect(),this.target=t||void 0,this.connect())}connect(){this.target&&(t.map.set(this.target,this.callback),t.observer.observe(this.target))}disconnect(){this.target&&(t.observer.unobserve(this.target),t.map.delete(this.target))}static callback(s){s.forEach((s=>{var i;null===(i=t.map.get(s.target))||void 0===i||i(s)}))}}t.map=new Map,t.observer=new ResizeObserver(t.callback);export{t as R}