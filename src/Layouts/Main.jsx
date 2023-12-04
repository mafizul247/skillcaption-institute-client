import { Outlet } from 'react-router-dom';
import NavBer from '../Pages/Shared/NavBer/NavBer';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavBer />
            <div className='min-h-[calc(100vh-10px)] pt-16'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;