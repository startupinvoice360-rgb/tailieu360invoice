import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/en/blog',
    component: ComponentCreator('/en/blog', '39c'),
    exact: true
  },
  {
    path: '/en/markdown-page',
    component: ComponentCreator('/en/markdown-page', '211'),
    exact: true
  },
  {
    path: '/en/docs',
    component: ComponentCreator('/en/docs', 'c40'),
    routes: [
      {
        path: '/en/docs',
        component: ComponentCreator('/en/docs', '224'),
        routes: [
          {
            path: '/en/docs',
            component: ComponentCreator('/en/docs', '436'),
            routes: [
              {
                path: '/en/docs/category/hướng-dẫn-sử-dụng-app-360invoice',
                component: ComponentCreator('/en/docs/category/hướng-dẫn-sử-dụng-app-360invoice', '1a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/category/hướng-dẫn-sử-dụng-website-360invoice',
                component: ComponentCreator('/en/docs/category/hướng-dẫn-sử-dụng-website-360invoice', '11b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/category/sử-dụng-360invoice',
                component: ComponentCreator('/en/docs/category/sử-dụng-360invoice', '0ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/category/tổng-quan-về-360invoice',
                component: ComponentCreator('/en/docs/category/tổng-quan-về-360invoice', 'f14'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/gioi-thieu/360-invoice-la-gi',
                component: ComponentCreator('/en/docs/gioi-thieu/360-invoice-la-gi', '4b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/gioi-thieu/360invoice-danh-cho-ai',
                component: ComponentCreator('/en/docs/gioi-thieu/360invoice-danh-cho-ai', '88c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/gioi-thieu/cam-ket-dong-hanh-and-kenh-ho-tro',
                component: ComponentCreator('/en/docs/gioi-thieu/cam-ket-dong-hanh-and-kenh-ho-tro', 'afd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/gioi-thieu/gia-tri-cot-loi-ma-360invoice-mang-lai',
                component: ComponentCreator('/en/docs/gioi-thieu/gia-tri-cot-loi-ma-360invoice-mang-lai', '896'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/gioi-thieu/intro',
                component: ComponentCreator('/en/docs/gioi-thieu/intro', '22c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/gioi-thieu/tong-quan-he-sinh-thai-tinh-nang',
                component: ComponentCreator('/en/docs/gioi-thieu/tong-quan-he-sinh-thai-tinh-nang', 'ab6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/su-dung-360invoice/app-360invoice/dang-nhap',
                component: ComponentCreator('/en/docs/su-dung-360invoice/app-360invoice/dang-nhap', 'e04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/su-dung-360invoice/app-360invoice/dang-xuat',
                component: ComponentCreator('/en/docs/su-dung-360invoice/app-360invoice/dang-xuat', 'ad4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/su-dung-360invoice/app-360invoice/dich-vu-giat-la',
                component: ComponentCreator('/en/docs/su-dung-360invoice/app-360invoice/dich-vu-giat-la', '0d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/su-dung-360invoice/app-360invoice/dien-may-dien-thoai-laptop-dien-tu-so',
                component: ComponentCreator('/en/docs/su-dung-360invoice/app-360invoice/dien-may-dien-thoai-laptop-dien-tu-so', '1d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/su-dung-360invoice/app-360invoice/giao-duc-day-hoc-gia-su-trung-tam',
                component: ComponentCreator('/en/docs/su-dung-360invoice/app-360invoice/giao-duc-day-hoc-gia-su-trung-tam', 'de9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/su-dung-360invoice/app-360invoice/hieu-thuoc-quay-thuoc',
                component: ComponentCreator('/en/docs/su-dung-360invoice/app-360invoice/hieu-thuoc-quay-thuoc', 'f09'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/su-dung-360invoice/app-360invoice/khu-vui-choi',
                component: ComponentCreator('/en/docs/su-dung-360invoice/app-360invoice/khu-vui-choi', '2f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/su-dung-360invoice/app-360invoice/nha-hang-quan',
                component: ComponentCreator('/en/docs/su-dung-360invoice/app-360invoice/nha-hang-quan', 'd6e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/su-dung-360invoice/app-360invoice/nuoc-hoa-my-pham-skincare',
                component: ComponentCreator('/en/docs/su-dung-360invoice/app-360invoice/nuoc-hoa-my-pham-skincare', 'df7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/su-dung-360invoice/app-360invoice/spa-salon-massage-lam-dep',
                component: ComponentCreator('/en/docs/su-dung-360invoice/app-360invoice/spa-salon-massage-lam-dep', '12d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/su-dung-360invoice/app-360invoice/sua-chua-lap-dat-dien-nuoc-dien-lanh',
                component: ComponentCreator('/en/docs/su-dung-360invoice/app-360invoice/sua-chua-lap-dat-dien-nuoc-dien-lanh', 'd52'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/su-dung-360invoice/app-360invoice/tap-hoa-sieu-thi-dai-ly',
                component: ComponentCreator('/en/docs/su-dung-360invoice/app-360invoice/tap-hoa-sieu-thi-dai-ly', 'aaf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/su-dung-360invoice/app-360invoice/thoi-trang-giay-dep-lam-dep',
                component: ComponentCreator('/en/docs/su-dung-360invoice/app-360invoice/thoi-trang-giay-dep-lam-dep', 'd71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/su-dung-360invoice/app-360invoice/thue-nha-mat-bang-kho-bai',
                component: ComponentCreator('/en/docs/su-dung-360invoice/app-360invoice/thue-nha-mat-bang-kho-bai', '259'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/su-dung-360invoice/app-360invoice/van-tai-xe-tai-xe-ship',
                component: ComponentCreator('/en/docs/su-dung-360invoice/app-360invoice/van-tai-xe-tai-xe-ship', 'cc5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/su-dung-360invoice/wep-360invoice/huong-dan-dang-nhap',
                component: ComponentCreator('/en/docs/su-dung-360invoice/wep-360invoice/huong-dan-dang-nhap', '854'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/en/docs/su-dung-360invoice/wep-360invoice/huong-dan-dang-xuat',
                component: ComponentCreator('/en/docs/su-dung-360invoice/wep-360invoice/huong-dan-dang-xuat', '96b'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/en/',
    component: ComponentCreator('/en/', 'd3c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
