// Scroll Reveal Animation
document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
  });

  // Glitch Text Effect
  const glitchText = document.querySelector('.glitch-text');
  if (glitchText) {
    let isGlitching = false;
    
    setInterval(() => {
      if (!isGlitching && Math.random() > 0.95) {
        isGlitching = true;
        const originalText = glitchText.textContent;
        
        // Create glitch effect
        for (let i = 0; i < 10; i++) {
          setTimeout(() => {
            glitchText.style.textShadow = `${Math.random() * 4 - 2}px 0 0 rgba(0, 255, 255, 0.7), ${Math.random() * 4 - 2}px 0 0 rgba(255, 0, 255, 0.7)`;
          }, i * 30);
        }
        
        setTimeout(() => {
          glitchText.style.textShadow = 'none';
          isGlitching = false;
        }, 300);
      }
    }, 2000);
  }

  // Typewriter Effect for Hero
  const typewriterElement = document.querySelector('.typewriter');
  if (typewriterElement) {
    const text = typewriterElement.textContent;
    typewriterElement.textContent = '';
    
    let i = 0;
    const speed = 80; // ms per character
    
    function typeWriter() {
      if (i < text.length) {
        typewriterElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    
    // Start typing after a brief delay
    setTimeout(typeWriter, 500);
  }

  // Project Card Hover Effects
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
      card.style.boxShadow = '0 10px 30px rgba(0, 255, 255, 0.2)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = 'none';
    });
  });

  // Social Links Pulse Effect
  const socialLinks = document.querySelectorAll('.social-links a, .social-links-large a');
  socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.color = '#00ffff';
      link.style.transform = 'scale(1.2)';
    });
    
    link.addEventListener('mouseleave', () => {
      link.style.color = '';
      link.style.transform = '';
    });
  });
});
