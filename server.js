const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Dados de materiais sólidos
const materials = [
  // Metais
  { symbol: "Al", name: "Alumínio", type: "Metal", thermalConductivity: 205 },
  { symbol: "Cu", name: "Cobre", type: "Metal", thermalConductivity: 385 },
  { symbol: "Fe", name: "Ferro", type: "Metal", thermalConductivity: 80 },
  { symbol: "Ag", name: "Prata", type: "Metal", thermalConductivity: 429 },
  { symbol: "Au", name: "Ouro", type: "Metal", thermalConductivity: 318 },
  { symbol: "Pb", name: "Chumbo", type: "Metal", thermalConductivity: 35.3 },
  { symbol: "Zn", name: "Zinco", type: "Metal", thermalConductivity: 116 },
  { symbol: "Ti", name: "Titânio", type: "Metal", thermalConductivity: 22 },
  { symbol: "Sn", name: "Estanho", type: "Metal", thermalConductivity: 67 },
  { symbol: "W", name: "Tungstênio", type: "Metal", thermalConductivity: 174 },
  { symbol: "Ni", name: "Níquel", type: "Metal", thermalConductivity: 90.9 },

  // Plásticos
  { symbol: "PE", name: "Polietileno", type: "Plástico", thermalConductivity: 0.4 },
  { symbol: "PP", name: "Polipropileno", type: "Plástico", thermalConductivity: 0.22 },
  { symbol: "PVC", name: "Policloreto de Vinila", type: "Plástico", thermalConductivity: 0.19 },
  { symbol: "PS", name: "Poliestireno", type: "Plástico", thermalConductivity: 0.033 },
  { symbol: "PET", name: "Polietileno Tereftalato", type: "Plástico", thermalConductivity: 0.24 },

  // Madeiras
  { symbol: "PM", name: "Pinho", type: "Madeira", thermalConductivity: 0.12 },
  { symbol: "CM", name: "Carvalho", type: "Madeira", thermalConductivity: 0.16 },
  { symbol: "BM", name: "Bambu", type: "Madeira", thermalConductivity: 0.14 },
  { symbol: "EM", name: "Eucalipto", type: "Madeira", thermalConductivity: 0.13 },

  // Rochas
  { symbol: "GR", name: "Granito", type: "Rocha", thermalConductivity: 3.5 },
  { symbol: "MR", name: "Mármore", type: "Rocha", thermalConductivity: 2.2 },
  { symbol: "AR", name: "Arenito", type: "Rocha", thermalConductivity: 1.7 },
  { symbol: "BX", name: "Basalto", type: "Rocha", thermalConductivity: 1.8 },

  // Papel
  { symbol: "PP", name: "Papel", type: "Papel", thermalConductivity: 0.05 },

  // Borracha
  { symbol: "BR", name: "Borracha", type: "Borracha", thermalConductivity: 0.15 },

  // Tecidos
  { symbol: "ALG", name: "Algodão", type: "Tecido", thermalConductivity: 0.04 },
  { symbol: "POL", name: "Poliéster", type: "Tecido", thermalConductivity: 0.05 },
  { symbol: "LÃ", name: "Lã", type: "Tecido", thermalConductivity: 0.035 },
  { symbol: "SED", name: "Seda", type: "Tecido", thermalConductivity: 0.045 },
  { symbol: "LIN", name: "Linho", type: "Tecido", thermalConductivity: 0.07 },
];

// Rota para obter todos os materiais
app.get("/materials", (req, res) => {
  res.json(materials);
});

// Rota para obter um material pelo símbolo (Ex: /materials/Cu)
app.get("/materials/:symbol", (req, res) => {
  const material = materials.find(m => m.symbol.toLowerCase() === req.params.symbol.toLowerCase());
  if (material) {
    res.json(material);
  } else {
    res.status(404).json({ message: "Material não encontrado" });
  }
});

app.listen(PORT, () => {
  console.log(`🔥 API rodando em http://localhost:${PORT}`);
});
