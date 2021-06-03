document.oncontextmenu = function(){return false;}
$(document).ready(function(){
    $("#data-in").css("display", "none");
    $("#resultados").css("display", "none");
    $(".hide").css("display", "none");
})
// Captura de inputs
$("#btn-calcular").click(function() {
    window.location.href='#AA';
    const amplitud = parseFloat($("#amplitud").val())
    const frecuencia = parseFloat($("#fc").val())
    const ascii = ($("#asc").val())
    const bit = parseFloat($("#bit").val())
    const sensibilidad = parseFloat($("#sens").val())
    if (amplitud && frecuencia && ascii && bit && sensibilidad) {
        //Impresion de los datos ingresados
        $(".hide").css("display", "block");
        $(".hide").css("display", "block");
        $("#in-data").css("display", "none");
        $("#data-in").css("display", "flex");
        $("#data-in").append("<div class='ui segment' align='center' style='width:150px; height:50px;'><b>Frecuencia:</b>" + amplitud + " V</div>")
        $("#data-in").append("<div class = 'ui segment' align='center' style='width:150px height:50px;'><b>Frecuencia:</b>  " + frecuencia + " Hz</div>")
        $("#data-in").append("<div class = 'ui segment' align='center' style='width:150px height:50px;'><b>Caracter ASCII:</b> " + ascii + "</div>")
        $("#data-in").append("<div class = 'ui segment' align='center' style='width:150px height:50px;'><b>Frecuencia de bit:</b> " + bit + " Hz</div>")
        $("#data-in").append("<div class = 'ui segment' align='center' style='width:150px height:50px;'><b>Sensibilidad:</b> " + sensibilidad + " Hz</div>")
        $("#resultados").css("display", "block");
        // Cálculos uniformes
        let desviacion = getDesviacion(sensibilidad, amplitud)
        $("#desviacion").append("<i>Δf = </i> " + desviacion + " Hz")
        //Sesinsibilidad es un input
        $("#sensibilidad").append("<i>K = </i>" + sensibilidad + " Hz")
        let marca = getfMarca(frecuencia, sensibilidad)
        $("#marca").append("<i>Fm = </i>"+ marca + " Hz")
        let espacio = getfEspacio(frecuencia, sensibilidad)
        $("#espacio").append("<i>Fs = </i>" + espacio + " Hz")
        let indice  = getIndiceMod(marca,espacio,bit)
        $("#indice").append("<i>m = </i>" + indice)
        let timepoBit = getTiempoBit(bit);
        $("#tiempoBit").append("<i>t = </i>" + timepoBit+" s")
        $("#BASK").append("<i>B = </i>" + bit+" Hz")
        $("#BBPSK").append("<i>B = </i>" + bit+" Hz")
        let B_FSk= getAnchoBandaMinimoFSK(bit,desviacion);
        $("#BFSK").append("<i>B = </i>" + B_FSk+" Hz")
        let B_QPSK=getAnchoBandaMinimoQPSK(bit);
        $("#BQPSK").append("<i>B = </i>" + B_QPSK+" Hz")
        // Gráficas
        console.log(timepoBit)
        pintarGraficaAscci(ascii,timepoBit)
        pintarGraficaPortadora(amplitud, frecuencia)
        pintarEspectroFrecuencias(indice, amplitud)
        pintarGraficaSeñalModuladaASK(ascii,amplitud,frecuencia,timepoBit)
        pintarGraficaSeñalModuladaFSK(ascii,timepoBit,amplitud,frecuencia,desviacion)
        pintarGraficaSeñalModuladaBPSK(ascii,timepoBit,frecuencia)
        pintarGraficaSeñalModuladaQPSK(ascii,frecuencia,bit)
        pintarDiagramaConstelacionQPSK(ascii,timepoBit)
        pintarDiagramaConstelacionBPSK(ascii,timepoBit)
        $("#btn-new").css("display", "block");
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Parece que no has rellenado todos los campos',
          })
    }
})

//Actauliza la página
$("#btn-new").click(function () {
    location.reload()
})
