<<<<<<< HEAD
const sections = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.2
    }
);

sections.forEach(section => {
    observer.observe(section);
});const menuToggle =
    document.querySelector(".menu-toggle");

const navMenu =
    document.querySelector("nav ul");

menuToggle.addEventListener(
    "click",
    () => {

        navMenu.classList.toggle("active");

    }
);const text =
"Systems Developer | C++ | Linux | OS Kernel Builder";

let index = 0;

function typeEffect() {

    if (index < text.length) {

        document
        .getElementById("typing-text")
        .textContent += text.charAt(index);

        index++;

        setTimeout(typeEffect, 60);

    }

}

typeEffect();// SKILL BAR ANIMATION (WORKING VERSION)

const skillsSection =
    document.querySelector("#skills");

const skillBars =
    document.querySelectorAll(".skill-level");

const percentages =
    document.querySelectorAll(".skill-percent");

let animationDone = false;

function animateSkills() {

    const sectionTop =
        skillsSection.getBoundingClientRect().top;

    const screenHeight =
        window.innerHeight;

    if (
        sectionTop < screenHeight - 100
        && !animationDone
    ) {

        skillBars.forEach((bar, index) => {

            const width =
                bar.getAttribute("data-width");

            bar.style.width = width;

            let count = 0;

            const target =
                parseInt(width);

            const interval =
                setInterval(() => {

                    if (count >= target) {

                        clearInterval(interval);

                    } else {

                        count++;

                        percentages[index]
                            .textContent =
                            count + "%";

                    }

                }, 15);

        });

        animationDone = true;

    }

}

window.addEventListener(
    "scroll",
    animateSkills
);
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function () {
    alert("Message sent successfully!");
=======
const sections = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.2
    }
);

sections.forEach(section => {
    observer.observe(section);
});const menuToggle =
    document.querySelector(".menu-toggle");

const navMenu =
    document.querySelector("nav ul");

menuToggle.addEventListener(
    "click",
    () => {

        navMenu.classList.toggle("active");

    }
);const text =
"Systems Developer | C++ | Linux | OS Kernel Builder";

let index = 0;

function typeEffect() {

    if (index < text.length) {

        document
        .getElementById("typing-text")
        .textContent += text.charAt(index);

        index++;

        setTimeout(typeEffect, 60);

    }

}

typeEffect();// SKILL BAR ANIMATION (WORKING VERSION)

const skillsSection =
    document.querySelector("#skills");

const skillBars =
    document.querySelectorAll(".skill-level");

const percentages =
    document.querySelectorAll(".skill-percent");

let animationDone = false;

function animateSkills() {

    const sectionTop =
        skillsSection.getBoundingClientRect().top;

    const screenHeight =
        window.innerHeight;

    if (
        sectionTop < screenHeight - 100
        && !animationDone
    ) {

        skillBars.forEach((bar, index) => {

            const width =
                bar.getAttribute("data-width");

            bar.style.width = width;

            let count = 0;

            const target =
                parseInt(width);

            const interval =
                setInterval(() => {

                    if (count >= target) {

                        clearInterval(interval);

                    } else {

                        count++;

                        percentages[index]
                            .textContent =
                            count + "%";

                    }

                }, 15);

        });

        animationDone = true;

    }

}

window.addEventListener(
    "scroll",
    animateSkills
);
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function () {
    alert("Message sent successfully!");
>>>>>>> 6a4b6a7f9a7b4d16d8ebbc67eb7479cc55eb8c61
});