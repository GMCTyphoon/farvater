// src/components/Header.jsx
import { useState } from "react";
import logoImg from "../assets/logo.svg";
import styles from "./Header.module.css";
import tlgIcon from "../assets/tlgicon.png";
import dzenIcon from "../assets/dzenicon.png";
import youtubeIcon from "../assets/yticon.png";
import vkIcon from "../assets/vkicon.png";
import starIcon from "../assets/star.png";
import cartIcon from "../assets/shopping-cart.png";
import PropTypes from "prop-types";

export default function Header({ setCurrentPath }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (path) => {
    setCurrentPath(path);
  };

  return (
    <header>
      <div className={styles.topBar}>
        <div className={styles.socialIcons}>
          {/* Иконки социальных сетей */}
          <a href="#telegram" className={styles.socialIcon}>
            <img src={tlgIcon} alt="telegram" />
          </a>
          <a href="#dzen" className={styles.socialIcon}>
            <img src={dzenIcon} alt="dzen" />
          </a>
          <a href="#instagram" className={styles.socialIcon}>
            <img src={youtubeIcon} alt="youtube" />
          </a>
          <a href="#linkedin" className={styles.socialIcon}>
            <img src={vkIcon} alt="vk" />
          </a>
        </div>
        <div className={styles.userActions}>
          <div className={styles.links}>
            <a href="#forum" className={styles.link}>
              Форум
            </a>
            <a href="#search" className={styles.link}>
              Поиск
            </a>
            <a href="#contacts" className={styles.link}>
              Контакты
            </a>
          </div>
          <div className={styles.userIcons}>
            <a href="#favorites" className={styles.userIcon}>
              <img src={starIcon} alt="favorites" />
            </a>
            <a href="#cart" className={styles.userIcon}>
              <img src={cartIcon} alt="cart" />
            </a>
            <button className={styles.userButton}>Личный кабинет</button>
          </div>
        </div>
      </div>
      <div className={styles.mainMenu}>
        <div className={styles.logo}>
          <img src={logoImg} alt="Elcore logo" />
        </div>
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
              <a
                href="#elcorestore"
                className={styles.menuLink}
                onClick={() => {
                  handleNavClick({
                    title: "/ElcoreStore",
                    name: "#elcorestore",
                  });
                }}
              >
                ElcoreStore
              </a>
            </li>
            <li className={styles.menuItem}>
              <a
                href="#elcorecloud"
                className={styles.menuLink}
                onClick={() => {
                  handleNavClick({
                    title: "/ElcoreCloud",
                    name: "#elcorecloud",
                  });
                }}
              >
                ElcoreCloud
              </a>
            </li>
            <li className={styles.menuItem}>
              <a
                href="#elcoreide"
                className={styles.menuLink}
                onClick={() => {
                  handleNavClick({
                    title: "/ElcoreIde",
                    name: "#elcoreide",
                  });
                }}
              >
                ElcoreIDE
              </a>
            </li>
            <li className={styles.menuItem} onClick={toggleDropdown}>
              <a
                href="#learning"
                className={styles.menuLink}
                id={styles.learningLink}
                onClick={() => {
                  handleNavClick({
                    title: "/Обучение и ресурсы",
                    name: "#learning",
                  });
                }}
              >
                Обучение и ресурсы
              </a>
              <span className={styles.dropdownIcon}></span>
              {isDropdownOpen && (
                <ul className={styles.dropdownMenu}>
                  <li className={styles.dropdownItem}>
                    <a
                      href="#course1"
                      className={styles.dropdownLink}
                      onClick={() => {
                        handleNavClick({
                          title: "Обучение и ресурсы/Курс 1",
                          name: "#learning1",
                        });
                      }}
                    >
                      Курс 1
                    </a>
                  </li>
                  <li className={styles.dropdownItem}>
                    <a
                      href="#course2"
                      className={styles.dropdownLink}
                      onClick={() => {
                        handleNavClick({
                          title: "Обучение и ресурсы/Курс 2",
                          name: "#learning2",
                        });
                      }}
                    >
                      Курс 2
                    </a>
                  </li>
                  <li className={styles.dropdownItem}>
                    <a
                      href="#course3"
                      className={styles.dropdownLink}
                      onClick={() => {
                        handleNavClick({
                          title: "Обучение и ресурсы/Курс 3",
                          name: "#learning3",
                        });
                      }}
                    >
                      Курс 3
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li className={styles.menuItem}>
              <a
                href="#news"
                className={styles.menuLink}
                onClick={() => {
                  handleNavClick({
                    title: "Новости и статьи",
                    name: "#news",
                  });
                }}
              >
                Новости и статьи
              </a>
            </li>
          </ul>
        </nav>
        <div 
          className={`${styles.menuIcon} ${isMobileMenuOpen ? styles.menuIconOpen : ''}`}
          onClick={toggleMobileMenu}
        >
          <span className={styles.menuIconBar}></span>
          <span className={styles.menuIconBar}></span>
          <span className={styles.menuIconBar}></span>
        </div>
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <div className={styles.mobileMenuItem}>
            <a href="#elcorestore" className={styles.mobileMenuLink}>
              ElcoreStore
            </a>
          </div>
          <div className={styles.mobileMenuItem}>
            <a href="#elcorecloud" className={styles.mobileMenuLink}>
              ElcoreCloud
            </a>
          </div>
          <div className={styles.mobileMenuItem}>
            <a href="#elcoreide" className={styles.mobileMenuLink}>
              ElcoreIDE
            </a>
          </div>
          <div className={styles.mobileMenuItem}>
            <a href="#learning" className={styles.mobileMenuLink}>
              Обучение и ресурсы
            </a>
          </div>
          <div className={styles.mobileMenuItem}>
            <a href="#news" className={styles.mobileMenuLink}>
              Новости и статьи
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  currentPath: PropTypes.object,
  setCurrentPath: PropTypes.func,
};
