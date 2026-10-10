

        const loader =
            document.getElementById("loader-container");

        const website =
            document.getElementById("Navbar-nav");

        const progressBar =
            document.getElementById("progress-bar");

        const percentLabel =
            document.getElementById("percentage-label");

        const ariaTrack =
            document.getElementById("accessibility-track");

        let currentProgress = 0;

        function revealAboutSection() {
            const aboutSection = document.getElementById("About");

            if (!aboutSection) {
                return;
            }

            aboutSection.classList.add("about-reveal-ready");

            if ("IntersectionObserver" in window) {
                const aboutObserver = new IntersectionObserver(function (entries) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                            aboutSection.classList.add("is-visible");
                            aboutObserver.unobserve(aboutSection);
                        }
                    });
                }, { threshold: 0.2 });

                aboutObserver.observe(aboutSection);
            } else {
                aboutSection.classList.add("is-visible");
            }
        }

        /* =========================
           START LOADING
        ========================== */

        const loading = setInterval(function () {

            currentProgress += 1;


            progressBar.style.transform =
                `scaleX(${currentProgress / 100})`;


            percentLabel.textContent =
                `${currentProgress}%`;


            ariaTrack.setAttribute(
                "aria-valuenow",
                currentProgress
            );


            /* =========================
               LOADING FINISHED
            ========================== */

            if (currentProgress >= 100) {

                clearInterval(loading);


                setTimeout(function () {

                    /* Fade out loader */

                    loader.style.opacity = "0";


                    setTimeout(function () {

                        /* Remove loader */

                        loader.style.display = "none";


                        /* Show website */

                        website.style.display = "block";
                        revealAboutSection();

                    }, 500);


                }, 500);

            }

        }, 30);


        
