import './App.css';
import Navbar from './Components/Navbar';
import DiscoverSection from './Components/DiscoverSection';
import TrendingSection from './Components/TrendingSection';
import MoreNftSection from './Components/MoreNftSection';
import TopCreatorSection from './Components/TopCreatorSection';
import CatagoriesSection from './Components/CatagoriesSection';
import MagicMashroomSection from './Components/MagicMashroomSection';
import HowWorkSection from './Components/HowWorkSection';


function App() {
  return (
    <div className="App">
      <Navbar />
      <DiscoverSection />
      <TrendingSection />
      <MoreNftSection />
      <TopCreatorSection />
      <CatagoriesSection />
      <MagicMashroomSection />
      <HowWorkSection />

    </div>
  );
}

export default App;
