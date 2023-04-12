class ProductManager {
    constructor() {
        this.products = [];
    }
   
    
    addProduct(title,description,price,thumbnail,code,stock){
        const repeatedProduct = this.products.some(item => item.code === code)
        if(repeatedProduct === false && title && description && price && thumbnail && code && stock){
            this.products.push({
                id:Math.floor(Math.random()*10) + 1,
                title:title,
                description:description,
                price:price,
                thumbnail:thumbnail,
                code:code,
                stock:stock

            })
        }else{
            console.log("Error, the product already exists or you did not complete all the fields")
        }
    }

    getProducts(){
        return this.products
    }

    getProductById(id){
         const productExists = this.products.find(product => product.id === id)
         if(productExists){
            return productExists
         }else{
            console.log("Not Found")
         }
    }
}

  const fruits = new ProductManager();
    fruits.addProduct( "Sandia","verde, tamaño mediano, 2.5 kg", 250, "http//.ar", 1, 5);
    fruits.addProduct( "Manzana","roja", 25, "Sin imagen", 3, 2);
    fruits.addProduct( "Naranja","Dulce", 20, "Sin imagen", 4, 6);
    fruits.getProductById(1)
console.log(fruits.getProducts());




