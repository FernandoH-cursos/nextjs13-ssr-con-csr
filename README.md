#  Temas principales de Next.js 13+ como SSR, CSR, SSG, ISR, API Routes, etc.
A continuación se presentan los temas más importantes a tratar en Next.js 13+.

## Server Side Rendering (SSR) + Client Side Rendering (CSR)
- #### use-client
- #### Next Link
- #### Next Image
- #### Estructura de proyecto (src/app)
- #### Permitir imagenes externas
- #### Usar SSR + CSR en una misma página

___

## Generación dinámica - SSR
- #### Manejo de Metadata dinámica
- #### Páginas generadas del lado del servidor - SSR
- #### Páginas de errores
- #### Validación de argumentos
- #### Redirecciones
- #### Prioridad de Carga de imágenes
- #### Tipos de revalidación con Fetch y sin Fetch

___

## Incremental Static Regeneration (ISR) + Static Site Generation (SSG)
- #### generación estática de contenido.
- #### El objetivo principal de este mecanismo, es adelantarnos a las posibles solicitudes de nuestros usuarios y tener generadas de antemano las posibles páginas que ellos van a solicitar.
- #### Es decir, en "build time" o tiempo de construcción, crearemos todas las páginas acorde a nuestras reglas de negocio.
- #### Luego le añadiremos condiciones de re-validación para que se renueven cuando el momento lo amerite.

___

## Global State - Redux Toolkit + React-Redux y LocalStorage
- #### Redux Toolkit
- #### Acciones
- #### Reducers
- #### Estado Global
- #### Providers
- #### Store
- #### useDispatch (useAppDispatch)
- #### useSelector (useAppSelector)
- #### Consumo de Store
- #### Consideraciones con Next.js 13+
- #### Manejo de Favoritos
- #### Trabajar LocalStorage con Server components
