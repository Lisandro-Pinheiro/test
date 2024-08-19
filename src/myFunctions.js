export function transformData(users) {
    return users
     
      .filter(user => user.isActive)
      
      .map(({ id, name }) => ({ id, name }))
     
      .sort((a, b) => a.name.localeCompare(b.name));
  }
  
  
 
  const users = [
    { id: 1, name: 'Alice', age: 25, isActive: true },
    { id: 2, name: 'Bob', age: 30, isActive: false },
    { id: 3, name: 'Charlie', age: 22, isActive: true }
  ];
  
  console.log(transformData(users));
  
  
  export async function fetchUserData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      return data.filter(user => user.username.startsWith('C'));
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      return [];
    }
  }
  
  export function countOccurrences(array) {
    return array.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});
  }
  
  export function groupByCategory(items) {
    return items.reduce((acc, item) => {
      const category = item.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item);
      return acc;
    }, {});
  }
  
  export function mergeArrays(array1, array2) {
    const merged = [...array1];
  
    array2.forEach(obj2 => {
      const index = merged.findIndex(obj1 => obj1.id === obj2.id);
  
      if (index !== -1) {
        merged[index] = { ...merged[index], ...obj2 };
      } else {
        merged.push(obj2);
      }
    });
  
    return merged;
  }
  