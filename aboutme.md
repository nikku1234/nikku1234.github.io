---
layout: page
title: About Me
subtitle: A glimpse into my world
---

<div class="bento-grid">
  <div class="bento-item bio-card">
    <h3>Hi, I'm Nikhil.</h3>
    <p>I'm a Master's Student at the <strong>University at Buffalo</strong>, passionate about applying Deep Learning to real-time applications.</p>
    <p>Currently, I'm a Research Assistant at the <a href="https://www.buffalo.edu/ai/research/laboratories-and-groups/innovation-lab.html">AI Innovation Lab (A2IL)</a> under Dr. David Doermann, working on Federated Learning and Medical Image Analysis.</p>
  </div>

  <div class="bento-item photo-card">
    <img src="{{ '/assets/img/logos/coder.jpg' | relative_url }}" alt="Nikhil Ramesh" class="profile-photo">
  </div>

  <div class="bento-item skills-card">
    <h4>Core Interests</h4>
    <div class="tags-cloud">
      <span class="tag">Deep Learning</span>
      <span class="tag">Medical Imaging</span>
      <span class="tag">Federated Learning</span>
      <span class="tag">GANs</span>
      <span class="tag">Computer Vision</span>
    </div>
  </div>

  <div class="bento-item movie-card">
    <h4>Philosophy</h4>
    <p>"My journey is to make a difference in the world using my knowledge to help people."</p>
  </div>

  <div class="bento-item contact-card">
    <h4>Let's Connect</h4>
    <p>I'm always open to collaboration. If our interests align, let's chat!</p>
    <div class="social-links">
      <a href="mailto:nikhilramesh1234@gmail.com" class="btn social-btn">Email Me</a>
      <a href="https://github.com/nikku1234" class="btn social-btn">GitHub</a>
    </div>
  </div>
</div>

<style>
.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto auto;
  gap: 24px;
  margin-top: 40px;
}

.bento-item {
  background: white;
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.04);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.bento-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 48px rgba(0,0,0,0.08);
}

.bio-card {
  grid-column: span 8;
  grid-row: span 2;
  background: linear-gradient(135deg, #ffffff 0%, #f5f5f7 100%);
}

.photo-card {
  grid-column: span 4;
  grid-row: span 2;
  padding: 0;
  overflow: hidden;
}

.profile-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.photo-card:hover .profile-photo {
    transform: scale(1.05);
}

.skills-card {
  grid-column: span 6;
}

.movie-card {
  grid-column: span 6;
  background: #1d1d1f;
  color: white;
}

.movie-card h4, .movie-card p {
    color: white;
}

.contact-card {
  grid-column: span 12;
  text-align: center;
  align-items: center;
  background: #f5f5f7;
}

.tags-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

.tag {
  background: rgba(0,0,0,0.05);
  padding: 6px 12px;
  border-radius: 980px;
  font-size: 14px;
  font-weight: 500;
}

.social-links {
    margin-top: 16px;
    display: flex;
    gap: 16px;
}

.social-btn {
    background: #0071e3;
    color: white;
}

@media (max-width: 768px) {
  .bento-grid {
    display: flex;
    flex-direction: column;
  }
}
</style>
