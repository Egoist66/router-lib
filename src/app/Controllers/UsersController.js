import {View} from "../../modules/Helper/View.js";
import {Users} from "../../views/users.js";
import {Controller} from "./Controller.js";

export class UsersController extends  Controller{

    static place = '.app-container'
    static view(param = null){

        View.render(this.place, Users)
    }
}