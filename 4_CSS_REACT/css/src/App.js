
import './App.css';
import MyComponents from './components/MyComponents';
import {useState} from 'react'
import CarDetails from './components/CarDetails';

function App() {
  const n = 15;
  const [name] =useState("FElipe")

  const redTitle = true;

  const cars = [
    {id:1, brand: "Ferrari", color: "Amarela", newCar: true, km:0 },
    {id:2, brand: "Kia", color: "Branco", newCar: false, km:34343 },
    {id:3, brand: "Renault", color: "Azul", newCar: false, km: 234 },

  ]
  return (
    <div className="App">
      <h4>
      {cars.map((car) => (
        <CarDetails 
        key={car.id}
        brand={car.brand}
        color = {car.color}
        km= {car.km}
        newCar={car.newCar}
        />
        ))}
      </h4>
    </div>
  );
}

export default App;
