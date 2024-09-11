import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.png';

export const Header = () => (
    <div className="header">
        <div className="header-logo">
            <Link to="/">
                <img src={logo} alt="divya logo" />
            </Link>
        </div>
        <div className="link-div">
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/new">
                New Patient
            </NavLink>
            <NavLink to="/upload">
                Add Record
            </NavLink>
            <NavLink to="/view">
                View Records
            </NavLink>
        </div>
    </div>
)