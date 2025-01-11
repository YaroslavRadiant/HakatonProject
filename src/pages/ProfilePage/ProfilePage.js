import React from "react";
import porofileImage from './image/photo_2025-01-07 14.58.31.jpeg'

const data=[
   {
      firstName: 'Petro',
      lastName: 'Poroshenko',
      age: 41,
      image: porofileImage,
      skills: [
         {name:'JS', percentage: 85},
         {name:'TS',percentage: 70},
         {name:'Angular',percentage: 60}
      ],
      workTime: '2 years 1 months',
      overallExperience: '5 years 6 months'
   }
]

const ProfilePage = () => {
   const user = data[0]

   return (
       <div className='container mx-auto p-4 text-left'>
          <div className="flex flex-col">
             <div className="flex gap-3">
                <div className=''>
                   <img src={user.image} alt="Avatar" className='w-80 rounded-md'/>
                </div>
                <div className="flex flex-col mx-0 gap-6">
                   <div className="flex flex-row gap-1">
                      <p className="m-0">Name:</p>
                      <div className='flex gap-1'>
                         <p className='m-0'>{user.firstName}</p>
                         <p className='m-0'>{user.lastName}</p>
                      </div>
                   </div>
                   <div>
                      <p className='m-0'>Age :</p>
                      <div>{user.age}</div>
                   </div>
                   <div>
                      <p className='m-0'>Time working for this company:</p>
                      <div>{user.workTime}</div>
                   </div>
                   <div>
                      <p className='m-0'>Overall work experience:</p>
                      <div>{user.overallExperience}</div>
                   </div>
                </div>
                <div className='ml-auto'>
                   <button className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>
                      Create CV
                   </button>
                </div>
             </div>
             <div>
                <div>
                   <span>Skills:</span>
                   <div className='flex flex-col gap-2 mt-2'>
                      {user.skills.map((skill, index) => (
                          <div key={index} className='flex items-center gap-1'>
                             <span>{skill.name}</span>
                             -
                             <span>{skill.percentage}%</span>
                          </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
       </div>
   )
}

export default ProfilePage;