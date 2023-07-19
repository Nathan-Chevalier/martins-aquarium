const database = {
  fish: [
    {
      name: "Neon Tetra",
      food: "Tropical flakes, small live/frozen foods",
      length: 1.5,
      species: "Paracheirodon innesi",
      location: "South America",
      image: "",
    },
    {
      name: "Guppy",
      food: "Flakes, freeze-dried, live/frozen foods",
      length: 2,
      species: "Poecilia reticulata",
      location: "South America",
      image: "",
    },
    {
      name: "Molly",
      food: "Flakes, vegetable matter, live/frozen foods",
      length: 3,
      species: "Poecilia sphenops",
      location: "Central and South America",
      image: "",
    },
    {
      name: "Platy",
      food: "Flakes, vegetable matter, live/frozen foods",
      length: 2.5,
      species: "Xiphophorus maculatus",
      location: "Central America",
      image: "",
    },
    {
      name: "Swordtail",
      food: "Flakes, live/frozen foods, vegetable matter",
      length: 4,
      species: "Xiphophorus hellerii",
      location: "Central America",
      image: "",
    },
    {
      name: "Angelfish",
      food: "Flakes, live/frozen foods, small invertebrates",
      length: 6,
      species: "Pterophyllum scalare",
      location: "South America",
      image: "",
    },
    {
      name: "Dwarf Gourami",
      food: "Flakes, live/frozen foods, small invertebrates",
      length: 3,
      species: "Trichogaster lalius",
      location: "South Asia",
      image: "",
    },
    {
      name: "Betta Fish",
      food: "Pellets, live/frozen foods, small invertebrates",
      length: 3,
      species: "Betta splendens",
      location: "Southeast Asia",
      image: "",
    },
    {
      name: "Corydoras Catfish",
      food: "Sinking pellets, live/frozen foods",
      length: 2.5,
      species: "Corydoras sp.",
      location: "South America",
      image: "",
    },
    {
      name: "Dalmatian Molly",
      food: "Flakes, vegetable matter, live/frozen foods",
      length: 4,
      species: "Poecilia sphenops",
      location: "Central America",
      image: "",
    },
  ],
};

export const getFish = () => {
  return database.fish.map((fish) => ({ ...fish }));
};
