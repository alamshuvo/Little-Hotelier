import React from 'react';
import { Link } from 'react-router-dom';

const Estate = ({item}) => {
    return (
        <div >
             <div className="card p-2 md:p-5 h-[500px] bg-base-100 shadow-xl  cursor-pointer ">
        <figure>
            <img src={item.img} className='w-full ' alt={item.segment_name}/>
            </figure>
        
        <div className="card-body ">
          <h2 className="card-title text-center">{item.estate_title}</h2>
          <h1 className='text-2xl font-bold text-green-400 mt-5'> Our facilities</h1>
        <div  className='flex flex-col md:flex-row justify-between gap-2 font-bold'>
            
        {
            item.facilities.map((a,b)=><div key={b}>
                <div className='font-bold text-blue-300'>{a}</div>
            </div>).slice(0,2)
         }
        </div>
        <div className='font-bold text-blue-300 flex justify-center items-center mt-5 font-bold'>
            <p>Status</p>
            {item.status}
        </div>
        <div className="card-actions mt-5">
            <Link to={`${item.id}`}><button className="btn bg-green-400 text-white hover:bg-blue-300">View Property</button></Link>
          </div>
        </div>
        
       
      </div>
        </div>
    );
};

export default Estate;