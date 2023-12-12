const ul = document.querySelector("ul")
let carrinho = document.querySelector(".itens-carrinho")
let arrayCarrinho = []
let botaoComprar = document.querySelector(".containerListaProdutos ul li button")





function criarProdutos(produtosCard){
    

    for(let i= 0; i < produtosCard.length; i++){
        
        

        let li   = document.createElement("li")
        let img  = document.createElement("img")
        let span = document.createElement("span")
        let h3   = document.createElement("h3")
        let p    = document.createElement("p")
        let button = document.createElement("button")
        let ol = document.createElement("ol")

        button.addEventListener("click", function(){

            arrayCarrinho.push(produtosCard[i])
            console.log(arrayCarrinho)
            
        })

        img.src = produtosCard[i].img
        span.innerText = produtosCard[i].secao
        h3.innerText = produtosCard[i].nome
        p.innerText = `R$ ${produtosCard[i].preco}`
        button.innerText = "Comprar"
        ol.innerText = produtosCard[i].componentes
        
        button.id = produtosCard[i].id

        li.appendChild(img)
        li.appendChild(span)
        li.appendChild(h3)
        li.appendChild(p)
        li.appendChild(ol)
        li.appendChild(button)
        ul.appendChild(li)

        

    }
    
   
}

criarProdutos(produtos)



         
        
        function busca (produto){
            
            let inputBusca = document.querySelector(".containerBuscaPorNome input") 
            let botaoBusca = document.querySelector(".containerBuscaPorNome button")

            botaoBusca.addEventListener("click", function(){
            
                ul.innerHTML = ""
                 let arrayBusca = []       
                for(let i = 0; i < produto.length; i++){
                    
                    if(inputBusca.value.toLowerCase() == produto[i].nome.toLowerCase() || inputBusca.value.toLowerCase() == produto[i].secao.toLocaleLowerCase() || inputBusca.value.toLowerCase() == produto[i].categoria.toLocaleLowerCase()){
                        
                        arrayBusca.push(produto[i])
                     criarProdutos(arrayBusca)   
                    }
            
                }
            })
        }

        busca(produtos)
        

        let botaoTodos = document.querySelector("#todos")

        

        botaoTodos.addEventListener("click", function(){
            ul.innerHTML = ""
            
             criarProdutos(produtos)
        })

        function filterHortifruit (produto){
            
            let botaoHortifruiti = document.querySelector("#hortifruiti")
            let arrayHortifruit = []
            
            botaoHortifruiti.addEventListener("click", function(){
                
               
                for(let i = 0; i < produto.length; i++){
                    
                    
                    if(produto[i].secao == "Hortifruti"){
                        ul.innerHTML = ""
                       
                        arrayHortifruit.push(produto[i])
                        criarProdutos(arrayHortifruit)
                        
                    }
                    
                }
            })
        
        }

       filterHortifruit(produtos)

        function filterPanificadora (produto){

            let botaoPanificadora = document.querySelector("#panificadora")
            let arrayPanificadora = []

            botaoPanificadora.addEventListener("click", function(){
                ul.innerHTML = ""
    
                for(let i = 0; i < produto.length; i++){
                    if(produtos[i].secao == "Panificadora"){
                    arrayPanificadora.push(produto[i])
                    criarProdutos(arrayPanificadora)
                    
                    }
                }
            })


        }

       filterPanificadora(produtos)

       function filterLaticinios (produto){
        let botaoLaticinios = document.querySelector("#laticinios")
        let arrayLaticinios = []

        botaoLaticinios.addEventListener("click", function(){
            ul.innerHTML = ""

            for(let i = 0; i < produto.length; i++){
                if(produtos[i].secao == "Laticinio"){
                    arrayLaticinios.push(produto[i])
                    criarProdutos(arrayLaticinios)
                }
            }
        })

       } 
       
       filterLaticinios(produtos)

        

        

        
        // function soma(){
//     let soma = 0
//     for(let i = 0; i < produtos.length; i++){
//         soma = soma + produtos[i].preco
   
//  }
//  return soma
// }