export default class HeaderFixed {
	constructor(config) {
		this.headerTypes = config;
		this.header = document.querySelector(`.${this.headerTypes.HEADER}`);

		if (!this.header) {
			throw new Error("Header element is missing.");
		}

		this.initEvents();
	}

	initEvents() {
		window.addEventListener("scroll", this.updateFixedClass.bind(this));
	}

	updateFixedClass() {
		console.log("Скролл:", window.scrollY);

		if (window.scrollY > 50) {
			this.header.classList.add(this.headerTypes.HEADER_FIXED);
		} else {
			this.header.classList.remove(this.headerTypes.HEADER_FIXED);
		}
	}

	removeFixedClass() {
		this.header.classList.remove(this.headerTypes.HEADER_FIXED);
	}
}

export class TopBanner {
	constructor() {
		this.banner = document.querySelector(".top-container");
		this.closeBtn = document.querySelector(".top__button");
		this.isClosed = false;

		if (!this.banner || !this.closeBtn) return;

		this.init();
	}

	init() {
		this.closeBtn.addEventListener("click", () => {
			this.isClosed = true;
			this.banner.classList.add("top-container--closed");
		});

		window.addEventListener("scroll", () => {
			if (this.isClosed) return;

			if (!this.isTicking) {
				window.requestAnimationFrame(() => {
					if (window.scrollY < 20) {
						this.banner.classList.remove("top-container--hidden");
					} else {
						this.banner.classList.add("top-container--hidden");
					}
				});
			}
		});
	}

	hideBanner() {
		this.banner.classList.add("top-container--hidden");
	}

	showBanner() {
		this.banner.classList.remove("top-container--hidden");
	}
}

export class DropdownMenu {
	constructor() {
		this.dropdowns = document.querySelectorAll(".menu__item--dropdown");

		this.init();
	}

	init() {
		this.dropdowns.forEach((dropdown) => {
			const button = dropdown.querySelector(".dropdown-toggle");

			if (!button) return;

			button.addEventListener("click", (event) => {
				event.stopPropagation();

				this.dropdowns.forEach((d) => {
					if (d !== dropdown) {
						d.classList.remove("is-open");
						d.querySelector(".dropdown-toggle")?.setAttribute(
							"aria-expanded",
							"false",
						);
					}
				});

				const isOpen = dropdown.classList.toggle("is-open");
				button.setAttribute("aria-expanded", isOpen);
			});
		});

		document.addEventListener("click", (event) => {
			if (!event.target.closest(".menu__item--dropdown")) {
				this.dropdowns.forEach((d) => {
					d.classList.remove("is-open");
					d.querySelector(".dropdown-toggle")?.setAttribute(
						"aria-expanded",
						"false",
					);
				});
			}
		});
	}
}
