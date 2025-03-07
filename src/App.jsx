import React from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import ProductsSection from './components/ProductsSection/ProductsSection';
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      
      <header className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}></div>
          <span className={styles.logoText}>Your Logo</span>
        </div>
        <nav className={styles.navigation}>
          <a href="#" className={styles.navLinkActive}>Ana səhifə</a>
          <a href="#" className={styles.navLink}>Lorem</a>
          <a href="#" className={styles.navLink}>Lorem</a>
          <a href="#" className={styles.navLink}>Mağazalar</a>
        </nav>
        <div className={styles.actions}>
          <button className={styles.searchButton}>
            <span className={styles.searchIcon}></span>
          </button>
          <button className={styles.cartButton}>
            <span className={styles.cartIcon}></span>
            <span className={styles.cartBadge}>2</span>
          </button>
          <div className={styles.language}>
            <span>Az</span>
          </div>
        </div>
      </header>
      
      <main>
        <HeroSection />
        <ProductsSection />
      </main>
    </div>
  );
};

export default App;