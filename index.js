import {app} from './src/modules/index.js'
import {View} from "./src/modules/Helper/View.js";
import {Template} from "./src/views/template/template.js";

import './src/resources/css/index.scss'
import './src/resources/js/app.js'

const Default = Template()

try {
    app.init((router) => {
        View.render('#app', () => Default)
        router.matchRoute()


    })
}
catch (e) {
    console.log(e)
}

