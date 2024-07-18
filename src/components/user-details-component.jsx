const UserDetails = ({ user, repositories }) => {
  if (!user) {
    return <p>No user data.</p>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <img src={user.avatar_url} alt={user.name}></img>
      <p>Naziv: {user.name}</p>
      <p>Bio: {user.bio}</p>
      <p>Lokacija: {user.location}</p>
      <h2>Repositories:</h2>
      <ul>
        {repositories.map((repositorie) => (
          <li key={repositorie.id}>{repositorie.name}</li>
        ))}
        <li></li>
      </ul>
    </div>
  );
};

export default UserDetails;
