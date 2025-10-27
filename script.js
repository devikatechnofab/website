// ======= Devika Technofab Enquiry Handler =======

// This automatically fills the email subject and body when a user clicks "Enquiry"
document.addEventListener("DOMContentLoaded", function() {
  const enquiryButtons = document.querySelectorAll(".btn");

  enquiryButtons.forEach(button => {
    button.addEventListener("click", function(event) {
      event.preventDefault();

      const productName = this.closest(".product-card")?.querySelector("h3")?.textContent || "Product Enquiry";
      const mailTo = "mailto:devikatechnofab@gmail.com"
        + "?subject=" + encodeURIComponent("Enquiry for " + productName)
        + "&body=" + encodeURIComponent(
          `Hello Devika Technofab Team,%0D%0A%0D%0AI am interested in learning more about your product: ${productName}.%0D%0A%0D%0ARegards,%0D%0A[Your Name]%0D%0A[Your Contact Information]`
        );

      window.location.href = mailTo;
    });
  });
});
