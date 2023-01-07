import { categories } from "../constants";
import Directory from "../components/Directory"

const Home = () => {
  return (
    <Directory categories={categories} />
  );
}

export default Home;