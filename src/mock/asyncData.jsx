export const productos = [
  // {
  //   id: "01",
  //   name: "Mate personalizado",
  //   description: "Mate de acero totalmente personalizado con grabado laser. \nColores disponibles: Blanco, negro, rojo, azul, lila, amarillo, \nverde agua, gris claro, rosado, fucsia.",
  //   stock: 25,
  //   price: 600,
  //   category: "souvenirs-y-regalos",
  //   img: "/img/producto-mate.jpg",
  //   features: [
  //     "Totalmente personalizable",
  //     "Acero inoxidable resistente",
  //     "Fácil de limpiar",
  //   ],
  //   tag: "New",
  //   reviews: ["⭐⭐⭐⭐⭐ (5.0)"],
  // }, //ya se agrego a mano

  {
    // id: "02",
    name: "Llavero souvenir MDF",
    description:
      "LLavero souvenir de MDF totalmente personalizado con grabado laser. \nIdeal para cumpleaños, baby shower, casamientos, etc.  \nMedida aproximada: 5cm. ",
    stock: 200,
    price: 45,
    category: "souvenirs-y-regalos",
    img: "/img/producto-llavero.jpg",
    features: [
      "MDF resistente y liviano",
      "Personalizable para cualquier evento",
      "Grabado láser de alta precisión",
    ],
    tag: "",
    reviews: ["⭐⭐⭐⭐⭐ (5.0)"],
  },

  {
    // id: "03",
    name: "Stickers",
    description:
      "Stickers impermeables totalmente personalizados. \nEl precio es por un pack de 4 stickers de hasta 5x5 cm.",
    stock: 100,
    price: 150,
    category: "stickers",
    img: "/img/producto-sticker.jpg",
    features: [
      "Resistentes al agua y al sol",
      "Diseños unicos y coloridos",
      "Fácil de pegar en cualquier superficie",
    ],
    tag: "",
    reviews: ["⭐⭐⭐⭐☆ (4.0)"],
  },

  {
    // id: "04",
    name: "Pantalla MDF",
    description: "Pantalla de techo de MDF, diseños a medida.",
    stock: 5,
    price: 1250,
    category: "decoracion",
    img: "/img/producto-pantalla.jpg",
    features: [
      "MDF resistente y duradero",
      "Acabado de alta calidad con grabado láser",
      "Versátil para cualquier ambiente",
    ],
    tag: "New",
    reviews: ["⭐⭐⭐⭐☆ (4.0)"],
  },

  {
    // id: "05",
    name: "Vaso personalizado",
    description:
      "Vaso térmico de acero inoxidable totalmente personalizado con grabado laser. \nCapacidad de 750 ml. \nColores disponibles: Blanco, negro, gris, amarillo, verde agua, rosado, fucsia, azul.",
    stock: 10,
    price: 600,
    category: "souvenirs-y-regalos",
    img: "/img/producto-vaso.jpg",
    features: [
      "Personalización detallada con grabado láser",
      "Mantiene la temperatura por horas",
      "Tapa hermética a prueba de derrames",
    ],
    tag: "",
    reviews: ["⭐⭐⭐⭐☆ (4.0)"],
  },

  {
    // id: "06",
    name: "Placa personalizada",
    description: "Placa para mascota personalizada. \nMedidas aproximadas de 4cm x 2.7cm. \nColores disponibles: Plateado, negro, azul, rojo, violeta, verde.",
    stock: 51,
    price: 300,
    category: "souvenirs-y-regalos",
    img: "/img/producto-dije.jpg",
    features: [
      "Personalización detallada con grabado láser",
      "Ligero y cómodo para tu mascota",
      "Acero inoxidable resistente",
    ],
    tag: "Oferta",
    reviews: ["⭐⭐⭐⭐⭐ (5.0)"],
  },

  {
    // id: "07",
    name: "Caja de te MDF",
    description: "Caja para te de MDF personalizada con grabado laser.",
    stock: 5,
    price: 450,
    category: "souvenirs-y-regalos",
    img: "/img/producto-caja-te.jpg",
    features: [
      "MDF resistente y duradero",
      "Versátil para cualquier ambiente",
      "Totalmente personalizable con grabado láser",
    ],
    tag: "Oferta",
    reviews: ["⭐⭐⭐⭐☆ (4.0)"],
  },

  {
    // id: "08",
    name: "Vinilo decorativo",
    description: "Vinilo decorativo para autos, motos, vidrios o casa. \nLa medida aproximada es de 15cm x 7cm.",
    stock: 242,
    price: 300,
    category: "stickers",
    img: "/img/producto-vinilo.jpg",
    features: [
      "Aplicación fácil y rápida",
      "Resistente al agua y al sol",
      "Para ambientes interiores y exteriores",
    ],
    tag: "Más vendido",
    reviews: ["⭐⭐⭐⭐⭐ (5.0)"],
  },
];

let error = false;

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Hubo un error, intente mas tarde");
      } else {
        resolve(productos);
      }
    }, 1500);
  });
};

export const getOneProduct = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Hubo un error, intente mas tarde");
      } else {
        let prod = productos.find((prd) => prd.id === id);
        resolve(prod);
      }
    }, 1500);
  });
};
