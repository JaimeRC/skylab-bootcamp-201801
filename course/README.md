![Image](images\logoskylabcode.png)
# SKYLABCODER BOOTCAMP JANUARY 2018

## HTML + CSS + Javascript + ReactJS + NodeJS

## DIA 1:
Introducion al curso, programando el temario para las proximas semanas. 
Empezamos explicando la metodologia de un programador
Introduccion y/o instalacion de los siguientes programas:
* Cmder (Shell).
Consola para Windows. Muy util para poder gestionar la conexion de reposiorios a GITHUB mediante GIT.
```
ls                          (muestra todos los archivos)
ls -a                       (muestra todos los archivos incluyendo los ocultos)
rm -rf [file]               (elimina archivo/carpeta)
mv [origen] [destino]       (mueve archivos/carpetas del origen al destino)
cp -p [origen] [destino]    (copia archivos/carpetas del origen al destino)
```

* Visual Studio Code (IDE)
* GIT y GitHub
Funcionamiento de GIT. Para una mejor grstion de proyectos habrá una rama MASTER donde esta el codigo final del proyecto, una rama DEVELOP donde se depositará todo el trabajo para realizar. Todo el trabajo depositado en DEVELOP se tendra que crear una rama nueva con referencia para realizar dicho trabajo. Una vez finalizado esta tarea se subira a la rama DEVELOP para que los compañeros del proyecto lo puedan revisar y testear. Si surgiera algun inconveniente se intentaria soucionar o se crearia una nueva rama para su solucion. EN el caso de que todo estuviera correcto, y si es necesario en ese momento, se realizaria la subida del trabajo realizado a la rama MASTER para que pueda ser usada. En toda rama creada, habra muchos puntos de inflexion que sera registrado por los "commit" que se vayan realizando.
Funcionamiento de GIT:
![](images/git-operations.png)

Registrar/guardar cambios:
Para añadirlos al **Index** empezaremos usando el siguiente comando:
```
git add <filename>
git add . 
```
Este es el primer paso en el flujo de trabajo básico. Para hacer *commit* a estos cambios se usa:
```
git commit -m "comentario"
```
Ahora el archivo esta incuido en el **HEAD**, pero aún no en tu repositorio remoto, solo esta en tu copia local. Para enviar estos cambios a tu repositorio remoto ejecuta:
```
git push origin master
````
Remplaza *master* por la rama a la qu quieres enviar tus cambios.
Para conar un repositorio ya existente y quieres conectar tu repositorio loal a un repositorio remoto, usariamos:
```
git remote add origin <server>
```
Con este ultimo comando podrás subir tus cambios al repositorio remoto seleccionado.
Crear una nueva rama:
Empezaremos utilizando el siguiente codigo que creara la rama y nos situara sobre ella:
```
git checkout -b <branch>
```
Para volver a la rama principal:
```
git checkout master
```
Borrar una rama:
```
git branch -d <branch>
```
Para que los demas puedan ver la rama nueva tendras que realizar un *push* a tu repositorio remoto:
```
git push origin <branch>
```
Para actualizar tu repositorio local al commit mas nuevo, ejecutaremos el siguiente comando en nuestro directorio de trabajo:
```
git pull
```
Esto bajará y fusionará los cambios remotos.
Para fusionar otra rama a tu rama activa, utilizariamos:
```
git merge <branch>
```
Tanto *pull* como *merge* **Git** intentara fusionar los cambios. Desafortunadamente, no siempre será posible y se podrán producir conflictos. Estos tendran que ser solucionados manualmente al editar los archivos mostrados por **Git**. Despues de modificarlos, puedes revisarlo con:
```
git diff <source_branch> <target_branch>
```
Para finalizar, necesitas marcarlos como fusionados con:
```
git ad <filename>
```


reemplaza cambios locales
En caso de que hagas algo mal (lo que seguramente nunca suceda ;) puedes reemplazar cambios locales usando el comando
git checkout -- <filename>
Este comando reemplaza los cambios en tu directorio de trabajo con el último contenido de HEAD. Los cambios que ya han sido agregados al Index, así como también los nuevos archivos, se mantendrán sin cambio.

Por otro lado, si quieres deshacer todos los cambios locales y commits, puedes traer la última versión del servidor y apuntar a tu copia local principal de esta forma
git fetch origin
git reset --hard origin/master
