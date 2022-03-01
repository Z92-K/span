import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa"
import { createApi } from "unsplash-js";
import "./Sidebar.css";

function Sidebar() {
    const [sidebar, setSidebar] = useState(false)
    const [ topics, setTopics] = useState([])

    const api = createApi({
        accessKey: "_s97xS3KK8N19j8KQ--MaMNBbUjqwRi257wP16ckMws"
    });

    useEffect(() => {
        api.topics.list({})
            .then(result => {
                setTopics(result.response.results);
            })
            .catch((err) => {
                console.log("something went wrong!", err);
            });
    }, []);
    console.log(topics)
    const showSidebar = () => setSidebar(!sidebar)
    if (topics === null || topics.length === 0) {
        return <div>Loading...</div>;
    } else if (topics.errors) {
        return (
            <div>
                <div>{topics.errors[0]}</div>
                <div>PS: Make sure to set your access token!</div>
            </div>
        );
    } else {
        return (
            <>
                <div>
                    <div className="navbar">
                        <Link to="#" className="menu-bars">
                            <FaIcons.FaBars onClick={showSidebar}/>
                        </Link>
                    </div>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">

                            </Link>

                        </li>
                        {topics.map((item, index) => {
                            return (
                                <li key={index} className="nav-text">
                                    <Link to={`/${item.title}`}>
                                        {item.title}
                                    </Link>

                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </>


        );
    }
}


export default Sidebar;


