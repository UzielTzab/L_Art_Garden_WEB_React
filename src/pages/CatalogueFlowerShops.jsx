import { CardFlowerShop } from "../components/CardFlowerShop";
import flower1 from '../assets/images/flowersShop/shop1.jpg';
import { Header } from "../components/Header";

export function CatalogueFlowerShops() {
    return (
        <>
            <Header/>
            <main>
                <div class="contenedor-principal">
                    <div class="contenedor-secundario p-3">
                        <div class="row CA mx-auto">
                            <div class="col text-center CO">
                                <div class="row CE">
                                    <CardFlowerShop urlImage={flower1} nameFlowerShop="Florines" address="939x34" phone="999499393"/>
                                    <CardFlowerShop urlImage={flower1} nameFlowerShop="" address="" phone=""/>
                                    <CardFlowerShop urlImage={flower1} nameFlowerShop="" address="" phone=""/>
                                    <CardFlowerShop urlImage={flower1} nameFlowerShop="" address="" phone=""/>
                                    <CardFlowerShop urlImage={flower1} nameFlowerShop="" address="" phone=""/>
                                    <CardFlowerShop urlImage={flower1} nameFlowerShop="" address="" phone=""/>
                                    <CardFlowerShop urlImage={flower1} nameFlowerShop="" address="" phone=""/>
                                    <CardFlowerShop urlImage={flower1} nameFlowerShop="" address="" phone=""/>
                                    <CardFlowerShop urlImage={flower1} nameFlowerShop="" address="" phone=""/>
                                    <CardFlowerShop urlImage={flower1} nameFlowerShop="" address="" phone=""/>
                                    <CardFlowerShop urlImage={flower1} nameFlowerShop="" address="" phone=""/>
                                    <CardFlowerShop urlImage={flower1} nameFlowerShop="" address="" phone=""/>
                                    <CardFlowerShop urlImage={flower1} nameFlowerShop="" address="" phone=""/>
                                    <CardFlowerShop urlImage={flower1} nameFlowerShop="" address="" phone=""/>
                                    <CardFlowerShop urlImage={flower1} nameFlowerShop="" address="" phone=""/>
                                    <CardFlowerShop urlImage={flower1} nameFlowerShop="" address="" phone=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}