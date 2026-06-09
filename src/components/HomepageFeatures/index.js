import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Quản lý Mua và bán hàng',
    icon: '🛒',
    Svg: require('@site/static/img/quan-ly-mua-va-ban-hang.svg').default,
    description: 'Quản lý từ offline đến online, bán hàng đa kênh, đa nền tảng',
      
  },
  {
    title: 'Kho và kiểm kho',
    icon: '📦',
    Svg: require('@site/static/img/kho-kiem-kho.svg').default,
    description: 'Quản lý số lượng xuất, nhập, tồn hàng hóa chính xác',
    link: 'https://360invoice.vn/',
  },
  {
    title: 'Quản lý Công nợ',
    icon: '💳',
    Svg: require('@site/static/img/quan-ly-cong-no.svg').default,
    description: 'Quản lý công nợ của khách hàng, nhà cung cấp và đối tác',
    link: 'https://360invoice.vn/',
  },
  {
    title: 'Báo cáo',
    icon: '📊',
    Svg: require('@site/static/img/bao-cao.svg').default,
    description: 'Xem báo cáo bán hàng, doanh thu, công nợ trực quan',
    link: 'https://360invoice.vn/',
  },
  {
    title: 'Lương và KPI',
    icon: '👥',
    Svg: require('@site/static/img/luong-va-kpi.svg').default,
    description: 'Định nghĩa KPI và tự động tính lương cho nhân viên',
    link: 'https://360invoice.vn/',
  },
  {
    title: 'Dòng tiền',
    icon: '💹',
    Svg: require('@site/static/img/dong-tien.svg').default,
    description: 'Theo dõi và quản lý dòng tiền kinh doanh chính xác',
    link: 'https://360invoice.vn/',
  },
  {
    title: 'Hóa đơn điện tử',
    icon: '🧾',
    Svg: require('@site/static/img/hoa-don-dien-tu.svg').default,
    description: 'Xuất và quản lý hóa đơn nhanh chóng đúng chuẩn',
    link: 'https://360invoice.vn/',
  },
  {
    title: 'Nhân viên',
    icon: '🏢',
    Svg: require('@site/static/img/nhan-vien.svg').default,
    description: 'Quản lý và đánh giá hiệu quả làm việc nhân viên',
    link: 'https://360invoice.vn/',
  },
  {
    title: 'Chữ ký số',
    icon: '🔐',
    Svg: require('@site/static/img/chu-ky-so.svg').default,
    description: 'Ký và xác thực chứng từ, hóa đơn điện tử an toàn',
    link: 'https://360invoice.vn/',
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.featureLink}
      >
        <div className={styles.featureCard}>
          <div className={styles.featureIconWrap}>
            <Svg className={styles.featureSvg} role="img" />
          </div>

          <div className={styles.featureContent}>
            <Heading as="h3" className={styles.featureTitle}>
              {title}
            </Heading>
            <p className={styles.featureDesc}>{description}</p>
          </div>

          <div className={styles.featureArrow}>→</div>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.section}>
      <div className="container">
        {/* Section header */}
        <div className={styles.sectionHeader}>
          <div className={styles.sectionBadge}>Tính năng</div>
          <Heading as="h2" className={styles.sectionTitle}>
            Tính năng chính của 360Invoice
          </Heading>
          <p className={styles.sectionSubtitle}>
            Bộ công cụ quản lý toàn diện giúp cửa hàng của bạn vận hành hiệu quả hơn,
            tiết kiệm thời gian và tối ưu chi phí.
          </p>
        </div>

        {/* Feature grid */}
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
