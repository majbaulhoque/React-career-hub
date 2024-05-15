import { useLoaderData, useParams } from "react-router-dom";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { SlCalender } from "react-icons/sl";
import { CiPhone } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    console.log(job)

    const handleApplyJob = () =>{
        saveJobApplication(idInt)
        toast('You have applied successfully');
        console.log('testing')
    }

    return (
        <div>
            <h2 className="text-2xl py-2">Job Details of: {job.job_title}</h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <p className="pb-4"><span className="font-bold">Job Description: </span>{job.job_description}</p>
                    <p className="pb-4"><span className="font-bold">Job Responsibility: </span>{job.job_responsibility}</p>
                    <p className="font-bold pb-4">Educational Requirements: </p>
                    <p className="pb-4">
                    {job.educational_requirements}
                    </p>
                    <p className="font-bold pb-4">Experiences:</p>
                    <p>{job.experiences}</p>
                </div>
                <div className="border bg-[#F4F1FF] p-4">
                    <div>
                        <p className="font-bold">Job Details</p>
                    </div>
                    <div className="flex items-center mt-3 border-t pt-4">
                        <HiOutlineCurrencyDollar className="mr-2 text-xl"/>
                        <p className="font-semibold mr-2">Salary:</p>
                        <p className="text-sm"> {job.salary}</p>
                    </div>
                    <div className="flex items-center -mt-3 py-4 ">
                    <SlCalender className="mr-2"/>
                    <p className="mr-2 font-bold in">Job Title: </p>
                    <p className="text-sm">{job.job_title}</p>
                    </div>
                        <p className="border-py text-md font-bold border-t border-b py-4">Contact Information</p>
                    <div className="flex">
                        <CiPhone className="mr-2 text-xl"></CiPhone>
                        <p>Phone:</p>
                        <p className="ml-2">{job.contact_information.phone}</p>
                    </div>
                    <div className="flex">
                        <MdOutlineMailOutline className="mr-2 text-xl"/>
                        <p>Email:</p>
                        <p className="ml-2">{job.contact_information.email}</p>
                    </div>
                    <div className="flex">
                        <IoLocationOutline className="mr-2 w-12 mt-1"/>
                        <p>Address:</p>
                        <p className="ml-2">{job.contact_information.address}</p>
                    </div>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default JobDetails;