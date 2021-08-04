class Propietario {
  constructor(nombre, direccion, telefono) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
  }
  datosPropietario() {
    return `El nombre del dueño es: ${this.nombre}. El domicilio es: ${this.direccion}, y el número telefónico de contacto: ${this.telefono}`;
  }
}

class Animal extends Propietario {
  constructor(nombre, direccion, telefono, tipo) {
    super(nombre, direccion, telefono);
    this._tipo = tipo;
  }
  get tipo() {
    return this._tipo;
  }
}

class Mascota extends Animal {
  constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
    super(nombre, direccion, telefono, tipo);
    this._nombreMascota = nombreMascota;
    this._enfermedad = enfermedad;
  }
  get nombreMascota() {
    return this._nombreMascota;
  }

  set nombreMascota(nuevoNombreMascota) {
    this._nombreMascota = nuevoNombreMascota;
  }

  get enfermedad() {
    return this._enfermedad;
  }

  set enfermedad(nuevaEnfermedad) {
    this._enfermedad = nuevaEnfermedad;
  }
}

/*5. Captar los elementos del formulario con JavaScript e identificar el tipo de animal para realizar la instancia dependiendo del tipo de animal seleccionado. Es decir, si el usuario selecciona Gato, la instancia a crear para la clase Mascota debe tener el nombre de “Gato”, si selecciona Perro, la instancia de Mascota deberá llamarse “Perro”. */

let imprimirResultado = (objeto) => {
  let ulResultado = document.querySelector('#resultado ul');
  let li1 = document.createElement('li');
  let li2 = document.createElement('li');

  li1.innerHTML = objeto.datosPropietario();
  li2.innerHTML = `El tipo de animal es un: ${objeto.tipo}, mientras que el nombre de la mascota es: ${objeto.nombreMascota} y la enfermedad es: ${objeto.enfermedad}`;

  ulResultado.appendChild(li1);
  ulResultado.appendChild(li2);
}

let agregando = (event) => {
  event.preventDefault();
  let propietario = document.getElementById('propietario').value;
  let telefono = document.getElementById('telefono').value;
  let residencia = document.getElementById('direccion').value;
  let nombreMascota = document.getElementById('nombreMascota').value;
  let tipo = document.getElementById('tipo').value;
  let enfermedad = document.getElementById('enfermedad').value;

  if (tipo == "perro") {
    let perro = new Mascota(propietario, residencia, telefono, tipo, nombreMascota, enfermedad);
    imprimirResultado(perro);
  } else if (tipo == "gato") {
    let gato = new Mascota(propietario, residencia, telefono, tipo, nombreMascota, enfermedad);
    imprimirResultado(gato);
  }
  //tipo=="conejo"
  else {
    let conejo = new Mascota(propietario, residencia, telefono, tipo, nombreMascota, enfermedad);
    imprimirResultado(conejo);
  }
}

let form = document.querySelector('form');
form.addEventListener('submit', agregando);