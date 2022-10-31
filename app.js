const cargarSpot = async()=>{
	const respuesta = await fetch ('https://www.windguru.cz/int/wgsapi.php?uid=&password=petes&q=station_data_current');
	console.log(respuesta);

	const datos = await respuesta.json();
	console.log(datos);
}

cargarSpot ();