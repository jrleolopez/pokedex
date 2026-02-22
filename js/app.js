// Colores por tipo
const typeColors = {
  fire: "rgba(240, 128, 48, 0.7)",   
  water: "rgba(104, 144, 240, 0.7)",
  grass: "rgba(120, 200, 80, 0.7)",
  electric: "rgba(248, 208, 48, 0.7)",
  ice: "rgba(152, 216, 216, 0.7)",
  fighting: "rgba(192, 48, 40, 0.7)",
  poison: "rgba(160, 64, 160, 0.7)",
  ground: "rgba(224, 192, 104, 0.7)",
  flying: "rgba(168, 144, 240, 0.7)",
  psychic: "rgba(248, 88, 136, 0.7)",
  bug: "rgba(168, 184, 32, 0.7)",
  rock: "rgba(184, 160, 56, 0.7)",
  ghost: "rgba(112, 88, 152, 0.7)",
  dragon: "rgba(112, 56, 248, 0.7)",
  dark: "rgba(112, 88, 72, 0.7)",
  steel: "rgba(184, 184, 208, 0.7)",
  fairy: "rgba(238, 153, 172, 0.7)",
  normal: "rgba(168, 168, 120, 0.7)"
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






