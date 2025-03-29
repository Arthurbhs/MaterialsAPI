const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Dados de materiais sólidos
const materials = [
  { name: "Alumínio", type: "Metal", density: 2800, thermalConductivity: { dry: 204, wet: 204 } },
  { name: "Cobre", type: "Metal", density: 9000, thermalConductivity: { dry: 372, wet: 372 } },
  { name: "Ligas", type: "Metal", density: 12250, thermalConductivity: { dry: 35, wet: 35 } },
  { name: "Aço/Ferro", type: "Metal", density: 7800, thermalConductivity: { dry: 52, wet: 52 } },
  { name: "Zinco", type: "Metal", density: 7200, thermalConductivity: { dry: 110, wet: 110 } },
  { name: "Basalto/Granito", type: "Pedra Natural", density: 3000, thermalConductivity: { dry: 3.5, wet: 3.5 } },
  { name: "Calcário/Mármore", type: "Pedra Natural", density: 2700, thermalConductivity: { dry: 2.5, wet: 2.5 } },
  { name: "Arenito", type: "Pedra Natural", density: 2600, thermalConductivity: { dry: 1.6, wet: 1.6 } },
  { name: "Tijolo", type: "Alvenaria", density: "1600-1900", thermalConductivity: { dry: "0.6-0.7", wet: "0.9-1.2" } },
  { name: "Tijolo de Areia-Cal", type: "Alvenaria", density: 1900, thermalConductivity: { dry: 0.9, wet: 1.4 } },
  { name: "Concreto de Cascalho", type: "Concreto", density: "2300-2500", thermalConductivity: { dry: 2.0, wet: 2.0 } },
  { name: "Concreto Leve", type: "Concreto", density: "1600-1900", thermalConductivity: { dry: "0.7-0.9", wet: "1.2-1.4" } },
  { name: "Vidro", type: "Inorgânico", density: 2500, thermalConductivity: { dry: 0.8, wet: 0.8 } },
  { name: "Lã de Vidro", type: "Inorgânico", density: 150, thermalConductivity: { dry: 0.04, wet: null } },
  { name: "Madeira Folhosa", type: "Madeira", density: 800, thermalConductivity: { dry: 0.17, wet: 0.23 } },
  { name: "Madeira Leve", type: "Madeira", density: 550, thermalConductivity: { dry: 0.14, wet: 0.17 } },
  { name: "Poliéster", type: "Sintético", density: 1200, thermalConductivity: { dry: 0.17, wet: null } },
  { name: "Polietileno/Polipropileno", type: "Sintético", density: 930, thermalConductivity: { dry: 0.17, wet: null } },
  { name: "Água", type: "Líquido", density: 1000, thermalConductivity: { dry: 0.58, wet: null } },
  { name: "Gelo", type: "Sólido", density: 900, thermalConductivity: { dry: 2.2, wet: null } },
  { name: "Solo Florestal", type: "Solo", density: 1450, thermalConductivity: { dry: 0.8, wet: null } },
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
