

const AppliedJobsCard = ({ job }) => {
    const { logo, job_title, company_name, location, job_type, remote_or_onsite, salary } = job;

    return (
        <div className="my-16">
            <div className="flex flex-col items-center bg-purple-300 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={logo} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{job_title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{company_name}</p>
                    <div className="text-black flex gap-5">
                        <p className="bg-white px-4 py-1 rounded-md">{remote_or_onsite}</p>
                        <p className="bg-white px-4 py-1 rounded-md">{job_type}</p>
                    </div>
                    <div className="flex mt-2">
                        <p className="text-white mr-2">{location}</p>
                        <p className="text-white">Salary: {salary}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AppliedJobsCard;