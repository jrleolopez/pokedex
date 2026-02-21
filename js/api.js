// Función base para obtener datos de un endpoint
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error en la petición:", error.message);
    return null;
  }
}

// Obtener detalles de un Pokémon por nombre
async function getPokemonDetails(name) {
  const data = await fetchData(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (data) {
    console.log("Detalles:", {
      id: data.id,
      nombre: data.name,
      altura: data.height,
      peso: data.weight,
      tipos: data.types.map(t => t.type.name)
    });
  }
  return data;
}

// Obtener habilidades de un Pokémon específico
async function getPokemonAbilities(name) {
  const data = await fetchData(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (data) {
    const abilities = data.abilities.map(a => a.ability.name);
    console.log("Habilidades:", abilities);
    return abilities;
  }
  return [];
}

// Obtener información sobre un tipo específico de Pokémon
async function getPokemonType(type) {
  const data = await fetchData(`https://pokeapi.co/api/v2/type/${type}`);
  if (data) {
    console.log("Tipo:", {
      nombre: data.name,
      pokemons: data.pokemon.slice(0, 10).map(p => p.pokemon.name) // primeros 10
    });
  }
  return data;
}

// Obtener una lista de los primeros 50 Pokémon
async function getFirst50Pokemon() {
  const data = await fetchData("https://pokeapi.co/api/v2/pokemon?limit=50");
  if (data) {
    console.log("Primeros 50 Pokémon:", data.results.map(p => p.name));
    return data.results;
  }
  return [];
}

// Ejemplo de uso
getPokemonDetails("pikachu");
getPokemonAbilities("charizard");
getPokemonType("water");
getFirst50Pokemon();
