import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <div className="flex justify-center items-center space-x-2 my-8">
            {/* Nút Previous */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                    currentPage === 1
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white text-[#302924] border border-[#302924] hover:bg-[#302924] hover:text-white"
                }`}
            >
                Trước
            </button>

            {/* Các nút số trang */}
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                        currentPage === page
                            ? "bg-[#302924] text-white"
                            : "bg-white text-[#302924] border border-[#302924] hover:bg-[#302924] hover:text-white"
                    }`}
                >
                    {page}
                </button>
            ))}

            {/* Nút Next */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                    currentPage === totalPages
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-white text-[#302924] border border-[#302924] hover:bg-[#302924] hover:text-white"
                }`}
            >
                Sau
            </button>
        </div>
    );
};

export default Pagination;
