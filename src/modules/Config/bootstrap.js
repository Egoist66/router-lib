import {services} from "./services.js";

class Bootstrap {

    init(after = () => {}) {
        services.forEach(serviceItem => {
            const service = new serviceItem()
            service.init()
            after(serviceItem.router)

        })

    }
}

export const app = new Bootstrap()