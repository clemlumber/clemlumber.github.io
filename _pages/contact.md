---
layout: layouts/base.njk
title: Contact Us
permalink: /contact/
eleventyNavigation:
  key: Contact
  order: 3
---

<h1>Contact Us</h1>

<p class="lead">We're here to answer any questions you might have about our products and services. Please feel free to reach out to us using the information below.</p>

<div class="contact-container">
  <div class="contact-info">
    <h2>Contact Information</h2>

    <p><strong>Address:</strong><br>
    Clem Lumber & Distributing Company<br>
    P. O. Box 2238<br>
    Alliance, Ohio 44601</p>

    <p><strong>Email:</strong> <a href="mailto:{{ metadata.email }}">{{ metadata.email }}</a></p>

    <p><strong>Sales:</strong> <a href="tel:+1-{{ metadata.phone }}">{{ metadata.phone }}</a></p>
    <p><strong>Fax:</strong> {{ metadata.fax }}</p>

    <h2>Business Hours</h2>

    <p>Monday - Friday: 8:00 AM - 5:00 PM<br>
    Saturday & Sunday: Closed</p>
  </div>

  <div class="contact-form">
    <h2>Get in Touch</h2>

    <p>Have a question or need a quote? Fill out the form below and we'll get back to you as soon as possible.</p>

    <form action="https://getform.io/f/57fc2df7-79c8-42ee-b09b-2506e738434b" method="POST">
      <input type="hidden" id="captchaResponse" name="g-recaptcha-response">
      
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" name="email" id="email" placeholder="Enter email" required>
      </div>
      
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Enter your name" required>
      </div>
      
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>
      
      <button type="submit" class="btn-primary">Submit</button>
    </form>
  </div>
</div>
