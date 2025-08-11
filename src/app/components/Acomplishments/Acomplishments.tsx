"use client";

import React from 'react';
import styles from './Acomplishments.module.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const data = [
  { number: 7, text: 'Clients | Projects' },
  { number: 3, text: 'Years of Experience' },
  { number: 4, text: 'Programming Languages' },
  { number: 2, text: 'Open Source' }
];

const Acomplishments = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section className={styles.section} ref={ref}>
      <h2 className={styles.sectionTitle}>Personal Achievements</h2>
      <div className={styles.boxes}>
        {data.map((card, index) => (
          <div className={styles.box} key={index}>
            <h3 className={styles.boxNum}>
              {inView && (
                <CountUp start={0} end={card.number} duration={2} separator="," decimal="." />
              )}
              +
            </h3>
            <p className={styles.boxText}>{card.text}</p>
          </div>
        ))}
      </div>
      <div className={styles.divider}></div>
    </section>
  );
};

export default Acomplishments;
