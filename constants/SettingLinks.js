const Settinglinks = [{
        link: "#",
        linkText: "settings",
        linkLogo: "settings"
    },
    {
        link: "#",
        linkText: "charts",
        linkLogo: "pie_chart"
    },
    {
        link: "#",
        linkText: "trends",
        linkLogo: "trending_up"
    },
    {
        link: "#",
        linkText: "contact",
        linkLogo: "contacts"
    },
    {
        link: "#",
        linkText: "Billing",
        linkLogo: "payments"
    },
    {
        link: "#",
        linkText: "user settings",
        linkLogo: "manage_accounts"
    }
];

const sidebarLinkContainerSecond = document.querySelectorAll('.sidebar_links');

Settinglinks.map((link) => {

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

    sidebarLinkContainerSecond[1].append(hyperLink)

})