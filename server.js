const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Dados de materiais sólidos
const materials = [
  {
    name: "Alumínio",
    type: "Metal",
    density: 2800,
    thermalConductivityDry: 204,
    thermalConductivityWet: 204,
    image: "https://picsum.photos/id/1015/640/480",
    thumbnail: "https://picsum.photos/id/1015/120/90",
  },
  {
    name: "Cobre",
    type: "Metal",
    density: 9000,
    thermalConductivityDry: 372,
    thermalConductivityWet: 372,
    image: "https://picsum.photos/id/1025/640/480",
    thumbnail: "https://picsum.photos/id/1025/120/90",
  },
  {
    name: "Ligas",
    type: "Metal",
    density: 12250,
    thermalConductivityDry: 35,
    thermalConductivityWet: 35,
    image: "https://picsum.photos/id/1035/640/480",
    thumbnail: "https://picsum.photos/id/1035/120/90",
  },
  {
    name: "Aço/Ferro",
    type: "Metal",
    density: 7800,
    thermalConductivityDry: 52,
    thermalConductivityWet: 52,
    image: "https://picsum.photos/id/1045/640/480",
    thumbnail: "https://picsum.photos/id/1045/120/90",
  },
  {
    name: "Zinco",
    type: "Metal",
    density: 7200,
    thermalConductivityDry: 110,
    thermalConductivityWet: 110,
    image: "https://picsum.photos/id/1055/640/480",
    thumbnail: "https://picsum.photos/id/1055/120/90",
  },
  {
    name: "Basalto/Granito",
    type: "Pedra Natural",
    density: 3000,
    thermalConductivityDry: 3.5,
    thermalConductivityWet: 3.5,
    image: "https://picsum.photos/id/1065/640/480",
    thumbnail: "https://picsum.photos/id/1065/120/90",
  },
  {
    name: "Calcário/Mármore",
    type: "Pedra Natural",
    density: 2700,
    thermalConductivityDry: 2.5,
    thermalConductivityWet: 2.5,
    image: "https://picsum.photos/id/1075/640/480",
    thumbnail: "https://picsum.photos/id/1075/120/90",
  },
  {
    name: "Arenito",
    type: "Pedra Natural",
    density: 2600,
    thermalConductivityDry: 1.6,
    thermalConductivityWet: 1.6,
    image: "https://picsum.photos/id/1085/640/480",
    thumbnail: "https://picsum.photos/id/1085/120/90",
  },
  {
    name: "Tijolo",
    type: "Alvenaria",
    density: "1600-1900",
    thermalConductivityDry: "0.6-0.7",
    thermalConductivityWet: "0.9-1.2",
    image: "https://picsum.photos/id/1095/640/480",
    thumbnail: "https://picsum.photos/id/1095/120/90",
  },
  {
    name: "Tijolo de Areia-Cal",
    type: "Alvenaria",
    density: 1900,
    thermalConductivityDry: 0.9,
    thermalConductivityWet: 1.4,
    image: "https://picsum.photos/id/1105/640/480",
    thumbnail: "https://picsum.photos/id/1105/120/90",
  },
  {
    name: "Concreto de Cascalho",
    type: "Concreto",
    density: "2300-2500",
    thermalConductivityDry: 2.0,
    thermalConductivityWet: 2.0,
    image: "https://picsum.photos/id/1115/640/480",
    thumbnail: "https://picsum.photos/id/1115/120/90",
  },
  {
    name: "Concreto Leve",
    type: "Concreto",
    density: "1600-1900",
    thermalConductivityDry: "0.7-0.9",
    thermalConductivityWet: "1.2-1.4",
    image: "https://picsum.photos/id/1125/640/480",
    thumbnail: "https://picsum.photos/id/1125/120/90",
  },
  {
    name: "Vidro",
    type: "Inorgânico",
    density: 2500,
    thermalConductivityDry: 0.8,
    thermalConductivityWet: 0.8,
    image: "https://picsum.photos/id/1135/640/480",
    thumbnail: "https://picsum.photos/id/1135/120/90",
  },
  {
    name: "Lã de Vidro",
    type: "Inorgânico",
    density: 150,
    thermalConductivityDry: 0.04,
    thermalConductivityWet: null,
    image: "https://picsum.photos/id/1145/640/480",
    thumbnail: "https://picsum.photos/id/1145/120/90",
  },
  {
    name: "Madeira Folhosa",
    type: "Madeira",
    density: 800,
    thermalConductivityDry: 0.17,
    thermalConductivityWet: 0.23,
    image: "https://picsum.photos/id/1155/640/480",
    thumbnail: "https://picsum.photos/id/1155/120/90",
  },
  {
    name: "Madeira Leve",
    type: "Madeira",
    density: 550,
    thermalConductivityDry: 0.14,
    thermalConductivityWet: 0.17,
    image: "https://picsum.photos/id/1165/640/480",
    thumbnail: "https://picsum.photos/id/1165/120/90",
  },
  {
    name: "Poliéster",
    type: "Sintético",
    density: 1200,
    thermalConductivityDry: 0.17,
    thermalConductivityWet: null,
    image: "https://picsum.photos/id/1175/640/480",
    thumbnail: "https://picsum.photos/id/1175/120/90",
  },
  {
    name: "Polietileno/Polipropileno",
    type: "Sintético",
    density: 930,
    thermalConductivityDry: 0.17,
    thermalConductivityWet: null,
    image: "https://picsum.photos/id/1185/640/480",
    thumbnail: "https://picsum.photos/id/1185/120/90",
  },
  {
    name: "Água",
    type: "Líquido",
    density: 1000,
    thermalConductivityDry: 0.58,
    thermalConductivityWet: null,
    image: "https://picsum.photos/id/1195/640/480",
    thumbnail: "https://picsum.photos/id/1195/120/90",
  },
  {
    name: "Gelo",
    type: "Sólido",
    density: 900,
    thermalConductivityDry: 2.2,
    thermalConductivityWet: null,
    image: "https://picsum.photos/id/1205/640/480",
    thumbnail: "https://picsum.photos/id/1205/120/90",
  },
  {
    name: "Solo Florestal",
    type: "Solo",
    density: 1450,
    thermalConductivityDry: 0.8,
    thermalConductivityWet: null,
    image: "https://picsum.photos/id/1215/640/480",
    thumbnail: "https://picsum.photos/id/1215/120/90",
  }
];

// Rota para obter todos os materiais
app.get("/materials", (req, res) => {
  res.json(materials);
});

// Rota para obter um material pelo nome
app.get("/materials/:name", (req, res) => {
  const material = materials.find(m => m.name.toLowerCase() === req.params.name.toLowerCase());
  if (material) {
    res.json(material);
  } else {
    res.status(404).json({ message: "Material não encontrado" });
  }
});

app.listen(PORT, () => {
  console.log(`🔥 API rodando em http://localhost:${PORT}`);
});
