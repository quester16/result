import { Link } from "react-router-dom";
import type { NarutoDataType } from "../../data/data";
import data from "../../data/data.json";
import { publicRoute } from "../../router/lib/publicRoutes";
import styles from "./styles.module.scss";

export const Categories = () => {
  return (
    <div className={styles.content}>
      <div className={styles.cards}>
        {(data as NarutoDataType).map((item) => (
          <Link
            to={publicRoute.categoryByAlias(item.name)}
            className={styles.card}
            key={item.id}
          >
            <h4>{item.name}</h4>
            <p>Возраст: {item.info.age}</p>
            <p>Деревня: {item.info.village}</p>
            <div className={styles.image}>
              <img src={item.images[0]} alt={item.name} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
