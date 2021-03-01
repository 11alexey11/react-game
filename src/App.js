import './App.css';
import MusicContainer from './components/Audio/MusicContainer';
import SoundContainer from './components/Audio/SoundContainer';
import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';
import Main from './components/Main/Main';

function App(props) {
  console.log(props);
  return (
    <div className='app-wrapper'>
      <SoundContainer />
      <MusicContainer />
      <HeaderContainer />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
