function getBrand(){
    const res= fetch('https://electrics.azurewebsites.net/Marca/ListarMarcas?dataOwner=023223b1-9c10-40cb-a890-1f164057389d'
    ).then(products => products.json()).then(postFormat=>{
        const select = document.getElementById('filter');
        for (i=0;i<postFormat.length;i++){
            let newElement = document.createElement('option');
            newElement.innerHTML=postFormat[i].nombre;
            newElement.value=postFormat[i].nombre;
            select.appendChild(newElement);
        }
    })
    return res
}
function getProducts(){
    const res= fetch('https://electrics.azurewebsites.net/Electrodomestico/ListarElectrodomesticos?dataOwner=023223b1-9c10-40cb-a890-1f164057389d'
        ).then(products => products.json()).then(postFormat=>{
        const list = document.getElementById('list');
        var txtOut ="";
        for (i=0;i<postFormat.length;i++){
            let newElement = document.createElement('li');
            txtOut += `<b>${postFormat[i].nombre}</b><br />`;
            txtOut += `Hight: ${postFormat[i].alto}<br />`;
            txtOut += `Width: ${postFormat[i].ancho}<br />`;
            txtOut += `Large: ${postFormat[i].largo}<br />`;
            txtOut += `Description: ${postFormat[i].descripcion}<br />`;
            txtOut += `NumberReference: ${postFormat[i].numeroReferencia}<br />`;
            txtOut += `Price: ${postFormat[i].precio}$ <br />`;
            txtOut += `Warranty: ${postFormat[i].tiempoGarantia} días <br />`;
            txtOut += `Unities: ${postFormat[i].unidadesDisponibles}<br />`;
            newElement.innerHTML=txtOut;
            list.appendChild(newElement);
            txtOut="";
        }
    })
    return res
}
console.log(getBrand());
console.log(getProducts());




