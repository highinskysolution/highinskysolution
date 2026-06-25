const nav = document.querySelector(".glass-nav");
const forms = document.querySelectorAll(".contact-form");

const updateNav = () => {
  if (!nav) return;
  nav.classList.toggle("nav-scrolled", window.scrollY > 12);
};

updateNav();
window.addEventListener("scroll", updateNav, { passive: true });

if (window.AOS) {
  AOS.init({
    duration: 850,
    once: true,
    offset: 90,
    easing: "ease-out-cubic",
  });
}

forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      form.classList.add("was-validated");
      return;
    }

    event.preventDefault();
    const button = form.querySelector("button[type='submit']");
    if (!button) return;
    const original = button.innerHTML;
    
    // Set to sending state
    button.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>Sending...';
    button.disabled = true;

    // Collect data
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    const localEndpoint = "http://localhost:5000/api/contact";
    const prodEndpoint = "/api/contact";
    const formSubmitEndpoint = "https://formsubmit.co/ajax/highinskysolution@gmail.com";

    // Determine primary endpoint
    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.hostname === '';
    const primaryEndpoint = isLocal ? localEndpoint : prodEndpoint;

    const handleSuccess = () => {
      button.innerHTML = '<i class="bi bi-check2-circle me-2"></i>Inquiry Sent!';
      
      // Hide the form, heading, and signature details to display full-card confirmation
      form.style.display = "none";
      const formHeading = form.parentElement.querySelector(".form-heading");
      if (formHeading) {
        formHeading.style.display = "none";
      }
      const sigBlock = form.parentElement.querySelector(".founder-signature-block");
      if (sigBlock) {
        sigBlock.style.display = "none";
      }
      const divider = form.parentElement.querySelector("hr");
      if (divider) {
        divider.style.display = "none";
      }

      // Create and inject a premium animated success card
      const successCard = document.createElement("div");
      successCard.className = "text-center py-5 animate__animated animate__fadeIn";
      successCard.innerHTML = `
        <div class="mb-4">
          <i class="bi bi-patch-check-fill" style="font-size: 4.8rem; color: var(--brand); filter: drop-shadow(0 10px 20px rgba(6, 102, 112, 0.2));"></i>
        </div>
        <h2 class="fw-black mb-2" style="color: var(--ink);">Inquiry Submitted!</h2>
        <p class="text-muted mb-4 mx-auto" style="max-width: 420px; font-size: 0.95rem; line-height: 1.6;">
          Thank you. Your message has been securely sent. A confirmation email has been dispatched to your inbox.
        </p>
        <div class="d-flex align-items-center justify-content-center gap-2">
          <div class="spinner-border spinner-border-sm text-secondary" role="status" style="width: 14px; height: 14px;"></div>
          <span class="text-muted" style="font-size: 0.82rem; font-weight: 600;">Refreshing page...</span>
        </div>
      `;
      form.parentElement.appendChild(successCard);

      // Auto-refresh the page after 3.5 seconds
      setTimeout(() => {
        window.location.reload();
      }, 3500);
    };

    // If running directly from a local file (file://), simulate a successful submission directly
    if (window.location.protocol === 'file:') {
      setTimeout(() => {
        handleSuccess();
      }, 1200);
      return;
    }

    const submitForm = (url, bodyData) => {
      return fetch(url, {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(bodyData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error("HTTP error status " + response.status);
        }
        return response.json();
      });
    };

    // Try primary custom backend first
    submitForm(primaryEndpoint, data)
      .then(result => {
        if (result.success === true || result.success === "true") {
          handleSuccess();
        } else {
          throw new Error(result.message || "Failed custom server submission");
        }
      })
      .catch(primaryError => {
        console.warn(`Primary endpoint failed (${primaryError.message}). Trying FormSubmit.co fallback...`);
        
        // Fallback to FormSubmit.co AJAX API
        submitForm(formSubmitEndpoint, data)
          .then(result => {
            if (result.success === "true" || result.success === true) {
              handleSuccess();
            } else {
              throw new Error(result.message || "Failed FormSubmit submission");
            }
          })
          .catch(fallbackError => {
            console.warn("AJAX fallback failed. Submitting via standard HTML form submission...", fallbackError);
            form.submit();
          });
      });
  });
});

// Preloader welcome screen hide handler
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (!preloader) return;

  // Use sessionStorage to only show full animation on initial entry
  if (sessionStorage.getItem("hasVisited")) {
    // Quickly hide it on page navigation to avoid user annoyance
    preloader.style.transition = "opacity 0.25s ease, visibility 0.25s";
    preloader.classList.add("preloader-hidden");
  } else {
    // Full premium presentation on first visit
    sessionStorage.setItem("hasVisited", "true");
    setTimeout(() => {
      preloader.classList.add("preloader-hidden");
    }, 1800); // 1.8s keeps the intro visible long enough to appreciate, but quick enough to keep user engaged
  }
});
