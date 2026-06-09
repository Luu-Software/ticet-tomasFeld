import { cuandoPasa, enviarAlFrontend, iniciar } from './lib/ui.ts';

/* Precios de los artistas en patacones 
ID_ARTISTA  | PRECIO
=============================
sabrina     |   1000
kgatlw      |    700
lali        |    500
magdalena   |    600
viagra      |    400
dillom      |    350
marilina    |    200
mugre       |    150

Descuentos:
CÓDIGO      | DESCUENTO
==============================
TIC10       |       10%
TIC20       |       20%
DARIO       |       50%
*/

// COMPLETAR: Implementar la función calcularTotal que reciba el id del artista, la cantidad de entradas y un código de descuento (opcional) y devuelva el precio total a pagar en patacones.


function calcularTotal(id: string, cantidadNum: number, codigoDescuento:string)
{
   switch (id)
   {

   case "sabrina":
      if(codigoDescuento == "TIC1O")
      {
        return (1000 * 0.9) * cantidadNum;
      }
      if(codigoDescuento == "TIC20")
        {
          return (1000 * 0.8) * cantidadNum;
        }
        if(codigoDescuento == "DARIO")
          {
            return (1000 * 0.5) * cantidadNum;
          }
          if(codigoDescuento == "")
            {
              return (1000) * cantidadNum;
            }
    break;
    case "kgatlw":
      if(codigoDescuento == "TIC1O")
      {
        return (700 * 0.9) * cantidadNum;
      }
      if(codigoDescuento == "TIC20")
        {
          return (700 * 0.8) * cantidadNum;
        }
        if(codigoDescuento == "DARIO")
          {
            return (700 * 0.5) * cantidadNum;
          }
          if(codigoDescuento == "")
            {
              return (700) * cantidadNum;
            }
    break;
    case "lali":
      if(codigoDescuento == "TIC1O")
      {
        return (500 * 0.9) * cantidadNum;
      }
      if(codigoDescuento == "TIC20")
        {
          return (500 * 0.8) * cantidadNum;
        }
        if(codigoDescuento == "DARIO")
          {
            return (500 * 0.5) * cantidadNum;
          }
          if(codigoDescuento == "")
            {
              return (500) * cantidadNum;
            }
    break;
    case "magdalena":
      if(codigoDescuento == "TIC1O")
      {
        return (600 * 0.9) * cantidadNum;
      }
      if(codigoDescuento == "TIC20")
        {
          return (600 * 0.8) * cantidadNum;
        }
        if(codigoDescuento == "DARIO")
          {
            return (600 * 0.5) * cantidadNum;
          }
          if(codigoDescuento == "")
            {
              return (600) * cantidadNum;
            }
    break;
    case "viagra":
      if(codigoDescuento == "TIC1O")
      {
        return (400 * 0.9) * cantidadNum;
      }
      if(codigoDescuento == "TIC20")
        {
          return (400 * 0.8) * cantidadNum;
        }
        if(codigoDescuento == "DARIO")
          {
            return (400 * 0.5) * cantidadNum;
          }
          if(codigoDescuento == "")
            {
              return (400) * cantidadNum;
            }
    break;
    case "dillom":
      if(codigoDescuento == "TIC1O")
      {
        return (350 * 0.9) * cantidadNum;
      }
      if(codigoDescuento == "TIC20")
        {
          return (350 * 0.8) * cantidadNum;
        }
        if(codigoDescuento == "DARIO")
          {
            return (350 * 0.5) * cantidadNum;
          }
          if(codigoDescuento == "")
            {
              return (350) * cantidadNum;
            }
    break;
    case "marilina":
      if(codigoDescuento == "TIC1O")
      {
        return (200 * 0.9) * cantidadNum;
      }
      if(codigoDescuento == "TIC20")
        {
          return (200 * 0.8) * cantidadNum;
        }
        if(codigoDescuento == "DARIO")
          {
            return (200 * 0.5) * cantidadNum;
          }
          if(codigoDescuento == "")
            {
              return (200) * cantidadNum;
            }
    break;
    case "mugre":
      if(codigoDescuento == "TIC1O")
      {
        return (150 * 0.9) * cantidadNum;
      }
      if(codigoDescuento == "TIC20")
        {
          return (150 * 0.8) * cantidadNum;
        }
        if(codigoDescuento == "DARIO")
          {
            return (150 * 0.5) * cantidadNum;
          }
          if(codigoDescuento == "")
            {
              return (150) * cantidadNum;
            }
    break;
    default:
      return 0;
      break;

   }
}

cuandoPasa('seleccionarArtista', ({ id, cantidad, codigoDescuento }) => {
  let cantidadNum: number = Number(cantidad);
  let precio: number | undefined = calcularTotal(id, cantidadNum, codigoDescuento);
  enviarAlFrontend('mostrarPrecio', precio);
});

iniciar();
