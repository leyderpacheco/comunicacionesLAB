//Frecuencia de Marca
function getfMarca(frecuencia, sensibilidad) {
    return frecuencia-sensibilidad
}

//Frecuencia de Espacio
function getfEspacio(frecuencia, sensibilidad) {
    return frecuencia+sensibilidad
}

//Funcion que retorna tb
function getTiempoBit(Fb) {
    operacion=1/Fb;
    return operacion;
}

//Funcion que retorna el ancho de manda minimo para ASK y BPSK
function getAnchoBandaMinimoASK_BPSK(Fb) {
    return Fb;
}

//Funcion que retorna el ancho de manda minimo para FSK
function getAnchoBandaMinimoFSK(Fb,des) {
    B=2*(Fb+des)
    return B;
}

//Funcion que retorna el ancho de manda minimo para QPSK
function getAnchoBandaMinimoQPSK(Fb) {
    B=Fb/2
    return B;
}

// ==== Cálculos uniformes, los siguientes cálculos semntienen para los 4 tipos de modulación ====

//Funcion que retorna la Desviación máxima de frecuencia
function getDesviacion(sensibilidad, amplitud) {
    return sensibilidad*amplitud
}
//Funcion que retorna el Indice de Modulación
function getIndiceMod(fMarca, fEspacio, bit) {
    return Math.abs((fMarca - fEspacio)/bit)
}

