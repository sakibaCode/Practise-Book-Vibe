
import { Outlet } from 'react-router';
import Navbar from '../component/shared/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;