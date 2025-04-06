const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#3d3d3d]">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default ServiceCard;
