const SectionTitle = ({ title }) => {
    return (
        <h2 className="text-2xl font-bold mb-8 text-center relative">
            <span className="inline-block pb-2 relative">
                {title}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#d89c4a]"></span>
            </span>
        </h2>
    );
};

export default SectionTitle;
