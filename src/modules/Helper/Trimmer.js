export class Trimmer {

    static withTrimView(component = () => ''){
        return () => {
            return component().trim()
        }
    }
}