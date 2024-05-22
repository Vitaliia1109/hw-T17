import "./MainContent.css";

function MainContent({ images }) {
  return (
    <main className="main-content">
      {/* Main content container */}
      <ul className="images">
        {/* Mapping through the images array */}
        {images.map((image, index) => (
          <li key={index}>
            {/* Each image item */}
            <img src={image.src} alt={image.alt} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default MainContent;
