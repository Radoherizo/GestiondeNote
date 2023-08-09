import React from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

function Homess() {
  return (
    <div className='flex flex-col items-center justify-center bg-[url("https://www.mpedia.fr/content/uploads/2020/09/ecole.jpg")] bg-cover bg-center bg-no-repeat h-screen md:h-4/5 p-8 md:p-72'>
      <div className='text-center rounded-full border-2 bg-red-500 hover:bg-red-700 rounded mb-4 border-black pt-4 pb-4 w-full md:w-48 max-w-md'>
        <Link to='/eleve' aria-current="page">Eleve et Parent</Link>
      </div>

      <div className='text-center rounded-full border-2 bg-blue-500 hover:bg-blue-700 rounded border-black pt-4 pb-4 w-full md:w-48 max-w-md'>
        <Link to='/Professeur'>Professeur</Link>
      </div>
    </div>
  );
}

export default Homess;
