
// Adiciona item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
  }
  
  // Calcula o total do carrinho
  async function calculateTotal(userCart) {
    console.log("\nCarrinho Shopee:");
  
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0); // soma todos os valores
    console.log(`💵 Total: ${result}`);
  }
  
  // Exluir item do carrinho
  async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name); // Verifica se o item existe e salva o seu index
  
    if (index !== -1) {
      userCart.splice(index, 1); // remove do carrinho
    }
  }
  
  // Remove um item/diminui um item
  async function removeItem(userCart, item) {
    // Busca o indice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name);
  
    // Caso não encontre o item
    if (indexFound == -1) {
      console.log("item não encontrado");
      return;
    }
  
    // Item > 1 subtrair um item
    if (userCart[indexFound].quantity > 1) {
      userCart[indexFound].quantity -= 1;
      return;
    }
  
    // Caso item = 1 exclui o item
    if (userCart[indexFound].quantity == 1) {
      userCart.splice(indexFound, 1);
      return;
    }
  }
  
  // Lista todos os items do carrinho
  async function displaycart(userCart) {
    console.log("\nLista de itens:");
    userCart.forEach((item, index) => {
      console.log(
        `${index + 1}. ${item.name} - R$ ${item.price} | ${
          item.quantity
        }x | Subtotal = ${item.subtotal()}`
      );
    });
  }
  
  export { addItem, calculateTotal, deleteItem, removeItem, displaycart };