self.__BUILD_MANIFEST=function(e,s,t,a,i,r,n,c,d,_,h,o,u){return{__rewrites:{afterFiles:[],beforeFiles:[{has:e,source:"/_site/:siteId/manifest.json",destination:"/manifest.json"},{has:e,source:"/_site/:siteId/__lnxx_proxy",destination:"/api/lnxx/proxy?siteId=:siteId&baseUrl=/_site/:siteId"},{has:e,source:"/culture/set/:culture",destination:"/api/lnxx/culture_set?culture=:culture"},{has:e,source:"/__lnxx_proxy",destination:"/api/lnxx/proxy"},{has:e,source:"/_site/:siteId/__api/:path*",destination:"/api/:path*?baseUrl=/_site/:siteId&siteId=:siteId"},{has:[{type:t,value:s}],source:"/__api/:path*",destination:"/api/:path*?baseUrl=/&siteId=:siteId"},{has:e,source:"/_site/:siteId/:path*",destination:"/_site/render/:path*?siteId=:siteId&baseUrl=/_site/:siteId"},{has:e,source:"/health/healthcheck",destination:"/api/healthcheck"},{has:e,source:"/health/heartbeat",destination:"/api/heartbeat"},{has:[{type:t,value:s},{type:i,key:"Fastly-Client"}],source:"/_site/:path*",destination:"/_site/render/_site/:path*?siteId=:siteId&baseUrl=/_site/:siteId"},{has:e,source:"/_preview/:previewToken/:path*",destination:"/_site/render/:path*?previewToken=:previewToken&baseUrl=/_preview/:previewToken"},{has:[{type:i,key:n,value:s}],source:"/",destination:c},{has:[{type:t,value:s}],source:"/",destination:c}],fallback:[{has:[{type:i,key:n,value:s}],source:d,destination:_},{has:[{type:t,value:s}],source:d,destination:_}]},__routerFilterStatic:{numItems:0,errorRate:1e-4,numBits:0,numHashes:o,bitArray:[]},__routerFilterDynamic:{numItems:0,errorRate:1e-4,numBits:a,numHashes:o,bitArray:[]},"/":["static/chunks/pages/index-5326d2de3b50406e.js"],"/_error":["static/chunks/807-11b54c7cc917fd21.js","static/chunks/pages/_error-45f765bfaf4a27a9.js"],"/_site":[u,"static/chunks/pages/_site-c6faff7090682dc9.js"],"/_site/render/[[...path]]":["static/chunks/d9b2f882-564653cdf6926302.js",u,"static/chunks/360-ed54a4b770b0bd2b.js","static/css/3ffdf6f57bdf8c7f.css","static/chunks/pages/_site/render/[[...path]]-b1a95c1061881279.js"],sortedPages:["/","/_app","/_error","/_site","/_site/render/[[...path]]"]}}(void 0,"(?<siteId>.*)","host",0,"header","/","X-Forwarded-Host","/_site/render?siteId=:siteId&baseUrl=","/:path*","/_site/render/:path*?siteId=:siteId&baseUrl=",0,NaN,"static/chunks/24-3b66365534c6aef4.js"),self.__BUILD_MANIFEST_CB&&self.__BUILD_MANIFEST_CB();