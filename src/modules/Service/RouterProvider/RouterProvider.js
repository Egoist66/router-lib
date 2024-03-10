import {Provider} from "../Provider.js";
import {Router} from "../../index.js";
import {routesConfig} from "../../../routes/routes.js";

export class RouterProvider extends  Provider {
    static router = null
    constructor() {
        super();

    }

    init() {
        try {

            RouterProvider.router = new Router(routesConfig)
            RouterProvider.router.init()
        }
        catch (e) {
            console.log(e)
        }
    }
}