/* Carpeta dedicada unicaente al almacenamiento de las 
imagenes y su exportacion*/



//llamado de las imagenes que se llamaran image0, image1, etc importadas desde la carpeta ../imagenes/nombre de la imagen 
import image0 from '../imagenes/0.png';
import image1 from '../imagenes/1.png';
import image2 from '../imagenes/2.png';
import image3 from '../imagenes/3.png';
import image4 from '../imagenes/4.png';
import image5 from '../imagenes/5.png';
import image6 from '../imagenes/6.png';
import image7 from '../imagenes/7.png';
import image8 from '../imagenes/8.png';
import image9 from '../imagenes/9.png';


//Arreglo de strings llamada images que toma las imagenes importadas
const images : string[] = [
    image0, 
    image1,
    image2,
    image3, 
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
]; 



//Ver video y buscar que hace esta funcion
interface Props{

    imageNumber: number;
    
}

//Ver video y ver que hace esta funcion
//Exportara la funcion hangImage y sus instrucciones heredadas (props)
export function HangImage( {imageNumber}: Props){

    //Si image number es mayor o igual a 9 image number sera =9
    if(imageNumber>=9){
        imageNumber=9;
    }

    //Ver video que hace esta funcion
    return(
        <img 
        src={ images[imageNumber] }
        alt="Hang image" 
        style={{width: 250}} 
         />
    ); //JSX element 
}