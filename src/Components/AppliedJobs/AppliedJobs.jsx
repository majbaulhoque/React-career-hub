import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";
import AppliedJobsCard from "./AppliedJobsCard";


const AppliedJobs = () => {

    const [appliedJobs, setAppliedJobs] = useState([]);

    const jobs = useLoaderData();
    console.log(jobs)
    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        console.log(storedJobIds);
        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));

            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job);
                }
            }
            setAppliedJobs(jobsApplied)
            // console.log(jobs, storedJobIds, jobsApplied)
        }
    }, [jobs])
    return (
        <div>
            <div className="flex justify-between">
                <h2>Jobs I Applied: {appliedJobs.length}</h2>
                <details className="dropdown">
                    <summary className="m-1 btn">open or close</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>All </a></li>
                        <li><a>Remote</a></li>
                        <li><a>On-Site</a></li>
                    </ul>
                </details>
            </div>
            <div>
                {
                    appliedJobs.map(job => <AppliedJobsCard key={job.id} job={job}></AppliedJobsCard>)
                }
            </div>

        </div>
    );
};

export default AppliedJobs;