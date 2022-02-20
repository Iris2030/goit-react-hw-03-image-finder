
import s from "../../styles.module.css";
import { BiSearchAlt } from "react-icons/bi";
import PropTypes from "prop-types";

export default function Searchbar({handleFormSubmit,handleSetQuery, inputValue }) {
  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleFormSubmit}>
        <button type="submit" className={s.SearchButton}>
          <BiSearchAlt style={{ width: 20, height: 20 }} />
        </button>

        <input
          name="inputValue"
          className={s.SearchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleSetQuery}
          value={inputValue}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes={
    handleFormSubmit: PropTypes.func.isRequired,
    handleSetQuery: PropTypes.func.isRequired,
inputValue: PropTypes.string.isRequired,
}