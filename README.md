# Desafio de projeto: 🛒carrinho de compras da Shopee

## 💻 Descrição Do Projeto

Este projeto implementa a lógica de um carrinho de compras semelhante ao da "Shopee". O carrinho permite adicionar itens, remover itens, excluir itens e calcular o total do carrinho, incluindo subtotais dos itens. Este exemplo simula um carrinho de compras básico que pode ser estendido para incluir funcionalidades mais complexas.

## 🚀 Funcionalidades
- **Adicionar Item**: Adiciona um item ao carrinho.
- **Calcular Total**: Calcula e exibe o total do carrinho.
- **Excluir Item**: Remove completamente um item do carrinho.
- **Remover Item**: Diminui a quantidade de um item no carrinho, ou remove-o se a quantidade for igual a 1.
- **Listar Itens**: Exibe todos os itens no carrinho com detalhes.

## 📂 Estrutura do Projeto
O projeto está organizado da seguinte forma:

```
/services
  ├── cart.js      # Funções para manipulação do carrinho
  └── item.js      # Função para criação de itens
index.js           # Arquivo principal de execução
readme.md          # Documentação do projeto
```

## 🔧 Configuração
1. Clone o Repositório
```bash
git clone https://github.com/giovanesouza/desafio-shopee-cart-nodejs
cd desafio-shopee-cart-nodejs
```

2. Execução do Projeto
Execute o projeto usando Node.js:
```bash
node ./src/index.js
```

## 📝 Como Usar
### Criar um Item
Use a função `createItem` para criar um item:

```js
import createItem from './services/item.js';

const item = await createItem('Nome do Item', 99.99, 2);
```

### Adicionar um Item ao Carrinho
Use a função `addItem` para adicionar um item ao carrinho:

```js
import { addItem } from './services/cart.js';

await addItem(myCart, item);

```

### Calcular o Total do Carrinho
Use a função `calculateTotal` para calcular o total do carrinho:

```js
import { calculateTotal } from './services/cart.js';

await calculateTotal(myCart);
```

### Excluir um Item do Carrinho
Use a função `deleteItem` para remover um item específico do carrinho:

```js
import { deleteItem } from './services/cart.js';

await deleteItem(myCart, 'Nome do Item');

```

### Remover um Item ou Diminuir a Quantidade
Use a função `removeItem` para diminuir a quantidade ou remover um item:

```js
import { removeItem } from './services/cart.js';

await removeItem(myCart, item);

```

## Listar Itens no Carrinho
Use a função `displayCart` para listar os itens no carrinho:

```js
import { displayCart } from './services/cart.js';

await displayCart(myCart);

```



## 📋 Exemplo de Uso
Aqui está um exemplo de como utilizar as funções implementadas:

```js
import * as cartService from './services/cart.js';
import createItem from './services/item.js';

const myCart = [];

console.log('Bem vindo ao seu Carrinho Shopee!');

// Criação de itens
const item1 = await createItem('Kit 5 Camisas Masculina', 88.99, 1);
const item2 = await createItem('Kit 3 Bermudas Sarja Masculina', 122.98, 2);
const item3 = await createItem('Smartphone Xiaomi Redmi Note 12 Pro 5G', 1799.99, 1);

// Adição de itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);

// Remover um item
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

// Excluir um item
await cartService.deleteItem(myCart, item3.name);

// Listar e calcular o total
await cartService.displayCart(myCart);
await cartService.calculateTotal(myCart);

```
