import { Helmet } from 'react-helmet-async';
import Navbar from '../components/navbar/Navbar';
import Slider from '../components/slider/Slider';
import Estates from '../components/Estates/Estates';
import EstateTitle from '../components/EstateTitle/EstateTitle';

const Home = () => {
    return (
        <div className=''>
            <Helmet>
                <title>Little Hotelier | Home</title>
            </Helmet>
          
           <div>
           <Navbar></Navbar>
           
           </div>
          <div className=''>
          <Slider></Slider>
          </div>
          <div >
            <EstateTitle></EstateTitle>
          </div>
          <div>
            <Estates></Estates>
          </div>
        </div>
    );
};

export default Home;