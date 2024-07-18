import { useState } from 'react';
import './App.css';
import Form from './components/form-components';
import UserDetails from './components/user-details-component';

function App() {
  const [user, setUser] = useState(null);
  const [repositories, setRepositories] = useState([]);

  const handleSearch = (id) => {
    fetch(`https://api.github.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error('Error fetching user: ', error));
    return fetch(`https://api.github.com/users/${id}/repos`)
      .then((response) => response.json())
      .then((repositoriesData) => setRepositories(repositoriesData))
      .catch((error) => console.error('Error fetching user: ', error));
  };

  return (
    <>
      <Form search={handleSearch} />
      <UserDetails user={user} repositories={repositories} />
    </>
  );
}

export default App;
