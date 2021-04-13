import './App.css';
import Header from './components/Header/Header';
import News from './components/News/News';
import TopHeadLines from './components/TopHeadLines/TopHeadLines';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <TopHeadLines></TopHeadLines>
      <News></News>
    </div>
  );
}

export default App;
