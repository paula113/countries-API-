import FlagsList from "../features /FlagsList";
import MainLayout from "../layouts/MainLayout";

const Home: React.FC = () => {
  return (
    <MainLayout>  
        <h1 className="text-blue-500 dark:text-blue-300">¡Hola, Dark Mode!</h1>
        <FlagsList />
    </MainLayout>
  );
};

export default Home;
