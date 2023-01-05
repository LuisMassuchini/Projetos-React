import { useState } from 'react';
import './App.css';

import City from './assets/city.jpg'
import CarDetails from './components/CarDetails';
import ChangeMessageState from './components/ChangeMessageState';
import ConditionalRender from './components/ConditionalRender';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Fragment from './components/Fragment';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import Message from './components/Message';
import ShowUserName from './components/ShowUserName';
import UserDetails from './components/UserDetails';

function App() {

  function showMessage() {
    console.log("Evento do componente pai!")
  }
  //const name = "Luís";
  const [userName] = useState("Maria");

  const cars = [
    {id:1, brand: "Ferrari", color: "Amarela", newCar: true, km:0 },
    {id:2, brand: "Kia", color: "Branco", newCar: false, km:34343 },
    {id:3, brand: "Renault", color: "Azul", newCar: false, km: 234 },

  ]

  const people = [
    {id:1, nome: "Bruna", idade: 25, profissao:"Garota de Programa" },
    {id:2, nome: "Felipe", idade: 35, profissao:"Garoto de Programa" },
    {id:3, nome: "Noah", idade: 1, profissao:"Bebê da mamãe" },
    
  ]

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/*props */}
      <ShowUserName name={userName} />
      {/*destructuring */}
      <CarDetails brand="VW" km={10000} color="black"newCar={false}/>
      {/* reaproveitando */}
      <CarDetails brand="Ford" color="Vermelha" km={0} newCar={true}/>
      <CarDetails brand="Fiat" color="Branco" km={4500} newCar={false}/>
      {/*loop em array de objetos*/ }
      {cars.map((car) => (
        <CarDetails
        key={car.id}
        brand={car.brand}
        color = {car.color}
        km= {car.km}
        newCar={car.newCar}
        />
        ))}
        <Fragment key={Fragment.length} propFragment="Teste"/>
        
        {/* children */}
        <Container myValue="testing">
          <p>Este é o paragrafo children</p>
        </Container>
        <Container myValue="testing2">
          <p>Este é o paragrafo children 2</p>
        </Container>
        <ExecuteFunction myFunction={showMessage}/>
        <Message msg={message}/>
        <ChangeMessageState handleMessage={handleMessage}/>
        {people.map((pessoa) => (
          <UserDetails
          key={pessoa.id}
          nome={pessoa.nome}
          idade={pessoa.idade}
          profissao={pessoa.profissao}
          />
        ))}
      
    </div>
  );
}

export default App;
