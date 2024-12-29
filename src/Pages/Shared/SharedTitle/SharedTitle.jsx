
 
 const SharedTitle = ({subHeading, heading}) => {
    return (
        <div className="md:w-3/12 mx-auto text-center">
            <p className="text-yellow-600 mb-2">---{subHeading}---</p>
            <h3 className="text-3xl uppercase border-y-4 py-2">{heading}</h3>
        </div>
    );
 };
 
 export default SharedTitle;