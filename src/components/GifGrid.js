import React, { useState, useEffect, Fragment } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    
    const [images, setImages] = useState([]);
    
    useEffect(() => {
        getGifs();  
    }, []);

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Mario bros&limit=10&api_key=x4MsguogEaSJ411Yz6Bz1V57Ao10yKYy'; 
        const resp = await fetch(url);
        const { data } = await resp.json();

        // console.log(data);

        const giphys = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });

        setImages(giphys);
    }


    return (
        <Fragment>
            <h3>{ category }</h3>
            <div className="card-grid">
                {
                    images.map(image => {
                        return <GifGridItem key={ image.id }{ ...image }/>
                    })
                }
            </div>
        </Fragment>
    )
}
