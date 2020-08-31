//hoja con lógica de compra
//se necesita rastrear las acciones de la canasta de compras
import React, {createContext, useContext, useReducer} from "react";
//ESTA ES LA HOJA CON LA LÓGICA DE NEGOCIO
export const StateContext = createContext();

//CONSTRUIR UN PROVEEDOR DE PARÁMETROS PARA CONSTRUIR UN BANCO CON TODA LA DATA CREADA
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)} >
    {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);
 