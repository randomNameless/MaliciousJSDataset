const n=n=>{var e,l,o;const i=null==n?void 0:n.openaiIntegration;return Boolean((null==i?void 0:i.enabled)&&(null==i||null==(e=i.properties)?void 0:e.assistantId)&&!(null!=i&&null!=(l=i.properties)&&l.quotaExceeded)&&!(null!=i&&null!=(o=i.properties)&&o.hasInsufficientPermissions))};export{n as i};