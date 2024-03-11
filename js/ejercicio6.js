/*
Realizar una función que realice el algoritmo de burbuja.
Entrada [3, 6, 12, 5, 100, 1 ]
Salida [1, 3, 5, 6, 12, 100]
*/
function bubbleSort( array ){
    
    let element = 0; // para guardar temporalmente un valor

    // el proceso se repite n veces para asegurar que esté ordenado
    for (let j = 0; j < array.length-1; j++) {

        // agarra un par de valores y los ordena, se repite con todos los valores
        for(let i = 0; i< array.length-1; i++){

            // compara un par de valores
            if( array[i] > array[i+1] ){
    
                element = array[i]; // guarda temporalmente un valor (porque lo vamos a borrar)

                // cambia los valores de posición para ordenarlos
                array.splice(i, 1, array[i+1]);
                array[i+1] = element;
            }
        }
        
    }
    return array;
}
let list = [3, 6, 12, 5, 100, 1 ];
console.log( bubbleSort(list) );