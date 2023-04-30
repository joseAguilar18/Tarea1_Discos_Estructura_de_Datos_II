/* Calculo de la direccion fisica de un bloque*/ 
const calcularNumeroDeBloque = document.querySelector('#block-number-button');

calcularNumeroDeBloque.addEventListener('click', () => {
    const i = document.querySelector('#cilindroP').value;
    const j = document.querySelector('#pistaP').value;
    const k = document.querySelector('#sectorP').value;
    const p = document.querySelector('#pista-cil').value;
    const s = document.querySelector('#sector-pista').value;

    
    const numeroDeBloque = (i*p*s) + (j*s) + parseInt(k);

    const respuestaDirFisica = document.querySelector('#block-number-result');
    respuestaDirFisica.innerText = numeroDeBloque;
});


/* Calculo de la direccion fisica de un bloque x*/
const calcularDireccionFisica = document.querySelector('#physical-direction-button')

calcularDireccionFisica.addEventListener('click', () => {
    const dirFisica = document.querySelector('#dir-fisica').value;    
    const p = document.querySelector('#pista-cil-F').value;
    const s = document.querySelector('#sector-pista-F').value;

    const i = parseInt(dirFisica/(p*s));
    const r = dirFisica % (p*s);
    const j = parseInt(r/s);
    const k = r % s;

    const direccionFisica = document.querySelector('#physical-direction-result');
    direccionFisica.innerText = `(${i}, ${j}, ${k})`;

});