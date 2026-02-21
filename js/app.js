async function searchPokemon() {
  const name = document.getElementById("pokemonName").value.toLowerCase();
  const card = document.getElementById("pokemonCard");

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!response.ok) throw new Error("Pokémon no encontrado");
    const data = await response.json();

    card.innerHTML = `
      <h2>${data.name.toUpperCase()}</h2>
      <img src="${data.sprites.front_default}" alt="${data.name}">
      <p><strong>Altura:</strong> ${data.height}</p>
      <p><strong>Peso:</strong> ${data.weight}</p>
      <p><strong>Habilidades:</strong> ${data.abilities.map(a => a.ability.name).join(", ")}</p>
    `;
  } catch (error) {
    card.innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
