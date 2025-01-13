// Create a new file: script.js
document.addEventListener('DOMContentLoaded', function() {
    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const htmlElement = document.documentElement;
  
    darkModeToggle.addEventListener('click', () => {
      htmlElement.setAttribute('data-theme', 
        htmlElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
      );
    });
  
    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      
      // Add your form submission logic here
      console.log(Object.fromEntries(formData));
      contactForm.reset();
      alert('Message sent successfully!');
    });
  
    // Add animation delays to timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
      item.style.setProperty('--item-index', index);
    });
  });
  
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Basic form validation
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!email || !message) {
      alert('Please fill in all required fields');
      return;
    }
    
    try {
      // Replace with your actual form submission endpoint
      const response = await fetch('your-form-endpoint', {
        method: 'POST',
        body: new FormData(contactForm)
      });
      
      if (response.ok) {
        alert('Message sent successfully!');
        contactForm.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      alert('Error sending message. Please try again.');
      console.error(error);
    }
  });
  