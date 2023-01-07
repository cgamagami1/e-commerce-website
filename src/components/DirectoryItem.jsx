import "../directory-item.scss";

const DirectoryItem = ({ title, imageURL }) => {
  return (
    <div className="directory-item-container">
      <div className="background-image" style={{backgroundImage: `url(${imageURL})`}}></div>
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default DirectoryItem;