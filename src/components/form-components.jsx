import { useState } from 'react';

const Form = ({ search }) => {
  const [id, setId] = useState('');

  const handleSearch = () => {
    if (id) {
      search(id);
    }
  };

  const handleChange = (e) => {
    setId(e.target.value);
  };

  return (
    <>
      <input type="text" value={id} onChange={handleChange}></input>
      <button onClick={handleSearch}>Search</button>
    </>
  );
};

export default Form;
