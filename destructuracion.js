let input = document.getElementById("pokemonId");
let btnBuscar = document.getElementById("btnBuscar");


btnBuscar.addEventListener("click", function(){
    let id = input.value;

    // Mostrar la animación de carga
    document.getElementById("loader").style.display = "block";
    document.getElementById("loader").style.position = "absolute";

    fetch('https://pokeapi.co/api/v2/pokemon/'+id)
    .then(response => response.json())
    .then(json => {
      const pokemonUrl = json.sprites.other["official-artwork"].front_default;
      const img = document.getElementById("pokemon");
      const nombre = document.getElementById("nombre");
      const habilidades = document.getElementById("poder");
      let poder = `<ul>`;
      
        
      for(let i = 0 ; i< json.abilities.length ; i++){
        poder += `<li>${json.abilities[i].ability.name}</li>`
      }
      poder += `</ul>`;
      habilidades.innerHTML = poder;
      img.src = pokemonUrl;
      img.alt = "Pikachu";
      nombre.innerHTML = json.name;
      // Verificar si la imagen se ha cargado completamente
      img.onload = function() {
        // Ocultar la animación de carga una vez que la imagen se haya cargado
        document.getElementById("loader").style.display = "none";
        document.getElementById("loader").style.position = "none";
      };
    })
})




