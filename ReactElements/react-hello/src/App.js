import "./App.css"; // Importing CSS file for styling
import UserInfo from "./UserInfo"; // Importing UserInfo component
import profilePicture from "./profile-picture.jpg"; // Importing profile picture image

// User object with details
const user = {
  name: "Robert",
  surname: "Smith",
  date_of_birth: "1990-01-01",
  address: "123 Main Street",
  country: "UK",
  email: "robert.smith@example.com",
  telephone: "+4474345484",
  company: "ABC Inc.",
  profile_picture: profilePicture, // Assigning profile picture imported image
  shopping_cart: ["Item 1", "Item 2", "Item 3"], // Array of items in shopping cart
};

// App component
function App() {
  return (
    <>
      <UserInfo user={user} />{" "}
      {/* Rendering UserInfo component with user data */}
    </>
  );
}

export default App; // Exporting App component
