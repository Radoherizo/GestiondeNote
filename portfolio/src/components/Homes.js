import React from 'react';
import axios from 'axios';


function Homes() {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-[url('https://png.pngtree.com/thumb_back/fw800/back_our/20190628/ourmid/pngtree-campus-board-background-image-image_264554.jpg')] bg-cover bg-center">
        <form action="" method="POST" className="w-full md:w-1/2 lg:w-1/3 p-8 md:p-12 bg-white rounded-md shadow-lg">
          <div className="mb-4">
            <label htmlFor="nom" className="block font-bold text-black">ID :</label>
            <input type="text" id="nom" placeholder="Entrer votre ID" name="id" className="border-2 rounded border-black px-2 py-1 w-full" />
          </div>
          
          <div className="mb-4">
            <label htmlFor="motdepasse" className="block font-bold text-black">Mot de passe :</label>
            <input type="password" id="motdepasse" placeholder="Mot de passe" name="motdepasse" className="border-2 rounded border-black px-2 py-1 w-full" />
          </div>
          <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white rounded px-4 py-2 shadow-lg w-full">Envoyer</button>
        </form>
      </div>
    </>
  );
}

export default Homes;
