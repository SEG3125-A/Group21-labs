// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">{t('title')}</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              <i className="fas fa-shopping-cart"></i> {t('cart')}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/account">
              <i className="fas fa-user"></i> {t('account')}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/service">
              <i className="fas fa-user"></i> {t('customer_service')}
            </Link>
          </li>
          <li className="nav-item">
          <button onClick={() => changeLanguage('fr')}>Français</button>
      <button onClick={() => changeLanguage('en')}>English</button>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">{t('search')}</button>
        </form>
      </div>
    </header>
  );
};

export default Header;
