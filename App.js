import React, { useState, useEffect } from 'react';

function GitHubRepos() {
  const [repos, setRepos] = useState([]);
  const username = 'your_username'; // Reemplaza con tu nombre de usuario de GitHub

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => setRepos(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Repos de GitHub de {username}</h1>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default GitHubRepos;
