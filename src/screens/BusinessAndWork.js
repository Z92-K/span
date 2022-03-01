import React, {useEffect, useState} from 'react';
import Carousel   from "react-elastic-carousel";
import "./style.css";
import { createApi } from "unsplash-js";


const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];
function BusinessAndWork() {
    const [sidebar, setSidebar] = useState(false)
    const [ photos, setPhotos] = useState([])
    const settings = {
        rows: 2,
        slidesPerRow: 2
    };
    const api = createApi({
        accessKey: "_s97xS3KK8N19j8KQ--MaMNBbUjqwRi257wP16ckMws"
    });

    useEffect(() => {
        api.search
            .getPhotos({ query: "Business-Work", orientation: "landscape" })
            .then(result => {
                setPhotos(result.response.results);
            })
            .catch((err) => {
                console.log("something went wrong!", err);
            });
    }, []);
    console.log("Photos", photos.map(url => url.urls.full))
    const showSidebar = () => setSidebar(!sidebar)
    if (photos === null || photos.length === 0) {
        return <div>Loading...</div>;
    } else if (photos.errors) {
        return (
            <div>
                <div>{photos.errors[0]}</div>
                <div>PS: Make sure to set your access token!</div>
            </div>
        );
    } else {
        return (
            <div className="App">
                <hr className="separator"/>
                <div className="carousel-wrapper">
                    <Carousel settings={settings} breakPoints={breakPoints}>
                        {photos.map((item, i) =>
                            <div key={i}><img className="image" src={item.urls.full} alt=""/></div>
                        )}
                    </Carousel>
                </div>
            </div>
        );
    }
}
export default BusinessAndWork