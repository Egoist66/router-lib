export class FallBackNotFound {

    static view(links, options, controller){
        links.forEach((link, i) => {
            if (options[i].pattern !== location.pathname) {

                controller()
            }
        })
    }
}