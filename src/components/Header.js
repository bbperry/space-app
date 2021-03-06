import React from 'react';

function Header() {
  return (
    <>
      <header className='primary-header flex'>
        <div>
          <img src="./logo.svg" alt="space tourism logo" />
        </div>
        <nav>
          <ul className="primary-navigation underline-indicators flex">
            <li className="active">
              <a className="ff-sans-cond uppercase text-white letter-spacing-2" href="#">
                <span>00</span>Home
              </a>
            </li>
            <li>
              <a className="ff-sans-cond uppercase text-white letter-spacing-2" href="#">
                <span>01</span>Destination
              </a>
            </li>
            <li>
              <a className="ff-sans-cond uppercase text-white letter-spacing-2" href="#">
                <span>02</span>Crew
              </a>
            </li>
            <li>
              <a className="ff-sans-cond uppercase text-white letter-spacing-2" href="#">
                <span>03</span>Technology
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
