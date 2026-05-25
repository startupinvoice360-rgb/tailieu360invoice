
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '360Invoice',
  tagline: 'Quản lý kinh doanh và bán hàng tối ưu chi phí nhất',
  favicon: 'img/360invoice.png',
  future: {
    v4: true,
  },

  url: 'https://tailieu.360invoice.vn',

  baseUrl: '/',
  trailingSlash: false,
  organizationName: 'startupinvoice360-rgb',
  projectName: 'tailieu360invoice',
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '360Invoice',
        logo: {
          alt: 'My Site Logo',
          src: 'img/360invoice.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Hướng dẫn sử dụng',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Về 360Invoice',
            items: [
              {
                label: 'Tải ứng dụng',
                href: 'https://360invoice.vn/',
              },
              {
                label: 'Về chúng tôi',
                href: 'https://360invoice.vn/',
              },
              {
                label: 'Tính năng',
                href: 'https://360invoice.vn/',
              },
              {
                label: 'Giá cả',
                href: 'https://360invoice.vn/',
              },
            ],
          },
          {
            title: 'Hướng dẫn sử dụng',
            items: [
              {
                label: 'Giới thiệu',
                to: '/docs/gioi-thieu/intro',
              },
              {
                label: 'Hướng dẫn App',
                to: '/docs/su-dung-360invoice/app-360invoice/dang-nhap',
              },
              {
                label: 'Hướng dẫn Web',
                to: '/docs/su-dung-360invoice/wep-360invoice/huong-dan-dang-nhap',
              },
              {
                label: 'Câu hỏi thường gặp',
                href: 'https://360invoice.vn/',
              },
            ],
          },
          {
            title: 'Liên kết',
            items: [
              {
                label: 'Trang chủ 360Invoice',
                href: 'https://360invoice.vn/',
              },
              {
                label: 'Email hỗ trợ',
                href: 'mailto:360invoice.ad@gmail.com',
              },
              {
                label: 'Hotline',
                href: 'tel:0911111826',
              },
              {
                label: 'Chat hỗ trợ',
                href: 'https://360invoice.vn/ho-tro',
              },
            ],
          },
          {
            title: 'Công ty',
            items: [
              {
                label: 'Công ty Cổ phần ĐTTM Trúc Gia Trang',
                href: 'https://360invoice.vn',
              },
              {
                label: 'MST: 0107296617',
                href: '#',
              },
              {
                label: '117 Trần Duy Hưng, Yên Hoà, Hà Nội',
                href: '#',
              },
            ],
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
