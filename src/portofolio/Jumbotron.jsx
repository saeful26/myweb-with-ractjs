import 'bootstrap/dist/css/bootstrap.min.css';
import pr from './img/pr.jpg';



const Jumbotron = () => {
    return(
        <section className="jumbotron text-center" >
        <img src={pr} width="200" class="rounded-circle"/>
        <h1 className="display-4">SAEFULLAH</h1>
        <p className="lead">Pelajar</p>
    </section>
    );
};

export default Jumbotron;

