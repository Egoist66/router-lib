import {View} from "../../modules/Helper/View.js";
import {User} from "../../views/user.js";
import {Controller} from "./Controller.js";

export class UserController extends Controller{

    static place = '.app-container'
    static view(param = null){

        View.render(this.place, () => User(param.id))
    }
}