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
      
      <img className={styles.heroImage} src="https://s3-alpha-sig.figma.com/img/9f0d/b980/ed5e533fef776f279001b95639ea41fc?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=U347tFTB6TIbOxlazHsTa~10FgMyWgR400P-Chk1NcsX4kmFYsG8FGmQFXfq1MUoaCoagBJyvp7fUqU7c1U5dBu0LmFbuayGp-D7Mki~st5BFw0ECnW-sg0rL889XDifwvpSWLqPd74bCIUuGhSBzVjP7K6Mrhab8-P6jxLlXejXiwOKRqLMoGaeUI1bB6gHFzXPPIy3FYqGcUmN5A~03V5vWthhSObjc07NcAp9w3mbCbQXOJhwUEvjQmEnXEpUDGkwsVYmq46EtLHd~D8XDdWrSzgR~FedGpSRLCX0wsZnlMNZaY74QBjdOTPaaqKYLA2kP6CJrghCVNlkP2U0wg__" alt="img" />
     
    </section>
  );
};

export default HeroSection;