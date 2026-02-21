async function fetchData(url) {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("No encontrado");
        return await response.json();
      } catch (error) {
        document.getElementById("pokemonCard").innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
        return null;
      }
    }

    async function searchPokemon() {
      const name = document.getElementById("pokemonName").value.toLowerCase();
      const data = await fetchData(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (data) {
        document.getElementById("pokemonCard").innerHTML = ` <h2>${data.name.toUpperCase()}</h2> <img src="${data.sprites.front_default}" alt="${data.name}"> <div class="info"> <p><strong>ID:</strong> ${data.id}</p> <p><strong>Altura:</strong> ${data.height}</p> <p><strong>Peso:</strong> ${data.weight}</p> <p><strong>Tipos:</strong> ${data.types.map(t => t.type.name).join(", ")}</p> <p><strong>Habilidades:</strong> ${data.abilities.map(a => a.ability.name).join(", ")}</p> </div> `;
      }
    }

