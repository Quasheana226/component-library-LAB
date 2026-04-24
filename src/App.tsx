import { useState } from 'react';
import Alertbox from './ Components/AlertBox/AlertBox.tsx'
import UserProfileCard from './Components/UserProfileCard/UserProfileCard.tsx';



function App() {

  // visual state for each type of alert box 
  const [showSuccess, setShowSuccess] = useState(true);

  const [showError, setShowError] = useState(true);

  const [showWarning, setShowWarning] = useState(true);

  const [showInfo, setShowInfo] = useState(true);

  // handles for dismiising each type of alert box 

  const handleClose = (alertType: string) => {

    if (alertType === 'success') setShowSuccess(false);
    if (alertType === 'error') setShowError(false);
    if (alertType === 'warning') setShowWarning(false);
    if (alertType === 'info') setShowInfo(false);
  };
  const handleReset = () => {
    setShowSuccess(true);
    setShowError(true);
    setShowWarning(true);
    setShowInfo(true);
  };


  return (
    <div className='p-4 mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>Alert Box Component Library</h1>

      {showSuccess && (
        <Alertbox
          type='success'
          message='Profile have been saved successfully!'
          onClose={() => handleClose('success')} >
          <p className='text-sm mt-2'>This is a success alert!</p>
        </Alertbox>
      )}

      {showError && (
        <Alertbox
          type='error'
          message='Failed to connect to the server!'
          onClose={() => handleClose('error')} />

      )}

      {showWarning && (
        <Alertbox
          type='warning'
          message='Your session is about to expire!'
          onClose={() => handleClose('warning')} />

      )}

      {showInfo && (
        <Alertbox
          type='info'
          message='New things have been added check your settings!'
          onClose={() => handleClose('info')} />

      )}

      {(!showSuccess || !showError || !showWarning || !showInfo) && (
        <button
          onClick={handleReset}
          className="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-900"
        >
          Reset All Alerts

        </button>
      )}










    </div>
  );
};

export default App
