export class UrlParser {
    static params = {
        id: null,
        path: null
    }
    static parse(pattern, locationPath = ''){
        try {
            const regex = new RegExp('^' + pattern.replace(/:\w+/g, '(\\w+)') + '$');
            if(regex.test(locationPath)){
                const [path = '/', id = -1] = locationPath.split('/').filter(Boolean)
                UrlParser.params = {
                    path: `/${path}`,
                    id: parseInt(id)
                }


                return true
            }
        }
        catch (e){
            console.log(e)
        }

    }
}