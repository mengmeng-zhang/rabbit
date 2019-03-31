export default (() => {
  const routeNavrPath = {
    logo: '',
    path: [
      {
        title: '更新日志',
        router: '/'
      },
      {
        title: '开发指南'
      },
      {
        name: '安装',
        router: '/',
        mdName: 'install'
      },
      {
        name: '快速上手',
        router: '/started',
        mdName: 'started'
      },
      {
        title: '组件'
      },
      {
        class: 'Basic'
      },
      {
        name: 'Layout 布局',
        router: '/'
      },
      {
        name: 'Container 布局容器',
        router: '/'
      },
      {
        name: 'Color 色彩',
        router: '/'
      },
      {
        name: 'Typography 字体',
        router: '/'
      },
      {
        name: 'Border 边框',
        router: '/'
      },
      {
        name: 'Icon 图标',
        router: '/icon',
        mdName: 'icon'
      },
      {
        name: 'Button 按钮',
        router: '/button',
        mdName: 'button'
      },
      {
        class: 'Form'
      }
    ]
  }
  return routeNavrPath
})()
