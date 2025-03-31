const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Dados de materiais sólidos
const materials = [
  { name: "Alumínio", type: "Metal", density: 2800, thermalConductivityDry: 204, thermalConductivityWet: 204 },
  { name: "Cobre", type: "Metal", density: 9000, thermalConductivityDry: 372, thermalConductivityWet: 372 },
  { name: "Ligas", type: "Metal", density: 12250, thermalConductivityDry: 35, thermalConductivityWet: 35 },
  { name: "Aço/Ferro", type: "Metal", density: 7800, thermalConductivityDry: 52, thermalConductivityWet: 52 },
  { name: "Zinco", type: "Metal", density: 7200, thermalConductivityDry: 110, thermalConductivityWet: 110 },
  { name: "Basalto/Granito", type: "Pedra Natural", density: 3000, thermalConductivityDry: 3.5, thermalConductivityWet: 3.5 },
  { name: "Calcário/Mármore", type: "Pedra Natural", density: 2700, thermalConductivityDry: 2.5, thermalConductivityWet: 2.5 },
  { name: "Arenito", type: "Pedra Natural", density: 2600, thermalConductivityDry: 1.6, thermalConductivityWet: 1.6 },
  { name: "Tijolo", type: "Alvenaria", density: "1600-1900", thermalConductivityDry: "0.6-0.7", thermalConductivityWet: "0.9-1.2" },
  { name: "Tijolo de Areia-Cal", type: "Alvenaria", density: 1900, thermalConductivityDry: 0.9, thermalConductivityWet: 1.4 },
  { name: "Concreto de Cascalho", type: "Concreto", density: "2300-2500", thermalConductivityDry: 2.0, thermalConductivityWet: 2.0 },
  { name: "Concreto Leve", type: "Concreto", density: "1600-1900", thermalConductivityDry: "0.7-0.9", thermalConductivityWet: "1.2-1.4" },
  { name: "Vidro", type: "Inorgânico", density: 2500, thermalConductivityDry: 0.8, thermalConductivityWet: 0.8 },
  { name: "Lã de Vidro", type: "Inorgânico", density: 150, thermalConductivityDry: 0.04, thermalConductivityWet: null },
  { name: "Madeira Folhosa", type: "Madeira", density: 800, thermalConductivityDry: 0.17, thermalConductivityWet: 0.23 },
  { name: "Madeira Leve", type: "Madeira", density: 550, thermalConductivityDry: 0.14, thermalConductivityWet: 0.17 },
  { name: "Poliéster", type: "Sintético", density: 1200, thermalConductivityDry: 0.17, thermalConductivityWet: null },
  { name: "Polietileno/Polipropileno", type: "Sintético", density: 930, thermalConductivityDry: 0.17, thermalConductivityWet: null },
  { name: "Água", type: "Líquido", density: 1000, thermalConductivityDry: 0.58, thermalConductivityWet: null },
  { name: "Gelo", type: "Sólido", density: 900, thermalConductivityDry: 2.2, thermalConductivityWet: null },
  { name: "Solo Florestal", type: "Solo", density: 1450, thermalConductivityDry: 0.8, thermalConductivityWet: null },
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
