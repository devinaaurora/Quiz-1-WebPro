const navToggle = document.querySelector("[data-nav-toggle]")
const navMenu = document.querySelector("[data-menu]")
const navLinks = document.querySelectorAll("[data-nav]")

const setActiveLink = () => {
  const currentPath = window.location.pathname.split("/").pop() || "index.html"
  navLinks.forEach((link) => {
    const href = link.getAttribute("href")
    if (href === currentPath) {
      link.classList.add("active")
    } else {
      link.classList.remove("active")
    }
  })
}

const closeMenu = () => {
  navMenu.dataset.open = "false"
  navToggle.setAttribute("aria-expanded", "false")
}

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.dataset.open === "true"
    navMenu.dataset.open = isOpen ? "false" : "true"
    navToggle.setAttribute("aria-expanded", String(!isOpen))
  })
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      closeMenu()
    }
  })
})

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    navMenu.dataset.open = "true"
    navToggle.setAttribute("aria-expanded", "true")
  } else if (!navMenu.dataset.open) {
    navMenu.dataset.open = "false"
    navToggle.setAttribute("aria-expanded", "false")
  }
})

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth >= 768) {
    navMenu.dataset.open = "true"
    navToggle.setAttribute("aria-expanded", "true")
  } else {
    navMenu.dataset.open = "false"
    navToggle.setAttribute("aria-expanded", "false")
  }
  setActiveLink()
})
