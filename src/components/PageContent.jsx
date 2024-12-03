import { useState, useMemo, useEffect } from "react";
import styles from "./PageContent.module.css";
import data from "../../backend/data/available-data.json";
import image from "../assets/image.png";
import panginationleft from "../assets/panginationleft.png";
import panginationright from "../assets/panginationright.png";

function formatDate(dateString) {
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  const date = new Date(dateString);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

export default function PageContent() {
  const [itemsOnPage, setItemsOnPage] = useState(9);
  const [activeTag, setActiveTag] = useState("Все новости и статьи");
  const [pageNumber, setPageNumber] = useState(1);

  // useEffect(() => {        //Это обеспечит плавную прокрутку страницы вверх каждый раз, когда пользователь меняет страницу.
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }, [pageNumber]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1400) {
        setItemsOnPage(8);
      } else {
        setItemsOnPage(9);
      }
    };

    // Установка начального значения
    handleResize();

    // Добавление слушателя изменения размера окна
    window.addEventListener("resize", handleResize);

    // Очистка слушателя при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const filteredData = useMemo(() => {
    const start = pageNumber * itemsOnPage - itemsOnPage;
    const end = pageNumber * itemsOnPage;

    if (activeTag === "Все новости и статьи") {
      return data.slice(start, end);
    }
    return data.filter((item) => item.type === activeTag).slice(start, end);
  }, [activeTag, pageNumber, itemsOnPage]);

  const renderPaginationItems = () => {
    let totalPages = Math.ceil(data.length / itemsOnPage);
    if (activeTag === "Новость" || activeTag === "Статья") {
      totalPages = Math.ceil(
        data.filter((item) => item.type === activeTag).length / itemsOnPage
      );
    }
    let items = [];

    // Добавляем первую страницу
    items.push(
      <li
        key={1}
        className={`${styles.paginationItem} ${
          pageNumber === 1 ? styles.active : ""
        }`}
        onClick={() => setPageNumber(1)}
      >
        1
      </li>
    );

    let leftBound = Math.max(
      2,
      pageNumber === totalPages ? pageNumber - 2 : pageNumber - 1
    );
    let rightBound = Math.min(
      totalPages - 1,
      pageNumber === 1
        ? pageNumber + 3
        : pageNumber + 1 || pageNumber === 2
        ? pageNumber + 2
        : pageNumber + 1
    );

    // Добавляем многоточие после первой страницы
    if (leftBound > 2) {
      items.push(
        <li key="leftDots" className={styles.paginationItem}>
          ...
        </li>
      );
    }

    // Добавляем страницы между границами
    for (let i = leftBound; i <= rightBound; i++) {
      items.push(
        <li
          key={i}
          className={`${styles.paginationItem} ${
            pageNumber === i ? styles.active : ""
          }`}
          onClick={() => setPageNumber(i)}
        >
          {i}
        </li>
      );
    }

    // Добавляем многоточие перед последней страницей
    if (rightBound < totalPages - 1) {
      items.push(
        <li key="rightDots" className={styles.paginationItem}>
          ...
        </li>
      );
    }

    // Добавляем последнюю страницу
    if (totalPages > 1) {
      items.push(
        <li
          key={totalPages}
          className={`${styles.paginationItem} ${
            pageNumber === totalPages ? styles.active : ""
          }`}
          onClick={() => setPageNumber(totalPages)}
        >
          {totalPages}
        </li>
      );
    }

    return items;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Новости и статьи</h1>

      <div className={styles.tags}>
        <button
          className={`${styles.tag} ${
            activeTag === "Все новости и статьи" ? styles.active : ""
          }`}
          onClick={() => setActiveTag("Все новости и статьи")}
        >
          Все новости и статьи
        </button>
        <button
          className={`${styles.tag} ${
            activeTag === "Новость" ? styles.active : ""
          }`}
          onClick={() => setActiveTag("Новость")}
        >
          Новости
        </button>
        <button
          className={`${styles.tag} ${
            activeTag === "Статья" ? styles.active : ""
          }`}
          onClick={() => setActiveTag("Статья")}
        >
          Статьи
        </button>
      </div>

      <div className={styles.grid}>
        {filteredData.map((dataItem) => (
          <div key={dataItem.id} className={styles.article}>
            <div className={styles.imageWrapper}>
              <img src={image} alt={dataItem.title} className={styles.image} />
            </div>
            <div className={styles.content}>
              <div className={styles.meta}>
                {dataItem.type === "Новость" && (
                  <>
                    <span>{formatDate(dataItem.date)}</span>
                    <span>/</span>
                  </>
                )}
                <span>{dataItem.type}</span>
              </div>
              <h4 className={styles.articleTitle}>{dataItem.title}</h4>
              <p className={styles.description}>{dataItem.body}</p>
            </div>
          </div>
        ))}
      </div>
      <ul className={styles.pagination}>
        <li className={styles.paginationItem} onClick={() => setPageNumber(1)}>
          <img src={panginationleft} alt="jump to first page" />
        </li>
        {renderPaginationItems()}
        <li
          className={styles.paginationItem}
          onClick={() => {
            const totalPages =
              activeTag === "Все новости и статьи"
                ? Math.ceil(data.length / itemsOnPage)
                : Math.ceil(
                    data.filter((item) => item.type === activeTag).length /
                      itemsOnPage
                  );
            setPageNumber(totalPages);
          }}
        >
          <img src={panginationright} alt="jump to last page" />
        </li>
      </ul>
    </div>
  );
}
