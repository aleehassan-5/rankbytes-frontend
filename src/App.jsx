import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countries from './components/Countries';
import SearchPanel from './components/SearchPanel';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Budget from './components/Budget';
import Tools from './components/Tools';
import Blog from './components/Blog';
import Footer from './components/Footer';
import ChatFab from './components/ChatFab';
import OrderModal from './components/OrderModal';
import { AuthProvider } from './context/AuthContext';
import { OrderModalProvider, useOrderModal } from './context/OrderModalContext';

function OrderModalMount() {
  const { open, presetWebsiteId, closeOrderModal } = useOrderModal();
  return <OrderModal open={open} presetWebsiteId={presetWebsiteId} onClose={closeOrderModal} />;
}

export default function App() {
  return (
    <AuthProvider>
      <OrderModalProvider>
        <Navbar />
        <Hero />
        <Countries />
        <SearchPanel />
        <Services />
        <HowItWorks />
        <Budget />
        <Tools />
        <Blog />
        <Footer />
        <ChatFab />
        <OrderModalMount />
      </OrderModalProvider>
    </AuthProvider>
  );
}
