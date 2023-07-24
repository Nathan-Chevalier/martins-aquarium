const database = {
  fish: [
    {
      name: "Future Cracker Spread",
      food: "Tropical flakes, small live/frozen foods",
      length: 12,
      species: "Paracheirodon innesi",
      location: "South America",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/52/Paracheirodon_innesi_neon_tetra.jpg",
    },
    {
      name: "John from Accounting",
      food: "Flakes, freeze-dried, live/frozen foods",
      length: 10,
      species: "Poecilia reticulata",
      location: "South America",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Guppy_02.jpg",
    },
    {
      name: "Molly Molly",
      food: "Flakes, vegetable matter, live/frozen foods",
      length: 6,
      species: "Poecilia sphenops",
      location: "Central and South America",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/9b/Poecilia_sphenops.jpg",
    },
    {
      name: "Wags",
      food: "Flakes, vegetable matter, live/frozen foods",
      length: 12,
      species: "Xiphophorus maculatus",
      location: "Central America",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e6/Rainbow_wag_platy.jpg",
    },
    {
      name: "Steven",
      food: "Flakes, live/frozen foods, vegetable matter",
      length: 5,
      species: "Xiphophorus hellerii",
      location: "Central America",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/60/Xiphophorus_hellerii_red_wagtail_female_01.jpg",
    },
    {
      name: "Metatron",
      food: "Flakes, live/frozen foods, small invertebrates",
      length: 9,
      species: "Pterophyllum scalare",
      location: "South America",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c7/Angelfish.jpg",
    },
    {
      name: "Microflake",
      food: "Flakes, live/frozen foods, small invertebrates",
      length: 3,
      species: "Trichogaster lalius",
      location: "South Asia",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d6/Colisa_lalia.jpg",
    },
    {
      name: "Banana",
      food: "Pellets, live/frozen foods, small invertebrates",
      length: 3,
      species: "Betta splendens",
      location: "Southeast Asia",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/Siamese_fighting_fish_%28Betta_splendens%29_female_orange.JPG",
    },
    {
      name: "Hipster Kipper",
      food: "Sinking pellets, live/frozen foods",
      length: 20,
      species: "Corydoras sp.",
      location: "South America",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d2/Corydoras_sterbai_02.jpg",
    },
    {
      name: "Molly II",
      food: "Flakes, vegetable matter, live/frozen foods",
      length: 4,
      species: "Poecilia sphenops",
      location: "Central America",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/1d/Dalmatian_molly.jpg",
    },
  ],
  tips: [
    `<b>Embrace Improbability:</b> Keep plenty of towels during water changes to minimize the risk of aquatic disasters.`,
    `<b>Testing, the Infinite Loop:</b> Revel in the cosmic dance of water parameter testing with tripled test kits.`,
    `<b>Watch for Hitchhikers:</b> Beware of sneaky stowaways in new fish additions, like algae spores and snails.`,
    `<b>The Towel of Zen:</b> Stay remarkably relaxed in the face of aquarium uncertainties, just like the Infinite Improbability Drive's philosophy.`,
  ],
};

export const getFish = () => {
  return database.fish.map((fish) => ({ ...fish }));
};

export const getTips = () => {
  return database.tips.map((tips) => ({ ...tips }));
};
