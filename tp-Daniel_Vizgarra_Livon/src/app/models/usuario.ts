export class Usuario {
    nombre: string;
    clave: number;
  
    constructor(nombre: string, clave: number) {
      this.nombre = nombre;
      this.clave = clave;
    }

    validarCredenciales(nombre: string, clave: number): boolean {
        return this.nombre === nombre && this.clave === clave;
    }
  }