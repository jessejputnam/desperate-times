function timestamp(): string {
  // sometime in the last 30 days
  const stampy: number =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stampy).toISOString();
}

// interface

export const products = [
  {
    name: "Atari Flashback",
    description:
      "The Atari Flashback X features 110 built-in video game favorites. These games include such hits as Adventure, Asteroids, Centipede, Chopper Command, Frogger, Missile Command, Pitfall!, Space Invaders, Yars' Revenge®, and so much more!",
    status: "AVAILABLE",
    price: 1999,
    photo: {
      id: "5dfbed262849d7961377c2c0",
      filename: "atari-flashback.jpg",
      originalFilename: "atari-flashback.jpg",
      mimetype: "image/jpeg",
      encoding: "7bit",
      _meta: {
        public_id: "desperate-times/5dfbed262849d7961377c2c0",
        version: 1576791335,
        signature: "9f7d5115788b7677307a39214f9684dd827ea5f9",
        width: 612,
        height: 612,
        format: "jpg",
        resource_type: "image",
        created_at: timestamp(),
        tags: [],
        bytes: 27871,
        type: "upload",
        etag: "e1fdf84d5126b6ca2e1c8ef9532be5a5",
        placeholder: false,
        url: "http://res.cloudinary.com/dusph8emn/image/upload/v1675001546/desperate-times/atari-flashback.jpg",
        secure_url:
          "https://res.cloudinary.com/dusph8emn/image/upload/v1675001546/desperate-times/atari-flashback.jpg",
        original_filename: "file"
      }
    }
    // createdBy: null,
    // updatedBy: null,
    // updatedAt_utc: '2020-12-19T21:35:35.739Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-12-19T21:35:35.739Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: "Pokémon Cards (asstd)",
    description:
      "A bundle of 150 randomly selected Pokémon cards. 126 are common/uncommon rarity and come from SWSH era sets. Each bundle is also guaranteed to contain: 8 black star rare, 4 reverse holo, 10 holo rare, and 2 V or above.",
    status: "AVAILABLE",
    price: 1999,
    photo: {
      id: "5e2a13f0689b2835ae71d1a5",
      filename: "cards-bundle.jpg",
      originalFilename: "cards-bundle.jpg",
      mimetype: "image/jpeg",
      encoding: "7bit",
      _meta: {
        public_id: "desperate-times/5e2a13f0689b2835ae71d1a5",
        version: 1579815920,
        signature: "a430b2d35f6a03dc562f6f56a474deb6810e393f",
        width: 425,
        height: 332,
        format: "jpg",
        resource_type: "image",
        created_at: timestamp(),
        tags: [],
        bytes: 45455,
        type: "upload",
        etag: "aebe8e9cc98ee4ad71682f19af85745b",
        placeholder: false,
        url: "http://res.cloudinary.com/dusph8emn/image/upload/v1675001697/desperate-times/91yL1H9fBdL._AC_SX425__jza93a.jpg",
        secure_url:
          "https://res.cloudinary.com/dusph8emn/image/upload/v1675001697/desperate-times/91yL1H9fBdL._AC_SX425__jza93a.jpg",
        original_filename: "file"
      }
    }
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:45:20.833Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:45:20.833Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: "Origin Forme Dialga V",
    description:
      "Origin Forme Dialga (177/189) Alternate Art card from the Astral Radiance set, released 2022.",
    status: "AVAILABLE",
    price: 4999,
    photo: {
      id: "5e2a13ff689b2835ae71d1a7",
      filename: "dialga.jpg",
      originalFilename: "dialga.jpg",
      mimetype: "image/jpeg",
      encoding: "7bit",
      _meta: {
        public_id: "desperate-times/5e2a13ff689b2835ae71d1a7",
        version: 1579815935,
        signature: "360df116020320a14845cf235b87a4a5cdc23f86",
        width: 318,
        height: 500,
        format: "jpg",
        resource_type: "image",
        created_at: timestamp(),
        tags: [],
        bytes: 202924,
        type: "upload",
        etag: "b6fbc18b196c68e2b87f51539b849e70",
        placeholder: false,
        url: "http://res.cloudinary.com/dusph8emn/image/upload/v1675001771/desperate-times/dialga.jpg",
        secure_url:
          "https://res.cloudinary.com/dusph8emn/image/upload/v1675001771/desperate-times/dialga.jpg",
        original_filename: "file"
      }
    }
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:45:36.012Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:45:36.012Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: "Galarian Rapidash V",
    description:
      "Galarian Rapidash (168/198) Alternate Art card from the Chilling Reign set, released 2021.",
    status: "AVAILABLE",
    price: 4499,
    photo: {
      id: "5e2a1413689b2835ae71d1a9",
      filename: "galarian-rapidash.jpg",
      originalFilename: "galarian-rapidash.jpg",
      mimetype: "image/jpeg",
      encoding: "7bit",
      _meta: {
        public_id: "desperate-times/5e2a1413689b2835ae71d1a9",
        version: 1579815957,
        signature: "affd16fa20107a4d5399aab553ea77fff1c4b2ef",
        width: 1276,
        height: 1490,
        format: "jpg",
        resource_type: "image",
        created_at: timestamp(),
        tags: [],
        bytes: 2454948,
        type: "upload",
        etag: "ce0f36da93c60c5d4406657225206f70",
        placeholder: false,
        url: "http://res.cloudinary.com/dusph8emn/image/upload/v1675001942/desperate-times/galarian-rapidash.jpg",
        secure_url:
          "https://res.cloudinary.com/dusph8emn/image/upload/v1675001942/desperate-times/galarian-rapidash.jpg",
        original_filename: "file"
      }
    }
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:45:58.336Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:45:58.336Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: "Unown V",
    description:
      "Unown (177/195) Alternate Art card from the Silver Tempest set. Released in 2022.",
    status: "AVAILABLE",
    price: 3999,
    photo: {
      id: "5e2a142c689b2835ae71d1ab",
      filename: "unown.jpg",
      originalFilename: "unown.jpg",
      mimetype: "image/jpeg",
      encoding: "7bit",
      _meta: {
        public_id: "desperate-times/5e2a142c689b2835ae71d1ab",
        version: 1579815980,
        signature: "6dd95447407c06ba955164c4961bd4abc2fb9f4d",
        width: 1100,
        height: 735,
        format: "jpg",
        resource_type: "image",
        created_at: timestamp(),
        tags: [],
        bytes: 183071,
        type: "upload",
        etag: "5550566c7fab113ba32d85ed08f54faa",
        placeholder: false,
        url: "http://res.cloudinary.com/dusph8emn/image/upload/v1675001984/desperate-times/unown.jpg",
        secure_url:
          "https://res.cloudinary.com/dusph8emn/image/upload/v1675001984/desperate-times/unown.jpg",
        original_filename: "file"
      }
    }
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:46:21.015Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:46:21.015Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: "Ancient Mew",
    description:
      "Ancient Mew (54/53) from the Wizards Black Star Promos Base set. Released 1999. Given out at showings of the first Pokémon movie.",
    status: "AVAILABLE",
    price: 2999,
    photo: {
      id: "5e2a143f689b2835ae71d1ad",
      filename: "mew.jpg",
      originalFilename: "mew.jpg",
      mimetype: "image/jpeg",
      encoding: "7bit",
      _meta: {
        public_id: "desperate-times/5e2a143f689b2835ae71d1ad",
        version: 1579815999,
        signature: "97e8f27cdbb6a736062391b9ac3a5c689bd50646",
        width: 1946,
        height: 1557,
        format: "jpg",
        resource_type: "image",
        created_at: timestamp(),
        tags: [],
        bytes: 286643,
        type: "upload",
        etag: "3655bfd83998492b8421782db868c9df",
        placeholder: false,
        url: "http://res.cloudinary.com/dusph8emn/image/upload/v1675002081/desperate-times/mew.jpg",
        secure_url:
          "https://res.cloudinary.com/dusph8emn/image/upload/v1675002081/desperate-times/mew.jpg",
        original_filename: "file"
      }
    }
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:46:40.526Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:46:40.526Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: "Arceus",
    description:
      "Arceus (83/211) from the XY Black Star Promo set. Released 2013.",
    status: "AVAILABLE",
    price: 1799,
    photo: {
      id: "5e2a145d689b2835ae71d1af",
      filename: "arceus.jpg",
      originalFilename: "arceus.jpg",
      mimetype: "image/jpeg",
      encoding: "7bit",
      _meta: {
        public_id: "desperate-times/5e2a145d689b2835ae71d1af",
        version: 1579816030,
        signature: "76dec3670cc4a4c22723720bb94496a35945c626",
        width: 1200,
        height: 1600,
        format: "jpg",
        resource_type: "image",
        created_at: timestamp(),
        tags: [],
        bytes: 146817,
        type: "upload",
        etag: "3d68591332785ae5273ed43b1aa91712",
        placeholder: false,
        url: "http://res.cloudinary.com/dusph8emn/image/upload/v1675002141/desperate-times/arceus.jpg",
        secure_url:
          "https://res.cloudinary.com/dusph8emn/image/upload/v1675002141/desperate-times/arceus.jpg",
        original_filename: "file"
      }
    }
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:47:11.415Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:47:11.415Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: "Marvel Comics Lot (80's/90's)",
    description:
      "Lot of 125 marvel comics from the 80's and 90's. Series include: Deadpool, Amazing Spiderman, X-Men, and more! Most in good to great condition, 10 in fair to poor.",
    status: "AVAILABLE",
    price: 47734,
    photo: {
      id: "5e2a147b689b2835ae71d1b1",
      filename: "marvel.jpg",
      originalFilename: "marvel.jpg",
      mimetype: "image/jpeg",
      encoding: "7bit",
      _meta: {
        public_id: "desperate-times/5e2a147b689b2835ae71d1b1",
        version: 1579816060,
        signature: "a6161568d2d59a59e8dba9b15e705581198ea377",
        width: 600,
        height: 450,
        format: "jpg",
        resource_type: "image",
        created_at: timestamp(),
        tags: [],
        bytes: 953657,
        type: "upload",
        etag: "d89ab8ecc366bc63464a3eeef6ef3010",
        placeholder: false,
        url: "http://res.cloudinary.com/dusph8emn/image/upload/v1675002240/desperate-times/marvel.jpg",
        secure_url:
          "https://res.cloudinary.com/dusph8emn/image/upload/v1675002240/desperate-times/marvel.jpg",
        original_filename: "file"
      }
    }
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:47:41.358Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:47:41.358Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: "Star Wars Comics Lot",
    description:
      "Four Dark Horse Star Wars comics. Shadows of the Empire #2 (1996), Dark Empire II #1 and #3 (1994), and Boba Fett: Twin Engines (1997).",
    status: "AVAILABLE",
    price: 1499,
    photo: {
      id: "5e2a149b689b2835ae71d1b3",
      filename: "star-wars.jpg",
      originalFilename: "star-wars.jpg",
      mimetype: "image/jpeg",
      encoding: "7bit",
      _meta: {
        public_id: "desperate-times/5e2a149b689b2835ae71d1b3",
        version: 1579816093,
        signature: "6ac148051cb4ba0227ee49fd61fa1348ab4a9870",
        width: 600,
        height: 450,
        format: "jpg",
        resource_type: "image",
        created_at: timestamp(),
        tags: [],
        bytes: 515360,
        type: "upload",
        etag: "8aed0984d37a3d12faa832860b29d24b",
        placeholder: false,
        url: "http://res.cloudinary.com/dusph8emn/image/upload/v1675002297/desperate-times/star-wars.jpg",
        secure_url:
          "https://res.cloudinary.com/dusph8emn/image/upload/v1675002297/desperate-times/star-wars.jpg",
        original_filename: "file"
      }
    }
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:48:13.812Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:48:13.812Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: "Rurouni Kenshin VHS Complete Set",
    description:
      "Complete VHS collection of the original run of Rurouni Kenshin.",
    status: "AVAILABLE",
    price: 14999,
    photo: {
      id: "5e2a14b1689b2835ae71d1b5",
      filename: "kenshin.jpg",
      originalFilename: "kenshin.jpg",
      mimetype: "image/jpeg",
      encoding: "7bit",
      _meta: {
        public_id: "desperate-times/5e2a14b1689b2835ae71d1b5",
        version: 1579816114,
        signature: "24f3ff4ae91dfcc8d1ddeb1a713215730e834be4",
        width: 1600,
        height: 1600,
        format: "jpg",
        resource_type: "image",
        created_at: timestamp(),
        tags: [],
        bytes: 71291,
        type: "upload",
        etag: "3a4b97ef88c550dcd6c2d399d1bc698e",
        placeholder: false,
        url: "http://res.cloudinary.com/dusph8emn/image/upload/v1675002335/desperate-times/kenshin.jpg",
        secure_url:
          "https://res.cloudinary.com/dusph8emn/image/upload/v1675002335/desperate-times/kenshin.jpg",
        original_filename: "file"
      }
    }
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:48:34.398Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:48:34.398Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: "Oculus Quest 2",
    description:
      "Oculus Quest 2 from Meta. Virtual Reality headset - play games, watch films, interact with complete 3D environements!",
    status: "AVAILABLE",
    price: 19999,
    photo: {
      id: "5e2a14bf689b2835ae71d1b7",
      filename: "quest.jpg",
      originalFilename: "quest.jpg",
      mimetype: "image/jpeg",
      encoding: "7bit",
      _meta: {
        public_id: "desperate-times/5e2a14bf689b2835ae71d1b7",
        version: 1579816128,
        signature: "bebf3d817e91cdbb91768e8c9c2133a78798a317",
        width: 2000,
        height: 2000,
        format: "jpg",
        resource_type: "image",
        created_at: timestamp(),
        tags: [],
        bytes: 180261,
        type: "upload",
        etag: "f9c8725f815a6873cbdc47ba3f869049",
        placeholder: false,
        url: "https://res.cloudinary.com/dusph8emn/image/upload/v1675002399/desperate-times/quest.jpg",
        secure_url:
          "https://res.cloudinary.com/dusph8emn/image/upload/v1675002399/desperate-times/quest.jpg",
        original_filename: "file"
      }
    }
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:48:48.633Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:48:48.633Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: "Nintendo Switch",
    description:
      "Nintendo Switch, 2nd Edition Comes with 8 physical game cartridges, including Pokémon and Sonic games, and a 1TB SD Card for digital storage.",
    status: "AVAILABLE",
    price: 19999,
    photo: {
      id: "5e2a14cc689b2835ae71d1b9",
      filename: "switch.jpg",
      originalFilename: "switch.jpg",
      mimetype: "image/jpeg",
      encoding: "7bit",
      _meta: {
        public_id: "desperate-times/5e2a14cc689b2835ae71d1b9",
        version: 1579816141,
        signature: "18720c13b7f6d4fcde919dddb33d1c711a459c14",
        width: 2400,
        height: 1800,
        format: "jpg",
        resource_type: "image",
        created_at: timestamp(),
        tags: [],
        bytes: 50754,
        type: "upload",
        etag: "44cf57f8218f135b82cfa5df0da92a49",
        placeholder: false,
        url: "http://res.cloudinary.com/dusph8emn/image/upload/v1675002463/desperate-times/switch.jpg",
        secure_url:
          "https://res.cloudinary.com/dusph8emn/image/upload/v1675002463/desperate-times/switch.jpg",
        original_filename: "file"
      }
    }
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:49:01.569Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:49:01.569Z',
    // createdAt_offset: '+00:00',
  }
];
