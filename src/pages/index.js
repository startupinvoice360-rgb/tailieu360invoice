import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      {/* Decorative blobs */}
      <div className={styles.blobTopRight} />
      <div className={styles.blobBottomLeft} />

      <div className="container">
        <div className={styles.heroInner}>
          {/* Left: text */}
          <div className={styles.heroText}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} />
              Nền tảng quản lý kinh doanh toàn diện
            </div>

            <Heading as="h1" className={styles.heroTitle}>
              Tài liệu hướng dẫn
              <span className={styles.heroTitleAccent}> 360Invoice</span>
            </Heading>

            <p className={styles.heroSubtitle}>
              {siteConfig.tagline}
            </p>

            <p className={styles.heroDesc}>
              Khám phá đầy đủ hướng dẫn sử dụng ứng dụng 360Invoice — từ đăng nhập,
              quản lý bán hàng, kho hàng, công nợ đến xuất hóa đơn điện tử và báo cáo.
            </p>

            <div className={styles.heroCtas}>
              <Link
                className={styles.ctaPrimary}
                to="/docs/gioi-thieu/intro">
                📖 Xem hướng dẫn sử dụng
              </Link>
              <Link
                className={styles.ctaSecondary}
                href="https://360invoice.vn/">
                Về trang chủ →
              </Link>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNum}>50.000+</span>
                <span className={styles.statLabel}>cửa hàng tin dùng</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statNum}>9</span>
                <span className={styles.statLabel}>tính năng chính</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statNum}>24/7</span>
                <span className={styles.statLabel}>hỗ trợ khách hàng</span>
              </div>
            </div>
          </div>

          {/* Right: dashboard illustration */}
          <div className={styles.heroVisual}>
            <div className={styles.dashboardCard}>
              <div className={styles.dashboardHeader}>
                <div className={styles.dashboardDots}>
                  <span /><span /><span />
                </div>
                <span className={styles.dashboardTitle}>360Invoice Dashboard</span>
              </div>

              <div className={styles.dashboardBody}>
                {/* Metric cards */}
                <div className={styles.metricRow}>
                  <div className={clsx(styles.metricCard, styles.metricBlue)}>
                    <div className={styles.metricIcon}>💰</div>
                    <div>
                      <div className={styles.metricVal}>12,450,000đ</div>
                      <div className={styles.metricLbl}>Doanh thu hôm nay</div>
                    </div>
                  </div>
                  <div className={clsx(styles.metricCard, styles.metricGreen)}>
                    <div className={styles.metricIcon}>📦</div>
                    <div>
                      <div className={styles.metricVal}>238</div>
                      <div className={styles.metricLbl}>Đơn hàng</div>
                    </div>
                  </div>
                </div>

                {/* Mini chart */}
                <div className={styles.chartArea}>
                  <div className={styles.chartLabel}>Doanh thu 7 ngày</div>
                  <svg viewBox="0 0 260 70" className={styles.chartSvg}>
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00AEEF" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#00AEEF" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,50 C20,42 40,55 60,38 C80,22 100,45 120,30 C140,15 160,35 180,20 C200,8 220,25 260,12"
                      fill="none"
                      stroke="#00AEEF"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M0,50 C20,42 40,55 60,38 C80,22 100,45 120,30 C140,15 160,35 180,20 C200,8 220,25 260,12 L260,70 L0,70 Z"
                      fill="url(#chartGrad)"
                    />
                    {[0,60,120,180,260].map((x, i) => (
                      <circle key={i} cx={x} cy={[50,38,30,20,12][i]} r="3" fill="#00AEEF" />
                    ))}
                  </svg>
                </div>

                {/* Quick links */}
                <div className={styles.quickLinks}>
                  {['Bán hàng', 'Kho', 'Hóa đơn', 'Báo cáo'].map((item, i) => (
                    <div key={i} className={styles.quickLink}>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className={clsx(styles.floatBadge, styles.floatBadge1)}>
              Hóa đơn điện tử
            </div>
            <div className={clsx(styles.floatBadge, styles.floatBadge2)}>
              Chữ ký số
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function CtaSection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaGlow} />
      <div className="container">
        <div className={styles.ctaInner}>
          <Heading as="h2" className={styles.ctaHeading}>
            Bắt đầu tìm hiểu 360Invoice ngay
          </Heading>
          <p className={styles.ctaText}>
            Hướng dẫn chi tiết từng bước, dễ hiểu, phù hợp cho cả người mới bắt đầu.
          </p>
          <div className={styles.ctaBtns}>
            <Link className={styles.ctaBtnWhite} to="/docs/gioi-thieu/intro">
              Xem tài liệu hướng dẫn
            </Link>
            <Link className={styles.ctaBtnOutline} href="https://360invoice.vn/">
              Tải ứng dụng miễn phí
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Tài liệu ${siteConfig.title}`}
      description="Hướng dẫn sử dụng 360Invoice - Phần mềm quản lý kinh doanh và bán hàng toàn diện">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <CtaSection />
      </main>
    </Layout>
  );
}
