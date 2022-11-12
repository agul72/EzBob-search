import SearchInput from "./components/SearchInput";
import SearchResult from "./components/SearchResult";
import Content from "./components/Content";

import MOCK_DATA from "./assets/MOCK_DATA.json";

import "./App.css";
import { useState } from "react";

function App() {
  const [searchParam, setSearchParam] = useState("");
  const [content, setContent] = useState("");
  const [data, setData] = useState(MOCK_DATA);

  function removeItemHandler(id) {
    setData((prev) => prev.filter((item) => item.id !== id));
  }
  return (
    <div className="App">
      <h1>Search</h1>
      <div className="container">
        <SearchInput
          searchParam={searchParam}
          setSearchParam={setSearchParam}
          setContent={setContent}
        />
        <SearchResult
          data={data}
          searchParam={searchParam}
          setSearchParam={setSearchParam}
          setContent={setContent}
          removeItem={removeItemHandler}
        />
      </div>
      <Content content={content} />
    </div>
  );
}

export default App;
