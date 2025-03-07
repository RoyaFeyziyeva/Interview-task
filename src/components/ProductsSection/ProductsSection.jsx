import React from 'react';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import styles from './ProductsSection.module.css';

const ProductsSection = () => {
  
  const products = [
    { id: 1, name: 'Drel akumlyator ilə', price: '180.99', oldPrice: '199.99', isBestseller: false, isNew: true },
    { id: 2, name: 'Drel akumlyator ilə', price: '180.99', oldPrice: '199.99', isBestseller: true, isNew: false },
    { id: 3, name: 'Drel akumlyator ilə', price: '180.99', oldPrice: '199.99', isBestseller: true, isNew: false },
    { id: 4, name: 'Drel akumlyator ilə', price: '180.99', oldPrice: '199.99', isBestseller: false, isNew: false },
    { id: 5, name: 'Drel akumlyator ilə', price: '180.99', oldPrice: '199.99', isBestseller: false, isNew: true },
  
  ];

  return (
    <section className={styles.productsSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Yeni gələnlər</h2>
        <div className={styles.tabs}>
          <button className={styles.tabActive}>Endirimdə olanlar</button>
          <button className={styles.tab}>Ən çox satan</button>
        </div>
        <a href="#" className={styles.viewAllLink}>Hamısına bax</a>
      </div>
      
      <div className={styles.productGrid}>
        {products.map(product => (
          <div key={product.id} className={styles.productCard}>
            {product.isNew && <span className={styles.newBadge}>Yeni məhsul</span>}
            {product.isBestseller && <span className={styles.bestsellerBadge}>ən çox satan</span>}
            <div className={styles.productImageContainer}>
              <img src="https://s3-alpha-sig.figma.com/img/66a3/dd62/09e0ee091658ffba0ed2bc35c00f065e?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=U8XE3TBJR7ek50ybPrgPJdKLJgoHy6ZCWcZVEDv7Zm6HHCXK5-bc~lHqZ8KpAdk-3nRR7QFsq5HXCUpJRI2XP5U285Isus7W-j43BKIICJcUNEUjbaO~swB76c4S4x4M8kshSaO5mkl9WuO9a9FY~jNjW~HHRPx-bbOBZh95ATM81wCD1zzlJ4bRt-KRjTMZOlog7ZvxfdhIynhainWx8BKKNRvmNu9Er725900pv9blIRSyoRxWGllAeIHewrSJ4HYTumRvXBv0pyzG2uLC07zzv~3rwGNP9MUCHWz02pr-pmp2iTKsvLfp59hOjDgFSKw0MFquG7YZrTUweW9D5w__" alt="Drill" className={styles.productImage} />
            </div>
            <div className={styles.productActions}>
              <button className={styles.cartAction}>
                <ShoppingCart size={20} />
              </button>
              <div className={styles.quantityControl}>
                <button className={styles.quantityButton}>
                  <Minus size={16} />
                </button>
                <span className={styles.quantity}>1</span>
                <button className={styles.quantityButton}>
                  <Plus size={16} />
                </button>
              </div>
              <button className={styles.addToCartButton}>Səbətə əlavə elə</button>
            </div>
            <div className={styles.productInfo}>
              <h3 className={styles.productName}>{product.name}</h3>
              <div className={styles.priceContainer}>
                <span className={styles.price}>{product.price}₼</span>
                {product.oldPrice && <span className={styles.oldPrice}>{product.oldPrice}₼</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;