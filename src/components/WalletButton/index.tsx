import { useEffect } from 'react';
import { useTonConnectUI, useTonAddress } from '@tonconnect/ui-react';
import { useAppDispatch } from '@/hooks/hooks';
import { connectWallet, disconnectWallet } from '@/redux/walletSlice';
import './walletButton.css';

const WalletButton = () => {
    const dispatch = useAppDispatch();
    const [tonConnectUI] = useTonConnectUI();
    const userAddress = useTonAddress();

    useEffect(() => {
        if (userAddress) {
            dispatch(connectWallet(userAddress));
        }
    }, [userAddress]);

    const handleConnect = async () => {
        if (userAddress) {
            dispatch(disconnectWallet());
            tonConnectUI.disconnect();
        } else {
            tonConnectUI.openModal();
        }
    };

    return (
        <button
            onClick={handleConnect}
            className='wallet-button'
            style={{ backgroundColor: userAddress ? '#ba2323' : '#2349ba' }}
        >
            {userAddress ? 'Disconnect Wallet' : 'Connect Wallet'}
        </button>
    );
};

export default WalletButton;
