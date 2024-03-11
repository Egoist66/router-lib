import {View} from "../../modules/Helper/View.js";
import {Controller} from "./Controller.js";
import {LazyLoad} from "../../modules/Helper/LazyLoad.js";

export class UsersController extends  Controller{

    static place = '.app-container'
    static async  view(param = null){

        const {Users} = await LazyLoad.fetch('../../views/users.js')

        View.render(this.place, Users)
    }
}