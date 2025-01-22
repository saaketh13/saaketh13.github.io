document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("dark-mode-toggle")
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle")
  const navLinks = document.getElementById("nav-links")
  const body = document.body
  const contactForm = document.getElementById("contact-form")

  // Dark mode toggle
  darkModeToggle.addEventListener("click", () => {
    body.setAttribute("data-theme", body.getAttribute("data-theme") === "dark" ? "light" : "dark")
    darkModeToggle.innerHTML =
      body.getAttribute("data-theme") === "dark" ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>'
  })

  // Mobile menu toggle
  mobileMenuToggle.addEventListener("click", () => {
    mobileMenuToggle.classList.toggle("active")
    navLinks.classList.toggle("active")
    document.body.classList.toggle("menu-open")
  })

  // Close mobile menu when a link is clicked
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      mobileMenuToggle.classList.remove("active")
      navLinks.classList.remove("active")
      document.body.classList.remove("menu-open")
    }
  })

  // Animate timeline items on scroll
  const timelineItems = document.querySelectorAll(".timeline-item")
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    },
    { threshold: 0.5 },
  )

  timelineItems.forEach((item) => {
    observer.observe(item)
  })

  // Contact form handling
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    // Basic form validation
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value

    if (!email || !message) {
      alert("Please fill in all required fields")
      return
    }

    try {
      // Replace with your actual form submission endpoint
      const response = await fetch("your-form-endpoint", {
        method: "POST",
        body: new FormData(contactForm),
      })

      if (response.ok) {
        alert("Message sent successfully!")
        contactForm.reset()
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      alert("Error sending message. Please try again.")
      console.error(error)
    }
  })
})



