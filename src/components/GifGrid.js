import React, { Fragment } from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
        
    const { data: images ,loading } = useFetchGifs(category);
    console.log(loading);

    return (
       
        <Fragment>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>
            { loading && <p className="animate__animated animate__flash">Loading . . .</p> }
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
