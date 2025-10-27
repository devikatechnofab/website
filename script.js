function sendEnquiry(productName) {
  const email = "devikatechnofab@gmail.com";
  const subject = `Product Enquiry: ${productName}`;
  const body = `Hello Devika Technofab,%0D%0A%0D%0AI am interested in learning more about your ${productName}. Please share details and pricing.%0D%0A%0D%0AThank you.%0D%0A`;
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}
