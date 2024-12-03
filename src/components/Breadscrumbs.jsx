import styles from "./Breadscrumbs.module.css";
import PropTypes from "prop-types";

const Breadcrumbs = ({ currentPath, setCurrentPath }) => {
  const breadcrumbs = currentPath.title.split("/").filter(Boolean);

  const handleClick = (index) => {
    const newPath = breadcrumbs.name.slice(0, index + 1).join("/");
    setCurrentPath(newPath);
  };
  console.log(breadcrumbs);
  return (
    <nav className={styles.breadcrumbs}>
      <ul className={styles.breadcrumbList}>
        <li className={styles.breadcrumbItem}>
          <a href="#main" onClick={() => handleClick(0)}>
            Главная
          </a>
        </li>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className={styles.breadcrumbItem}>
            <a
              href={`#${breadcrumb}`}
              onClick={() => handleClick(index + 1)}
            >
              {breadcrumb}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  currentPath: PropTypes.object,
  setCurrentPath: PropTypes.func,
};

export default Breadcrumbs;
