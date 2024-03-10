import {View} from "../../modules/Helper/View.js";
import {Home} from "../../views/home.js";
import {Controller} from "./Controller.js";

export class HomeController extends Controller{
    static place = '.app-container'

    static view(param = null){

        View.render(this.place, Home)
    }
}