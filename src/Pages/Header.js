import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const menu = < >
    <li className="mx-5">Graphics Pro</li>
    <li className="mx-5">Admission</li>
    <li className="mx-5">Login</li>
    <li className="mx-5">Register</li>
    </>
    return (
        <div>
            <div className="navbar bg-emerald-300 text-black">
  <div className="flex-1">
    <Link className="btn btn-ghost normal-case text-xl">Employee Pro</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 ">
     {menu}
    </ul>
  </div>
</div>
        </div>
    );
};

export default Header;