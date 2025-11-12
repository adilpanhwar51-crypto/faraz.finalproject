// Auto fill booking details
const params = new URLSearchParams(window.location.search);
const type = params.get('type');
const name = params.get('name');
document.getElementById('selectedItem').value = name ? `${type.toUpperCase()} - ${name}` : 'General Booking';

document.getElementById('booking-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('✅ Booking Confirmed! We will contact you soon.');
  e.target.reset();
});
