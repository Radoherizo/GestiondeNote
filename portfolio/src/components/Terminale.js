import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Terminale = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Eleve T', grade: 0 },
    { id: 2, name: 'Eleve T', grade: 0 },
    { id: 3, name: 'Eleve T', grade: 0 },
    { id: 4, name: 'Eleve T', grade: 0 },
    { id: 5, name: 'Eleve T', grade: 0 },
    { id: 6, name: 'Eleve T', grade: 0 },
    { id: 7, name: 'Eleve T', grade: 0 },
    { id: 8, name: 'Eleve T', grade: 0 },
    // ... Ajoutez d'autres élèves ici
  ]);

  const [selectedClass, setSelectedClass] = useState('Terminale');
  const navigate = useNavigate();


  const handleGradeChange = (studentId, newGrade) => {
    const updatedStudents = students.map(student => {
      if (student.id === studentId) {
        return { ...student, grade: newGrade };
      }
      return student;
    });
    setStudents(updatedStudents);
  };

  const handleSaveGrades = () => {
    // Ici, vous pouvez implémenter la logique pour enregistrer les notes dans votre backend.

    // Pour cet exemple, affichons simplement une alerte pour montrer que les notes sont enregistrées.
    alert('Les notes ont été enregistrées avec succès.');
  };

  const classButtons = ['3e', '2nde', '1ere', 'Terminale'];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Bienvenue dans la page Professeur</h1>
      <div className="mb-4 flex space-x-4">
        {classButtons.map((classButton, index) => (
          <button
            key={index}
            className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none ${
              selectedClass === classButton ? 'bg-blue-600' : ''
            }`}
            onClick={() => {
                if (classButton === '3e') {
                  navigate('/Pageprof'); // Redirige vers la page Pageprof.js
                } else if (classButton === '2nde') {
                  navigate('/2nde'); // Redirige vers la page 2nde.js
                } else if (classButton === '1ere') {
                  navigate('/1ere'); // Redirige vers la page 1ere.js (par exemple)
                } else if (classButton === 'Terminale') {
                  navigate('/Term'); // Redirige vers la page 1ere.js (par exemple)
                } else {
                  setSelectedClass(classButton);
                }
              }}
          >
            {classButton}
          </button>
        ))}
      </div>
      <h2 className="text-xl font-semibold mb-2">Liste des élèves ({selectedClass})</h2>
      <ul className="space-y-4">
        {students.map(student => (
          <li key={student.id} className="flex items-center">
            <div className="flex-1">
              {student.name}: {student.grade}
            </div>
            <input
              type="number"
              value={student.grade}
              onChange={e => handleGradeChange(student.id, e.target.value)}
              className="w-16 px-2 py-1 border rounded-md"
            />
          </li>
        ))}
      </ul>
      <button
        className="mt-4 float-right bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={handleSaveGrades}
      >
        Enregistrer les notes
      </button>
    </div>
  );
};

export default Terminale;
