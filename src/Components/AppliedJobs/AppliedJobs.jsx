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
        }
    }, [jobs])
    return (
        <div>
            <img src="../../../public/images/bg1.png" alt="" />
            <div className="flex justify-between">
                <h2 className="text-3xl mt-20">Applied Jobs: {appliedJobs.length}</h2>
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