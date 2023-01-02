const Challenge = () => {

    const a = 4;
    const b = 5;

    const somar = () => {
        return console.log(`${a} + ${b} = ${a+b}`)
    }
    return(
        <div>
            <h2>Valor de a:{a} e b:{b}</h2>
            <button onClick={somar}>Clique aqui para somar!</button>
        </div>
    )

}

export default Challenge