import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { RootState } from '@/redux/store';
import { connectWallet, disconnectWallet } from '@/redux/walletSlice';

import './walletButton.css';
import { useTonConnectUI, useTonAddress } from '@tonconnect/ui-react';
import { useEffect } from 'react';

const WalletButton = () => {
    const address = useAppSelector((state: RootState) => state.wallet.address);
    const dispatch = useAppDispatch();

    const [tonConnectUI] = useTonConnectUI();
    const userAddress = useTonAddress();

    useEffect(() => {
        dispatch(connectWallet(userAddress));
    }, [userAddress]);

    console.log(userAddress);

    const handleConnect = async () => {
        if (address) {
            dispatch(disconnectWallet());
        } else {
            tonConnectUI.openModal();
        }
    };

    return (
        <button
            onClick={handleConnect}
            className='wallet-button'
            style={{ backgroundColor: address ? '#ba2323' : '#2349ba' }}
        >
            {address ? 'Disconnect Wallet' : 'Connect Wallet'}
        </button>
    );
};

export default WalletButton;
