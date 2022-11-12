import { useState, useEffect } from "react";
import useEventListener from "@use-it/event-listener";
import SearchIcon from "../../assets/search.svg";

import "./style.css";

export default function SearchResult({
  data,
  searchParam,
  setSearchParam,
  setContent,
  removeItem
}) {
  const [activeItem, setActiveItem] = useState(0);
  const [filteredData, setFilteredData] = useState([]);

  function onSearch(param) {
    !!param.length && setContent("Search => " + param);
  }

  function onKeyPressHandler(event) {
    console.log(event.key, activeItem, filteredData, searchParam);
    event.key === "ArrowDown" &&
      activeItem < filteredData.length - 1 &&
      setActiveItem((prev) => prev + 1);
    event.key === "ArrowUp" &&
      activeItem > 0 &&
      setActiveItem((prev) => prev - 1);
    if (event.key === "Enter") {
      if (filteredData.length && activeItem >= 0) {
        setSearchParam(filteredData[activeItem].title);
        setActiveItem(0);
        onSearch(filteredData[activeItem].title);
      } else {
        onSearch(searchParam);
      }
    }
  }

  function onClickHandler(index) {
    setSearchParam(filteredData[index].title);
    onSearch(filteredData[index].title);
  }

  function removeItemHandler(item) {
    item.title === searchParam && setSearchParam("");
    removeItem(item.id);
  }

  useEventListener("keydown", onKeyPressHandler);

  useEffect(() => {
    console.log("useEffect");
    setFilteredData(
      data
        .filter(
          (item) =>
            !!searchParam.length &&
            item.title.toLowerCase().startsWith(searchParam.toLowerCase())
        )
        .slice(0, 10)
    );
  }, [data, searchParam]);

  return (
    <div>
      {filteredData.map((item, index) => (
        <div
          className={[
            "row-container",
            activeItem === index ? "active-row" : "",
          ].join(" ")}
          key={item.id}
        >
          <div className="row" onClick={() => onClickHandler(index)}>
            <img src={SearchIcon} className="search-icon" alt="" />
            {item.title}
          </div>
          <div className="remove" onClick={() => removeItemHandler(item)}>Remove</div>
        </div>
      ))}
    </div>
  );
}
