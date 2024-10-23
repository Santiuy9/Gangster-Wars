import React from "react";
import ItemCard from "./ItemCard";
import MotoDeportiva from '../assets/moto-deportiva.jpg'
import VWGolf from '../assets/VWGolf.png'

export default function Vehiculos() {
    return (
        <div className="category-content">
            <h2>Vehiculos</h2>
            <ItemCard
                title="Moto Deportiva"
                imageSrc={MotoDeportiva}
                description="Moto con gran limite de velocidad"
                price="25990"
                category="Vehículo"
                proBarName="Velocidad"
                proBarTxtColor="Black"
                proBarBgColor="skyblue"
                proBarPercentage="70"
            />
            <ItemCard
                title="Volskwagen GOLF"
                imageSrc={VWGolf}
                description="Auto con muchas comodidades"
                price="58750"
                category="Vehículo"
                proBarName="Velocidad"
                proBarTxtColor="Black"
                proBarBgColor="skyblue"
                proBarPercentage="80"
            />
        </div>
    )
}