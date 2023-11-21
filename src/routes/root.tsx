import {Outlet} from 'react-router-dom';
export function Root(){
    return (
        <div id="navigation-bar">
            <nav>
                <ul>
                    <li>
                        <a href="/flow">Flow</a>
                    </li>
                    <li>
                        <a href="/apartments">apartments</a>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}