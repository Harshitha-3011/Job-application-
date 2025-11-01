import React from 'react';
import jobs from '../data/jobs';

function JobListings() {
  return (
    <div className="container">
      <h2 className="available-jobs-title">Available Jobs</h2>
      {jobs.map((job, i) => (
        <div className="job-listing" key={i}>
          <h3>{job.title}</h3>
          <p>
            <strong>Location:</strong> {job.location} | <strong>Type:</strong> {job.type}
          </p>
          <p><strong>Description:</strong> {job.description}</p>
        </div>
      ))}
    </div>
  );
}

export default JobListings;
