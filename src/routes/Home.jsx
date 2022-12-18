import { categories } from "../constants";
import Directory from "../components/Directory"
import "../categories.scss";

const Home = () => {
  return (
    <Directory categories={categories} />
  );
}

export default Home;