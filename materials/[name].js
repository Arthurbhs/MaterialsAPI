import { materials } from '../../data/materials.js';

export default function handler(req, res) {
  const { name } = req.query;
  const material = materials.find(m => m.name.toLowerCase() === name.toLowerCase());

  if (material) {
    res.status(200).json(material);
  } else {
    res.status(404).json({ message: "Material não encontrado" });
  }
}
