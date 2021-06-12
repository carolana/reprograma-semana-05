console.log('-------------------------------------------------')
console.log('        Projeto Carrinho de Compras              ')
console.log('      Ana Carolina Pereira dos Santos            ')
console.log('-------------------------------------------------')

const db = require('./database')

const { produtos } = db

produtos.sort((a, b) => a.preco - b.preco)

console.table(produtos)


const read = require('readline-sync')

const carrinho = []

const verProdutos = read.question('Voce deseja encontrar o produto por categoria? (S / N): ')
if (verProdutos.toUpperCase() === 'S') {
    console.log('-------------------------------------------------')
    console.log('Essas são as nossas categorias: ')
    console.log('Alimento, Bebida, Casa, Higiene, Informática')
    console.log('-------------------------------------------------')
     
    const qualCategoria = read.question('Voce esta procurando produtos de qual categoria? ')
    

    const categorias = produtos.filter(item => item.categoria === qualCategoria)
    
    console.table(categorias); 
} else { (verProdutos.toUpperCase() !== 'S') 
    console.log('Esses são nossos produtos disponiveis!')
    console.table(produtos)
}

const array = new Array()


class Pedido {
    constructor(array) {
        this.product = array
        this.subTotal = 0
        this.valorTotal = 0
        this.totalItens = 0
    }
}


const compras = () => {
    productId = parseInt(read.question('Digite o id do produto desejado: '))
    for (i =0; i<1000; i++) {
        encontrarId = produtos.find(item => item.id === productId)
        if (encontrarId) {
            break;
        } else {
            productId = parseInt(read.question(('Id nao encontrado. Tente novamente... ')))
        }
    }
    quantidadeDesejada = parseInt(read.question('Digite a quantidade desejada: '))
    for (i=0; i< 1000; i++) {
        if(quantidadeDesejada > 0) {
            break;
    } else {
        quantidadeDesejada = parseInt(read.question('Digite uma quantidade valida: '))
    }
}
    
    const produtosCarrinho = {...encontrarId, quantidade: quantidadeDesejada}
    carrinho.push(produtosCarrinho)

    const continueComprando = read.question('Deseja continuar comprando? (S/ N): ')
    const continueComprandoFormato = continueComprando.toLowerCase()
        if (continueComprandoFormato === 'n') {
            console.log('----------------------------------------------')
            console.log('                Pedido encerrado!             ')
            console.log('----------------------------------------------')
            cupom = parseInt(read.question('Digite o valor do desconto: '))
        } else {
            compras()
        }
        for (i=0; i < 1000; i++) {
            if(cupom > 15 || cupom < 0) {
                cupom = parseInt(read.question('Cupom invalido.'))
        } else {
            break
        }
    }
}

compras()

class Order {
    constructor(carrinho) {
        this.newProducts = carrinho
        this.subTotal = 0
    }
    calcSubTotal() {
        this.subTotal = this.newProducts.reduce((acumulator, item) => acumulator + (item.preco*item.quantidade),0)
    }
}

const order = new Order(carrinho)
console.table(order.newProducts);
order.calcSubTotal()
console.log(`O valor do seu pedido é R$ ${order.subTotal.toFixed(2)}.`)
const desconto = order.subTotal * (cupom/100)
console.log(`O valor do seu desconto ${desconto.toFixed(2)}`)
const totalPedido = order.subTotal  - desconto
console.log(`O valor final do seu pedido já com o ${cupom}% de desconto é R$ ${totalPedido.toFixed(2)}`)

console.log('----------------------------------------------')
console.log('     Obrigada pela preferencia!               ')
console.log('----------------------------------------------')