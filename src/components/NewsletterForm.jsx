import React, { useState } from 'react';
import { LINKS } from '../data/siteLinks.js';

export default function NewsletterForm({ compact = false }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;

    if (LINKS.newsletterAction) {
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = LINKS.newsletterAction;
      const input = document.createElement('input');
      input.name = 'email';
      input.value = email;
      form.appendChild(input);
      document.body.appendChild(form);
      form.submit();
    } else {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="newsletter-success">
        <span>&#127881;</span>
        <div>
          <strong>You're on the list!</strong>
          <p>We'll be in touch when signals drop.</p>
        </div>
      </div>
    );
  }

  return (
    <form className={`signup ${compact ? 'compact' : ''}`} onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
        aria-label="Email address"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <button type="submit">Join Newsletter</button>
    </form>
  );
}
