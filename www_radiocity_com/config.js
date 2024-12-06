if(typeof _cls_config === "undefined") _cls_config = {};

_cls_config.enabledByChance = 1;

//Update this to the report URI of the application you are sending data to. See example below:
_cls_config.reportURI = "https://report.msg.gbqofs.io/reporting/01791287-4580-4fa5-ac5f-62939efd6d7d/cls_report";

//186470 186939
/* BEGIN ajax */
_cls_config.ajaxRecordMetadata="never";
_cls_config.ajaxRecordRequestBody="never";
_cls_config.ajaxRecordRequestHeaders ="never";
_cls_config.ajaxRecordResponseBody="never";
_cls_config.ajaxRecordResponseHeaders ="never";
_cls_config.ajaxRecordStats="always";
_cls_config.interceptAjax=true;
/* END ajax */

/*BEGIN MASKING*/

//Value Masking (INPUT)
_cls_config.valueMaskingMode = "whitelist";
_cls_config.maskWhitelistValueById = ["global-search-input"];
_cls_config.maskBlacklistValueById = []; //Only listed inputs with a matching Id are masked , This is only applied when valueMaskingMode is set to 'blacklist'.
_cls_config.maskWhitelistValueByClass = []; //Everything is masked EXCEPT FOR listed inputs that match a class , This is only applied when valueMaskingMode is set to 'whitelist'.
_cls_config.maskBlacklistValueByClass = ["sessioncamexclude"]; //Only listed inputs with a matching Class are masked , This is only applied when valueMaskingMode is set to 'blacklist'.
_cls_config.valueWhitelistMaskSimpleSelector = []; //EVERYTHING is masked EXCEPT FOR this list of selectors , This is only applied when valueMaskingMode is set to 'whitelist'.
_cls_config.valueBlacklistMaskSimpleSelector = []; //Only listed inputs with a matching selector are masked. , This is only applied when valueMaskingMode is set to 'blacklist'.

//DOM Masking
_cls_config.domMaskingMode = "blacklist";
_cls_config.domWhitelistMaskContentById = []; //ALL text is masked EXCEPT FOR this list of Ids. This supports a single wildcard, such as *. This is only applied when domMaskingMode is set to 'whitelist'.
_cls_config.domBlacklistMaskContentById = []; //ONLY text matched to this list of Ids is masked. This supports a single wildcard, such as *. This is only applied when domMaskingMode is set to 'blacklist'.
_cls_config.domWhitelistMaskContentByClass = []; //ALL text is masked EXCEPT FOR this list of classes. This supports a single wildcard, such as *. This is only applied when domMaskingMode is set to 'whitelist'.
_cls_config.domBlacklistMaskContentByClass = ["sessioncamhidetext","sessioncamexclude"]; //ONLY text matched to this list of classes is masked. This supports a single wildcard, such as *. This is only applied when domMaskingMode is set to 'blacklist'.
_cls_config.domWhitelistMaskSimpleSelector = []; //ALL text is masked, EXCEPT FORthe listed selectors. This is only applied when domMaskingMode is set to 'whitelist'.
_cls_config.domBlacklistMaskSimpleSelector = []; //ONLY text matched to this list of selectors is masked.This is only applied when domMaskingMode is set to 'blacklist'.

/*END MASKING*/

_cls_config.resourcesRecordEnabled = true;
_cls_config.resourcesRecordCount = 5;
_cls_config.resourcesRecordChance = 1;
_cls_config.resourcesRecordAllowCors = true;
_cls_config.iframesAutoInject = true;
_cls_config.recordMouseMoves = true;
_cls_config.recordScrolls = true;
_cls_config.recordHovers = true;
_cls_config.clientAttributesEnabled = true;
_cls_config.clientAttributeMaxLength = 500;
_cls_config.collectStruggles = true;
_cls_config.recordShadowDom=true;
_cls_config.recordScrollReach=true;
_cls_config.interceptThirdPartyAttributes=true;
_cls_config.collectFormStruggles=true;

_cls_config.domFormAnalysisReporting=true;
_cls_config.domFormValidationTracking=true;
//98468 129970
_cls_config.captureGlobalObjectsOnSegmentChange=true;
_cls_config.captureGlobalObjects=["msg_data.event.detail", "msg_data.global", "msg_data.search", "msg_data.venue"];

//page perfomance
_cls_config.resourceTimingRecordEnabled=true;
_cls_config.resourceTimingRecordEnabledByChance=0.05;
_cls_config.webVitalsRecordEnabled=true;

_cls_config.recordScrollReach=true;

// inserted during detector V7 upgrade
_cls_config.initDetectorOnInteractive = true;
_cls_config.detectorPath = 'https://cdn.gbqofs.com/sv/a/';