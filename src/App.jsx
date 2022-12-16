import { categories } from "./constants";
import Directory from "./components/Directory"
import "./categories.scss";

const App = () => {
  return (
    <Directory categories={categories} />
  );
}

export default App;