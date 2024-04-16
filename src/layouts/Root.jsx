
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/navbar/Navbar';

const Root = () => {
    return (
        <div className='container mx-auto font-lato'>
          <div>
          <Navbar ></Navbar>
          </div>
            <Outlet></Outlet>
            <div className='mt-10'>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;