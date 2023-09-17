export interface Product{
    description:string;
    price:number;
}


const phone:Product ={
    description: 'Samsung A50',
    price: 350
}

const tablet:Product ={
    description: 'Samsung tab 4',
    price: 250
}

interface TaxCalculationOptions{
    tax:number,
    products: Product[]
}

export function taxCalculation(options:TaxCalculationOptions):[number,number]{
    let total = 0;
    const {products, tax} = options;    
    products.forEach(({price}) => {
        total += price;
    });
    return [total, total*tax];
}

// const shoppingCart = [phone, tablet];
// const tax = 0.15;

// const [products, productTax] = taxCalculation({
//     products: shoppingCart,
//     tax,
// })

// console.log('Total', products)
// console.log('Tax', productTax)

