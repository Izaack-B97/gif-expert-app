import React from 'react'
import { GifGridItem } from './GifGridItem';
// import {getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
    
    // const [images, setImages] = useState([]);
    
    // useEffect(() => {
    //     getGifs(category)
    //         .then(setImages);
    // }, [category]);

    const { loading } = useFetchGifs();
    console.log(loading);

    return (
        <div>
            <h3>{ category }</h3>
            { loading ? 'Cargando . . . ' : 'Data cargada' }
        </div>
        // <Fragment>
        //     <h3>{ category }</h3>
        //     {/* <div className="card-grid">
        //         {
        //             images.map(image => {
        //                 return <GifGridItem key={ image.id }{ ...image }/>
        //             })
        //         }
        //     </div> */}
        // </Fragment>
    )
}
