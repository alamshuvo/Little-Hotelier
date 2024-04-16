import { Helmet } from 'react-helmet-async';

import Slider from '../components/slider/Slider';
import Estates from '../components/Estates/Estates';
import EstateTitle from '../components/EstateTitle/EstateTitle';
import WhyChoceUs from '../components/WhyChoceUs/WhyChoceUs';

const Home = () => {
    return (
        <div className=''>
            <Helmet>
                <title>Little Hotelier | Home</title>
            </Helmet>
          
           <div>
           {/* <Navbar></Navbar> */}
           
           </div>
          <div className=''>
          <Slider></Slider>
          </div>
          <div className='mt-10' >
            <EstateTitle></EstateTitle>
          </div>
          <div className='mt-10'>
            <Estates></Estates>
          </div>
          <div className='mt-10 space-y-10'>
            <WhyChoceUs></WhyChoceUs>
          </div>
        </div>
    );
};

export default Home;