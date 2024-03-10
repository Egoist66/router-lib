export class Controller {
    static place = ''
    constructor() {
        if(new.target === Controller){
            throw new Error('Impossible to instantiate abstract class!')
        }
    }



    static view(param = null){}
}