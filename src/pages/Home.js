import Massage from '../assets/img/massage.gif';
import Buttons from '../components/Buttons/Buttons';


function Home() {
    return (
        <div className="d-flex flex_vertical centralize">
            <h1 className="font_logo font_normal">Gestão de Clientes</h1>
            <div className="d-flex flex_horizontal gap16">
                <Buttons buttonColor="info" buttonText="Clientes" to="/projetos" />
                <Buttons buttonColor="primary" buttonText="+ Cliente" to="/novo-projeto" />
            </div>
            <img src={Massage} alt="animation from Welcome Application" className="img_responsive" />
        </div>
        )
}

export default Home;