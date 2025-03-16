import MainLayout from "../layouts/MainLayout";

const Home: React.FC = () => {
  return (
    <MainLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Welcome to Home Page</h1>
        <p>This is the content inside MainLayout.</p>

        <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
          <h1 className="text-primary-light dark:text-primary-dark">¡Hola, Dark Mode!</h1>
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center 
     bg-white dark:bg-gray-900 
     text-gray-900 dark:text-white">
  <h1 className="text-blue-500 dark:text-blue-300">¡Hola, Dark Mode!</h1>
</div>

    </MainLayout>
  );
};

export default Home;
