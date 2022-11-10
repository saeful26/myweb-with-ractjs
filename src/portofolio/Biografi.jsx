import 'bootstrap/dist/css/bootstrap.min.css';

const Biografi = () => {
    return (
        <div>
        <section id="About">
        <div className="container">
            <div className="row text-center">
                <div className="col">
                    <h2>About Me</h2>
                </div>
            </div>
            <div className="row text-center">
                <div className="col">
                    <p>Hallo,saya saefullah saat ini saya sedang mengikuti program penyaluran kerja di EDUWORK dan mengambil kelas MERN</p>
                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="1" d="M0,64L120,90.7C240,117,480,171,720,160C960,149,1200,75,1320,37.3L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    </section>
    </div>
    );
};

export default Biografi;