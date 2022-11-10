import Navbar from './Navbar';
import Jumbotron from "./Jumbotron";
import Biografi from './Biografi';
import Skill from "./Skill";
import Kontak from './Kontak';


const portofolio = () => {
        return (
            <div>
               <Navbar/>
               <Jumbotron/>
               <Biografi/>
               <Skill/>
               <Kontak/>
            </div>
        );
};

export default portofolio;