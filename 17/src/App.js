import './App.css';
import Head from './Head';
import Card from './Card';
function App() {
  return (
    <div className="App">
        <Head />
          <h1>Calorie Read Only</h1>
          <div className="Container"> 
            <Card food="Pizza" cals="56" />
            <Card food="Burger" cals="69" />
            <Card food="Coke" cals="500" />
            <Card food="Browne" cals="180" />
            <Card food="Fried Rice" cals="90" />
            <Card food="Lassania" cals="200" />
            <Card food="Pani Puri" cals="10" />
        </div>
    </div>
  );
}

export default App;
