// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
document.querySelector('.order-btn button').addEventListener('click', function(e) {
    e.preventDefault();

    const name = document.querySelector('input[placeholder="nama kamu"]');
    const email = document.querySelector('input[placeholder="email kamu"]');
    const phone = document.querySelector('input[placeholder="nomor hp kamu"]');
    const amount = document.querySelector('input[placeholder="banyak"]');
    const order = document.querySelector('input[placeholder="nama es krim"]');

    if (!name.value.trim() || !email.value.trim() || !phone.value.trim() || !amount.value.trim() || !order.value.trim()) {
        alert('Please fill in all fields.');
        return;
    }

    if (!validateEmail(email.value)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert(`Thank you, ${name.value}! Your order for ${amount.value} ${order.value} has been placed.`);

    // Reset the form
    name.value = '';
    email.value = '';
    phone.value = '';
    amount.value = '';
    order.value = '';
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add hover effect to menu buttons
document.querySelectorAll('.menu-btn a').forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#ff6363';
        this.style.color = '#fff';
    });
    button.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
        this.style.color = '';
    });
});
