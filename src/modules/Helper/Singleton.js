export class Singleton {
    static only(parent, instance, $this){
        if (parent[instance] === null) {
            parent[instance] = $this
        } else {
            console.warn(`Router instance can be as the only object entity`)
            return parent[instance]
        }
    }
}