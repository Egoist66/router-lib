export class View {

    static render(place, component = () => ''){
        if(document.querySelector(place)){
            const container = document.querySelector(place)
            container.innerHTML = component()
        }
    }
}