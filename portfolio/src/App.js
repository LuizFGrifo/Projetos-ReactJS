import './App.css';
import Top from './top'
import Footer from './footer';
import Description from './description';
import SumaryContainer from './summary';
import RedesSociais from './props';

export default function App() {
  return (
    <div className="App">
      <Top />
      <Description />
      <SumaryContainer />
      <RedesSociais />
      <Footer />
    </div>
  );
}
