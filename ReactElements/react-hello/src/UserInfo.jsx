import "./UserInfo.css"; // Import the CSS file for styling

// UserInfo component receives a user object as props
function UserInfo({ user }) {
  return (
    <div className="user-info">
      {" "}
      {/* Main container div */}
      <img src={user.profile_picture} alt="Profile" />
      {/* User profile picture */}
      <div>
        {" "}
        {/* Container div for user information */}
        <h2 className="userName">
          {" "}
          {/* User name and surname */}
          {user.name} {user.surname}
        </h2>
        <p className="info">Date of Birth: {user.date_of_birth}</p>{" "}
        {/* User date of birth */}
        <p className="info">Address: {user.address}</p> {/* User address */}
        <p className="info">Country: {user.country}</p> {/* User country */}
        <p className="info">Email: {user.email}</p> {/* User email */}
        <p className="info">Telephone: {user.telephone}</p>{" "}
        {/* User telephone number */}
        <p className="info">Company: {user.company}</p> {/* User company */}
        <p className="info">Shopping Cart:</p> {/* Label for shopping cart */}
        <ul className="shopping-cart">
          {" "}
          {/* Unordered list for shopping cart items */}
          {/* Map through shopping cart items */}
          {user.shopping_cart.map((item, index) => (
            /* List item for each shopping cart item */
            <li key={index}> {item} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserInfo; // Export the UserInfo component
