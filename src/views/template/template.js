import {Trimmer} from "../../modules/Helper/Trimmer.js";
import {
    navBar,
    navBarList,
    header,
    appContainer,
    navBarListItems
} from '../../resources/css/template.module.scss'
import {memo} from "../../utils/memo.js";

export const Template = memo(Trimmer.withTrimView((component = () => '') => {
    return (
        `
           <header class=${header}>
                <div class="${appContainer}">
                   <nav class=${navBar}>
                        <ul class=${navBarList}>
                             <li><a data-active="true"  class=${navBarListItems} href="/">Main</a></li>  
                             <li><a data-active="true" class=${navBarListItems} href="/users">Users</a></li>
                             <li><a data-active="true" class=${navBarListItems} href="/user/2">User</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div class="app-container ${appContainer}">${component()}</div>
        
        `
    )
}))

