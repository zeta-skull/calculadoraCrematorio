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
            montoAhorrado = 70000;
        } else {
            totalFinal = 0;
            montoAhorrado = 50000;
        }
    } else if (pesoMascota === "menor2" && rsh === "hasta40menor65") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 15000;
            montoAhorrado = 55000;
        } else {
            totalFinal = 11500;
            montoAhorrado = 38500;
        }
    } else if (pesoMascota === "menor2" && rsh === "entre41y70") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 21000;
            montoAhorrado = 49000;
        } else {
            totalFinal = 16000;
            montoAhorrado = 34000;
        }
    } else if (pesoMascota === "menor2" && rsh === "desde71") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 30000;
            montoAhorrado = 40000;
        } else {
            totalFinal = 22500;
            montoAhorrado = 27500;
        }
    } else if (pesoMascota === "menor5" && rsh === "hasta40mayor65") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 0;
            montoAhorrado = 98000;
        } else {
            totalFinal = 0;
            montoAhorrado = 72000;
        }
    } else if (pesoMascota === "menor5" && rsh === "hasta40menor65") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 22500;
            montoAhorrado = 75500;
        } else {
            totalFinal = 17000;
            montoAhorrado = 55000;
        }
    } else if (pesoMascota === "menor5" && rsh === "entre41y70") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 31500;
            montoAhorrado = 66500;
        } else {
            totalFinal = 24000;
            montoAhorrado = 48000;
        }
    } else if (pesoMascota === "menor5" && rsh === "desde71") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 45000;
            montoAhorrado = 53000;
        } else {
            totalFinal = 34000;
            montoAhorrado = 38000;
        }
    } else if (pesoMascota === "sobre5" && rsh === "hasta40mayor65") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 0;
            montoAhorrado = 115000;
        } else {
            totalFinal = 0;
            montoAhorrado = 80000;
        }
    } else if (pesoMascota === "sobre5" && rsh === "hasta40menor65") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 26500;
            montoAhorrado = 88500;
        } else {
            totalFinal = 19000;
            montoAhorrado = 61000;
        }
    } else if (pesoMascota === "sobre5" && rsh === "entre41y70") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 37000;
            montoAhorrado = 78000;
        } else {
            totalFinal = 26500;
            montoAhorrado = 53500;
        }
    } else if (pesoMascota === "sobre5" && rsh === "desde71") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 52500;
            montoAhorrado = 62500;
        } else {
            totalFinal = 37500;
            montoAhorrado = 42500;
        }
    } else if (pesoMascota === "sobre30" && rsh === "hasta40mayor65") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 0;
            montoAhorrado = 120000;
        } else {
            totalFinal = 0;
            montoAhorrado = 96000;
        }
    } else if (pesoMascota === "sobre30" && rsh === "hasta40menor65") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 28500;
            montoAhorrado = 91500;
        } else {
            totalFinal = 22500;
            montoAhorrado = 73500;
        }
    } else if (pesoMascota === "sobre30" && rsh === "entre41y70") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 39500;
            montoAhorrado = 80500;
        } else {
            totalFinal = 31500;
            montoAhorrado = 64500;
        }
    } else if (pesoMascota === "sobre30" && rsh === "desde71") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 56500;
            montoAhorrado = 63500;
        } else {
            totalFinal = 45000;
            montoAhorrado = 51000;
        }
    } else if (pesoMascota === "sobre50" && rsh === "hasta40mayor65") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 0;
            montoAhorrado = 140000;
        } else {
            totalFinal = 0;
            montoAhorrado = 120000;
        }
    } else if (pesoMascota === "sobre50" && rsh === "hasta40menor65") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 32000;
            montoAhorrado = 108000;
        } else {
            totalFinal = 28500;
            montoAhorrado = 91500;
        }
    } else if (pesoMascota === "sobre50" && rsh === "entre41y70") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 45000;
            montoAhorrado = 95000;
        } else {
            totalFinal = 39500;
            montoAhorrado = 80500;
        }
    } else if (pesoMascota === "sobre50" && rsh === "desde71") {
        if (tipoServicio === "conCenizas") {
            totalFinal = 64000;
            montoAhorrado = 76000;
        } else {
            totalFinal = 56500;
            montoAhorrado = 63500;
        }
        function resetearPagina() {
            location.reload();
        }
    }

    // Mostrar resultados en los campos de texto correspondientes
    document.getElementById("totalFinal").value = `$ ${totalFinal}`;
    document.getElementById("montoAhorrado").value = `$ ${montoAhorrado}`;

 


}
