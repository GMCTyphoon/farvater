import styles from "./Footer.module.css";
import logo from "../assets/logo.svg";
import telegramIcon from "../assets/tlgicon.png";
import youtubeIcon from "../assets/yticon.png";
import vkIcon from "../assets/vkicon.png";
import dzenIcon from "../assets/dzenicon.png";
import downloadIcon from "../assets/downloadicon.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.leftSection}>
            <img src={logo} alt="ElcorePLC" className={styles.logo} />
            <p className={styles.description}>
              Платформа для автоматизации
              <br />
              ваших процессов
            </p>
            <img
              src={downloadIcon}
              alt="Скачать"
              className={styles.downloadIcon}
            />
            <p className={styles.copyright}>© ООО «НПО «Фарватер» 2024</p>
          </div>

          <div className={styles.middleSection}>
            <div className={styles.column}>
              <p className={styles.columnTitle}>Платформа</p>
              <ul>
                <li>
                  <a href="#">ElcoreStore</a>
                </li>
                <li>
                  <a href="#">ElcoreCloud</a>
                </li>
                <li>
                  <a href="#">ElcoreIDE</a>
                </li>
              </ul>
            </div>
            <div className={styles.column}>
              <p className={styles.columnTitle}>Обучение и ресурсы</p>
              <ul>
                <li>
                  <a href="#">Что такое ElcorePLC</a>
                </li>
                <li>
                  <a href="#">Документация</a>
                </li>
                <li>
                  <a href="#">Обучающие материалы</a>
                </li>
                <li>
                  <a href="#">Примеры использования</a>
                </li>
                <li>
                  <a href="#">База знаний</a>
                </li>
              </ul>
            </div>
            <div className={styles.column}>
              <button className={styles.columnTitleButton}>
                Личный кабинет
              </button>
              <ul>
                <li>
                  <a href="#">Контакты</a>
                </li>
                <li>
                  <a href="#">Новости и статьи</a>
                </li>
                <li>
                  <a href="#">Сообщество (Форум)</a>
                </li>
                <li>
                  <a href="#">Тех поддержка</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.socialLinks}>
            <a href="#">
              <img src={telegramIcon} alt="Telegram" />
            </a>
            <a href="#">
              <img src={dzenIcon} alt="Dzen" />
            </a>
            <a href="#">
              <img src={youtubeIcon} alt="YouTube" />
            </a>
            <a href="#">
              <img src={vkIcon} alt="VK" />
            </a>
          </div>
          <div className={styles.legalLinks}>
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Карта сайта</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
