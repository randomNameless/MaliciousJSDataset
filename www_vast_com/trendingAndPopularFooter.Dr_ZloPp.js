class s{constructor(e){this.params=e}getFetchParams(){return{firstSetParams:{attributes:"make_model_trim",params:{badge_labels:"Going Fast"}},secondSetParams:{attributes:"model",params:{badge_labels:"Popular Model"}}}}getTitles(){return{firstTitle:"Trending Vehicles",secondTitle:"Popular Models"}}getFirstSetLinkLabel({make:e,model:t,id:r}){return`${e} ${t} ${r}`}getSecondSetLinkLabel({make:e,id:t}){return`${e} ${t}`}getFirstSetUrlParams({make:e,model:t,id:r}){return{make:e,model:t,trim:r}}getSecondSetUrlParams({make:e,id:t}){return{make:e,model:t}}}export{s as T};