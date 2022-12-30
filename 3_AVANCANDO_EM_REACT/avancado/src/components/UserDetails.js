const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
      <h1>Lista de candidatos:</h1>
      <ul>
        <li>nome:{nome}, idade: {idade} ano/s profissao:{profissao}</li>
        {idade >= 18 ? (<p>Apito a tirar carteira de motorista</p>) : (<p>Ainda tem que esperar completar a idade minima</p>)}
      </ul>
    </div>
  )
}

export default UserDetails