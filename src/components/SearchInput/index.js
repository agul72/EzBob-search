import SearchIcon from "../../assets/search.svg";
import "./styles.css";

export default function SearchInput({ searchParam, setSearchParam, setContent }) {
  function onChangeHandler(event) {
    setSearchParam(event.target.value);
  }

  function onClearHandler() {
    setSearchParam("");
    setContent("");
  }

  return (
    <div className="search-line">
      <img src={SearchIcon} className="search-icon" alt="" />
      <input
        className="input"
        type="text"
        value={searchParam}
        onChange={onChangeHandler}
        autoFocus
      />
      <div className="clear-btn" onClick={onClearHandler}>
        &times;
      </div>
    </div>
  );
}
