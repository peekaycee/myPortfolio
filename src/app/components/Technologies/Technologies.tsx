"use client";

import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import styles from "./Technologies.module.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const listVariants = {
  visible: {
    transition: { staggerChildren: 0.5 },
  },
  hidden: {},
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Technologies = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section id="tech" className={styles.section}>
      <div className={`${styles.sectionDivider} ${styles.divider}`} />
      <h2 className={styles.sectionTitle}>Technologies</h2>
      <p className={styles.sectionText}>
        I have worked with a range of technologies in web and software
        development. From Back-end To Design.
      </p>

      <motion.ul
        className={styles.list}
        ref={ref}
        variants={listVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.li className={styles.listItem} variants={itemVariants}>
          <picture>
            <DiReact size="3rem" />
          </picture>
          <div className={styles.listContainer}>
            <h4 className={styles.listTitle}>Front-End</h4>
            <p className={styles.listParagraph}>
              Experience with <br />
              React.js and Next.js
            </p>
          </div>
        </motion.li>

        <motion.li className={styles.listItem} variants={itemVariants}>
          <picture>
            <DiFirebase size="3rem" />
          </picture>
          <div className={styles.listContainer}>
            <h4 className={styles.listTitle}>Back-End</h4>
            <p className={styles.listParagraph}>
              Experience with <br />
              Node, Express and Databases
            </p>
          </div>
        </motion.li>

        <motion.li className={styles.listItem} variants={itemVariants}>
          <picture>
            <DiZend size="3rem" />
          </picture>
          <div className={styles.listContainer}>
            <h4 className={styles.listTitle}>UI/UX</h4>
            <p className={styles.listParagraph}>
              Experience with <br />
              tools like Figma
            </p>
          </div>
        </motion.li>
      </motion.ul>

      <div className={`${styles.sectionDivider} ${styles.colorAlt}`} />
    </section>
  );
};

export default Technologies;
