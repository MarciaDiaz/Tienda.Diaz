class Usuario  {

    constructor (nombre, apellido, libros, mascotas){

        this.nombre = nombre;
        this.apellido = apellido;
        
        this.mascotas = [mascotas];
        this.libros = [{
            nombre: libros,
            autor: undefined
        }]
    }


    getFullName () {
        console.log('el Usuario es ' + this.nombre + ' ' + this.apellido);
    }

    addMascota (mascota) {
        this.mascotas.push(mascota);
        return console.log(this.mascotas)
        
    }

    countMascotas() {
        return (this.mascotas.lenght);
    }

    addBook (nombre, autor) {
        this.libros.push ({nombre, autor})

        return console.log(this.libros)
    }

    getBookNames () {

        let nombresLibros = this.libros.map((e)=> e.nombre)
        return console.log(nombresLibros)
    }
}

const obj = new Usuario ('Marcia', 'Diaz', [{nombre: 'Prohibido sucidarse en primaver', autor: 'Alejandro Casona'}],[{nombre: 'gato'}], [{nombre: 'loro'}])

Usuario.addMascotas({nombre: 'perro'})
Usuario.addBook("cien años de soledad", "Gabriel Garcia Marquez")

console.log(obj.nombre)
console.log(obj.apellido)
console.log(obj.libros)
console.log(obj.mascotas)

obj.getFullName()
obj.addMascotas("perro")
obj.countMascotas()
obj.addBook("un libro", "un autor")
obj.getBookNames()