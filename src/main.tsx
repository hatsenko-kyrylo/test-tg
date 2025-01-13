import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import App from './App';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <TonConnectUIProvider manifestUrl='https://test-tg-murex.vercel.app/tonconnect-manifest.json'>
        <Provider store={store}>
            <App />
        </Provider>
    </TonConnectUIProvider>
);
