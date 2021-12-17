import './App.css';

import Navbar from './components/Nav/Navbar';
import Header from './components/Layout/Header';
import WhatsNew from './components/Layout/WhatsNew';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <WhatsNew />
    </div>
  );
}

export default App;
