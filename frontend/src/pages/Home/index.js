import Foto1 from './img/img1.png'
import Foto2 from './img/img2.png'
import Foto3 from './img/img3.png'
import Foto4 from './img/img4.png'

export default function Home(props){
    return (
    <div>
        <main className="container mt-5">
            <h1 className="text-info">Seja bem vindo(a)!</h1>
            <p className="text-dark" >Aqui nosa loja, <em>programadores tem desconto</em> nos productos para sua casa!</p>
            <hr />
        </main>

        <div className=" mb-5" style={{width:"100%"}}>
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Foto1} className="d-block img-fluid" alt="Cozinha bonita" />
                </div>

                <div className="carousel-item">
                    <img src={Foto2} className="d-block img-fluid" alt="Máquina de lavar bonita" />               
                </div>

                <div className="carousel-item">
                    <img src={Foto3} className="d-block  img-fluid" alt="Cozinha bonita" />
                </div>

                <div className="carousel-item">
                    <img src={Foto4} className="d-block  img-fluid" alt="Cozinha bonita" />
                </div>
               </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
    </div>  

    </div>
    );
}