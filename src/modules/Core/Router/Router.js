import {UrlParser} from "../../Helper/UrlParser.js";
import {Page404Controller} from "../../../app/Controllers/Page404Controller.js";

export class Router {
    static #instance = null
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


        this.matchRoute()
        window.addEventListener('popstate', (e) => {
            this.matchRoute(e)
        })

        if (Router.#instance === null) {
            Router.#instance = this
        } else {
            console.warn(`Router instance can be as the only object`)
            return Router.#instance
        }

    }

    #route(path) {

        window.history.pushState({page: path}, null, path)

    }

    matchRoute() {
        if(this.#notFound === 'Page404Controller'){
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
            const elems = document.querySelectorAll(this.#links.selector)

            if (elems.length) {
                elems.forEach(elem => {
                    elem.addEventListener('click', (e) => {
                        e.preventDefault()


                        this.#route(elem.getAttribute('href'))
                        this.matchRoute()
                    })
                })
            }
        })


    }
}