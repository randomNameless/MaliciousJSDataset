//繝ｭ繝ｼ繧ｫ繝ｫ繧ｹ繝医Ξ繝ｼ繧ｸ邂｡逅�
var StorageConstant = {
    History: {
		Price: 'his_prices',
    	PriceOld: 'his_price_ls',
    	Badge: 'his_badges',
    	Update: 'his_updated',
    	Disabled: 'his_disabled',
    	Migrated: 'his_migrated',
    	Merged: 'his_merged',
        Push: 'his_push',
	}
};

//繝ｭ繝ｼ繧ｫ繝ｫ繧ｹ繝医Ξ繝ｼ繧ｸ蟇ｾ蠢懷愛螳�
var LocalStorageEnabled = (function() {
	return typeof localStorage !== 'undefined'
	   &&        'localStorage' in window
	   && window['localStorage'] !== null;
})();
