
import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6">
      <div className="text-center max-w-md">
        
        {/* Big Error Code */}
        <h1 className="text-8xl font-extrabold tracking-tight text-red-500">
          404
        </h1>

        {/* Message */}
        <h2 className="mt-4 text-2xl font-semibold">
          Page not found
        </h2>

        <p className="mt-3 text-gray-400">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
          >
            Go Back
          </button>

          <Link
            to="/"
            className="px-5 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition text-white font-medium"
          >
            Home
          </Link>
        </div>

        {/* Small hint */}
        <p className="mt-6 text-xs text-gray-500">
          If this keeps happening, check your route configuration.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;