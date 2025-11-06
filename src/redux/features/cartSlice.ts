import { type PayloadAction,createSlice } from "@reduxjs/toolkit";
import type { CartItem, CartState } from "../../models/cart";


const initialState: CartState = {
    isCartOpen: false,
    cartItems:[]
}

const cartSlice = createSlice({
    name : "cartSlice",
    initialState: initialState,
    reducers:{
        addToCart:(state,action:PayloadAction<CartItem>)=>{
            const { cartItems } = state;
            if(cartItems.findIndex((pItem)=> pItem.id = action.payload.id) === -1){
                const item = {...action.payload, quantity:1}
                return({...state, cartItems:[...cartItems,item]})
            }else{
                const updatedItems = cartItems.map((item)=>{
                    if(item.id === action.payload.id){
                        return {...item,quantity: (item.quantity || 0)+ 1}
                    }else{
                        return item
                    }
                })
                return({...state, cartItems: updatedItems})
            }
        },

        removeFromCart:(state,action: PayloadAction<number>)=>{
            const { cartItems } = state;
            const updatedItems = cartItems.filter((item)=> item.id !== action.payload);
            return({...state, cartItems: updatedItems})
        },

        reduceFromCart:(state,action: PayloadAction<number>)=>{
            const { cartItems } = state;
            if(cartItems.find((item)=> item.id === action.payload && item.quantity === 1)){
                const updatedItems = cartItems.filter((item)=> item.id !== action.payload);
                return({...state, cartItems: updatedItems})
            }
            else{
                const updatedItems = cartItems.map((item)=>{
                    if(item.id === action.payload){
                        return {...item, quantity: item.quantity - 1}
                    }else{
                        return item
                    }
                })
                return({...state, cartItems: updatedItems})
            }
        },

        togglecart:(state, action: PayloadAction<boolean>)=>{
            return({...state, isCartOpen: action.payload})
        },

        clearCart:(state)=>{
            return({...state, cartItems: []})
        }

    }
});
export const { addToCart, removeFromCart, reduceFromCart, togglecart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
