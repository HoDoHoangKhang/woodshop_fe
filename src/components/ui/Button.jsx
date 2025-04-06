const Button = ({
    children,
    type = "button",
    variant = "primary",
    size = "md",
    fullWidth = false,
    disabled = false,
    className = "",
    onClick,
    as: Component = "button",
    ...props
}) => {
    const baseClasses =
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variantClasses = {
        primary:
            "bg-[#d89c4a] text-white hover:bg-[#8b5e34] focus:ring-[#d89c4a]",
        secondary:
            "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",
        success:
            "bg-[#d89c4a] text-white hover:bg-[#8b5e34] focus:ring-[#d89c4a]",
        danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
        outline:
            "bg-white border border-[#d89c4a] text-[#d89c4a] hover:bg-[#d89c4a] hover:text-white focus:ring-[#d89c4a]",
    };

    const sizeClasses = {
        sm: "text-sm px-3 py-1.5",
        md: "text-base px-4 py-2",
        lg: "text-lg px-6 py-3",
    };

    const widthClass = fullWidth ? "w-full" : "";
    const disabledClass = disabled
        ? "opacity-50 cursor-not-allowed"
        : "cursor-pointer";

    return (
        <Component
            type={Component === "button" ? type : undefined}
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${disabledClass} ${className}`}
            disabled={disabled}
            onClick={onClick}
            {...props}
        >
            {children}
        </Component>
    );
};

export default Button;
