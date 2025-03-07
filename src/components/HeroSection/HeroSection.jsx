import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Axtardığınız hər məhsul indi 
          <span className={styles.highlightText}> tək ünvanda</span>
        </h1>
        <p className={styles.heroDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua.
        </p>
        <div className={styles.buttonGroup}>
          <button className={styles.primaryButton}>Məhsullara bax</button>
          <button className={styles.secondaryButton}>Mağazalara bax</button>
        </div>
      </div>
      
      <img className={styles.heroImage} src="/public/image.png" alt="" />
     
    </section>
  );
};

export default HeroSection;