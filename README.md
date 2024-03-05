# Examen de ingreso React - Ts

Archivo: [Examen de ingreso React](/Examen%20de%20Ingreso%20React.pdf)

## Requisitos:

- Se deben poder seleccionar individualmente los países
- Se deben seleccionar y deseleccionar todos cuando se presiona el checkbox “Select All”
- Si esta marcado “Select All”, y por ende todos los otros checkbox también, y se selecciona uno de los países, “Select All” debe ser deseleccionado.
- Si se seleccionan todos los países, “Select All” debe ser seleccionado automáticamente.

## Como iniciar el proyecto

Correr

### `npm start`

Abrir [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

## Despliegue en vercel

De otra forma, se puede ver el despliegue en [Vercel](https://examen-ingreso-react-ts.vercel.app/).

## Notas del desarrollador
Existe logica que puede irse a otros archivos, como el componente Checkbox, las interfaces declaradas y la constante de countries, pero no se movieron debido a que una condicion era tener toda la logica en el archivo App.tsx.

Tambien se uso un Id en la lista de countries pero simplemente podria ser un array y cambiar la logica de insert en el estado selectedCountries.
