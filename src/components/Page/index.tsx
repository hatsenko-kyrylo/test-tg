import { useAppSelector } from '@/hooks/hooks';
import { RootState } from '@/redux/store';

interface IPageName {
    pageName: 'Home' | 'About' | 'History' | 'Bridge';
}

const Page = ({ pageName }: IPageName) => {
    const address = useAppSelector((state: RootState) => state.wallet.address);

    return (
        <div style={{ margin: '0 0.5rem', color: '#000000' }}>
            {address ? `${pageName} ${address}` : pageName}
        </div>
    );
};

export default Page;
