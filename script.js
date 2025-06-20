// This will automatically redirect to WhatsApp when form is submitted
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.querySelector('input[placeholder="Your Name"]').value;
  const phone = this.querySelector('input[placeholder="Phone Number"]').value;
  const email = this.querySelector('input[placeholder="Email Address"]').value;
  const eventType = this.querySelector('input[placeholder="Event Type"]').value;
  const message = this.querySelector("textarea").value;

  const whatsappMessage = `Hi Sri Shyam Balloon Decoration!
    
Name: ${name}
Phone: ${phone}
Email: ${email}
Event Type: ${eventType}
Message: ${message}

I would like to inquire about your balloon decoration services.`;

  // Direct redirect to WhatsApp with updated number
  const whatsappUrl = `https://wa.me/918954191650?text=${encodeURIComponent(
    whatsappMessage
  )}`;
  window.location.href = whatsappUrl; // Direct redirect instead of new tab

  this.reset();
});
// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
