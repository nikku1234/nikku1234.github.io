---
layout: page
title: About Me
subtitle: A glimpse into my world
---

<div class="hero-section">
  <h1 class="apple-headline">Engineering the <span class="gradient-text">Future.</span></h1>
  <p class="hero-subtext">Building scalable systems, autonomous robots, and intelligent simulations.</p>
</div>

<div class="bento-grid">
  <div class="bento-item bio-card">
    <h3>Hi, I'm Nikhil.</h3>
    <p>I'm a <strong>Software Dev Engineer 2</strong> at <strong>Amazon Robotics</strong> based in <strong>Boston, MA</strong>.</p>
    <p>I specialize in <strong>High Scale Simulations</strong> and <strong>Autonomous Systems</strong>. I built this site to showcase my journey from research labs to production provisioning.</p>
    <div class="bio-actions">
        <a href="/resume/nikhil_ramesh_latest_resume.pdf" class="btn btn-apple-primary">View Resume</a>
    </div>
  </div>

  <div class="bento-item photo-card">
    <img src="{{ '/assets/img/logos/coder.jpg' | relative_url }}" alt="Nikhil Ramesh" class="profile-photo">
  </div>

  <div class="bento-item skills-card">
    <h4>Core Interests</h4>
    <div class="tags-cloud">
      <span class="tag">CI/CD</span>
      <span class="tag">Software Design</span>
      <span class="tag">Software Architecture</span>
      <span class="tag">Integration for different systems</span>
      <span class="tag">Autonomous Robots</span>
      <span class="tag">Manipulation Robots</span>
      <span class="tag">High Scale Simulations</span>
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

</style>

<style>
/* Hero Section */
.hero-section {
    text-align: center;
    padding: 80px 20px 60px;
    opacity: 0;
    animation: fadeInHero 1s ease-out forwards;
}

.apple-headline {
    font-size: 80px;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.05;
    margin-bottom: 16px;
    color: var(--heading-color);
}

.gradient-text {
    background: linear-gradient(135deg, #0071e3 0%, #42a1ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
}

.hero-subtext {
    font-size: 24px;
    font-weight: 400;
    color: var(--subtext-color);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.4;
}

/* Apple Buttons */
.btn-apple-primary {
    background: #0071e3;
    color: white !important;
    border-radius: 980px;
    padding: 12px 28px;
    font-size: 17px;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-block;
    border: none;
    margin-top: 16px;
}

.btn-apple-primary:hover {
    background: #0077ed;
    transform: scale(1.02);
    box-shadow: 0 4px 12px rgba(0, 113, 227, 0.3);
}

/* Animations */
@keyframes fadeInHero {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto auto;
  gap: 24px;
  margin-top: 20px;
}

.bento-item {
    background: var(--card-bg);
    border-radius: 28px; /* App icon curvature */
    padding: 36px;
    box-shadow: var(--card-shadow);
    transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 0.4s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0; /* for scroll animation */
    transform: translateY(30px);
}

/* Animation Class applied by JS */
.bento-item.in-view {
    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeInUp {
    to { opacity: 1; transform: translateY(0); }
}

/* ... keep existing specific card styles but ensure they use variables ... */

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

<script>
document.addEventListener('DOMContentLoaded', () => {
    // Stagger animation for bento items
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add delay based on index/order for staggering
                setTimeout(() => {
                    entry.target.classList.add('in-view');
                }, index * 100); 
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px'
    });

    document.querySelectorAll('.bento-item').forEach(item => {
        observer.observe(item);
    });
});
</script>
