export class ActiveLink {

    static matchLinkToHighlight(links) {
        if (links) {
            links.forEach((link, i) => {

                ActiveLink.highlightByPath(link, 'active')

            })
        }
    }

    static off(links, attr = null) {
        links.forEach(link => {
            link.classList.remove(attr)
        })
    }

    static highlight(link, attr = null) {
        const active = link.dataset[attr]
        if (active) {
            link.classList.add(attr)
        }
    }

    static highlightByPath(link, attr = null) {

        if (link.getAttribute('href') === location.pathname) {
            link.classList.add(attr)
        }
    }


    static defaultHighlight(link, attr = null) {
        if (link.dataset[attr] === "true.default") {

            link.classList.add(attr)

        }
    }
}