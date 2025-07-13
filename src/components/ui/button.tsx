import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'outline'
  size?: 'default' | 'icon'
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'default', 
  size = 'default',
  onClick 
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'
  
  const variantClasses = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-gray-300 bg-transparent hover:bg-gray-50'
  }
  
  const sizeClasses = {
    default: 'h-10 px-4 py-2',
    icon: 'h-10 w-10'
  }
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
  
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
} 