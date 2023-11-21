import {Outlet, Link, useLoaderData} from 'react-router-dom';
import {getJokes} from '../services/jokes';

export async function loader(){
    const jokes = await getJokes();
    return {jokes};
}

export function Root(){
    const jokes = useLoaderData();

    console.log(jokes);

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