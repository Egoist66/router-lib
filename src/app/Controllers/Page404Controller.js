import {View} from "../../modules/Helper/View.js";
import {Home} from "../../views/home.js";
import {Controller} from "./Controller.js";
import {page404} from "../../views/page404.js";

export class Page404Controller extends Controller{
    static place = '.app-container'

    static view(param = null){

        View.render(Page404Controller.place, page404)
    }
}