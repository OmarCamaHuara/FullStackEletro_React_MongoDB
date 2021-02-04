import Card from '../../img/usapagos.png';

export default function Footer(){
    return(
    <footer className="page-footer font-small pt-4 bg-white">
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <h5 className="text-uppercase text-uppercase- text-info font-weight-bold">Formas de pagamento</h5>
                    <p>Você escolhe como, quando você pode fazer isso</p>
                </div>

                <hr className="clearfix w-100 d-md-none pb-3" />

                <div className="col-md-6 mb-md-0 mb-6 d-flex justify-content-center">
                    <img src={Card} alt="Formas de pagamento" />
                </div>
            </div>
            <div className="footer-copyright text-center py-3">© 2020 Copyright:
                <a href="https://www.recodepro.org.br/"> RecodePro</a>
            </div>
        </div>
    </footer>
    );
}