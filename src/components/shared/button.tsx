'use client';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
}

export default function Button({ label, onClick, variant = 'primary', className = '' }: ButtonProps) {
  
  const baseStyles = "cursor-pointer px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center justify-center disabled:opacity-50";
  
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    outline: "border border-black text-black hover:bg-gray-50",
    ghost: "bg-transparent text-gray-500 hover:text-black"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {label}
    </button>
  );
}