import {Link, withRouter } from 'react-router-dom';

function CategoriasUm(){

    function exibirCategoria(categoria){
        let elementos = document.getElementsByClassName('box_produto')
        for(var i = 0; i<=elementos.length; i++){
            if(categoria === elementos[i].id){
                elementos[i].style = 'display:block'
            }else{
                elementos[i].style = 'display:none'
            }
        }
    }

    let exibirTodo = () => {
        let elementos = document.getElementsByClassName('box_produto')
        for(var i = 0; i<=elementos.length; i++){
            elementos[i].style = 'display: block'
        }   
    }
    return(
        <div className="btn-group">
            <button type="button" className="btn btn-info font-">
            <a className="text-white text-decoration-none" as={Link} to="/produtos" href="/produtos">Produtos</a>
            </button>

            <button type="button" className="btn btn-info dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="sr-only">Toggle Dropdown</span>
            </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" onClick={exibirTodo}>Todos</a>
                    <a className="dropdown-item" onClick={() => exibirCategoria('geladeira')}>Geladeiras</a>
                    <a className="dropdown-item" onClick={() => exibirCategoria('fogao')}>Fogões</a>
                    <a className="dropdown-item" onClick={() => exibirCategoria('microondas')}>Microondas</a>
                    <a className="dropdown-item" onClick={() => exibirCategoria('lavaRoupa')}>Lavadouras de Ropas</a>
                    <a className="dropdown-item" onClick={() => exibirCategoria('lavaLouca')}>Lava_Louças</a>
                </div>
                
        </div>
    );
}
 const Categorias = withRouter(CategoriasUm)

 export default Categorias;






