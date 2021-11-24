var config = {
	title: 'rayuse',
	description: '一些工具函数',
	themeConfig: {
		repo: 'SuperRay3/utils',
		docsDir: 'packages',
		docsBranch: 'main',
    editLinks: true,
    editLinkText: '在 Github 上编辑此页面',
    lastUpdated: '上次更新时间',
		nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guide' },
    ],
		sidebar: [
			{
				text: '@rayuse/utils',
				link: '/utils/README'
			},
			{
				text: '@rayuse/array',
				link: '/array/README'
			},
		]
	}
}

module.exports = config