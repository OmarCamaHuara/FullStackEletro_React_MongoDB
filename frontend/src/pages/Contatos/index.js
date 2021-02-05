import Gmail from '../../img/gmail.png';
import Whatsapp from '../../img/whatsapp.png';
import './styles.css';
import React, {useState, useEffect} from 'react';

const Contatos = () =>{


    const [alert, setAlert] = useState (false);
    const [comentarios, setComentarios] = useState([]);
    const [render, setRender] = useState(false);
    const [msg , setMsg] = useState("");

    useEffect(async () => {
        const url = "http://localhost:5000/mostrar";
        const response = await fetch(url);
        setComentarios(await response.json());
    }, [render])



    async function registerComent(event){
        event.preventDefault();
        let formData = new FormData(event.target);

        const url = "http://localhost:5000/comentarios";

        fetch(url, {
            method: "POST",
            body: formData
        }).then((response) => response.json()).then((dados) => {
            setRender(!render);
            setMsg(dados);
            setTimeout(() => {
                setMsg(false);
            }, 2000);
        });
    }


    return (
    <div className="container mt-5">
        <header>
            <h2 className="text-info">Contato!</h2>
        </header>
        <hr />
        <section className="filiais">
            <div className="contacto">
                <img src={Gmail} />
                contacto@fullstackeletro
            </div>
            <div className="contacto">
                <img src={Whatsapp} />
                (11) 980808286
            </div>
        </section>

        
        <section className="formulario">

            <form onSubmit={registerComent}>

                <div className="form-group">
                    <label for="exampleFormControlInput1">Nome:</label>
                    <input type="text" className="form-control"  name="nome" id="exampleFormControlInput1" placeholder="Seu nome" />
                </div>

                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Mensaje:</label>
                    <textarea className="form-control" name="msg" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <button className="btn btn-primary btn-lg btn-block">Enviar</button>

            </form>

        </section>


        { msg && <div className="alert alert-success mx-auto mt-4 w-75" role="alert">
            Cadastro efectuado com sucesso
        </div>

        }

            <h2>Comentarios</h2>
            
            <section className="comen">
                {
                    comentarios.map((element) => {
                        return (
                            
                            <div key={ element._id } className="card w-50 mx-auto mt-3">
                                <div className="card-header">
                                    { element.nome }
                                </div>
                                <div className="card-body">
                                    Mensaje: { element.msg }
                                </div>
                            </div>
                        )
                    }).reverse()
                }

                
            </section>
    </div>
    );
}
export default Contatos;