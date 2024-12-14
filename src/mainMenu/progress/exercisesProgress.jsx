import React, { useEffect, useState } from 'react';
import './exercisesProgress.css';

function Progress() {
    const [categories, setCategories] = useState({});
    const [completed, setCompleted] = useState({});

    useEffect(() => {
        // Carrega as categorias do sessionStorage ao montar o componente
        const savedCategories = sessionStorage.getItem('categories');
        if (savedCategories) {
            setCategories(JSON.parse(savedCategories));
        }
    }, []);

    const toggleComplete = (category, index) => {
        setCompleted((prev) => ({
            ...prev,
            [category]: {
                ...prev[category],
                [index]: !prev[category]?.[index], // Alterna o estado de completado
            },
        }));
    };

    return (
        <div>
            <h2 className='progress-filter'> Progresso</h2>
            <p className="subtitle">Acompanhe aqui os exercícios concluídos e suas categorias.</p>
            <div>
                {Object.keys(categories).length > 0 ? (
                    Object.entries(categories).map(([category, exercises]) => (
                        <div key={category} className="category">
                            <h3>Categoria: {category}</h3>
                            <div className="exercise-grid">
                                {exercises.map((exercise, index) => (
                                    <div
                                        key={index}
                                        className={`exercise-item ${
                                            completed[category]?.[index] ? 'completed' : ''
                                        }`}
                                    >
                                        <span>
                                            <strong>Exercício:</strong> {exercise.exercise} |{' '}
                                            <strong>Repetições:</strong> {exercise.repetitions} |{' '}
                                            <strong>Séries:</strong> {exercise.series}
                                        </span>
                                        <button
                                            onClick={() => toggleComplete(category, index)}
                                            className="complete-button"
                                        >
                                            {completed[category]?.[index] ? 'Desmarcar' : 'Completar'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Não há categorias ou exercícios salvos.</p>
                )}
            </div>
        </div>
    );
}

export default Progress;
