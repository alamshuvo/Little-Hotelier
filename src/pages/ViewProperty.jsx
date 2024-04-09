import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewProperty = () => {
    const data =useLoaderData()
    const { id } = useParams();
  const details = data.find((item) => item.id== id);
    console.log(data,details);
    return (
        
        <div>
           <Helmet>
                <title>Little Hotelier | Property {id}</title>
            </Helmet>
            This is veiw property page
        </div>
    );
};

export default ViewProperty;