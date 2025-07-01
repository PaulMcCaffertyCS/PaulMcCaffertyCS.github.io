function navigateToHome() {
    navigateTo("home", false);
}

function navigateToProjects() {
    navigateTo("projects", false);
}

function navigateToGames() {
    navigateTo("games", false);
}

function navigateToAbout() {
    navigateTo("about", false);
}

function navigateToContact() {
    navigateTo("contact", false);
}

/**
 * @param {string} page Page to navigate to, formatted either as just the pre-html portion, or include the .html portion. If no .html is included, it will be appended.
 * @param {boolean} newTab Whether the new page should open a new tab for the navigation or not. If it doesn't, it replaces the current page.
 */
function navigateTo(page, newTab) {
    const pageEndsWithHtml = page.endsWith(".html");
    const tabTarget = newTab ? `_blank` : `_top`;
    const pageDir = pageEndsWithHtml ? page.substring(0, page.indexOf(".html")) : page;
    const pageName = pageEndsWithHtml ? page : `${page}.html`;
    window.open(`../../pages/${pageDir}/${pageName}`, tabTarget);
}

document.addEventListener("DOMContentLoaded", () => {
    const homeButton = document.getElementById("navigation-home-button");
    const projectsButton = document.getElementById("navigation-projects-button");
    const gamesButton = document.getElementById("navigation-games-button");
    const aboutButton = document.getElementById("navigation-about-button");
    const contactButton = document.getElementById("navigation-contact-button");

    homeButton.addEventListener("click", () => {
        navigateToHome();
    });
    projectsButton.addEventListener("click", () => {
        navigateToProjects();
    });
    gamesButton.addEventListener("click", () => {
        navigateToGames();
    });
    aboutButton.addEventListener("click", () => {
        navigateToAbout();
    });
    contactButton.addEventListener("click", () => {
        navigateToContact();
    });
})