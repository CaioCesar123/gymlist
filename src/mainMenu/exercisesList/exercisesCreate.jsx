import React, { useState, useEffect } from 'react';
import './exercisesCreate.css';

function ExerciseCreate() {
    const [categories, setCategories] = useState({});
    const [currentCategory, setCurrentCategory] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [formData, setFormData] = useState({
        exercise: '',
        repetitions: '',
        series: '',
    });

    useEffect(() => {
        const savedCategories = sessionStorage.getItem('categories');
        if (savedCategories) {
            setCategories(JSON.parse(savedCategories));
        }
    }, []);

    useEffect(() => {
        if (Object.keys(categories).length > 0) {
            sessionStorage.setItem('categories', JSON.stringify(categories));
            sessionStorage.setItem("lista", JSON.stringify(currentCategory));
        }
    }, [categories]);

    const handleAddCategory = (e) => {
        e.preventDefault();
        if (newCategory && !categories[newCategory]) {
            setCategories({ ...categories, [newCategory]: [] });
            setNewCategory('');
        } else {
            alert('Categoria inválida ou já existente!');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddExercise = () => {
        if (
            currentCategory &&
            formData.exercise &&
            formData.repetitions &&
            formData.series
        ) {
            const updatedCategory = [...categories[currentCategory], formData];
            setCategories({ ...categories, [currentCategory]: updatedCategory });
            setFormData({ exercise: '', repetitions: '', series: '' });
        } else {
            alert('Preencha todos os campos e selecione uma categoria!');
        }
    };

    return (
        <div>
            <h2 className='progress-filter'> Exercise List</h2>
            <p className="subtitle">Registre Aqui seus Exercícios diarios</p>

            {/* Adicionar nova categoria */}
            <div className="category-container">
                <form className='categori-form' onSubmit={handleAddCategory}>
                    <input
                        type="text"
                        placeholder="Nova Categoria"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        className="category-input"
                        aria-label="Nova categoria"
                    />
                    <button
                        type="button"
                        onClick={handleAddCategory}
                        className="category-button"
                    >
                        Adicionar Categoria
                    </button>
                </form>
            </div>

            {/* Selecionar categoria */}
            <div className="input-form">
                <select
                    className="select-category"
                    value={currentCategory}
                    onChange={(e) => setCurrentCategory(e.target.value)}
                >
                    <option value="">Selecione uma Categoria</option>
                    {Object.keys(categories).map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            {/* Formulário para adicionar exercício */}
            {currentCategory && (
                <div className="form-container">
                    <input
                        type="text"
                        name="exercise"
                        placeholder="Exercício"
                        value={formData.exercise}
                        onChange={handleInputChange}
                        className="input-exercise"
                        aria-label="Exercício"
                    />
                    <input
                        type="number"
                        name="repetitions"
                        placeholder="Número de Repetições"
                        value={formData.repetitions}
                        onChange={handleInputChange}
                        className="input-repetitions"
                        aria-label="Número de Repetições"
                    />
                    <input
                        type="number"
                        name="series"
                        placeholder="Número de Séries"
                        value={formData.series}
                        onChange={handleInputChange}
                        className="input-series"
                        aria-label="Número de Séries"
                    />
                    <button type="button" onClick={handleAddExercise}>
                        Adicionar
                    </button>
                </div>
            )}

            {/* Exibir apenas a categoria selecionada */}
            <div>
                {currentCategory && categories[currentCategory] && (
                    <div>
                        <h3>Categoria: {currentCategory}</h3>
                        <ul className="exercise-list">
                            {categories[currentCategory].map((item, index) => (
                                <li key={index}>
                                    <strong>Exercício:</strong> {item.exercise} |{' '}
                                    <strong>Repetições:</strong> {item.repetitions} |{' '}
                                    <strong>Séries:</strong> {item.series}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ExerciseCreate;
