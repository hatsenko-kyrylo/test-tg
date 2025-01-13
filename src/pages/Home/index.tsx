import { useAppSelector } from '@/hooks/hooks';
import { RootState } from '@/redux/store';

const Home = () => {
    const address = useAppSelector((state: RootState) => state.wallet.address);

    return <div>{address ? address : 'Home'}</div>;
};

export default Home;
