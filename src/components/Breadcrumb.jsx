import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="bg-white py-4 px-6 shadow-md border-b">
      <div className="container mx-auto flex items-center text-gray-600 text-sm">
        <Link to="/" className="text-gray-500 hover:text-blue-500 font-medium">
          Home
        </Link>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <span key={`${routeTo}-${index}`} className="flex items-center">
              <span className="mx-2 text-gray-400">›</span>
              {isLast ? (
                <span className="text-gray-900 font-semibold">
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </span>
              ) : (
                <Link
                  to={routeTo}
                  className="text-gray-500 hover:text-blue-500 font-medium"
                >
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </Link>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Breadcrumb;