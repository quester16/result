import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import type { NarutoDataType } from "../../data/data";
import data from "../../data/data.json";
import { publicRoute } from "../../router/lib/publicRoutes";
import styles from "./styles.module.scss";

export const Categories = () => {
  const [searchParams, setSearchParams] = useSearchParams({ select: "all" });
  const currentSelect = searchParams.get("select") ?? "all";
  const [selectRanks, setSelectRanks] = useState<string[]>([]);

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParams({ select: e.target.value });
  };

  useEffect(() => {
    const ranksSet = new Set<string>();

    data.forEach((item) =>
      item.info.rank.length < 2
        ? ranksSet.add(item.info.rank[0])
        : item.info.rank.forEach((rank) => ranksSet.add(rank))
    );

    setSelectRanks([...ranksSet]);
  }, []);

  const filteredData: NarutoDataType =
    currentSelect === "all"
      ? data
      : data.filter((item) =>
          item.info.rank.some((rank) => rank.includes(currentSelect))
        );

  return (
    <div className={styles.filterWrapper}>
      <select
        name="filter"
        value={currentSelect}
        onChange={handleFilter}
        className={styles.select}
      >
        <option value="all">Все</option>
        {selectRanks.map((rank) => (
          <option key={rank} value={rank}>
            {rank}
          </option>
        ))}
      </select>
      <div className={styles.cards}>
        {filteredData.map((item) => (
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
