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

export const fetchCards = async (setId, subtype, rarity, type, sort, order) => {
  try {
    // Construct the base query string
    let query = `q=set.id:"${setId}"`;

    if (subtype && subtype.toLowerCase() !== "all") {
      const formattedSubtype = subtype.toLowerCase().replace(/ /g, "+");
      query += `+subtypes:"${formattedSubtype}"`;
    }

    if (rarity && rarity.toLowerCase() !== "all") {
      const formattedRarity = rarity.toLowerCase().replace(/ /g, "+");
      query += `+rarity:"${formattedRarity}"`;
    }

    if (type && type.toLowerCase() !== "all") {
      const formattedType = type.toLowerCase().replace(/ /g, "+");
      query += `+types:"${formattedType}"`;
    }

    // Add sorting parameters
    if (sort && sort !== "none") {
      let orderBy = "";
      if (sort === "price") {
        orderBy = "tcgplayer.prices.holofoil.market";
      } else if (sort === "rarity") {
        orderBy = "rarity";
      }

      if (orderBy) {
        query += `&orderBy=${orderBy}:${order}`;
      }
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

    // If sorting by rarity and the API doesn't support it, we need to sort manually
    if (sort === "rarity") {
      const rarityOrder = [
        "Common",
        "Uncommon",
        "Rare",
        "Rare Holo",
        "Rare Holo EX",
        "Rare Ultra",
        "Rare Secret",
      ];

      cardsData.data.sort((a, b) => {
        const aIndex = rarityOrder.indexOf(a.rarity);
        const bIndex = rarityOrder.indexOf(b.rarity);
        return order === "asc" ? aIndex - bIndex : bIndex - aIndex;
      });
    }

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

export const fetchUniqueRarities = async (setId) => {
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

    // Extract unique rarities from the cards and return as an array
    const rarities = cardsData.data.map((card) => card.rarity);
    return [...new Set(rarities)]; // Return unique rarities
  } catch (error) {
    console.error("Error fetching unique rarities:", error);
    throw error;
  }
};

export const fetchUniqueTypes = async (setId) => {
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

    // Extract types from the cards
    const types = cardsData.data.flatMap((card) => card.types || []);

    // Return unique types
    return [...new Set(types)]; // Remove duplicates and return
  } catch (error) {
    console.error("Error fetching unique types:", error);
    throw error;
  }
};
