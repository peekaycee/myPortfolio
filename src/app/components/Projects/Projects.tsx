"use client";

import React from "react";
import Image from "next/image";
import styles from "./Projects.module.css";
import { projects } from "../../constants/constants";
import { FiSend } from 'react-icons/fi';
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h1 className={styles.sectionTitle}>My Projects</h1>
      <div className={styles.gridContainer}>
        {projects.map((p, i) => (
          <div key={i} className={styles.card}>
            <Image
              src={p.image}
              alt={p.title}
              className={styles.img}
              width={400}
              height={250}
              layout="responsive"
            />

            <div className={styles.titleContent}>
              <h3 className={`${styles.headerThree} ${styles.title}`}>
                {p.title}
              </h3>
              <hr className={styles.hr} />
            </div>

            <p className={styles.cardInfo}>{p.description}</p>

            {/* Uncomment if you want tags */}
            {/* 
            <div>
              <div className={styles.titleContent}>Stack</div>
              <ul className={styles.tagList}>
                {p.tags.map((t, i) => (
                  <li key={i} className={styles.tag}>{t}</li>
                ))}
              </ul>
            </div> 
            */}

            <ul className={styles.utilityList}>
              <li>
                <a href={p.visit} className={styles.externalLinks} target="_blank" rel="noopener noreferrer">
                  Live <FiSend />
                </a>
              </li>
              <li>
                <a href={p.source} className={styles.externalLinks} target="_blank" rel="noopener noreferrer">
                  Github
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>
      <Link 
        className={styles.githubRepo}
        href={"https://www.google.com"} 
        target={"_blank"}>
          Other Projects on GitHub
      </Link>
    </section>
  );
};

export default Projects;
