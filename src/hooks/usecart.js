
import{useState,useEffect} from 'react';


export default function usecart() {
    const [cart, setCart]=useState(()=>{
        try{
            const curCart=localStorage.getItem('cart');
            return curCart?JSON.parse(curCart):[];
        }
        catch(error){
            console.log("error parsing data");
            return [];
        }
    })

    useEffect(()=>{
        try{
            const newCart=JSON.stringify(cart);
            localStorage.setItem('cart',newCart);
        }
        catch(error){
            console.log("found error updating the data");
        }
    },[cart])

    //for syncing across all tabs

    useEffect(()=>{
        const handleStorage=(e)=>{
           if(e.key=="cart"){
               try {
                   setCart(JSON.parse(e.newValue || "[]"));
                   
               }
               catch (error) {
                   console.log("found error updating the data");
               }

           }
        }

        window.addEventListener('storage',handleStorage);
        return ()=>window.removeEventListener('storage',handleStorage);
    },[])

    function addItem(product){
        const existingProduct=cart.find((item)=>item.id==product.id);
        if(existingProduct){
           setCart(cart=>cart.map((item)=>{
            if(item.id==product.id){
                return {...item,quantity:item.quantity+1};
            }
            return item;
           }))
        }
        else{
            setCart(cart=>[...cart,{...product,quantity:1}]);
        }
        
    }
    function updateItem(product,newQuantity){
        if(newQuantity<1){
            return ;
        }
        setCart(cart=>cart.map((item)=>{
            if(item.id==product.id){
                return {...item,quantity:newQuantity};
            }
            return item;
        })
    )
        
    }

    function removeItem(product){
        setCart(cart=>cart.filter((item)=>{
            if(item.id==product.id){
                return false;
            }
            return true;
        })
    )
    }

    const total=Number(cart.reduce((sum,item)=>{
        return sum+item.price*item.quantity;
    },0).toFixed(2))

    return {
        addItem,
        updateItem,
        removeItem,
        cart,
        total
    }
  
}




