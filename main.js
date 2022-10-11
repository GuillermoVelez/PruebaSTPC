var productArray = [];
var filterProductsArray = [];
var brandArray = [];
var form= document.getElementById('form');
const select = document.getElementById('filter');
brand = document.getElementById('filter');
brand.addEventListener('change', (event) => {
    updateProducts()
});

form.addEventListener('submit',function(e){
    e.preventDefault();
    var newProduct={
        nombre: document.getElementsByName('nombre')[0].value,
        descripcion: document.getElementsByName('descripcion')[0].value,
        precio: document.getElementsByName('precio')[0].value,
        numeroReferencia: document.getElementsByName('numeroReferencia')[0].value,
        idMarca: parseInt(document.getElementsByName('idMarca')[0].value),
        idCategoria: parseInt(document.getElementsByName('idCategoria')[0].value),
        unidadesDisponibles: parseInt(document.getElementsByName('unidadesDisponibles')[0].value),
        tiempoGarantia: parseInt(document.getElementsByName('tiempoGarantia')[0].value),
        alto: parseInt(document.getElementsByName('alto')[0].value),
        largo: parseInt(document.getElementsByName('largo')[0].value),
        ancho: parseInt(document.getElementsByName('ancho')[0].value)
    }
    console.log(newProduct);
    fetch('https://electrics.azurewebsites.net/Electrodomestico/CrearElectrodomestico?dataOwner=023223b1-9c10-40cb-a890-1f164057389d',
    {
        method: 'POST',
        body: JSON.stringify(newProduct),
        headers: {
            'Content-Type': 'application/json',
        }
    }).then( res=> res.json())
    .then(data=>{
        console.log(data)
    })
})


function getProducts(filter) {
    const response = fetch('https://electrics.azurewebsites.net/Marca/ListarMarcas?dataOwner=023223b1-9c10-40cb-a890-1f164057389d'
    ).then(brand => brand.json()).then(brandFormat => {
        const res = fetch('https://electrics.azurewebsites.net/Electrodomestico/ListarElectrodomesticos?dataOwner=023223b1-9c10-40cb-a890-1f164057389d'
        ).then(products => products.json()).then(productArray => {

        })
    })
}

async function getAllInfo() {
    brandArray = await fetch('https://electrics.azurewebsites.net/Marca/ListarMarcas?dataOwner=023223b1-9c10-40cb-a890-1f164057389d').then(brand => brand.json())
    productArray = await fetch('https://electrics.azurewebsites.net/Electrodomestico/ListarElectrodomesticos?dataOwner=023223b1-9c10-40cb-a890-1f164057389d').then(brand => brand.json())
}

async function main() {
    
    await getAllInfo();
    let options = `<option value="all">All</option>`;
    for (i = 0; i < brandArray.length; i++) {
        idMarca = brandArray[i].nombre;
        options += `<option value="${brandArray[i].id}">
            ${brandArray[i].nombre}</option>`;
        select.innerHTML = options;
    }
    updateProducts();

}
function updateProducts() {
    const list = document.getElementById('list');
    list.innerHTML = '';
    var txtOut = "";
    console.log(productArray);
    if (select.value != 'all') {
        filterProductsArray = productArray.filter(product => product.idMarca == select.value);
    } else { filterProductsArray = productArray }
    for (i = 0; i < filterProductsArray.length; i++) {
        let newElement = document.createElement('li');
        newElement.setAttribute("class", "List");
        txtOut += `<b>${filterProductsArray[i].nombre}</b><br />`;
        txtOut += `Hight: ${filterProductsArray[i].alto}<br />`;
        txtOut += `Width: ${filterProductsArray[i].ancho}<br />`;
        txtOut += `Large: ${filterProductsArray[i].largo}<br />`;
        txtOut += `Description: ${filterProductsArray[i].descripcion}<br />`;
        txtOut += `NumberReference: ${filterProductsArray[i].numeroReferencia}<br />`;
        txtOut += `Price: ${filterProductsArray[i].precio}$ <br />`;
        txtOut += `Warranty: ${filterProductsArray[i].tiempoGarantia} días <br />`;
        txtOut += `Unities: ${filterProductsArray[i].unidadesDisponibles}<br />`;
        txtOut += `Brand: ${brandArray.find(element => element.id == filterProductsArray[i].idMarca).nombre}<br />`;
        newElement.innerHTML = txtOut;
        list.appendChild(newElement);
        txtOut = "";
    }

}

function updateProducts() {
    const list = document.getElementById('list');
    list.innerHTML = '';
    var txtOut = "";
    console.log(productArray);
    if (select.value != 'all') {
        filterProductsArray = productArray.filter(product => product.idMarca == select.value);
    } else { filterProductsArray = productArray }
    for (i = 0; i < filterProductsArray.length; i++) {
        let newElement = document.createElement('li');
        newElement.setAttribute("class", "List");
        txtOut += `<b>${filterProductsArray[i].nombre}</b><br />`;
        txtOut += `Hight: ${filterProductsArray[i].alto}<br />`;
        txtOut += `Width: ${filterProductsArray[i].ancho}<br />`;
        txtOut += `Large: ${filterProductsArray[i].largo}<br />`;
        txtOut += `Description: ${filterProductsArray[i].descripcion}<br />`;
        txtOut += `NumberReference: ${filterProductsArray[i].numeroReferencia}<br />`;
        txtOut += `Price: ${filterProductsArray[i].precio}$ <br />`;
        txtOut += `Warranty: ${filterProductsArray[i].tiempoGarantia} días <br />`;
        txtOut += `Unities: ${filterProductsArray[i].unidadesDisponibles}<br />`;
        txtOut += `Brand: ${brandArray.find(element => element.id == filterProductsArray[i].idMarca).nombre}<br />`;
        newElement.innerHTML = txtOut;
        list.appendChild(newElement);
        txtOut = "";
    }

}


/*function encodeImageFileAsURL(element) {
    let file = element.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function() {
        const newImage={
            id: 0,
            idElectrodomestico: 0,
            picByte: [
              "string"
            ],
            habilitado: true

        }
        console.log(JSON.stringify(newImage))
        
        fetch('https://electrics.azurewebsites.net/GaleriaElectrodomestico/CrearGaleriaElectrodomestico?dataOwner=023223b1-9c10-40cb-a890-1f164057389d',{
            method:'POST',
            body: JSON.stringify(newImage),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res =>res.json())
        .then(data=>console.log(data));
        
    }
    
  }*/

main();






