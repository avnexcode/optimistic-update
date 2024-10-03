import React from 'react'

type ContainerProps = {
  children?: React.ReactNode
  className?: string
}

const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '' 
}) => (
  <div className={`pt-20 px-20 ${className}`.trim()}>
    {children || 'Container'}
  </div>
)

export default Container