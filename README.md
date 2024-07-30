# easylearn

## Descripci&oacute;n de la aplicacion
Brindar una plataforma digital que facilite la comunicación, colaboración y gestión de tareas entre profesores, padres de familia y estudiantes de secundaria, con el fin de mejorar el proceso de aprendizaje y apoyar a los alumnos en la realización de sus investigaciones.

## Tecnolog&iacute;as utilizadas
> - [Ionic 8](https://ionicframework.com/docs/)
> - [Angular 16](https://angular.io/docs)
> - [Node 18](https://nodejs.org/docs/latest-v18.x/api/index.html)
> - [Typescript 5](https://www.typescriptlang.org/docs/)
> - [RxJS 7](https://rxjs.dev/guide/overview)

## Correr el proyecto

En primer lugar asegurese de tener instaladas las versiones de las tecnologias descritas anteriormente:

### Node

Se recomienda utilizar nvm para administrar las versiones, en particular Node 18 

### Ionic

```
npm install -g @ionic/cli
```

### Clone el respositorio

Utilice el comando git clone para clonar el respositorio

### Instalaci&oacute;n de dependencias

En su terminal ejecute el siguiente comando.

```
npm install
```

### Lanzar la aplicaci&oacute;n en local

En su terminal ejecute el siguiente comando.

```
ionic serve
```

## Generar documentacion

```
npm run compodoc:build-and-serve
```

## Arquitectura

La arquitectura para este proyecto se basa en los principios de clean architecture, 
en este tipo de arquitectura se prioriza la organizaci&oacute;n de la l&oacute;gica
de negocio y las reglas de dominio para tener separada la implementaci&oacute;n y la
tecnolog&iacute;a.

- src/
  - app/
    - core/                *(Capa central con servicios de aplicación, guards, interceptors, etc.)*
      - constants/         *(Constantes generales de la aplicación)*
      - guards/            *(Guards para controlar el acceso y la autorización)*
      - interceptors/      *(Interceptores para manejo de HTTP)*
      - models/            *(Modelos e interfaces de datos)*
      - pipes/             *(Transforma valores en las plantillas)*
      - services/          *(Cervicios que interactúan con las capas de dominio e infraestructura)*
      - utils/             *(Utilidades y funciones auxiliares)*
    - domain/              *(Capa de dominio, lógica de negocio, entidades, reglas de negocio)*
      - entities/          *(Entidades y objetos de dominio)*
      - use-cases/         *(Casos de uso y lógica de negocio)*
      - interfaces/        *(Interfaces para repositorios y servicios)*
    - presentation/        *(Capa de presentación, componentes de Angular/Ionic)*
      - components/        *(Componentes reutilizables)*
      - pages/             *(Páginas y vistas principales)*
      - shared/            *(Componentes y servicios compartidos)*
    - infrastructure/      *(Capa de infraestructura, conexión con el exterior (APIs, bases de datos, etc.))*
      - repositories/      *(Repositorios que interactúan con la capa de dominio)*
      - http/              *(Configuración de HTTP y otros servicios de infraestructura)*
      - storage/           *(Servicios de almacenamiento local (como Ionic Storage))*
