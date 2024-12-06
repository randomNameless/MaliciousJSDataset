/* Configurations */
window.ui.AdServiceConfig.configurations = {
	visibilityLookahead: 250
};

/* Exclusion Rules */
window.ui.AdServiceConfig.exclusionRules = {
	'_prio': 'top',
	'sitebar': {
		'conditions': [{
			'check': 'slot',
			'slot': 'top'
		}, 0],
		'rules': [{
			'action': 'disableSlot',
			'slot': 'right'
		}, {
			'action': 'enableSlot',
			'slot': 'top_x'
		}, {
			'action': 'setParam',
			'slot': 'contentad',
			'name': 'prioad',
			'value': 'sitebar'
		}, {
			'action': 'setParam',
			'slot': 'contentad_2',
			'name': 'prioad',
			'value': 'sitebar'
		}, {
			'action': 'setParam',
			'slot': 'contentad_4',
			'name': 'prioad',
			'value': 'sitebar'
		}, {
			'action': 'setParam',
			'slot': 'contentad_6',
			'name': 'prioad',
			'value': 'sitebar'
		}, {
			'action': 'setParam',
			'slot': 'contentad_8',
			'name': 'prioad',
			'value': 'sitebar'
		}, {
			'action': 'setParam',
			'slot': 'contentad_10',
			'name': 'prioad',
			'value': 'sitebar'
		}, 0],
		_: 0
	},
	_: 0
};

/* prebid.js */
window.ui.AdServiceConfig.prebidRules = {
	enabled: false
};