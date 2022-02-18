import React from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import styles from './NavBar.module.css';

const NavBar = () => {
  const links = [
    {
      id: uuidv4(),
      path: '/',
      text: 'Home',
    },
    {
      id: uuidv4(),
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: uuidv4(),
      path: '/qoute',
      text: 'Qoute',
    },
  ];
  return (
    <>
      <div data-testid="navbar" className={styles.container}>
        <div className={styles.title}>
          <h1>Math Magicians</h1>
        </div>
        <nav className={styles.navbar}>
          <ul>
            {
              links.map((link) => (
                <>
                  <li key={link.id}>
                    <NavLink
                      activeClassName={styles.activeLink}
                      to={link.path}
                      exact
                    >
                      {link.text}
                    </NavLink>
                  </li>
                  <div className={styles.line} />
                </>
              ))
            }
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
