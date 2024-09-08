// Obtener los elementos del DOM
const tipoResiduoSelect = document.getElementById('tipo-residuo');
const subcategoriaResiduoSelect = document.getElementById('subcategoria-residuo');
const subcategoriaResiduoDiv = document.querySelector('.subcategoria-residuo');

// Agregar opciones a la subcategoría dependiendo del tipo de residuo seleccionado
tipoResiduoSelect.addEventListener('change', (e) => {
const tipoResiduo = e.target.value;
const opciones = {
    plastico: [
    { value: 'botellas', text: 'Botellas' },
    { value: 'envases', text: 'Envases' },
    { value: 'bolsas', text: 'Bolsas' },
    ],
    papel: [
    { value: 'periodicos', text: 'Periódicos' },
    { value: 'carton', text: 'Cartón' },
    { value: 'papel-oficina', text: 'Papel de oficina' },
    ],
    vidrio: [
    { value: 'botellas', text: 'Botellas' },
    { value: 'frascos', text: 'Frascos' },
    { value: 'cristaleria', text: 'Cristalería' },
    ],
    metales: [
    { value: 'latas', text: 'Latas' },
    { value: 'cables', text: 'Cables' },
    { value: 'electrodomesticos-pequenos', text: 'Electrodomésticos pequeños' },
    ],
    electronicos: [
    { value: 'telefonos-moviles', text: 'Teléfonos móviles' },
    { value: 'baterias', text: 'Baterías' },
    { value: 'componentes-computadoras', text: 'Componentes de computadoras' },
    ],
};

  // Limpiar opciones anteriores
subcategoriaResiduoSelect.innerHTML = '';

  // Agregar opciones nuevas
opciones[tipoResiduo].forEach((opcion) => {
    const option = document.createElement('option');
    option.value = opcion.value;
    option.text = opcion.text;
    subcategoriaResiduoSelect.appendChild(option);
});

  // Mostrar o ocultar la subcategoría dependiendo del tipo de residuo seleccionado
if (tipoResiduo) {
    subcategoriaResiduoDiv.style.display = 'block';
} else {
    subcategoriaResiduoDiv.style.display = 'none';
}
});