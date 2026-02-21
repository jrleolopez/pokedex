// Obtener detalles de un Pokémon por nombre
async function getPokemonDetails(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();
  console.log("Detalles:", data);
  return data;
}

// Obtener habilidades de un Pokémon específico
async function getPokemonAbilities(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();
  console.log("Habilidades:", data.abilities.map(a => a.ability.name));
  return data.abilities;
}

// Obtener información sobre un tipo específico de Pokémon
async function getPokemonType(type) {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  const data = await response.json();
  console.log("Tipo:", data);
  return data;
}

// Obtener una lista de los primeros 50 Pokémon
async function getFirst50Pokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
  const data = await response.json();
  console.log("Primeros 50 Pokémon:", data.results);
  return data.results;
}

// Ejemplo de uso
getPokemonDetails("pikachu");
getPokemonAbilities("charizard");
getPokemonType("water");
getFirst50Pokemon();