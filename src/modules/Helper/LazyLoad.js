export class LazyLoad {
    static isFetching = true

    static async fetch(path = ''){
        LazyLoad.isFetching = true
        try {
            const module = await import(path)
            LazyLoad.isFetching = false
            return module
        }
        catch (e){
            console.log(e)
            LazyLoad.isFetching = false
        }
    }
}