interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    // badge: {
    //   variant: 'info',
    //   text: 'NEW'
    // }
  },
  {
    title: true,
    name: 'Theme'
  },
  /* {
    name: 'Student',
    url: '/student',
    icon: 'fa fa-user'
  }, */
  {
    name: 'Order',
    url: '/order',
    icon: 'fa fa-book'
  },
  {
    name: 'Bill',
    url: '/bill',
    icon: 'fa fa-list-alt'
  },
  {
    name: 'Course',
    url: '/course',
    icon: 'fa fa-cutlery'
  },
  {
    name: 'Drink',
    url: '/drink',
    icon: 'fa fa-glass'
  },
  {
    name: 'Table',
    url: '/table',
    icon: 'fa fa-list'
  },
  {
    name: 'Supplier',
    url: '/supplier',
    icon: 'fa fa-truck'
  },
  {
    name: 'Employee',
    url: '/employee',
    icon: 'fa fa-users'
  },
  {
    name: 'Ingredients',
    url: '/ingredients',
    icon: 'fa fa-tags'
  },
  {
    name: 'Stock Order',
    url: '/stock_order',
    icon: 'fa fa-folder-open-o'
  },
  {
    name: 'Reports',
    url: '/report',
    icon: 'fa fa-bar-chart',
    children: [
      {
        name: 'Total Revenue',
        url: '/report/total',
        icon: 'fa fa-money'
      },
      {
        name: 'Quantity Statistics',
        url: '/report/quantity',
        icon: 'fa fa-filter'
      },
    ]
  },
  // {
  //   name: 'Base',
  //   url: '/base',
  //   icon: 'icon-puzzle',
  //   children: [
  //     {
  //       name: 'Cards',
  //       url: '/base/cards',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Carousels',
  //       url: '/base/carousels',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Collapses',
  //       url: '/base/collapses',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Forms',
  //       url: '/base/forms',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Pagination',
  //       url: '/base/paginations',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Popovers',
  //       url: '/base/popovers',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Progress',
  //       url: '/base/progress',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Switches',
  //       url: '/base/switches',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tables',
  //       url: '/base/tables',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tabs',
  //       url: '/base/tabs',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tooltips',
  //       url: '/base/tooltips',
  //       icon: 'icon-puzzle'
  //     }
  //   ]
  // },
];
