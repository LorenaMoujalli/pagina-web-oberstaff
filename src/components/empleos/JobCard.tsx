import React from 'react';
import styles from '../../styles/empleos/JobCard.module.css';

export default function JobCard({ id, title, location = 'Remoto', type = 'Full-time', posted = 'Sin fecha' }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.meta}>
        <span className={styles.metaItem}>
          <span className="iconify" data-icon="lucide:laptop" style={{ fontSize: '16px' }}></span>
          {location}
        </span>

        <span className={styles.metaItem}>
          <span className="iconify" data-icon="lucide:clock" style={{ fontSize: '16px' }}></span>
          {type}
        </span>

        <span className={styles.metaItem}>
          <span className="iconify" data-icon="lucide:calendar" style={{ fontSize: '15px' }}></span>
          {posted}
        </span>
      </div>

      <div className={styles.footer}>
        <a href={`/detalle/${id}`} className={styles.link}>Ver detalle →</a>
      </div>
    </article>
  );
}
