"use server";

const apiKey = process.env.POKEMON_TCG_API_KEY;

export const fetchSetById = async (setId) => {
  try {
    const setResponse = await fetch(
      `https://api.pokemontcg.io/v2/sets/${setId}`,
      {
        headers: {
          "X-Api-Key": apiKey,
        },
      }
    );

    if (!setResponse.ok) {
      throw new Error("Failed to fetch the Pokémon TCG set");
    }

    const setData = await setResponse.json();
    return setData.data;
  } catch (error) {
    console.error("Error fetching set:", error);
    throw error;
  }
};

export const fetchCards = async (setId, subtype) => {
  console.log(subtype);
  try {
    // Construct the base query string
    let query = `q=set.id:"${setId}"`;

    if (subtype && subtype.toLowerCase() !== "all") {
      // Convert to lowercase and replace spaces with '+' for API format
      const formattedSubtype = subtype.toLowerCase().replace(/ /g, "+");
      query += `+subtypes:"${formattedSubtype}"`;
    }

    const cardsResponse = await fetch(
      `https://api.pokemontcg.io/v2/cards?${query}&page=1&pageSize=250`,
      {
        headers: {
          "X-Api-Key": apiKey,
        },
      }
    );

    if (!cardsResponse.ok) {
      throw new Error("Failed to fetch cards for the set");
    }

    const cardsData = await cardsResponse.json();
    return cardsData.data;
  } catch (error) {
    console.error("Error fetching cards:", error);
    throw error;
  }
};

export const fetchUniqueSupertypes = async (setId) => {
  try {
    const cardsResponse = await fetch(
      `https://api.pokemontcg.io/v2/cards?q=set.id:%22${setId}%22&page=1&pageSize=250`,
      {
        headers: {
          "X-Api-Key": apiKey,
        },
      }
    );

    if (!cardsResponse.ok) {
      throw new Error("Failed to fetch cards for the set");
    }

    const cardsData = await cardsResponse.json();

    // Extract unique supertypes from the cards and return as an array
    return [...new Set(cardsData.data.map((card) => card.supertype))];
  } catch (error) {
    console.error("Error fetching unique supertypes:", error);
    throw error;
  }
};

export const fetchUniqueSubtypes = async (setId) => {
  try {
    const cardsResponse = await fetch(
      `https://api.pokemontcg.io/v2/cards?q=set.id:%22${setId}%22&page=1&pageSize=250`,
      {
        headers: {
          "X-Api-Key": apiKey,
        },
      }
    );

    if (!cardsResponse.ok) {
      throw new Error("Failed to fetch cards for the set");
    }

    const cardsData = await cardsResponse.json();

    // Extract unique subtypes from the cards and return as an array
    const subtypes = cardsData.data.flatMap((card) => card.subtypes || []);
    return [...new Set(subtypes)];
  } catch (error) {
    console.error("Error fetching unique subtypes:", error);
    throw error;
  }
};
