import React, {useState, useEffect} from 'react';
import Formulario from './Formulario'


const Produtos = () => {

        const [produ, setProdu] = useState([]);

        const [idpro, setIdpro] = useState(0);

        
        useEffect(() => {
            async function chamaApi(){
                const url = "http://localhost:5000/produtos";
                const res = await fetch(url);
                setProdu(await res.json())
            }

            chamaApi()
        }, [])

        function saveId(id){
            setIdpro(idpro => id)
        }
        
        return(
            <>
            <div className="container">

            <h1 className="text-info">Produtos!!</h1>

            <section className="container mx-auto mt-5 produtos row justify-content-center">
                {
                    
                    produ.map(row => {
                            return(
                            <div className="col-3 my-2">

                                <div key={row.idproduct} className="box_produto card border border-2" style={{width:"12rem"}} id={row.categoria}>
                                    <img className="card-img-top" src={row.imagen} alt="imagem" img-fluid/>
                                    <br />
                                    <div className="card-body">
                                        <p className="card-text h6">{row.descripcao}</p>
                                    </div>
                                    <hr />
                                    <div>
                                        <p className="card-text h3 text-center text-dark"  style={{textDecoration: "line-though"}}><del> R${row.preco}</del></p>
                                    </div>
                                    <div>
                                        <p className="card-text h4 text-center text-danger"> <strong>R${row.precoFinal}</strong> </p>
                                    </div>
                                    <a className="btn btn-dark" href="#sectionFormulario" role="button" onClick={() => saveId(row.idproduct)} >Comprar</a>
                                </div>
                                
                             </div>    
                            )
                        }

                        
                   
                    )
                }
                
            </section>
                <div id="sectionFormulario">
                    {<Formulario>{idpro}</Formulario>}
                </div>
            </div>
            </>
        );
}

export default Produtos;