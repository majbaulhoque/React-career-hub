import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h3 className="text-6xl font-bold"> 404 Error Page </h3>
            <p className=" font-semibold text-2xl p-4">Sorry, This page doesn't exist</p>
            <Link to='/'>Go Back To Home</Link>
        </div>
    );
};

export default ErrorPage;