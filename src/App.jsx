import CategoryCard from "./components/CategoryCard";
import { categories } from "./constants";

const App = () => {
  return (
    <div className="categories-container">
      {categories.map(({ id, title }) => (
        <CategoryCard key={id} title={title} />
      ))}
    </div>
  );
}

export default App;