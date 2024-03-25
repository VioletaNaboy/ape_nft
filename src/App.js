import './App.css';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { StorySection } from './components/StorySection/StorySection';
import { MindSection } from './components/MindSection/MindSection';
import { FAQSection } from './components/FAQSection/FAQSection';
import { Footer } from './components/Footer/Footer';
import { Collection } from './components/Collection/Collection';
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StorySection id='about'/>
        <MindSection id='m-map'/>
        <FAQSection id='faq' />
        <Collection id='collection' />
      </main>
      <Footer id='mint'/>  
    </>
  );
}

export default App;
