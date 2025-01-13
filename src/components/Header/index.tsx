import { NavLink } from 'react-router-dom'; // Используйте NavLink из react-router-dom
import WalletButton from '../WalletButton';

import homeIcon from '@/assets/home.svg';
import aboutIcon from '@/assets/about.svg';
import historyIcon from '@/assets/history.svg';
import bridgeIcon from '@/assets/bridge.svg';

import './header.css';

const Header = () => {
    const setActiveNav = ({ isActive }: { isActive: boolean }) =>
        isActive ? 'header__nav-link active' : 'header__nav-link';

    return (
        <header className='header'>
            <WalletButton />
            <nav className='header__nav'>
                <NavLink className={setActiveNav} to='/' end>
                    <div className='header__nav-link-wrap'>
                        <img src={homeIcon} alt='home' />
                    </div>
                    <p className='header__nav-link-title'>Home</p>
                </NavLink>
                <NavLink className={setActiveNav} to='/about'>
                    <div className='header__nav-link-wrap'>
                        <img src={aboutIcon} alt='about' />
                    </div>
                    <p className='header__nav-link-title'>About</p>
                </NavLink>
                <NavLink className={setActiveNav} to='/history'>
                    <div className='header__nav-link-wrap'>
                        <img src={historyIcon} alt='history' />
                    </div>
                    <p className='header__nav-link-title'>History</p>
                </NavLink>
                <NavLink className={setActiveNav} to='/bridge'>
                    <div className='header__nav-link-wrap'>
                        <img src={bridgeIcon} alt='bridge' />
                    </div>
                    <p className='header__nav-link-title'>Bridge</p>
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
