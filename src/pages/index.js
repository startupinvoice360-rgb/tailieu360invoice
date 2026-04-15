import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <Heading as="h1" className={styles.heroTitle}>
              {siteConfig.title}
            </Heading>
            <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
            <p className={styles.heroDescription}>
              Nền tảng quản lý kinh doanh toàn diện, giúp bạn quản lý bán hàng, kho hàng,
              công nợ, nhân viên và tối ưu chi phí một cách dễ dàng.
            </p>
            <div className={styles.buttons}>
              <Link
                className={clsx('button', styles.buttonPrimary)}
                to="/docs/gioi-thieu/intro">
                Tài liệu hưỡng dẫn sử dụng
              </Link>
              <Link
                className={clsx('button', styles.buttonSecondary)}
                to="/docs/gioi-thieu/intro">
                Tìm hiểu thêm
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <svg viewBox="0 0 400 300" className={styles.illustration}>
              <rect width="400" height="300" fill="none" />
              <circle cx="200" cy="150" r="120" fill="#00AEEF" opacity="0.1" />
              <path d="M 100 150 L 150 100 L 200 130 L 250 80 L 300 150" stroke="#00AEEF" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="100" cy="150" r="5" fill="#00AEEF" />
              <circle cx="150" cy="100" r="5" fill="#00AEEF" />
              <circle cx="200" cy="130" r="5" fill="#00AEEF" />
              <circle cx="250" cy="80" r="5" fill="#00AEEF" />
              <circle cx="300" cy="150" r="5" fill="#00AEEF" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Tài liệu ${siteConfig.title}`}
      description="Hướng dẫn sử dụng 360Invoice - Phần mềm quản lý kinh doanh và bán hàng toàn diện">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className={styles.ctaSection}>
          <div className="container">
            <Heading as="h2" className={styles.ctaTitle}>Bắt đầu ngay hôm nay</Heading>
            <p className={styles.ctaDescription}>
              Khám phá các hướng dẫn chi tiết và tài liệu đầy đủ để sử dụng 360Invoice một cách hiệu quả nhất.
            </p>
            <div className={styles.ctaButtons}>
              <Link
                className={clsx('button', styles.buttonPrimary, styles.buttonLarge)}
                to="/docs/su-dung-360invoice/app-360invoice/dang-nhap">
                Bắt đầu hướng dẫn
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
