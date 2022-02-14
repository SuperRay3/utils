var config = {
	title: 'rayuse',
	description: '一些工具函数',
	base: '/utils/',
	themeConfig: {
		repo: 'SuperRay3/utils',
		docsDir: 'packages',
		docsBranch: 'main',
    editLinks: true,
    editLinkText: '在 Github 上编辑此页面',
    lastUpdated: '上次更新时间',
		nav: [
      { text: '快速开始', link: '/guide' },
      { text: '首页', link: '/' },
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
			{
				text: '@rayuse/composition',
				link: '/composition/README',
				children: [
					{ text: 'useAMap', link: '/composition/useAMap/README' },
					{ text: 'useStore', link: '/composition/useStore/README' }
				]
			}
		]
	},
	head: [
    ['link', { rel: 'icon', href: '/favicon.png', type: 'image/png' }],
    ['meta', { name: 'author', content: 'SuperRay3' }],
    ['meta', { property: 'og:title', content: 'rayuse' }],
    ['meta', { property: 'og:description', content: '一些工具函数' }],
  ],
}

module.exports = config
