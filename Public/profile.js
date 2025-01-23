document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all the fields.');
            return;
        }

        // Send the data to the backend
        fetch('http://localhost:3000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        })
            .then((response) => response.json())
            .then((data) => {
                alert(data.message);
                contactForm.reset();
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Failed to send the message.');
            });
    });
});

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const count = parseInt(element.innerText);

    if (count < target) {
        element.innerText = count + 1;
        setTimeout(() => animateCounter(element), 30);
    }
}

document.querySelectorAll('.counter').forEach(counter => {
    animateCounter(counter);
});
document.querySelectorAll('.project-item').forEach(project => {
    project.addEventListener('mouseenter', function() {
        this.querySelector('.hover-info').classList.add('show');
    });
    project.addEventListener('mouseleave', function() {
        this.querySelector('.hover-info').classList.remove('show');
    });
});
const marquee = document.querySelector('.marquee p');
function scrollMarquee() {
    const scrollAmount = 1;
    marquee.scrollBy({ top: 0, left: scrollAmount, behavior: 'smooth' });

    if (marquee.scrollLeft >= marquee.scrollWidth - marquee.clientWidth) {
        marquee.scrollLeft = 0;
    }
}

setInterval(scrollMarquee, 30);
document.addEventListener('mousemove', function(e) {
    document.querySelector('.custom-cursor').style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
});
const projectItems = document.querySelectorAll('.project-item img');
projectItems.forEach(img => {
    img.addEventListener('click', function() {
        const src = this.getAttribute('src');
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        lightbox.innerHTML = `<img src="${src}" alt="Project Image">
                              <span class="close">&times;</span>`;
        document.body.appendChild(lightbox);

        lightbox.querySelector('.close').addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });
    });
});
window.onscroll = function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
};
