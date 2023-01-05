import MyComponent from "./MyComponent";

const TemplateExpressions = () =>{
    const name = "Bruninha";
    const data = {
        age: 31,
        job: "Programmer",
    }

    return(
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <p>{4+4}</p>
            <p>{console.log('Olá pessoal')}</p>
            <MyComponent/>
        </div>
    )

}

export default TemplateExpressions