import React from 'react';
import type { AlertBoxProps } from '../../types';

const AlertBox: React.FC<AlertBoxProps> = ({ message, type, onClose, children }) => {

    // Alert style set based on the type of prop passed 
    let alertStyle = '';
    const normalizedType = type.trim();

    if (normalizedType === 'success') {
        //Green Backgropund for styling for success action 

        alertStyle = 'bg-green-100 border-green-500 text-green-700';

    } else if (normalizedType === 'error') {
        // Red styling for failed action 
        alertStyle = 'bg-red-100 border-red-500 text-red-700';
    } else if (normalizedType === 'warning') {
        //yellow styling for warning action
        alertStyle = 'bg-yellow-100 border-yellow-500 text-yellow-700';
    } else if (normalizedType === 'info') {
        //Blue styling for info action
        alertStyle = 'bg-blue-100 border-blue-500 text-blue-700';

    }
    // The message is passed as a prop 
    //the close button if an onclouse hanler is provided 
    return (
        <div className={`p-4 border-l-4 rounded-md mb-3 ${alertStyle}`}>
            <div className="flex justify-between items-center">



                <p>{message}</p>

                {onClose && (
                    <button onClick={onClose}
                        className='ml-4 text-gray-500 hover:text-gray-700'>
                        x


                    </button>
                )}
            </div>
            {children}






        </div>
    );
};

export default AlertBox;