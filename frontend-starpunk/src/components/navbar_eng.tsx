import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/umi-god.css";
const NavbarEN: FC = () => {
    const navigation:any = useNavigate();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark umi-color32-blue-pearl">
                <div className="container">
                    <a className="navbar-brand" href="#">LOGO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Game</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li> */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    News
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" aria-disabled="true">Support</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                <li className="nav-item dropdown">
                                    <a className="nav-link  active" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className='fas fa-globe'></i>
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {/* <li><a className="dropdown-item" >ภาษาไทย</a></li> */}
                                        <li><a className="dropdown-item" >English</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <button className="btn btn-outline-light btn-sm me-2 ms-2">Sign In</button>
                            <button
                             onClick={()=>{
                                navigation("/en/creation");
                            }}
                             className="btn btn-primary btn-sm" type="submit">Play Now</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default NavbarEN
