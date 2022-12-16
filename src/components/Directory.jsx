import CategoryCard from "./CategoryCard";
import "../directory.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryCard key={category.id} {...category} />
      ))}
    </div>
  );
}

export default Directory;