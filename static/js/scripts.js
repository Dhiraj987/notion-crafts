// Scroll effect for the navigation bar
window.addEventListener("scroll", function () {
	// Add or remove classes to change the appearance of the navigation bar based on scrolling
	var header = document.querySelector("header");
	header.classList.toggle("for_sticky", window.scrollY > 0);

	header.classList.toggle("nav_bar_with_shadow", this.window.scrollY > 700);
});

document.addEventListener("DOMContentLoaded", function () {
	// Event listener for when the document is fully loaded

	const copyButtons = document.querySelectorAll(".copy-btn");

	function copyToClipboard(text) {
		// Copies the specified text to the clipboard
		const tempInput = document.createElement("input");
		tempInput.value = text;
		document.body.appendChild(tempInput);
		tempInput.select();
		document.execCommand("copy");
		document.body.removeChild(tempInput);
	}

	copyButtons.forEach((button) => {
		const iconVisual = button.parentNode;
		const iconImage = iconVisual.querySelector("img");

		iconVisual.addEventListener("mouseenter", () => {
			// Display COPY button on mouse enter
			iconImage.style.opacity = "0.4";
			button.style.opacity = "1";
		});

		iconVisual.addEventListener("mouseleave", () => {
			// Restore icon opacity and hide the COPY button on mouse leave
			iconImage.style.opacity = "1";
			button.style.opacity = "0";
		});

		button.addEventListener("click", (event) => {
			event.stopPropagation();
			const iconSrc = iconImage.src;
			copyToClipboard(iconSrc);

			button.textContent = "COPIED";
			setTimeout(() => {
				button.textContent = "COPY";
			}, 2000); // Reset the button text after 2 seconds.
		});
	});
});

document.addEventListener("DOMContentLoaded", function () {
	// Event listener for when the document is fully loaded

	const searchIcon = document.querySelector(".search-icon");
	const searchInput = document.querySelector(".search-input");
	const iconComponents = document.querySelectorAll(".icon-component");
	const widgetComponents = document.querySelectorAll(".widget-component");
	const hideableNavItems = document.querySelectorAll(".hideable");

	searchIcon.addEventListener("click", () => {
		searchInput.classList.toggle("active");

		// Toggle the visibility of hideable navigation bar items
		hideableNavItems.forEach((navItem) => {
			navItem.style.display = searchInput.classList.contains("active")
				? "none"
				: "flex";
		});

		filterWidgets(); // Added to filter widgets when the search input is cleared
	});

	searchInput.addEventListener("input", () => {
		filterIcons();
		filterWidgets(); // Added to filter widgets based on the search term
	});

	function filterIcons() {
		const searchTerm = searchInput.value.toLowerCase();

		iconComponents.forEach((iconComponent) => {
			const iconName = iconComponent
				.querySelector(".icon-name")
				.textContent.toLowerCase();
			const shouldShow = iconName.includes(searchTerm);
			iconComponent.style.display = shouldShow ? "flex" : "none";
		});
	}

	function filterWidgets() {
		const searchTerm = searchInput.value.toLowerCase();

		widgetComponents.forEach((widgetComponent) => {
			const widgetName = widgetComponent
				.querySelector(".widget-name")
				.textContent.toLowerCase();
			const shouldShow = widgetName.includes(searchTerm);
			widgetComponent.style.display = shouldShow ? "flex" : "none";
		});
	}
});

// Add event listeners for page load and scroll
window.addEventListener("load", setActiveLink);
window.addEventListener("scroll", setActiveLink);

function setActiveLink() {
	const sections = document.querySelectorAll(".full-pager");
	let activeSection = null;

	// Find the active section based on its position on the viewport
	sections.forEach((section) => {
		const rect = section.getBoundingClientRect();
		if (rect.top <= 100 && rect.bottom >= 100) {
			activeSection = section;
		}
	});

	// Remove the active-link class from all navigation items
	document.querySelectorAll("header ul li a").forEach((link) => {
		link.classList.remove("active-link");
	});

	// Add the active-link class to the corresponding navigation item
	if (activeSection) {
		const activeLinkId = activeSection.getAttribute("id") + "-link";
		const activeLink = document.getElementById(activeLinkId);
		if (activeLink) {
			activeLink.classList.add("active-link");
		}
	}
}

document.addEventListener("DOMContentLoaded", function () {
	// Event listener for when the document is fully loaded

	const widgetCopyButtons = document.querySelectorAll(".widget-copy-btn");

	function copyWidgetToClipboard(widgetSrc) {
		const tempInput = document.createElement("input");
		tempInput.value = widgetSrc;
		document.body.appendChild(tempInput);
		tempInput.select();
		document.execCommand("copy");
		document.body.removeChild(tempInput);
	}

	widgetCopyButtons.forEach((button) => {
		const widgetIframe = button
			.closest(".widget-component")
			.querySelector("iframe");

		button.addEventListener("click", (event) => {
			event.stopPropagation();
			const widgetSrc = widgetIframe.src;
			copyWidgetToClipboard(widgetSrc);

			button.textContent = "COPIED";
			setTimeout(() => {
				button.textContent = "COPY";
			}, 2000); // Reset the button text after 2 seconds.
		});
	});
});
