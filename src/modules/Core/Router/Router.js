import {UrlParser} from "../../Helper/UrlParser.js";
import {Page404Controller} from "../../../app/Controllers/Page404Controller.js";
import {ActiveLink} from "../../Helper/ActiveLink.js";
import {Singleton} from "../../Helper/Singleton.js";

export class Router {
    static instance = null


    #routes = {
        routesMap: []
    }
    #notFound = ''
    #watch = (arg) => {
    }
    #paths = [{
        pattern: '',
        render: (params) => {
        }
    }]
    #links = {
        selector: '',

    }

    constructor({paths = [], links = {}, watch, notFound}) {
        this.#paths = paths
        this.#links = links
        this.#watch = watch
        this.#notFound = notFound


        window.addEventListener('load', () => {

            this.matchRoute()
            this.linkElements = document.querySelectorAll(this.#links.selector)
            ActiveLink.matchLinkToHighlight(this.linkElements)
        })


        window.addEventListener('popstate', (e) => {
            this.matchRoute(e)
        })

        return Singleton.only(Router, 'instance', this)


    }

    #route(path) {

        window.history.pushState({page: path}, null, path)

    }

    matchRoute() {
        if (this.#notFound === 'Page404Controller') {
            Page404Controller.view()
        }

        this?.#paths?.forEach((option, i) => {

            switch (true) {

                case UrlParser.parse(option.pattern, location.pathname): {

                    this.#routes.routesMap = [...this.#routes.routesMap, option.pattern]
                    this.#watchRoute(this.#watch)
                    option.render(option.pattern, UrlParser.params)
                    break;
                }


            }
        })
    }

    #watchRoute(callback) {
        callback(this.#routes)
    }

    init() {
        window.addEventListener('load', () => {

            if (this.linkElements.length) {
                this.linkElements.forEach(elem => {

                    elem.addEventListener('click', (e) => {
                        e.preventDefault()

                        ActiveLink.off(this.linkElements, 'active')
                        ActiveLink.highlight(elem, 'active')


                        this.#route(elem.getAttribute('href'))
                        this.matchRoute()
                    })


                })
            }
        })


    }
}