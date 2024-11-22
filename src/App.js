
import './App.css';
import Fifth from './components/Fifth';
import First from './components/First';
import Footer from './components/Footer';
import Fourth from './components/Fourth';
import Header from './components/Header';
import Second from './components/Second';
import ThirdSibling from './components/ThirdSibling';
function App() {
  return (
    <div className="App">
    <Header className="App-header"/>
    <main className="App-content"> 
   
    <First />
    <Second />
    <hr className="divider-line" />
    <ThirdSibling />
    <hr className="divider-line" />
    <Fourth />
    <hr className="divider-line" />
    <Fifth />
     </main>
    
    <Footer className="App-footer" />
    </div>
  );
}

export default App;



