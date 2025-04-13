import React from 'react'

const MyInputs = ({title,input=true}) => {
  return (
    input ?
        (<div className="w-full">
                <p className="p4 text-neutral-600 mb-3 pointer-events-none">{title}</p>
                <input type="text" name="fullName" id="" className="w-full p-5 bg-primary-50 focus:bg-shades-300 border border-primary-200 focus:border-primary-500 text-shades-50 p3 focus:outline-none" />
        </div>)
    :
  (  <div className="w-full">
        <p className="p4 text-neutral-600 mb-3 pointer-events-none">Full Name</p>
        <textarea name="project idea" id="" className="w-full px-5 pt-5 pb-20 bg-primary-50 focus:bg-shades-300 border border-primary-200 focus:border-primary-500 text-shades-50 p3 focus:outline-none resize-none" ></textarea>
    </div>)
  )
}

export default MyInputs