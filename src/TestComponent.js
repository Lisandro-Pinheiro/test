
import React, { useEffect, useState } from 'react';
import { transformData, fetchUserData, countOccurrences, groupByCategory, mergeArrays } from './myFunctions';

const TestComponent = () => {
  const [transformedUsers, setTransformedUsers] = useState([]);
  const [apiUsers, setApiUsers] = useState([]);
  const [occurrences, setOccurrences] = useState({});
  const [groupedItems, setGroupedItems] = useState({});
  const [mergedArray, setMergedArray] = useState([]);

  useEffect(() => {
    const userArray = [
      { id: 1, name: 'Alice', age: 25, isActive: true },
      { id: 2, name: 'Bob', age: 30, isActive: false },
      { id: 3, name: 'Charlie', age: 22, isActive: true }
    ];

   
    setTransformedUsers(transformData(userArray));

    
    const fetchAndSetApiUsers = async () => {
      try {
        const data = await fetchUserData();
        setApiUsers(data);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchAndSetApiUsers();

   
    const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
    setOccurrences(countOccurrences(fruits));

   
    const items = [
      { name: 'apple', category: 'fruit' },
      { name: 'carrot', category: 'vegetable' },
      { name: 'banana', category: 'fruit' },
      { name: 'broccoli', category: 'vegetable' }
    ];
    setGroupedItems(groupByCategory(items));

   
    const array1 = [
      { id: 1, name: 'Alice', age: 25 },
      { id: 2, name: 'Bob', age: 30 }
    ];
    const array2 = [
      { id: 1, age: 26, email: 'alice@example.com' },
      { id: 3, name: 'Charlie', age: 22 }
    ];
    setMergedArray(mergeArrays(array1, array2));
  }, []);

  return (
    <div>
      <h1>Testes de Funções</h1>
      
      <h2>Usuários Filtrados e Ordenados:</h2>
      <pre>{JSON.stringify(transformedUsers, null, 2)}</pre>

      <h2>Usuários da API:</h2>
      <pre>{JSON.stringify(apiUsers, null, 2)}</pre>

      <h2>Contagem de Ocorrências:</h2>
      <pre>{JSON.stringify(occurrences, null, 2)}</pre>

      <h2>Agrupamento de Objetos:</h2>
      <pre>{JSON.stringify(groupedItems, null, 2)}</pre>

      <h2>Arrays Mesclados:</h2>
      <pre>{JSON.stringify(mergedArray, null, 2)}</pre>
    </div>
  );
};

export default TestComponent;
