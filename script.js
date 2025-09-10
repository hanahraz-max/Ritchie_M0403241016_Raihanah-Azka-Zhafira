
       document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            if (this.getAttribute('href') === "#education") {
                const offsetTop = target.getBoundingClientRect().top + window.scrollY;
                const extraScroll = target.offsetHeight - window.innerHeight + 100; 
                window.scrollTo({
                    top: offsetTop - 80,
                    behavior: "smooth"
                });
                setTimeout(() => {
                    if (extraScroll > 0) {
                        window.scrollTo({
                            top: offsetTop - 80 + extraScroll,
                            behavior: "smooth"
                        });
                    }
                }, 600);
            } else {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    });
});
