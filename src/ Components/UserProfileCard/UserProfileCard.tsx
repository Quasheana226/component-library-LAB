import React from 'react'
import type { UserProfileCardProps } from '../../types';





/* @example
* <UserProfileCard
*   user={{ id: '1', name: 'Jane Doe', email: 'jane@example.com', role: 'Designer' }}
*   showEmail
*   showRole
*   onEdit={(id) => console.log('Editing', id)}
* />
*/


const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user, // User object (name email role etc)
  showEmail, // boolean control if its visible 
  showRole, // boolean makes role visible 
  onEdit, // shows edit button
  children// content passed 
}) => {

  return (
    //outer card 
    //  Always shows user name 
    // showEmail prop is true 
    // ShowRole if prop is true 
    <div className='bg-white rounded-xl shadow-md p-6'>

      <p className='text-lg font-bold text-gray-900'>{user.name}</p>

      {showEmail && (
        <p className='text-sm text-gray-600'>{user.email}</p>



      )}

      {showRole && (
        <p className='text-sm text-gray-500'>{user.role}</p>
      )}

      {children}

      {onEdit && (
        <button
          onClick={() => onEdit(user.id)} // pass the user id to the hanler 
          className='mt-4 px-4 py-2 bg-blue-500 text-white hover:bg-blue-600'
        >
          Edit Profile Here
        </button>
      )}









    </div>








  );


};

export default UserProfileCard;