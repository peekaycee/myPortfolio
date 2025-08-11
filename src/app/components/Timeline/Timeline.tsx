'use client';
import React, { useRef } from 'react';
import styles from './Timeline.module.css';
import { TimeLineData } from '../../constants/constants'
// const data = [
//   { year: '2020', text: 'Started my journey' },
//   { year: '2021', text: 'Worked as a freelance developer' },
//   { year: '2022', text: 'Founded my own startup' },
//   { year: '2023', text: 'Scaled products internationally' },
//   { year: '2024', text: 'Exploring AI-driven solutions' },
//   { year: '2024', text: 'Exploring AI-driven solutions' },
//   { year: '2024', text: 'Exploring AI-driven solutions' },
// ];

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 300;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={styles.timelineSection} id={'about'}>
      <div className={`${styles.sectionDivider} ${styles.divider}`} />
      <h2 className={styles.sectionTitle}>About Me</h2>
      <p className={styles.sectionText}>
        I am a Frontend Engineer skilled in JavaScript, TypeScript, and Next.js, with backend experience in Node, Express, mongoDb and Postgres. I create responsive, accessible interfaces using clean, cross-browser code, and collaborate effectively while staying current with emerging frontend trends.
      </p>

      <div className={styles.carouselWrapper}>
        <button
          className={`${styles.navButton} ${styles.leftButton}`}
          onClick={() => scroll('left')}
        >
          ‹
        </button>

        <div className={styles.carousel} ref={containerRef}>
          {TimeLineData.map((item, index) => (
            <div key={index} className={styles.card}>
              <svg
                width={208}
                height={6}
                viewBox="0 0 208 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                  fill="url(#paint0_linear)"
                  fillOpacity="0.33"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="-4.30412e-10"
                    y1="0.5"
                    x2="208"
                    y2="0.500295"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop
                      offset="0.79478"
                      stopColor="white"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>
              </svg>
              <h3 className={styles.year}>{item.year}</h3>
              <p className={styles.text}>{item.text}</p>
            </div>
          ))}
        </div>

        <button
          className={`${styles.navButton} ${styles.rightButton}`}
          onClick={() => scroll('right')}
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default Timeline;
