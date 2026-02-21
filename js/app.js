// Colores por tipo
const typeColors = {
  fire: "#F08030",
  water: "#6890F0",
  grass: "#78C850",
  electric: "#F8D030",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
  fairy: "#EE99AC",
  normal: "#A8A878"
};

async function getPokemon(name) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    if (!response.ok) throw new Error("Pokémon no encontrado");
    const data = await response.json();
    return data;
  } catch (error) {
    document.getElementById("pokemon-container").innerHTML = "<p>No se encontró el Pokémon.</p>";
  }
}

function renderPokemon(pokemon) {
  const container = document.getElementById("pokemon-container");
  const mainType = pokemon.types[0].type.name;
  const bgColor = typeColors[mainType] || "#333";

  container.style.background = bgColor;
  container.innerHTML = `
    <h2>${pokemon.name.toUpperCase()} (#${pokemon.id})</h2>
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <p><strong>Tipo:</strong> ${pokemon.types.map(t => t.type.name).join(", ")}</p>
    <p><strong>HP:</strong> ${pokemon.stats[0].base_stat}</p>
    <p><strong>Ataque:</strong> ${pokemon.stats[1].base_stat}</p>
    <p><strong>Defensa:</strong> ${pokemon.stats[2].base_stat}</p>
  `;
}

document.getElementById("search-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("search-input").value;
  const pokemon = await getPokemon(name);
  if (pokemon) renderPokemon(pokemon);
});




