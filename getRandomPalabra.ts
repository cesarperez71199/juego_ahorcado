let palabras: string[] = [
    'COMPUTADORA',
    'AGUACATE',
    'FERROCARRIL',
    'PAPAYA',
    'CARRO',
    'PANCRASIO',
    'FUNLANO'

];



export function getRandomPalabra(){

    const randomIndex= Math.floor (Math.random() * palabras.length);

    return palabras[randomIndex];
    
}