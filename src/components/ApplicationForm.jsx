import React, { useState } from 'react';
import '../App.css'; // or use './ApplicationForm.css' if you want to keep CSS modular

function ApplicationForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    jobTitle: '',
    resume: ''
  });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.jobTitle || !form.resume) {
      setError('Please fill all fields.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container">
      <h2>Apply for a Job</h2>
      {error && <div className="error">{error}</div>}
      {submitted ? (
        <div style={{color: "#009a9a", fontWeight: "bold", marginTop: "28px"}}>
          ✅ Application submitted!<br />
          We will contact you soon. <br/><br/>
          <button onClick={() => { setForm({ name: '', email: '', jobTitle: '', resume: '' }); setSubmitted(false);}}>
            Apply for another job
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            autoComplete="off"
            required
            placeholder="Your Full Name"
          />
          <label>Email:</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
          />
          <label>Job Title:</label>
          <input
            name="jobTitle"
            type="text"
            value={form.jobTitle}
            onChange={handleChange}
            required
            placeholder="Job you are applying for"
          />
          <label>Resume / Details:</label>
          <textarea
            name="resume"
            value={form.resume}
            onChange={handleChange}
            required
            placeholder="Paste resume or enter your skills"
            rows={4}
          />
          <button type="submit">Submit Application</button>
        </form>
      )}
    </div>
  );
}

export default ApplicationForm;
