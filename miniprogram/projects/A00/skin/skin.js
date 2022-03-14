module.exports = {
	PID: 'A00', // 家政

	NAV_COLOR: '#000000',
	NAV_BG: '#ffffff',

	MEET_NAME: '预约', 
 
	MENU_ITEM: ['首页', '预约日历', '我的'], // 第1,4,5菜单

	NEWS_CATE: '1=小黑板|leftpic,2=服务介绍|rightpic',
	MEET_TYPE: '1=保洁清洗|leftbig2,2=保姆月嫂|leftbig,3=家庭维修|leftbig3,4=搬家安装|upimg',

	DEFAULT_FORMS: [{
			type: 'line',
			title: '姓名',
			desc: '请填写您的姓名',
			must: true,
			len: 50,
			onlySet: {
				mode: 'all',
				cnt: -1
			},
			selectOptions: ['', ''],
			mobileTruth: true,
			checkBoxLimit: 2,
		},
		{
			type: 'line',
			title: '手机',
			desc: '请填写您的手机号码',
			must: true,
			len: 50,
			onlySet: {
				mode: 'all',
				cnt: -1
			},
			selectOptions: ['', ''],
			mobileTruth: true,
			checkBoxLimit: 2,
		}
	]
}