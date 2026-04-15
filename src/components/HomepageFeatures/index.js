import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Quản lý Mua và bán hàng',
    Svg: require('@site/static/img/quan-ly-mua-va-ban-hang.svg').default,
    description: (
      <>
Quản lý từ offline đến online, bán hàng đa kênh, đa nền tảng      </>
    ),
  },
  {
    title: 'Kho và kiểm kho',
    Svg: require('@site/static/img/kho-kiem-kho.svg').default,
    description: (
      <>
Quản lý số lượng xuất, nhập, tồn hàng hóa chính xác      </>
    ),
  },
  {
    title: 'Quản lý Công nợ',
    Svg: require('@site/static/img/quan-ly-cong-no.svg').default,
    description: (
      <>
Quản lý công nợ của khách hàng, nhà cung cấp và đối tác      </>
    ),
  },
  {
    title: 'Báo cáo',
    Svg: require('@site/static/img/bao-cao.svg').default,
    description: (
      <>
Xem báo cáo bán hàng, doanh thu, công nợ trực quan      </>
    ),
  },
  {
    title: 'Lương và KPI',
    Svg: require('@site/static/img/luong-va-kpi.svg').default,
    description: (
      <>
Định nghĩa KPI và tự động tính lương cho nhân viên      </>
    ),
  },
  {
    title: 'Dòng tiền',
    Svg: require('@site/static/img/dong-tien.svg').default,
    description: (
      <>
Theo dõi và quản lý dòng tiền kinh doanh chính xác      </>
    ),
  },
  {
    title: 'Hóa đơn điện tử',
    Svg: require('@site/static/img/hoa-don-dien-tu.svg').default,
    description: (
      <>
Xuất và quản lý hóa đơn nhanh chóng đúng chuẩn      </>
    ),
  },

  {
    title: 'Nhân viên',
    Svg: require('@site/static/img/nhan-vien.svg').default,
    description: (
      <>
Quản lý và đánh giá hiệu quả làm việc nhân viên      </>
    ),
  },
  {
    title: 'Chữ ký số',
    Svg: require('@site/static/img/chu-ky-so.svg').default,
    description: (
      <>
Ký và xác thực chứng từ, hóa đơn điện tử an toàn      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
