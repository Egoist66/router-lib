import {memo} from "../utils/memo.js";

export const User = memo((id = null) => {
    return (
        `
        
            <h2>User id - ${id}</h2>
        
        
        `
    )
})