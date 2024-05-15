import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";
import AppliedJobsCard from "./AppliedJobsCard";


const AppliedJobs = () => {

    const [appliedJobs, setAppliedJobs] = useState([]);
    // const [displayJobs, setDisplayJobs] = useState([]);

    const jobs = useLoaderData();
    // console.log(jobs)

    // const handleJobFilter = filter =>{
    //     if(filter === 'all'){
    //         setDisplayJobs(appliedJobs);
    //     }
    //     else if (filter === 'remote'){
    //         const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
    //         setDisplayJobs(remoteJobs);
    //     }
    //     else if(filter === 'onsite'){
    //         const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
    //         setDisplayJobs(onsiteJobs)
    //     }
    //     console.log("active", handleJobFilter)
    // }

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
            setAppliedJobs(jobsApplied);
            // setDisplayJobs(jobsApplied);
            // console.log(jobs, storedJobIds, jobsApplied)
        }
    }, [jobs])
    return (
        <div>
            <img src="../../../public/images/bg1.png" alt="" />
            <div className="flex justify-between">
                <h2 className="text-3xl mt-20">Applied Jobs: {appliedJobs.length}</h2>
                {/* <details className="dropdown">
                    <summary className="m-1 btn">open or close</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() =>handleJobFilter('all')}><a>All </a></li>
                        <li onClick={() =>handleJobFilter('remote')}><a>Remote</a></li>
                        <li onClick={() =>handleJobFilter('onsite')}><a>On-Site</a></li>
                    </ul>
                </details> */}
            </div>
            <div>
                {
                    // displayJobs.appliedJobs.map(job => <AppliedJobsCard key={job.id} job={job}></AppliedJobsCard>)
                    appliedJobs.map(job => <AppliedJobsCard key={job.id} job={job}></AppliedJobsCard>)
                }
            </div>

        </div>
    );
};

export default AppliedJobs;