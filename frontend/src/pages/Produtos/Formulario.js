import React, { useState, useEffect} from 'react';

export default function Formulario({children}){



    const [usuario, setUsuario] = useState([]);

    const [render, setRender] = useState(false);

    const [idProduto, setIdProduto] = useState(0);
    const [nome, setNome] = useState(false);
    const [sobrenome, setSobrenome] = useState(false);
    const [cpf, setCpf] = useState(false);
    const [cep, setCep] = useState(false);
    const [telefone, setTelefone] = useState(false);
    const [email, setEmail] = useState(false);

    
    useEffect(() => {
        async function chamaApi(){
            const url = "http://localhost/proyectoFullStack/FullStackEletro-Ract/Backend/indexUsuario.php";
            const res = await fetch(url);
            setUsuario(await res.json());
        }
        chamaApi()
    }, [render])


    async function registerVenta(event) {
        event.preventDefault();

        let formData = new FormData(event.target);

        const url = "http://localhost/proyectoFullStack/FullStackEletro-Ract/Backend/registerUsuarios.php";

        fetch(url, {
            method: "POST",
            body: formData
        }).then((response) =>response.json())
    }
    
    return(
    
        <div>
            <h1 className="text-center text-info">Formulario - Compra</h1>
            
            <section className="container formulario">

                <form onSubmit={registerVenta}>
        
                    <div className="form-group col-6">
                            <div>
                                <h1>Digite este CODIGO -- {children} -- aqui!! </h1>
                            </div>
                            <div>
                                <label for="exampleFormControlInput1">Codigo do produto:</label>
                                <input type="text" className="form-control" name="idProdutos"
                            id="exampleFormControlInput1" placeholder="ID" />
                            </div>
                            
                    </div>

                    <div className="container d-flex row">  
                        <div className="form-group col-6">
                            <label for="exampleFormControlInput1">Nome:</label>
                            <input type="text" className="form-control"  name="nome" id="exampleFormControlInput1" placeholder="Seu nome" />
                        </div>
                        <div className="form-group col-6">
                            <label for="exampleFormControlInput1">Sobrenome:</label>
                            <input type="text" className="form-control"  name="sobrenome" id="exampleFormControlInput1" placeholder="Seu Sobrenome" />
                        </div>
                    </div>
                    <div className="container d-flex row">
                        <div className="form-group col-6">
                            <label for="exampleFormControlInput1">CPF:</label>
                            <input type="text" className="form-control"  name="cpf" id="exampleFormControlInput1" placeholder="mascaras" />
                        </div>
                        <div className="form-group col-6">
                            <label for="exampleFormControlInput1">CEP:</label>
                            <input type="number" className="form-control"  name="cep" id="exampleFormControlInput1" placeholder="mascara" />
                        </div>
                    </div>
                    <div className="container d-flex row">
                        <div className="form-group col-6">
                            <label for="exampleFormControlInput1">Telefone:</label>
                            <input type="number" className="form-control"  name="telefone" id="exampleFormControlInput1" placeholder="Telefone" />
                        </div>
                        
                        <div className="form-group col-6">
                            <label for="exampleFormControlInput1">Email:</label>
                            <input type="email" className="form-control"  name="email" id="exampleFormControlInput1" placeholder="pepito42@gmail.com" />
                        </div>
                    </div>

                    <input type="reset" className="btn btn-primary btn-lg btn-block" value="Reset Formulario"/>
                    <button className="btn btn-primary btn-lg btn-block" >Enviar</button>
                </form>

            </section>


        

        </div>

    );
}