import { useState } from "react";
import { Link } from "react-router-dom";


interface HeaderProps {
    to : string;
    children: string;
    selected: boolean;
    onClick: () => void;
}

function Logo() {
  return (
    <div className="text-4xl mb-40 ml-4 mt-5 font-bold">
        <a href="/">MyMacros</a>
    </div>
  );
}

function NavLink({ to, children, selected, onClick }: HeaderProps){
  return (
    <Link 
      className={`px-6 py-2 rounded text-2xl ${selected ? 'bg-nav-menu-hover' : 'hover:bg-nav-menu-hover'}`} 
      to={to} 
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

function NavBar() {
  const [selectedLink, setSelectedLink] = useState('/');

  return (
    <nav className="flex flex-col items-center bg-main-bg-darker text-main-text w-66 h-screen px-4 py-2">
      <Logo />
      <ul className="space-y-10">
        <li>
          <NavLink 
            to="/" 
            selected={selectedLink === '/'} 
            onClick={() => setSelectedLink('/')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/macros-calc" 
            selected={selectedLink === '/macros-calc'} 
            onClick={() => setSelectedLink('/macros-calc')}
          >
            Macros Calculator
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/body-fat-calc" 
            selected={selectedLink === '/body-fat-calc'} 
            onClick={() => setSelectedLink('/body-fat-calc')}
          >
            Body Fat Calc
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
