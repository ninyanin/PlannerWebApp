import React, {useState, useEffect} from 'react'
import env from './env';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const ListExercise = ({task, toggleComplete, deleteTodo, editTodo}) => {
  const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchExercises() {
            try{ const muscle = task.task;
            //console.log(muscle)
            const response = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
                headers: {
                    'X-Api-Key': `${env.API_KEY}`
                }
            });
            if (response.ok) {
                const result = await response.json();
                console.log(result)
                setData(result);
                console.log(result.length)
              } else {
                console.error('Failed to fetch exercises');
              }
            } catch (error) {
              console.error('Error fetching exercises:', error);
            }
        }

        fetchExercises();
        
    }, [task.task]);;
  return (
    <div className="exercise-list">
      
        {data && data.length > 0 ? (
            data.map((exercise, index) => (
            <div key={index} className="exercise-item">
                <h3>{exercise.name}</h3>   
            </div>
            ))
        ) : (
            <div>Loading ...</div>
        )}
        <div> 
        
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};