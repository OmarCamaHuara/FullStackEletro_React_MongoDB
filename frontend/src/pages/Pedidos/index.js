import React, { useState, useEffect} from 'react';

export default function Pedidos(props){

    const [usuario, setUsuario] = useState([]);

    const [render, setRender] = useState(false);

    useEffect(() => {
        async function chamaApi(){
            const url = "http://localhost/proyectoFullStack/FullStackEletro-Ract/Backend/indexUsuario.php";
            const res = await fetch(url);
            setUsuario(await res.json());
        }
        chamaApi()
    }, [render])


    return(
        <div className="container">
            <h1 className="text-info">Formulario de Ventas</h1>
        
            {
                usuario.map(row => {
                    return(

                        <div>

                        <div>
                            <table className="table table-sm table-dark text-center">
                                <thead>
                                    <tr>
                                    <th scope="col">ID Producto</th>
                                    <th scope="col">Categoria</th>
                                    <th scope="col">Imagen</th>
                                    <th scope="col">Nome Cliente</th>
                                    <th scope="col">Sobrenome</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">TOTAL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">{row.idProdutos} </th>
                                    <td>{row.categoria}</td>
                                    <td><img style={{width:"50px"}} src={row.imagen} alt={row.categoria}/> </td>
                                    <td>{row.nome}</td>
                                    <td>{row.sobrenome}</td>
                                    <td>{row.email}</td>
                                    <td>{row.precoFinal}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                     </div>
                    )
                })
            }

        </div>
        
    );
}