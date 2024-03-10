export class Provider {

    constructor() {
        if(new.target === Provider){
            throw new Error('Impossible to instantiate abstract class!')
        }
    }


    init(){}


}


