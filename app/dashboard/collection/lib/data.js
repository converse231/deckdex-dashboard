"use server";

export const fetchPokemonSets = async (order = "latest") => {
  const apiKey = process.env.POKEMON_TCG_API_KEY; // Make sure your API key is stored in environment variables

  // Dynamically set the order based on the argument. 'latest' means descending by release date, 'oldest' means ascending.
  const orderBy = order === "latest" ? "-releaseDate" : "releaseDate";

  const url = `https://api.pokemontcg.io/v2/sets?orderBy=${orderBy}`;

  try {
    const response = await fetch(url, {
      headers: {
        "X-Api-Key": apiKey, // Include your API key
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from Pokémon TCG API");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching sets:", error);
    throw error;
  }
};
