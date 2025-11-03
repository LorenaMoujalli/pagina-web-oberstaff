import React, { useState } from 'react';
import SearchBar from './SearchBar';
import JobCard from './JobCard';
import styles from '../../styles/empleos/JobSection.module.css';

import type { Job } from '../../lib/jobs';

interface JobSectionProps {
  jobs: Job[];
}

export default function JobSection({ jobs }: JobSectionProps) {
  const [search, setSearch] = useState('');

  const filteredJobs = jobs.filter(job => {
  const title = job.title?.toLowerCase() ?? '';
  const location = job.location?.toLowerCase() ?? '';
  const type = job.type?.toLowerCase() ?? '';

  return (
    title.includes(search.toLowerCase()) ||
    location.includes(search.toLowerCase()) ||
    type.includes(search.toLowerCase())
  );
});


  return (
    <section id="trabajos" className={styles.jobsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>
            Trabajos <br />
            <span>disponibles</span>
          </h2>
          <SearchBar value={search} onChange={setSearch} />
        </div>

        <div className={styles.grid}>
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <JobCard
                key={job.id}
                id={job.id}
                title={job.title}
                location={job.location}
                type={job.type}
                posted={job.posted}
              />
            ))
          ) : (
            <p style={{ textAlign: 'center', width: '100%' }}>
              No se encontraron empleos.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
