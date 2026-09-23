export const mainCategories = [
  {
    id: 'home-furnishings',
    name: 'Home Furnishings',
    slug: 'category-home-furnishings',
    description: 'Curated draperies, luxury bedding, bath linens, and artisanal soft furnishings for mindful living spaces.',
    categories: [
      {
        id: 'bedding',
        name: 'Bedding',
        slug: 'category-bedding',
        description: 'Heirloom bedsheets, deep waffle bed covers, reversible dohars, and pure cotton diwan sets.',
        image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
        subcategories: [
          'Bedsheets',
          'Bed Covers',
          'Blankets',
          'Quilts',
          'Comforters',
          'Dohars',
          'Diwan Sets',
          'Quilt Covers'
        ]
      },
      {
        id: 'curtains',
        name: 'Curtains',
        slug: 'category-curtains',
        description: 'Architectural window treatments available in ready-to-hang Stitched panels and Unstitched / Fabric lengths.',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
        subcategories: [
          'Stitched',
          'Unstitched / Fabric'
        ]
      },
      {
        id: 'bath-linen',
        name: 'Bath & Linen',
        slug: 'category-bath-linen',
        description: 'High-absorbency zero-twist cotton towels and European pre-washed flax bathrobes.',
        image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',
        subcategories: [
          'Towels',
          'Bathrobes'
        ]
      },
      {
        id: 'soft-furnishings',
        name: 'Soft Furnishings',
        slug: 'category-soft-furnishings',
        description: 'Artisanal hand-block cushions, rich sofa covers, embroidered pillow covers, and bolster sets.',
        image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',
        subcategories: [
          'Sofa Covers',
          'Cushion Covers',
          'Cushions',
          'Pillow Covers',
          'Bolsters'
        ]
      }
    ]
  },
  {
    id: 'ladies-suits',
    name: "Ladies' Suits",
    slug: 'category-suits',
    description: 'Heritage unstitched suit cuts in pure Matka raw silk, Chanderi zari, modal satin, and fine handloom cotton.',
    categories: [
      {
        id: 'suits-unstitched',
        name: 'Unstitched',
        slug: 'category-suits',
        description: 'Masterhouse unstitched fabric lengths (3.0m to 4.5m) crafted for celebratory bandhgalas, kurtas, and festive sets.',
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80',
        subcategories: [
          'Unstitched'
        ]
      }
    ]
  }
];

export const exploreCategories = [
  {
    id: 'bedding',
    name: 'Bedding',
    route: 'category-bedding',
    descriptor: 'Bedsheets, Dohars, Quilts & Diwan Sets',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
    tag: 'Sanctuary Essentials',
    accentColor: '#C86D51' // Terracotta accent
  },
  {
    id: 'curtains',
    name: 'Curtains',
    route: 'category-curtains',
    descriptor: 'Stitched Drapes & Unstitched Fabric Lengths',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    tag: 'Custom Drape',
    accentColor: '#739376' // Sage
  },
  {
    id: 'bath-linen',
    name: 'Bath & Linen',
    route: 'category-bath-linen',
    descriptor: 'Zero-Twist Towels & Flax Bathrobes',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',
    tag: 'Pure Cotton & Flax',
    accentColor: '#3A6B7C' // Peacock Blue / Teal
  },
  {
    id: 'soft-furnishings',
    name: 'Soft Furnishings',
    route: 'category-soft-furnishings',
    descriptor: 'Sofa Covers, Cushions, Pillows & Bolsters',
    image: 'https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?auto=format&fit=crop&w=800&q=80',
    tag: 'Hand-Block & Zari',
    accentColor: '#D99B26' // Mustard / Turmeric
  },
  {
    id: 'ladies-suits',
    name: "Ladies' Suits",
    route: 'category-suits',
    descriptor: 'Unstitched Silk, Chanderi & Cashmere Cuts',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80',
    tag: 'Heirloom Weaves',
    accentColor: '#B25353' // Coral / Rose
  }
];
