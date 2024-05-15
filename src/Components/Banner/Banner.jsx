

const Banner = () => {
    return (
        <div className="flex justify-between mb-16">
            <div>
            <div className="text-5xl text-black font-semibold items-center mt-16">
                <h3>One Step <br/>Closer To Your <br/><span className="text-[#8c81fe]">Dream Job</span></h3>
                
            </div>
            <p className="text-base mt-4">Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br />your job application from start to finish.</p>
            <button className="bg-[#8c81fe] px-4 py-2 rounded-md shadow-md mt-5 text-black font-semibold">Get Started</button>
            </div>
            
            <div>
                <img className="h-[400px]" src="../../../public/images/user.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;