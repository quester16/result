import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data/data.json";
import styles from "./styles.module.scss";

export const SingleCategory = () => {
  const params = useParams();
  console.log(params);
  const currentCharacter = data.find((item) => item.name === params.name);
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <div className={styles.mainImage}>
          <img
            src={currentCharacter?.images[activeImage]}
            alt={currentCharacter?.name}
          />
        </div>

        <div className={styles.thumbnails}>
          {currentCharacter?.images.map((img, index) => (
            <div
              key={img}
              className={`${styles.thumbnail} ${
                index === activeImage ? styles.activeThumb : ""
              }`}
              onClick={() => setActiveImage(index)}
            >
              <img src={img} alt={`${currentCharacter?.name} ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{currentCharacter?.name}</h3>

        <div className={styles.info}>
          <ul>
            <li>
              <span>Возраст:</span>
              {currentCharacter?.info.age}
            </li>
            <li>
              <span>Ранг:</span>
              {currentCharacter?.info.rank.join(", ")}
            </li>
            <li>
              <span>Деревня:</span>
              {currentCharacter?.info.village}
            </li>
            <li>
              <span>Техники:</span>
              {currentCharacter?.info.notable_jutsu.join(", ")}
            </li>
          </ul>
        </div>

        <p className={styles.about}>{currentCharacter?.about.join(" ")}</p>
      </div>
    </div>
  );
};
