import {Outlet, Link} from 'react-router-dom';
export function Root(){
    return (
        <div id="navigation-bar">
            <nav>
                <ul>
                    <li>
                        <Link to={"/flow"}>
                            Flow
                        </Link>
                    </li>
                    <li>
                        <Link to={"/apartments"}>
                            Apartments
                        </Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}