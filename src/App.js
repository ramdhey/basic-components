// import logo from './logo.svg';
import coba from './coba.svg';
import './App.css';

import Komponensatu from './komponen/Komponen';
import Komponendua from './komponen/Komponendua';



function App() {
  return (
    <div className="App">
       <div className='utama'>
       <img src={coba} className="App-logo" alt="logo" />
        <Komponensatu />
        

       </div>
       <div className='dua'>
       <Komponendua/>

       </div>
    </div>
  );
}

export default App;
