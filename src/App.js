import './App.css';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { StorySection } from './components/StorySection/StorySection';
import { MindSection } from './components/MindSection/MindSection';
import { FAQSection } from './components/FAQSection/FAQSection';
import { Footer } from './components/Footer/Footer';
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StorySection />
        <MindSection />
        <FAQSection />
      </main>
      <Footer/>  
    </>
  );
}

export default App;
