const links = [{
        link: "#",
        linkText: "dashboard",
        linkLogo: "dashboard"
    },
    {
        link: "#",
        linkText: "my orderds",
        linkLogo: "local_shipping"
    },
    {
        link: "#",
        linkText: "explore",
        linkLogo: "explore"
    },
    {
        link: "#",
        linkText: "featured products",
        linkLogo: "verified"
    },
];

const sidebarLinkContainer = document.querySelector('.sidebar_links');

links.map((link) => {

    let hyperLink = document.createElement('a');
    hyperLink.classList.add("link");
    hyperLink.setAttribute("href", link.link);

    let icon = document.createElement('span');
    icon.classList.add("icon", "material-symbols-rounded")
    icon.textContent = link.linkLogo;

    let linkText = document.createElement('span');
    linkText.classList.add("link_text");
    linkText.textContent = link.linkText;

    hyperLink.append(icon);
    hyperLink.append(linkText);

    sidebarLinkContainer.append(hyperLink)

})