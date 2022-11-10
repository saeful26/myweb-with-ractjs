import 'bootstrap/dist/css/bootstrap.min.css';
import foto from './img/foto.png';



const Skill = () => {
    return (
        <section id="Projects">
        <div className="container">
            <div className="row text-center">
                <div className="col">
                <h2>Projects</h2>
                </div>
            </div>
            <div className="row width">
                <div className="col">
                    <div className="card">
                        <img src={foto} className="card-img-top" alt="foto-1"/>
                        <div className="card-body">
                          <p className="card-text-center">Gambar hanya pemanis,di ambil dari situs https://dosenit.com</p>
                        </div>
                      </div>
                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="1" d="M0,64L120,90.7C240,117,480,171,720,160C960,149,1200,75,1320,37.3L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    </section>
    );
};

export default Skill;