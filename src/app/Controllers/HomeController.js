import {View} from "../../modules/Helper/View.js";
import {Controller} from "./Controller.js";
import {LazyLoad} from "../../modules/Helper/LazyLoad.js";

export class HomeController extends Controller{
    static place = '.app-container'

    static async view(param = null){

        const {Home} = await LazyLoad.fetch('../../views/home.js')

        View.render(this.place, Home)
    }
}


