import './App.css';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { StorySection } from './components/StorySection/StorySection';
import { MindSection } from './components/MindSection/MindSection';
import { FAQSection } from './components/FAQSection/FAQSection';
import { Footer } from './components/Footer/Footer';
import { Collection } from './components/Collection/Collection';
import { useEffect, useState } from 'react'
function App() {
      const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
  return (
    <>
      <Header isMobile={isMobile} />
      <main>
        <Hero />
        <StorySection id='about'/>
        <MindSection id='m-map'isMobile={isMobile} />
        <FAQSection id='faq' isMobile={isMobile} />
        <Collection id='collection' />
      </main>
      <Footer id='mint'/>  
    </>
  );
}

export default App;
