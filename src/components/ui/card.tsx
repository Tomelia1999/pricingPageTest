import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  onMouseEnter, 
  onMouseLeave 
}) => {
  return (
    <div 
      className={`rounded-lg border shadow-sm ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

export const CardHeader: React.FC<CardHeaderProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
      {children}
    </div>
  )
}

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

export const CardContent: React.FC<CardContentProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  )
} 