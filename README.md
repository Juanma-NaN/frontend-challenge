# frontend-challenge Frontend

This project was generated using [create-awesome-node-pp](https://www.npmjs.com/package/create-awesome-node-app). **DON'T USE THIS TEMPLATE AS IT!** Generate yours using the command and following the options in the interactive menu. Check the docs for more information!

## Features

- ⚡️ **Instant HMR** - use [Vite](https://vitejs.dev/) on dev (no more refresh!)
- ⚛ React - [React](https://reactjs.org/) is used for UI
- 🦾 [TypeScript](https://www.typescriptlang.org/) - type safe

## Pre-packed

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [eslint](https://eslint.org/) - Linting utility for JavaScript and JSX
- [prettier](https://prettier.io/) - Opinionated code formatter
- [husky](https://www.npmjs.com/package/husky) - Git hooks made easy
- [lint-staged](https://www.npmjs.com/package/lint-staged) - Run linters against staged git files and don't let 💩 slip into your code base!

## Quickstart

```sh
fnm use
npm install
npm run dev
```

## Useful resources

- [Project Structure](./docs/PROJECT_STRUCTURE.md)
- [Project Configuration](./docs/PROJECT_CONFIGURATION.md)
- [Components and Styling](./docs/COMPONENTS_AND_STYLING.md)
- [Performance recommendations](./docs/PERFORMANCE.md)
- [State Management recommendations](./docs/STATE_MANAGEMENT.md)

## Development

While developing, you will probably rely mostly on `npm run start`; however, there are additional scripts at your disposal:

| `npm run <script>` | Description                                                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `dev`              | Serves your app at for local development                                                                                |
| `format`           | Formats the project using [Prettier](https://prettier.io/)                                                              |
| `lint`             | [Lints](http://stackoverflow.com/questions/8503559/what-is-linting) the project for potential errors                    |
| `lint:fix`         | Lints the project and [fixes all correctable errors](http://eslint.org/docs/user-guide/command-line-interface.html#fix) |

## Production

Available scripts:

| `npm run <script>` | Description                                                           |
| ------------------ | --------------------------------------------------------------------- |
| `preview`          | Serves your app using your production ready setup (`.env.production`) |
| `build`            | Builds the application to `dist/`                                     |

## Contributing

You can report bugs, request features and create Pull Requests in the [Create-Node-App/react-extensions](https://github.com/Create-Node-App/react-extensions) repository!

## Anotaciones del challenge

- Creé un proyecto con CRA por un error en create-awesome-node
- Instalar Tailwind fue sencillo siguiendo su documentación oficial
- Me costó un poco entender que no precisaba archivos de estilado, sino que iba todo dentro del classname
- Tiene un comando para correr el Tailwind CSS client que no se para qué sirve
- Entiendo que interpreta todo lo que pongo en las classnames y lo mapea con lo que tengo en el theme. etc.. y genera los estilos
- Tuve que buscar constantemente la sintaxis de los estilos para saber cómo settear cada propiedad
- Muy straight-forward y se avanza rápido
- No lo recomiendo para proyectos en los cuales se busca compartir muchos elementos y tener variables para mantener la consistencia. A no ser que siendo usuario más avanzando se puedan crear clases y demás.
- Responsively es un golazo
- Estaría genial que Tailwind te recomiende propiedades en el IDE
- Me paso algo MUY LOCO, cree un array para los elementos que tienen imagen, título y texto. Copilot me adivinó LOS 3 al hilo después de poner el primero. Estará como ejemplo en al base de datos que alimenta Copilot?
- El diseño tiene el footer corrido (GUACALA) lo cambié para que quede más centrado con los padding.
- La única dificultad fue con el background. Me gustaría ver las soluciones de los demás.
- Para cumplir con el layout de los textos y demás, tuve que sestear algunos width innecesariamente precisos jeje
- Empecé desde el header hasta el footer, y por último los backgrounds.
- Ago raro de Tailwind es que recomienda usar los SVG inline. Pero cuando te toca un SVG que no se puede minimizar (limpiar con SVGOMG) queda hoshible.
- Es un bardo cambiar color de SVG o imágenes en Tailwind. Tuve que recurrir al filtro grayscale obteniendo un resultado no deseado.
- No tener classnames representativos hace más difícil ubicarse en los componentes de una clase. La solución podría ser separar todo en componentes pero no sé si es la mejor práctica.
- Problema con Bold: hace poco me dí cuenta que estaba implementando “mal” los bold texts. Ahora que importo la fuente correspondiente a su weight me doy cuenta del problema de layout shifts cuando se pone en bold. Muchas soluciones usando text-shadow pero no compro. Alguien sabe cómo se maneja este caso?
- Me encantó la feature de group para comportamientos. Me sirvió para manejar el hover del contenedor con los elementos (ícono y texto)
- Me costó un poco instalar tailwind con el create-awesome

### Librerías:

- Radix no tiene muchos elementos básicos, está pensado para elementos complejos con varios componentes.
 Intenté usar el Form de radix pero tiene otro sistema de estilado. No encontré una forma sencilla de implementarlo con Tailwind, pensé que era algo que ya venía resuelto. Sólo encontré una página que tiene componentes Radix con Tailwind pero no hay Form.
- DaisyUI tiene varios componentes hechos con Tailwind pero no encontré que resuelvan comportamientos, que es lo que necesito ahora para manejar el email. Y como la idea es usar la herramienta lo más primitivo y ágilmente posible, no me voy a poner a buscar cómo implementarlo.
- HeadlessUI tiene menos componentes todavía, aunque más complejos. Pero al fin y al cabo no me sirven para una simple implementación de input.
- Otra que apareció es Flowbite, pero me parece que es paga (tiene plan free)
- Al final decidí implementarlo con React y Tailwind pelado

