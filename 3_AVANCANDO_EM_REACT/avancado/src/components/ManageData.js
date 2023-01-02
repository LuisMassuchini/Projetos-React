import {useState} from 'react'

const ManageData = () => {
    let SomeData = 10;

    const [ number, setNumber] = useState(15);

  return (
    <div>
        <div>
            <p>Valor: {SomeData}</p>
            <button onClick={() => {SomeData = 15}}>Mudar variável</button>
        </div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(25)}> Mudar o state </button>
        </div>

    </div>
  )
}

export default ManageData