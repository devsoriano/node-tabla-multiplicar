# Notas:

Consola interactiva para tabas de multiplicar en node

```
Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -b, --base     Es la base de la tabla de multiplicar       [number] [required]
  -l, --listar   Muestra la tabla en consola          [boolean] [default: false]
  -h, --hasta    Límite de la tabla de multiplicar (hasta)[number] [default: 10]
```

### Instalación 🔧

_Ejecutar dentro del proyecto:_

```
npm install
```

### Funcionamiento 🚀

_Para probar el funcionamiento en consola:_

```
 node app -b 512 -l -h 250
```

_o sin listado:_

```
 node app -b 512 -h 250
```
