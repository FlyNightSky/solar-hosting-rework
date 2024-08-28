import React from 'react'

const Button = (params:{ className?: string, Content: string }) => {
  return (
    <button className={`${params.className? params.className: 'px-5 py-2 w-full rounded-md transition-all duration-500 bg-purple-500 hover:bg-purple-600'}`}>{params.Content}</button>
  )
}

export default Button