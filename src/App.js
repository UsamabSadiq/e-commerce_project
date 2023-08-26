import './App.css';
import Newsletter from './components/Footer/Newsletter/Newsletter';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Header />
      <div className='mb-10'></div>
      {/* <Home /> */}
      <Newsletter />
    </div>
  );
}

export default App;
