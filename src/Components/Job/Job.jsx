import { IoLocationOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";

const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div>

            <div className="card card-compact bg-base-100 shadow-xl">
                <img className="w-32 h-24 p-2
                " src={logo} alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
                        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
                    </div>
                    <div className="mt-4 flex">
                        <h2 className="flex mr-2"><IoLocationOutline className="text-2xl mr-2"></IoLocationOutline>{location}</h2>
                        <h2 className="flex"><CiDollar className="text-2xl mr-2"></CiDollar>{salary}</h2>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary bg-gradient-to-r from-indigo-500 to-purple-500">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;