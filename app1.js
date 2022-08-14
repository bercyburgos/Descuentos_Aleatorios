function getDescuento(min,max){
    return Math.floor(Math.random()*(max- min))+min;
}


let descuento =[];

for(let i =1; i<=1;i++){
    descuento.push(getDescuento(1,40));
}

alert("El descuento que tenemos hoy para usted es del "+ descuento +"%")