
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
        <div className='container mx-auto font-lato'>
            <Outlet></Outlet>
            <div className='mt-10'>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;