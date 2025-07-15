// =====================
// THEME TOGGLE
// =====================
const toggleBtn = document.getElementById("mode-toggle");
document.body.classList.remove("light-mode"); // Default dark mode
toggleBtn.textContent = "🌙";

toggleBtn.addEventListener("click", () => {
	const isLight = document.body.classList.toggle("light-mode");
	toggleBtn.textContent = isLight ? "🌞" : "🌙";
});

// =====================
// TYPEWRITER EFFECT
// =====================
const typeText = "Vaibhav Garg";
let i = 0;
function typeWriter() {
	if (i < typeText.length) {
		document.getElementById("typewriter").innerHTML += typeText.charAt(i);
		i++;
		setTimeout(typeWriter, 100);
	}
}
window.addEventListener("load", typeWriter);

// =====================
// HAMBURGER MENU TOGGLE
// =====================
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("open");
	navLinks.classList.toggle("show");
	// console.log("Menu toggled!");
});

// =====================
// AUTO-CLOSE MENU ON LINK CLICK (MOBILE ONLY)
// =====================
document.querySelectorAll(".nav-links a").forEach(link => {
	link.addEventListener("click", () => {
		if (window.innerWidth <= 768) {
			navLinks.classList.remove("show");
			hamburger.classList.remove("open");
		}
	});
});

// =====================
// SCROLL REVEAL ANIMATION
// =====================
function revealOnScroll() {
	document.querySelectorAll(".reveal").forEach(el => {
		const top = el.getBoundingClientRect().top;
		const visible = window.innerHeight - 100;
		if (top < visible) el.classList.add("visible");
	});
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// =====================
// BACK TO TOP BUTTON
// =====================
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
	backToTop.style.display = window.scrollY > 200 ? "flex" : "none";
});
backToTop.addEventListener("click", () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
});

// === NAVBAR SCROLL HIGHLIGHT ===
window.addEventListener("DOMContentLoaded", () => {
	window.addEventListener("scroll", () => {
		const sections = document.querySelectorAll("section");
		const navLinks = document.querySelectorAll(".nav-links li a");

		let current = "";

		sections.forEach(section => {
			const sectionTop = section.offsetTop - 120;
			const sectionHeight = section.offsetHeight;
			if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
				current = section.getAttribute("id");
			}
		});

		navLinks.forEach(link => {
			link.classList.remove("active");
			if (link.getAttribute("href") === `#${current}`) {
				link.classList.add("active");
			}
		});
	});
});