import Logo from "./Logo";
import Searchbar from "./Searchbar";

const Navbar = ()=> {
    return(
        <div className="flex flex-row justify-start items-center">
            <Logo/>
            <Searchbar/>
        </div>
    );
}

export default Navbar;