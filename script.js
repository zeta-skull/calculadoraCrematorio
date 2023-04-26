function calcularMonto() {
    const pesoMascota = document.getElementById("pesoMascota").value;
    const rsh = document.getElementById("rsh").value;
    const tipoServicio = document.getElementById("tipoServicio").value;
    const totalFinalInput = document.getElementById("totalFinal");
    const montoAhorradoInput = document.getElementById("montoAhorrado");
    let totalFinal = 0;
    let montoAhorrado = 0;
    if (pesoMascota === "menor2" && rsh === "hasta40mayor65") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 0;
            montoAhorrado = 70.000;
        } else {
            totalFinal = 0;
            montoAhorrado = 50.000;
        }
    } else if (pesoMascota === "menor2" && rsh === "hasta40menor65") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 15.000;
            montoAhorrado = 55.000;
        } else {
            totalFinal = 11.500;
            montoAhorrado = 38.500;
        }
    } else if (pesoMascota === "menor2" && rsh === "entre41y70") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 21.000;
            montoAhorrado = 49.000;
        } else {
            totalFinal = 16.000;
            montoAhorrado = 34.000;
        }
    } else if (pesoMascota === "menor2" && rsh === "desde71") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 30.000;
            montoAhorrado = 40.000;
        } else {
            totalFinal = 22.500;
            montoAhorrado = 27.500;
        }
    } else if (pesoMascota === "menor5" && rsh === "hasta40mayor65") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 0;
            montoAhorrado = 98.000;
        } else {
            totalFinal = 0;
            montoAhorrado = 72.000;
        }
    } else if (pesoMascota === "menor5" && rsh === "hasta40menor65") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 22.500;
            montoAhorrado = 75.500;
        } else {
            totalFinal = 17.000;
            montoAhorrado = 55.000;
        }
    } else if (pesoMascota === "menor5" && rsh === "entre41y70") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 31.500;
            montoAhorrado = 66.500;
        } else {
            totalFinal = 24.000;
            montoAhorrado = 48.000;
        }
    } else if (pesoMascota === "menor5" && rsh === "desde71") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 45.000;
            montoAhorrado = 53.000;
        } else {
            totalFinal = 34.000;
            montoAhorrado = 38.000;
        }
    } else if (pesoMascota === "sobre5" && rsh === "hasta40mayor65") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 0;
            montoAhorrado = 115.000;
        } else {
            totalFinal = 0;
            montoAhorrado = 80.000;
        }
    } else if (pesoMascota === "sobre5" && rsh === "hasta40menor65") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 26.500;
            montoAhorrado = 88.500;
        } else {
            totalFinal = 19.000;
            montoAhorrado = 61.000;
        }
    } else if (pesoMascota === "sobre5" && rsh === "entre41y70") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 37.000;
            montoAhorrado = 78.000;
        } else {
            totalFinal = 26.500;
            montoAhorrado = 53.500;
        }
    } else if (pesoMascota === "sobre5" && rsh === "desde71") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 52.500;
            montoAhorrado = 62.500;
        } else {
            totalFinal = 37.500;
            montoAhorrado = 42.500;
        }
    } else if (pesoMascota === "sobre30" && rsh === "hasta40mayor65") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 0;
            montoAhorrado = 120.000;
        } else {
            totalFinal = 0;
            montoAhorrado = 96.000;
        }
    } else if (pesoMascota === "sobre30" && rsh === "hasta40menor65") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 28.500;
            montoAhorrado = 91.500;
        } else {
            totalFinal = 22.500;
            montoAhorrado = 73.500;
        }
    } else if (pesoMascota === "sobre30" && rsh === "entre41y70") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 39.500;
            montoAhorrado = 80.500;
        } else {
            totalFinal = 31.500;
            montoAhorrado = 64.500;
        }
    } else if (pesoMascota === "sobre30" && rsh === "desde71") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 56.500;
            montoAhorrado = 63.500;
        } else {
            totalFinal = 45.000;
            montoAhorrado = 51.000;
        }
    } else if (pesoMascota === "sobre50" && rsh === "hasta40mayor65") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 0;
            montoAhorrado = 140.000;
        } else {
            totalFinal = 0;
            montoAhorrado = 120.000;
        }
    } else if (pesoMascota === "sobre50" && rsh === "hasta40menor65") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 32.000;
            montoAhorrado = 108.000;
        } else {
            totalFinal = 28.500;
            montoAhorrado = 91.500;
        }
    } else if (pesoMascota === "sobre50" && rsh === "entre41y70") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 45.000;
            montoAhorrado = 95.000;
        } else {
            totalFinal = 39.500;
            montoAhorrado = 80.500;
        }
    } else if (pesoMascota === "sobre50" && rsh === "desde71") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 64.000;
            montoAhorrado = 76.000;
        } else {
            totalFinal = 56.500;
            montoAhorrado = 63.500;
        }
        function resetearPagina() {
            location.reload();
        }
    }

    // Mostrar resultados en los campos de texto correspondientes
    document.getElementById("totalFinal").value = `$ ${totalFinal}`;
    document.getElementById("montoAhorrado").value = `$ ${montoAhorrado}`;

 


}
