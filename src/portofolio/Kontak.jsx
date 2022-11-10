import 'bootstrap/dist/css/bootstrap.min.css';




const Kontak = () => {
    return (
        <section id="contact">
           
            <div className="row text-center">
                <div className="col">
                    <h2>contact</h2>
                </div>
            </div>
            <div className="row text-center">
                <div className="col">
                </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <form>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">message</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
        </div>
    </section>
    );
};

export default Kontak;