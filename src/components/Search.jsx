import { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Search.module.css";

export function Search() {
  const [searchText, setSearchText] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/?search=" + searchText);
  };
  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className={styles.searchButton} type="submit">
          Buscar
        </button>
      </div>
    </form>
  );
}
