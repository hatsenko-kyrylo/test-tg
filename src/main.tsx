import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import store from '@/redux/store';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <TonConnectUIProvider manifestUrl='https://test-tg-murex.vercel.app/tonconnect-manifest.json'>
        <Provider store={store}>
            <App />
        </Provider>
    </TonConnectUIProvider>
);
