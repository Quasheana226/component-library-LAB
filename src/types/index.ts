import React from 'react';

//alertBox
export type AlertType ='success' | 'error' | 'warning ' | 'info'

export interface AlertBoxProps {
    type: AlertType ;// controls color scheme of alert 
    message: string; // main text shown in alert 
    onClose?: () => void; // adds close button
    children?: React.ReactNode; 

}

// USER PROFILE

export interface UserProfile {
    id: string; // identifier for the user 
    name: string; // full name on card
    email: string; // email address
    role: string; // job role or tittle
    avatarUrl?: string; // optional profile picture url



}

// Interface fo the user profilecard components 

export interface UserProfileCardProps{
user: UserProfile;
showEmail?: boolean; // shows email is true
showRole?: boolean; // shows role true 
onEdit?: (userId: string) => void; // edit button when provided
children?: React.ReactNode; // content at the bottom


}


//PRODUCT DISPLAY

// A single object
export interface Product {
    id: string; // id of product
    name: string; // Product name displayed 
    price: number; // prise in usd 
    description: string; // Product description text
    inStock:boolean// true instock false out of stock 

}

export interface ProductdisplayProps {
    product: Product; // product object displayed 
    showDescription?:boolean// shows description when true
    showStockStatus?: boolean// shows stock badge when true 
    onAddToCart?: (productId: string) =>void // adds cart button
    children?: React.ReactNode // extra content at the bottom

}