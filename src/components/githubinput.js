import React, { useState } from "react";
import "./App.css";

function GitInput() {
  const [gitItems, setGitItems] = useState([]);
  const [keyword, setKeyword] = useState("");

  const inputChanged = (event) => {
    setKeyword(event.target.value);
  };

  const fetchRepo = () => {
    fetch(`https://api.github.com/search/repositories?q=${keyword}`)
      .then((response) => response.json())
      .then((responseData) => {
        setGitItems(responseData.items);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <input type="text" name="keyword" onChange={inputChanged} />
      <button onClick={fetchRepo}>Search</button>
      <h2>Repositories</h2>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>URL</th>
          </tr>
          {gitItems.map((gitItems) => (
            <tr key={gitItems.id}>
              <td>{gitItems.full_name}</td>
              <td>
                <a href={gitItems.html_url} target="_blank">
                  {gitItems.html_url}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GitInput;
