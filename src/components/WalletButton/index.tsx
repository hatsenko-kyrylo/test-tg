import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { RootState } from '@/redux/store';
import { connectWallet, disconnectWallet } from '@/redux/walletSlice';

import './walletButton.css';

const WalletButton = () => {
    const address = useAppSelector((state: RootState) => state.wallet.address);
    const dispatch = useAppDispatch();

    const handleConnect = async () => {
        if (address) {
            dispatch(disconnectWallet());
        } else {
            const walletUrl = 'https://t.me/wallet?start';
            window.location.href = walletUrl;

            try {
                // Убедитесь, что объект Telegram WebApp доступен
                if (window.Telegram && window.Telegram.WebApp) {
                    // Подписка на событие
                    window.Telegram.WebApp.onEvent('mainButtonClicked', (data) => {
                        console.log(data); // Обрабатываем данные события

                        // Получаем данные о пользователе (если доступны)
                        const userData = window.Telegram.WebApp.initDataUnsafe.user;
                        if (userData) {
                            const walletAddress = userData.id.toString(); // Пример использования ID
                            dispatch(connectWallet(walletAddress)); // Сохраняем адрес в Redux
                        } else {
                            console.error('Нет данных пользователя');
                        }
                    });
                } else {
                    console.error('Telegram WebApp не доступен');
                }
            } catch (error) {
                console.error('Ошибка при подключении:', error);
            }
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
