// js/script.js 
document.addEventListener('DOMContentLoaded', () =>) {
    const form= document.getElementById('contactForm');
    if (!form) return;
    form.addEventListener('submit'), (e) =>{
        e.preventDefault();
        const fullname= form.fullname.value.trim();
        const email= form.email.value.trim();
        const message= form.message.value.trim();

        //Basic validation
        if (!fullname || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        if (!email.includes('@')) {
            alert('Please enter a valid email address.');
            return;
        }
        //If all good
        alert('Thanks ${fullname}! Your message has been sent.');
        form.reset();
    });
});