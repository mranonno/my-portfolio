import { Helmet } from "react-helmet-async";

const Articles = () => {
  return (
    <div>
      <Helmet>
        <title>Anonno | Articles</title>
      </Helmet>
      <p className="text-center text-2xl font-semibold mt-10 text-gray-700">
        Articles are coming soon!
      </p>
    </div>
  );
};

export default Articles;
