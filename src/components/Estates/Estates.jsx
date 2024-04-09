import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Estate from '../Estate/Estate';

const Estates = () => {
    const data =useLoaderData();
    console.log(data);
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
            {
                data.map((item,key)=><Estate key={key} item={item}></Estate>)
            }
        </div>
        )
       
    ;
};

export default Estates;