
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    const mainContent = document.querySelector(".Main");

 
    setTimeout(() => {
        preloader.style.opacity = "0";
        preloader.style.transition = "opacity 0.5s ease-out";

  
        setTimeout(() => {
            preloader.style.display = "none";

            mainContent.classList.add("visible");
        }, 500);
    }, 2000);
});




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});




document.querySelectorAll('.detail').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.textContent = this.getAttribute('data-info');
    });

    item.addEventListener('mouseleave', function() {
        this.textContent = '****';
    });

    item.addEventListener('click', function() {
        const tempInput = document.createElement('input');
        tempInput.value = this.getAttribute('data-info');
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        alert(`${this.getAttribute('data-info')} copied to clipboard!`);
    });
});

document.getElementById('toggle-theme').addEventListener('click', function() {

    document.body.classList.toggle('dark-mode');
    

    if (document.body.classList.contains('dark-mode')) {
        document.getElementById('toggle-theme').textContent = 'Light Mode';
    } else {
        document.getElementById('toggle-theme').textContent = 'Dark Mode';
    }
});
