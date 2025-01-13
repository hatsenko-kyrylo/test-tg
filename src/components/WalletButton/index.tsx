import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { connectWallet, disconnectWallet } from '@/redux/walletSlice';

const WalletButton = () => {
    const address = useSelector((state: RootState) => state.wallet.address);
    const dispatch = useDispatch();

    const handleConnect = () => {
        if (address) {
            dispatch(disconnectWallet());
        } else {
            // Подключение TON Wallet через @wallet
            const walletUrl = 'https://t.me/wallet?start';
            window.open(walletUrl, '_blank'); // Открываем TON Wallet
            const exampleAddress = 'EQC6H7...'; // Пример адреса (здесь интеграция с TON API)
            dispatch(connectWallet(exampleAddress));
        }
    };

    return (
        <button onClick={handleConnect} style={{ backgroundColor: address ? 'red' : 'green' }}>
            {address ? 'Disconnect' : 'Connect'}
        </button>
    );
};

export default WalletButton;
