
//Grafica de diagrama de pulzos de assci
function pintarGraficaAscci(cod,tb) {
    var save = datosGraficaAscci(cod,tb);
    var traceHVH = {
        x: save[1].ejeX,
        y: save[0].binario,
        type: 'scatter',
        name: 'HVH Shape',
        line: {
            shape: 'hvh',
            color: 'rgb(98, 255, 177)',
            width: 5,
        }
    };
    var data = [traceHVH];
    var layout = {
        title: 'Diagrama de Pulsos del codigo ASSCI',
        xaxis: {
            title: 'Tiempo[s]',
            titlefont: {
                color: 'black',
                size: 12
            },
            rangemode: 'tozero'
        },
        yaxis: {
            title: 'Amplitud[V]',
            titlefont: {
                color: 'black',
                size: 12
            }
        }
    };

    Plotly.plot("graficaAssci", data, layout);

}

//Grafica de la portadora
function pintarGraficaPortadora(vp, fp) {
    var save = traerValores(2, vp, fp, null, null);

    var datos = {
        x: save[0].x,
        y: save[1].y,
        mode: 'lines'
    };
    var data = [datos];
    var layout = {
        title: 'Señal Portadora',
        xaxis: {
            title: 'Tiempo [seg]',
            titlefont: {
                color: 'black',
                size: 12
            },
            rangemode: 'tozero'
        },
        yaxis: {
            title: 'Vc [V]',
            titlefont: {
                color: 'black',
                size: 12
            }
        }
    };
    Plotly.newPlot('graficaPortadora', data, layout);
}



// Recibe el indice de m y la apmlitu de la portadora
function pintarEspectroFrecuencias(m, vp) {
    var datos=datosEspectroFrecuencias(m,vp);
    var trace1 = {
        type: 'bar',
        x: datos[0].datax,
        y: datos[1].datay,
        marker: {
            color: datos[2].coloresFm,
            line: {
                width: 2
            }
        }
    };

    var data = [trace1];

    var layout = {
        title: 'Espectro de frecuencias de las bandas laterales',
        font: { size: 12 },
        xaxis: {
            title: 'Frecuencia [Hz]',
            titlefont: {
                color: 'black',
                size: 12
            },
            rangemode: 'tozero'
        },
        yaxis: {
            title: 'Potencia [W]',
            titlefont: {
                color: 'black',
                size: 12
            }
        }
    };

    var config = { responsive: true }

    Plotly.newPlot('espectroFrecuencias', data, layout, config);

}


function pintarGraficaSeñalModuladaASK(cod,Ap,fp,tb) {
    var save = traerdatosASK(cod,tb,Ap,fp)

    var datos = {
        x: save[0].x,
        y: save[1].y,
        mode: 'lines'
    };
    var data = [datos];
    var layout = {
        title: 'Señal Modulada en ASK',
        xaxis: {
            title: 'Tiempo [s]',
            titlefont: {
                color: 'black',
                size: 12
            },
            rangemode: 'tozero'
        },
        yaxis: {
            title: 'Vc [V]',
            titlefont: {
                color: 'black',
                size: 12
            }
        }
    };
    Plotly.newPlot('graficaModuladaASK', data, layout);
}

function pintarGraficaSeñalModuladaFSK(cod,tb,Ap,fp,desviacion) {
    var save = traerdatosFSK(cod,tb,Ap,fp,desviacion)
    var datos = {
        x: save[0].x,
        y: save[1].y,
        mode: 'lines'
    };
    var data = [datos];
    var layout = {
        title: 'Señal Modulada en FSK',
        xaxis: {
            title: 'Tiempo [s]',
            titlefont: {
                color: 'black',
                size: 12
            },
            rangemode: 'tozero'
        },
        yaxis: {
            title: 'Vc [V]',
            titlefont: {
                color: 'black',
                size: 12
            }
        }
    };
    Plotly.newPlot('graficaModuladaFSK', data, layout);
}

function pintarGraficaSeñalModuladaBPSK(cod,tb,fp) {
    var save = traerdatosBPSK(cod,tb,fp)
    var datos = {
        x: save[0].x,
        y: save[1].y,
        mode: 'lines'
    };
    var data = [datos];
    var layout = {
        title: 'Señal Modulada en BPSK',
        xaxis: {
            title: 'Tiempo [s]',
            titlefont: {
                color: 'black',
                size: 12
            },
            rangemode: 'tozero'
        },
        yaxis: {
            title: 'Vc [V]',
            titlefont: {
                color: 'black',
                size: 12
            }
        }
    };
    Plotly.newPlot('graficaModuladaBPSK', data, layout);
}

function pintarGraficaSeñalModuladaQPSK(cod,fp,fb) {
    var save = traerdatosQPSK(cod,fp,getTiempoBit(fb))
    var datos = {
        x: save[0].x,
        y: save[1].y,
        mode: 'lines'
    };
    var data = [datos];
    var layout = {
        title: 'Señal Modulada en QPSK',
        xaxis: {
            title: 'Tiempo [s]',
            titlefont: {
                color: 'black',
                size: 12
            },
            rangemode: 'tozero'
        },
        yaxis: {
            title: 'Vc [V]',
            titlefont: {
                color: 'black',
                size: 12
            }
        }
    };
    Plotly.newPlot('graficaModuladaQPSK', data, layout);
}

function pintarDiagramaConstelacionBPSK(cod,tb) {
    var save= datosASK(cod,tb);
    var vu=[];
    var vc=[];
    
    for (let i = 0; i < save.length; i++) {
        if (save[i]==1) {
          vu.push(1)  
        }else{
            vc.push(-1)
        }
    }
    var trace1 = {
        x: vu,
        y: [0,0,0,0,0,0,0,0],
        mode: 'markers',
        type: 'scatter',
        name: '-sen(wc*t)',
        text: ['180°','180°','180°','180°','180°','180°','180°','180°'],
        marker: { size: 12 }
      };
      
      var trace2 = {
        x: vc,
        y: [0,0,0,0,0,0,0,0],
        mode: 'markers',
        type: 'scatter',
        name: 'sen(wc*t)',
        text: ['0°','0°','0°','0°','0°','0°','0°','0°'],
        marker: { size: 12 }
      };
      
      var data = [ trace1,trace2];
      
      var layout = {
        title:'Diagrama de Constelación BPSK'
      };
      
      Plotly.newPlot('constBPSK', data, layout);
}

function pintarDiagramaConstelacionQPSK(cod,tb) {
    var save= datosASK(cod,tb);
    var vpos=[{x:null,y:null}];
    var vneg=[{x:null,y:null}];
    var vposneg=[{x:null,y:null}];
    var vnegpos=[{x:null,y:null}];
    console.log(save)
    for (let i = 0; i < save.length-1; i++) {
        if (save[i]==-1 && save[i+1]==-1) {
            vneg[0]={x:-1,y:-1}
        } else if(save[i]==-1 && save[i+1]==1){
            vnegpos[0]={x:1,y:-1}
        }else if (save[i]==1 && save[i+1]==-1) {
            vposneg[0]={x:-1,y:1}
        }else{
            vpos[0]={x:1,y:1}
        }
        i++;
    }
    console.log(vneg[0].x)
    var trace1 = {
        x: [vneg[0].x],
        y: [vneg[0].y],
        mode: 'markers',
        type: 'scatter',
        name: 'sen(wc*t-135°)',
        text: ['00'],
        marker: { size: 12 }
      };
      
      var trace2 = {
        x: [vpos[0].x],
        y: [vpos[0].y],
        mode: 'markers',
        type: 'scatter',
        name: 'sen(wc*t+45°)',
        text: ['11'],
        marker: { size: 12 }
      };

      var trace3 = {
        x: [vposneg[0].x],
        y: [vposneg[0].y],
        mode: 'markers',
        type: 'scatter',
        name: 'sen(wc*t+135°)',
        text: ['10'],
        marker: { size: 12 }
      };

      var trace4 = {
        x: [vnegpos[0].x],
        y: [vnegpos[0].y],
        mode: 'markers',
        type: 'scatter',
        name: 'sen(wc*t-45°)',
        text: ['01'],
        marker: { size: 12 }
      };
      
      var data = [ trace1,trace2,trace3,trace4];
      
      var layout = {
        title:'Diagrama de Constelación QPSK'
      };
      
      Plotly.newPlot('constQPSK', data, layout);
}