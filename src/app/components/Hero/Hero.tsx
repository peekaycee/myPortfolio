"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import Button from '../Button/Button';
import BackgroundAnimation from '../BackgroundAnimation/BackgroundAnimation';

const Hero = () => {
  return (
    <>
      <section className={`${styles.section}`}>
        <div className={styles.leftSection}>
          <h1 className={`${styles.sectionTitle}`}>
            Hello!🖐<br />
            I am Kalu
          </h1>
          <p className={styles.sectionText}>
            I design and develop aesthetically beautiful and responsive software applications with prowess and dexterity.
          </p>
          <a href="/cv/KALU-KALU-RESUME-LATEST-FendEng.pdf" download>
            <Button>
              Download Resume
            </Button>         
          </a>
        </div>
        <div className={styles.rightSection}>
          <BackgroundAnimation />
        </div>
      </section>

      <motion.div
        className={`${styles.sectionDivider} ${styles.colorAlt}`}
        animate={{
          y: [0, -100, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
      />
    </>
  );
};

export default Hero;
