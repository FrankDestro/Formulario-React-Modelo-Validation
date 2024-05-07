import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import './styles.css';

function Home() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Home
