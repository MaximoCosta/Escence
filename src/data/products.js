export const PRODUCTS = [
  { 
    id: 1, slug: 'royal-oud-intense', name: "Royal Oud Intense", price: 150, 
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600&h=800", 
    rating: 4.8, reviews: [
      { user: "Amina K.", text: "Absolutely stunning. It lasts for days on my clothes.", rating: 5 },
      { user: "James T.", text: "A bit too strong at first, but dries down beautifully.", rating: 4 }
    ], 
    description: "A deeply mesmerizing and authentic Arabic Oud, crafted with the finest agarwood. Royal Oud Intense opens with a powerful burst of rich spices, settling into a heart of dark woods and amber. It is a timeless classic, perfect for evening wear and special occasions where leaving an impression is paramount.",
    gender: "Unisex", topNotes: "Saffron, Nutmeg, Lavender", heartNotes: "Agarwood (Oud), Patchouli", baseNotes: "Musk, Amber, Vetiver",
    ingredients: "Alcohol Denat, Fragrance (Parfum), Water (Aqua), Linalool, Limonene, Geraniol."
  },
  { 
    id: 2, slug: 'desert-rose-amber', name: "Desert Rose & Amber", price: 120, 
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=600&h=800", 
    rating: 4.5, reviews: [
      { user: "Sarah W.", text: "The perfect rose scent. Not too sweet, very elegant.", rating: 5 }
    ], 
    description: "A floral masterpiece combining the delicate sweetness of Taif rose with warm, glowing amber. A scent that captures the essence of a desert sunset, wrapping the wearer in a comforting yet sophisticated aura.",
    gender: "Female", topNotes: "Pink Pepper, Bergamot", heartNotes: "Taif Rose, Jasmine", baseNotes: "Amber, Sandalwood, Vanilla",
    ingredients: "Alcohol, Parfum, Aqua, Citronellol, Farnesol, Citral."
  },
  { 
    id: 3, slug: 'midnight-saffron', name: "Midnight Saffron", price: 185, 
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&q=80&w=600&h=800", 
    rating: 4.9, reviews: [
      { user: "Mohammed", text: "The saffron is incredibly authentic. Pure luxury.", rating: 5 },
      { user: "Elena P.", text: "My absolute signature scent now.", rating: 5 }
    ], 
    description: "Exotic saffron intertwined with spicy cardamom and a base of pure musk. A truly opulent and luxurious fragrance that speaks of ancient spice routes and midnight rendezvous.",
    gender: "Unisex", topNotes: "Saffron, Black Pepper", heartNotes: "Rose, Cardamom", baseNotes: "Musk, Leather, Guaiac Wood",
    ingredients: "Alcohol Denat, Parfum (Fragrance), Aqua (Water), Coumarin."
  },
  { 
    id: 4, slug: 'sandalwood-majesty', name: "Sandalwood Majesty", price: 135, 
    image: "https://images.unsplash.com/photo-1594032194509-0056023973b2?auto=format&fit=crop&q=80&w=600&h=800", 
    rating: 4.7, reviews: [
      { user: "David L.", text: "Smooth and creamy, very relaxing scent.", rating: 4 }
    ], 
    description: "Creamy, smooth sandalwood from Mysore, elevated by hints of vanilla and tonka bean. Soothing yet profoundly elegant, this fragrance acts as a second skin.",
    gender: "Unisex", topNotes: "Bergamot, Cardamom", heartNotes: "Violet, Iris", baseNotes: "Sandalwood, Vanilla, Tonka Bean",
    ingredients: "Alcohol, Parfum, Aqua, Alpha-Isomethyl Ionone."
  },
  { 
    id: 5, slug: 'oud-wood-reserve', name: "Oud Wood Reserve", price: 210, 
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600&h=800", 
    rating: 5.0, reviews: [
      { user: "Richard M.", text: "The holy grail of Oud fragrances.", rating: 5 }
    ], 
    description: "One of the rarest, most highly sought-after ingredients in a perfume maker's arsenal. Oud Wood Reserve is a masterclass in woody perfection, blended with rare spices and smooth vetiver.",
    gender: "Male", topNotes: "Rosewood, Cardamom", heartNotes: "Oud, Sandalwood, Vetiver", baseNotes: "Tonka Bean, Amber",
    ingredients: "Alcohol Denat, Fragrance, Water, Coumarin, Linalool."
  },
  { 
    id: 6, slug: 'golden-musk', name: "Golden Musk", price: 95, 
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&q=80&w=600&h=800", 
    rating: 4.4, reviews: [], 
    description: "A gentle, alluring musk that stays close to the skin, offering a powdery, clean aura. Perfect for everyday wear.",
    gender: "Unisex", topNotes: "Aldehydes, White Rose", heartNotes: "White Musk, Jasmine", baseNotes: "Cedarwood, Powdery Notes",
    ingredients: "Alcohol, Fragrance, Aqua."
  },
  { 
    id: 7, slug: 'velvet-jasmine', name: "Velvet Jasmine", price: 110, 
    image: "https://images.unsplash.com/photo-1594032194509-0056023973b2?auto=format&fit=crop&q=80&w=600&h=800", 
    rating: 4.6, reviews: [
      { user: "Clara", text: "Very intense jasmine, smells incredibly natural.", rating: 5 }
    ], 
    description: "Blooming night jasmine blended with white patchouli. A sensual, velvety floral that commands attention and leaves a lingering trail of mystery.",
    gender: "Female", topNotes: "Mandarin, Peach", heartNotes: "Jasmine Sambac, Tuberose", baseNotes: "Patchouli, Vanilla",
    ingredients: "Alcohol, Parfum, Water, Benzyl Salicylate."
  },
  { 
    id: 8, slug: 'spiced-leather', name: "Spiced Leather", price: 160, 
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&q=80&w=600&h=800", 
    rating: 4.8, reviews: [], 
    description: "Rich, supple leather meets middle-eastern spices. Bold, confident, and deeply intoxicating. For those who dare to stand out.",
    gender: "Male", topNotes: "Saffron, Raspberry", heartNotes: "Olibanum, Night Blooming Jasmine", baseNotes: "Leather, Suede, Amber",
    ingredients: "Alcohol, Parfum, Aqua."
  },
  { 
    id: 9, slug: 'amber-nuit', name: "Amber Nuit", price: 175, 
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&q=80&w=600&h=800", 
    rating: 4.7, reviews: [], 
    description: "A deeply sensual and mysterious fragrance blending warm amber with spicy pink pepper.",
    gender: "Unisex", topNotes: "Pink Pepper, Bergamot", heartNotes: "Turkish Rose", baseNotes: "Amber, Cedar",
    ingredients: "Alcohol, Parfum, Aqua."
  },
  { 
    id: 10, slug: 'black-orchid-extrait', name: "Black Orchid Extrait", price: 220, 
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=600&h=800", 
    rating: 4.9, reviews: [], 
    description: "A luxurious and deeply floral fragrance featuring rare black orchids and dark chocolate notes.",
    gender: "Female", topNotes: "Truffle, Ylang-Ylang", heartNotes: "Black Orchid, Rum", baseNotes: "Patchouli, Sandalwood, Dark Chocolate",
    ingredients: "Alcohol, Parfum, Aqua."
  },
  { 
    id: 11, slug: 'taif-rose-absolute', name: "Taif Rose Absolute", price: 145, 
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&q=80&w=600&h=800", 
    rating: 4.6, reviews: [], 
    description: "The purest essence of Taif roses, known for their intense and complex floral scent.",
    gender: "Female", topNotes: "Geranium, Lemon", heartNotes: "Taif Rose, Bulgarian Rose", baseNotes: "Musk, Honey",
    ingredients: "Alcohol, Parfum, Aqua."
  },
  { 
    id: 12, slug: 'mystic-frankincense', name: "Mystic Frankincense", price: 190, 
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&q=80&w=600&h=800", 
    rating: 4.8, reviews: [], 
    description: "A deeply spiritual and grounding fragrance based on Omani frankincense and myrrh.",
    gender: "Unisex", topNotes: "Frankincense, Pink Pepper", heartNotes: "Myrrh, Iris", baseNotes: "Vanilla, Woods",
    ingredients: "Alcohol, Parfum, Aqua."
  }
];
