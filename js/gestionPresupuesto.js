'use strict';
// TODO: Crear las funciones, objetos y variables indicadas en el enunciado

// TODO: Variable global
let presupuesto = 0;
let gastos = [];
let idGasto = 0;

function actualizarPresupuesto(valor) {
    // TODO
    if(typeof valor === "number" && valor >= 0)
    {
        presupuesto = valor;
    }
    else
    {
        console.log("Error: el presupuesto debe ser un número negativo");
        valor = -1
    }
    return valor;
}

function mostrarPresupuesto() {
    // TODO
    return `Tu presupuesto actual es de ${presupuesto} €`;
}

function CrearGasto(descripcion, valor) {
    // TODO
    this.descripcion = descripcion;
    if (typeof valor === "number" && valor > 0)
    {
        this.valor = valor;
    }
    else
    {
        this.valor = 0;
    }

    if (typeof fecha === "string" && !isNaN(Date.parse(fecha)))
    {
        this.fecha = Date.parse(fecha);
    }
    else
    {
        this.fecha = Date.now();
    }

    this.etiquetas = [];

    this.mostrarGasto = function()
    {
        return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`;
    }

    this.actualizarDescripcion = function(nuevaDescripcion)
    {
        this.descripcion = nuevaDescripcion;
    }
    
    this.actualizarValor = function(nuevoValor)
    {
        if (typeof nuevoValor === "number" && nuevoValor > 0)
            {
                this.valor = nuevoValor;
            }
    }
}

function listarGastos(){
    return gastos;
}

function anyadirGasto(gasto){
    gasto.id = idGasto;
    idGasto++;
    gastos.push(gasto)
}

function borrarGasto(){
    let indice = gastos.findIndex(gasto => gasto.id === id);
    if (indice !== -1)
    {
        gastos.splice(indice, 1);
    }
}

function calcularTotalGastos(){
    let suma = 0
    for(let gasto of gastos){
        suma += gasto.valor;
    }
    return suma;
}

function calcularBalance(){

}
// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance
}