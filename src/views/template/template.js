import {Trimmer} from "../../modules/Helper/Trimmer.js";
import {
    navBar,
    navBarList,
    header,
    appContainer,
    navBarListItems
} from '../../resources/template.module.scss'

export const Template = Trimmer.withTrimView((component = () => '') => {
    return (
        `
           <header class=${header}>
                <div class="${appContainer}">
                   <nav class=${navBar}>
                        <ul class=${navBarList}>
                             <li><a class=${navBarListItems} href="/">Main</a></li>  
                             <li><a class=${navBarListItems} href="/users">Users</a></li>
                             <li><a class=${navBarListItems} href="/user/2">User</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div class="app-container ${appContainer}">${component()}</div>
        
        `
    )
})

