const database = {
  fish: [
    {
      name: "Neon Tetra",
      food: "Tropical flakes, small live/frozen foods",
      length: 1.5,
      species: "Paracheirodon innesi",
      location: "South America",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/52/Paracheirodon_innesi_neon_tetra.jpg",
    },
    {
      name: "Guppy",
      food: "Flakes, freeze-dried, live/frozen foods",
      length: 2,
      species: "Poecilia reticulata",
      location: "South America",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Guppy_02.jpg",
    },
    {
      name: "Molly",
      food: "Flakes, vegetable matter, live/frozen foods",
      length: 3,
      species: "Poecilia sphenops",
      location: "Central and South America",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/9b/Poecilia_sphenops.jpg",
    },
    {
      name: "Platy",
      food: "Flakes, vegetable matter, live/frozen foods",
      length: 2.5,
      species: "Xiphophorus maculatus",
      location: "Central America",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/e/e6/Rainbow_wag_platy.jpg",
    },
    {
      name: "Swordtail",
      food: "Flakes, live/frozen foods, vegetable matter",
      length: 4,
      species: "Xiphophorus hellerii",
      location: "Central America",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/60/Xiphophorus_hellerii_red_wagtail_female_01.jpg",
    },
    {
      name: "Angelfish",
      food: "Flakes, live/frozen foods, small invertebrates",
      length: 6,
      species: "Pterophyllum scalare",
      location: "South America",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/5f/Pterophyllum_scalare_male.jpg",
    },
    {
      name: "Dwarf Gourami",
      food: "Flakes, live/frozen foods, small invertebrates",
      length: 3,
      species: "Trichogaster lalius",
      location: "South Asia",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d6/Colisa_lalia.jpg",
    },
    {
      name: "Betta Fish",
      food: "Pellets, live/frozen foods, small invertebrates",
      length: 3,
      species: "Betta splendens",
      location: "Southeast Asia",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/Siamese_fighting_fish_%28Betta_splendens%29_female_orange.JPG",
    },
    {
      name: "Corydoras Catfish",
      food: "Sinking pellets, live/frozen foods",
      length: 2.5,
      species: "Corydoras sp.",
      location: "South America",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d2/Corydoras_sterbai_02.jpg",
    },
    {
      name: "Dalmatian Molly",
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
