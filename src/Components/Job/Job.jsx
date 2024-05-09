
const Job = ({job}) => {
    const {logo} = job;
    return (
        <div>
            <img src={logo} alt="logo" />
        </div>
    );
};

export default Job;