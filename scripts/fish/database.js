const database = {
  fish: [
    {
      name: "Future Cracker Spread",
      food: "Tropical flakes, small live/frozen foods",
      length: 1.5,
      species: "Paracheirodon innesi",
      location: "South America",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/52/Paracheirodon_innesi_neon_tetra.jpg",
    },
    {
      name: "John from Accounting",
      food: "Flakes, freeze-dried, live/frozen foods",
      length: 2,
      species: "Poecilia reticulata",
      location: "South America",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Guppy_02.jpg",
    },
    {
      name: "Molly Molly",
      food: "Flakes, vegetable matter, live/frozen foods",
      length: 3,
      species: "Poecilia sphenops",
      location: "Central and South America",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/9b/Poecilia_sphenops.jpg",
    },
    {
      name: "Wags",
      food: "Flakes, vegetable matter, live/frozen foods",
      length: 2.5,
      species: "Xiphophorus maculatus",
      location: "Central America",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e6/Rainbow_wag_platy.jpg",
    },
    {
      name: "Steven",
      food: "Flakes, live/frozen foods, vegetable matter",
      length: 4,
      species: "Xiphophorus hellerii",
      location: "Central America",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/60/Xiphophorus_hellerii_red_wagtail_female_01.jpg",
    },
    {
      name: "Metatron",
      food: "Flakes, live/frozen foods, small invertebrates",
      length: 6,
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
      length: 2.5,
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
};

export const getFish = () => {
  return database.fish.map((fish) => ({ ...fish }));
};
