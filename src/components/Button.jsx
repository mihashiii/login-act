import React from 'react';

const Button = ({
    text,
    onClick,
    variant = 'primary',
    type = 'button',
    disabled = false,
    loading = false,
    size = 'md',
    fullWidth = false,
    icon = null
}) => {

    const getVariantStyles = () => {
        switch (variant) {
            case 'primary':
                return 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl';
            case 'secondary':
                return 'bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300';
            case 'success':
                return 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl';
            case 'danger':
                return 'bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white shadow-lg hover:shadow-xl';
            default:
                return 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl';
        }
    };

 
    const getSizeStyles = () => {
        switch (size) {
            case 'sm':
                return 'px-4 py-2 text-sm';
            case 'md':
                return 'px-6 py-3 text-base';
            case 'lg':
                return 'px-8 py-4 text-lg';
            default:
                return 'px-6 py-3 text-base';
        }
    };

    const baseStyles = `
    inline-flex items-center justify-center font-medium rounded-lg
    transition-all duration-200 ease-in-out transform
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    active:scale-95
  `;

    const buttonStyles = `
    ${baseStyles}
    ${getVariantStyles()}
    ${getSizeStyles()}
    ${fullWidth ? 'w-full' : ''}
    ${loading ? 'cursor-wait' : ''}
  `;

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={buttonStyles}
        >
      
            {loading && (
                <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                </svg>
            )}

            {icon && !loading && (
                <span className="mr-2">
                    {icon}
                </span>
            )}

    
            <span>{text}</span>
        </button>
    );
};

export default Button;
