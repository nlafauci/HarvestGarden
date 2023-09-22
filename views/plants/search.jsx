const React = require("react");

function SearchResults({ results }) {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {results.map((plant) => (
          <li key={plant._id}>
            <a href={`/plants/${plant._id}`}>{plant.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

module.exports = SearchResults;
