import AllRoutes from './AllRoutes';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App h-screen flex flex-col">
      <Header />
      <div className="mb-auto flex flex-col">
        <SearchBar/>
        <AllRoutes/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
