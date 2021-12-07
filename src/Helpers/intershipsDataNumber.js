const cantidadPasantias = (interships) => {
	return interships.length;
};

const cantidadtotal = (interships) => {
    return interships.map((intership) => {
		return intership.solictudesRespustas.length;
	});
};

const cantidadTotalPorPasantia = (interships) => {
    let total = 0;
    interships.map((intership) => {
		total += intership.solictudesRespustas.length;
	});

    return total;
};

const cantidadTotalPasantiaNombre = (interships) => {
    return interships.map((intership) => {
		return intership.Titulo;
	});

   
};

export { cantidadPasantias, cantidadtotal, cantidadTotalPorPasantia, cantidadTotalPasantiaNombre };
