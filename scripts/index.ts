import { series } from './data';
import { Serie } from './Serie';

let listaSeries: Array <Serie> = series;
console.log(listaSeries);

cargarDatos(listaSeries);

function cargarDatos(series: Serie[]){
    const tbody: HTMLElement | null = document.getElementById('series');

    const tabla = document.createElement('table');
    tabla.classList.add('table');

    const thead = document.createElement('thead');
    const encabezado = document.createElement('tr');
    encabezado.innerHTML = `<th>#</th><th>Name</th><th>Channel</th><th>Seasons</th>`;
    thead.appendChild(encabezado);
    tabla.appendChild(thead);

    const tbody1 = document.createElement('body');

    for(let serie of series){
        
        let tr: HTMLElement = document.createElement("tr");

        tr.innerHTML = `<td>${serie.id}</td> <td>${serie.nombre}</td> <td>${serie.canal}</td> <td>${serie.temporadas}</td>`;

        tbody1.appendChild(tr);
    }
    tabla.appendChild(tbody1);
    if (tbody) {
        tbody.appendChild(tabla);
    } else {
        console.error("No se encontró el elemento 'tbody' con id 'series'.");
    }
}
