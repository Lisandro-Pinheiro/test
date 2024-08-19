TestComponent - Funções Utilitárias em React

Descrição

Este projeto é um componente React que testa diversas funções utilitárias, como transformação de dados, busca de dados via API, contagem de ocorrências, agrupamento de itens por categoria, e mesclagem de arrays de objetos. As funções são implementadas em um módulo separado (myFunctions.js) e o componente TestComponent exibe os resultados dessas operações.

Funcionalidades

1. Transformação de Dados
Filtra usuários ativos e ordena-os por nome em ordem alfabética.
Função: transformData(users)

2. Busca de Dados via API
Busca dados de usuários da API JSONPlaceholder e filtra usuários cujo nome de usuário começa com a letra "C".
Função: fetchUserData()

3. Contagem de Ocorrências
Conta o número de ocorrências de cada elemento em um array.
Função: countOccurrences(array)

4. Agrupamento por Categoria
Agrupa itens em um array com base em uma categoria.
Função: groupByCategory(items)

5. Mesclagem de Arrays de Objetos
Mescla dois arrays de objetos com base no id, combinando as propriedades dos objetos correspondentes.
Função: mergeArrays(array1, array2)

Componentes

TestComponent

Este componente React utiliza as funções mencionadas acima e exibe os resultados na tela.


Estados

transformedUsers: Armazena os usuários filtrados e ordenados pela função transformData.
apiUsers: Armazena os dados de usuários buscados da API e filtrados pela função fetchUserData.
occurrences: Armazena o resultado da contagem de ocorrências de elementos pela função countOccurrences.
groupedItems: Armazena os itens agrupados por categoria pela função groupByCategory.
mergedArray: Armazena o array resultante da mesclagem de dois arrays de objetos pela função mergeArrays.
Ciclo de Vida
useEffect: Utilizado para realizar as operações assim que o componente é montado.



myFunctions.js

Contém as funções utilitárias usadas para transformação de dados, busca de dados via API, contagem de ocorrências, agrupamento por categoria, e mesclagem de arrays.

TestComponent.js

Componente React que utiliza as funções de myFunctions.js e exibe os resultados no navegador.

Como Executar o Projeto
Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/react-test-functions.git
cd react-test-functions

Instale as dependências:


npm install

Execute o projeto:

npm start

Abra o navegador:

A aplicação estará disponível em http://localhost:3000.

Exemplo de Saída

Ao rodar o componente TestComponent, você verá:

Usuários Filtrados e Ordenados: Uma lista de usuários ativos, ordenados por nome.
Usuários da API: Uma lista de usuários cujos nomes de usuário começam com "C", obtidos da API.
Contagem de Ocorrências: Um objeto mostrando quantas vezes cada fruta apareceu em uma lista.
Agrupamento de Objetos: Um objeto que agrupa itens pela categoria "fruit" ou "vegetable".
Arrays Mesclados: Um array de objetos que mescla dados de duas listas diferentes com base no id.
Tecnologias Utilizadas
React: Biblioteca JavaScript para construção de interfaces de usuário.
Fetch API: Para buscar dados de uma API externa.
JavaScript ES6+: Para manipulação de arrays e objetos.
