class Inventario {
    constructor() {
        this.primero = null;
    }

    agregar(nuevo) {
        if (this.primero == null)
            this.primero = nuevo;
        else {
            let temp = this.primero;
            while (temp.next != null)
                temp = temp.next;
            temp.next = nuevo;
        }
        return this.primero
    }

    listar() {
        let res = "";
        let temp = this.primero;
        while (temp != null) {
            res += temp.nombre + "  ";
            temp = temp.next;
        }
        return res;
    }

    listarInverso() {
            if (this.primero == null) {
                return "";
            } else {
                return this.recListar(this.primero)
            }
        }
        /*Al probar el primer if me dice que no puede leer la propiedad .next de un null, ¿como podria poner esa condicion?*/
    recListar(nodoX) {
        if (nodoX.next == null) {
            return `${nodoX.nombre}`
        } else {
            return this.recListar(nodoX.next) + "  " + nodoX.nombre;
        }
    }

}

class Nodo {
    constructor(numero) {
        this.numero = numero;
        this.next = null;
    }
}

class Producto {
    constructor(codigo, nombre, cantidad, costo) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
    }
}



let i = new Inventario();
let p1 = new Producto(123, "teclado", 4, 200);
let p2 = new Producto(132, "mouse", 6, 50);
let p3 = new Producto(222, "Lapiz", 10, 5);
let p4 = new Producto(333, "Borrador", 15, 4);

i.agregar(p1)
i.agregar(p2)
i.agregar(p3)
i.agregar(p4)
console.log(i.listarInverso())