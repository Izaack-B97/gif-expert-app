import React, { useState, useEffect } from 'react'

export const GifGrid = ({ category }) => {
    
    const [count, setCount] = useState(0);
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

        console.log(giphys)
    }

    // getGifs();

    return (
        <div>
            {count}
            <h3>{ category }</h3>
            <button onClick={ (e) => { setCount(count+1) }}>+1</button>
        </div>
    )
}
