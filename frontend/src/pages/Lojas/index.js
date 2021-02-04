import './style.css';

export default function Lojas(props){
    return (
    <div className="container mt-5">
        <header>
            <h2 className="text-info">Nossas Lojas!</h2>
        </header>
        <hr />
        <section className="container filiais">
                <div className="filiais-box">
                    <h3>Rio de Janeiro</h3>
                        <p>Avenida Presidente Varga, 5000</p>
                        <p>2 andar : andar</p>
                        <p>Centro</p>
                        <p>(21) 3333-3333</p>
                </div>
                <div className="filiais-box">
                    <h3>Sao Paulo</h3>
                        <p>Avenida O, 6520</p>
                        <p>1 andar : andar</p>
                        <p>Norte</p>
                        <p>(21) 4444-5555</p>
                </div>
                <div className="filiais-box">
                    <h3>Bahia</h3>
                        <p>Avenida Gui, 6000</p>
                        <p>13 andar : andar</p>
                        <p>Sur</p>
                        <p>(21) 1111-4443</p>
                </div>
                <div className="filiais-box">
                    <h3>Minas Gerais</h3>
                        <p>Avenida Suricatas, 5560</p>
                        <p>12 andar : andar</p>
                        <p>Este</p>
                        <p>(21) 4284-4443</p>
                </div>
                <div className="filiais-box">
                    <h3>Santa Catalina</h3>
                        <p>Avenida Presidente Varga, 5000</p>
                        <p>10 andar : andar</p>
                        <p>Centro</p>
                        <p>(21) 3333-3333</p>
                </div>
            
        </section>
    </div>
    );
}