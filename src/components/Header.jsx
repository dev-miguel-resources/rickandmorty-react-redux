import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSection } from '../actions';
import '../assets/styles/components/Header.scss';
import Logo from '../assets/static/images/logo.png';

const Header = (props) => {
    const { sectionActive } = props;

    const handleSetSection = (section) => {
        props.setSection(section);
    };

    return (
        <header className='header'>
            <figure className='header__logo'>
                <img 
                    className='header__logo-img'
                    src={Logo}
                    alt='Rick and Morty Logo'
                />
            </figure>
            <nav className='header__nav'>
                <ul className='header__nav__options'>
                    <li
                      onClick={() => handleSetSection('Characters')}
                      className={`header__nav__options-item ${
                          sectionActive === 'Characters' ?
                            'active' : 
                            ''
                      }`}  
                    >
                      <Link to='/'>Characters</Link>
                    </li>
                    <li
                      onClick={() => handleSetSection('Favorites')}
                      className={`header__nav__options-item ${
                          sectionActive === 'Favorites' ?
                          'active' :
                          ''
                      }`}
                    >
                      <Link to='/favorites'>Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

const mapStateToProps = (state) => {
    return {
        sectionActive: state.sectionActive,
    };
};

const mapDispatchToProps = {
    setSection,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);