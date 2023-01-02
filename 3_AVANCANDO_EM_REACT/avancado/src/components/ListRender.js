import {useState} from 'react'

const ListRender = () => {
const [list] = useState(['Mathues', 'Pedro', 'Josias', 'Maria']);

const [users] = useState([
    {id:1, name: "Matheus", age: 33},
    {id:2, name: "João", age: 28},
    {id:3, name: "PEdro", age: 44},
]);



  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} 
                </li>
            ))}
        </ul>
        

    </div>
  )
}

export default ListRender