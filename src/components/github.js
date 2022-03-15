import React, { useState, useEffect } from "react";
import "./App.css";

function Github() {
  const [gitItems, setGitItems] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/search/repositories?q=react")
      .then((response) => response.json())
      .then((responseData) => {
        setGitItems(responseData.items);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
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
                <a href={gitItems.html_url}>{gitItems.html_url}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Github;
