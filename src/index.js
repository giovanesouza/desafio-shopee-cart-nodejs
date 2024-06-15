import * as cartService from "./services/cart.js"; // Importa todas as funções do cart e as salvam em cartService
import createItem from "./services/item.js";

const myCart = [];

console.log("Bem vindo ao seu Carrinho Shopee!");

// Cria 3 itens
const item1 = await createItem("Kit 5 Camisas Masculina", 88.99, 1);
const item2 = await createItem("Kit 3 Bermudas Sarja Masculina", 122.98, 2);
const item3 = await createItem("Smartphone Xiomi Redmi Note 12 Pro 5G", 1799.99, 1);

// Adiciona 3 itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);

// Remove o item 2
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

// Exclui 1 item do carrinho
await cartService.deleteItem(myCart, item3.name);

await cartService.displaycart(myCart); // Exibe itens do carrinho

await cartService.calculateTotal(myCart);