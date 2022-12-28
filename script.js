/* -------------------------- Criando lista no HTML ------------------------- */


function criarLista(produto){
  
    let tagMain    = document.createElement("main")
    let tagLi      = document.createElement("li")
    let tagImg     = document.createElement("img")
    let tagH1      = document.createElement("h1")
    let tagH5      = document.createElement("h5")
    let tagStrong  = document.createElement("strong")
    

    tagLi.classList.add("product")
    tagImg.classList.add("product-img")
    tagMain.classList.add("product-main")
    tagH1.classList.add("product-title")
    tagH5.classList.add("product-category")
    tagStrong.classList.add("product-price")
    

    tagImg.src          = produto.image == undefined ? "./img/products/no-img.svg" : produto.image;
    tagImg.alt          = produto.imageDescription  
    tagH1.innerText     = produto.title
    tagH5.innerText     = produto.category
    tagStrong.innerText = `R$ ${produto.price.toFixed(2)}`


    tagMain.append(tagH1, tagH5, tagStrong)
    tagLi.append(tagImg, tagMain)


    return tagLi
            
}


/* ---------------------------- FUNÇÃO CRIANDO CATEGORIAS ---------------------------- */


function criandoCategoria(){
	
    let mainFruits = document.querySelector(".fruits")
    let mainDrinks = document.querySelector(".drinks")
    let mainHygiene = document.querySelector(".hygiene")


	let ulFrutas = document.createElement("ul")
	let ulBebidas = document.createElement("ul")
	let ulHigiene = document.createElement("ul")

	
    mainFruits.append(ulFrutas)
    mainDrinks.append(ulBebidas)
    mainHygiene.append(ulHigiene)
    

	separarCategorias(ulFrutas, ulBebidas, ulHigiene)

}

criandoCategoria()


/* --------------------- FUNÇÃO PARA SEPARAR CATEGORIAS --------------------- */


function separarCategorias(ulFrutas, ulBebidas, ulHigiene) {
	
	for (let produto of products) {

		if (produto.category == "Frutas") {

			ulFrutas.append(criarLista(produto))

		}else if (produto.category == "Bebidas") {

			ulBebidas.append(criarLista(produto))

		}else if (produto.category == "Higiene") {

			ulHigiene.append(criarLista(produto))

		}

	}

}



