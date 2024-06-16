import './App.css';
import Header from './components/Header';
import CarCard from './components/CarCard';
import Info from './components/Info';
import InfoContent from './components/InfoContent';
import PacmanLoader from "react-spinners/PacmanLoader"; // import ClipLoader from react-spinners/ClipLoader


// using react hooks for loading screen
// using react-spinners for loading screen
import {useState, useEffect} from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  // serve as life cycle method
  useEffect(()=>{
    setLoading(true);
    // after 8 seconds set loading to false
    setTimeout(()=>{
      setLoading(false);
    }, 3000); // 300ms = 3s
  }, []); // Add an empty dependency array

   return (
      <>
        {loading ? (
          <div className="loader">
          <PacmanLoader
            color={"#8d620f"}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          </div>
        ) : (
          <div className='page'>
            <Header />
            <CarCard />
            <Info />
          </div>
        )}
      </>
    );
}

export default App;
