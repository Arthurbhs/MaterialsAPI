export default {
	async fetch(request) {
	  // Lida com requisições OPTIONS (pré-flight CORS)
	  if (request.method === "OPTIONS") {
		return new Response(null, {
		  status: 204,
		  headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET,OPTIONS",
			"Access-Control-Allow-Headers": "*",
		  },
		});
	  }
  
	  // Dados simulados (substitua por sua lógica real)
	  const data = [
		{
		  name: "Alumínio",
		  type: "Metal",
		  density: 2800,
		  thermalConductivityDry: 204,
		  thermalConductivityWet: 204,
		  image: "https://thermoflowcalculator.netlify.app/imagens/aluminio.jpeg ",
		  thumbnail: "https://thermoflowcalculator.netlify.app/thumbnail/aluminio.jpeg",
		  description: "O alumínio é um metal leve e altamente condutor de calor, amplamente utilizado em aplicações estruturais e de troca térmica."
		},
		{
		  name: "Cobre",
		  type: "Metal",
		  density: 9000,
		  thermalConductivityDry: 372,
		  thermalConductivityWet: 372,
		  image: "https://thermoflowcalculator.netlify.app/imagens/cobre.jpeg ",
		  thumbnail: "https://thermoflowcalculator.netlify.app/thumbnail/cobre.jpg",
		  description: "Conhecido por sua excelente condutividade térmica e elétrica, o cobre é essencial em sistemas de refrigeração e elétrica."
		},
		{
		  name: "Ligas",
		  type: "Metal",
		  density: 12250,
		  thermalConductivityDry: 35,
		  thermalConductivityWet: 35,
		  image: "https://thermoflowcalculator.netlify.app/imagens/ligas.jpg ",
		  thumbnail: "https://thermoflowcalculator.netlify.app/thumbnail/ligas.avif",
		  description: "As ligas metálicas combinam dois ou mais elementos para melhorar propriedades como resistência mecânica ou resistência à corrosão."
		},
		{
		  name: "Aço/Ferro",
		  type: "Metal",
		  density: 7800,
		  thermalConductivityDry: 52,
		  thermalConductivityWet: 52,
		  image: "https://thermoflowcalculator.netlify.app/imagens/metal.jpg ",
		  thumbnail: "https://thermoflowcalculator.netlify.app/thumbnail/metal.jpg",
		  description: "O aço e o ferro são materiais fundamentais na construção civil e mecânica, oferecendo alta resistência e razoável condutividade térmica."
		},
		{
		  name: "Zinco",
		  type: "Metal",
		  density: 7200,
		  thermalConductivityDry: 110,
		  thermalConductivityWet: 110,
		  image: "https://thermoflowcalculator.netlify.app/imagens/zinco.jpg   ",
		  thumbnail: "https://thermoflowcalculator.netlify.app/thumbnail/zinco.avif",
		  description: "O zinco é amplamente utilizado para galvanização, protegendo outros metais da corrosão graças à sua boa resistência e condutividade."
		},
		{
		  name: "Basalto/Granito",
		  type: "Pedra Natural",
		  density: 3000,
		  thermalConductivityDry: 3.5,
		  thermalConductivityWet: 3.5,
		  image: "https://thermoflowcalculator.netlify.app/imagens/basalto.jpeg",
		  thumbnail: "https://thermoflowcalculator.netlify.app/thumbnail/granito.jpeg",
		  description: "Pedras naturais como o basalto e o granito são densas e duráveis, sendo utilizadas em pisos, bancadas e aplicações térmicas."
		},
		{
		  name: "Calcário/Mármore",
		  type: "Pedra Natural",
		  density: 2700,
		  thermalConductivityDry: 2.5,
		  thermalConductivityWet: 2.5,
		  image: "https://thermoflowcalculator.netlify.app/imagens/calcario.jpeg",
		  thumbnail: "https://thermoflowcalculator.netlify.app/thumbnail/calcario.avif",
		  description: "O calcário e o mármore são amplamente usados na construção e acabamento, com boa capacidade térmica e aparência estética."
		},
		{
		  name: "Arenito",
		  type: "Pedra Natural",
		  density: 2600,
		  thermalConductivityDry: 1.6,
		  thermalConductivityWet: 1.6,
		  image: "https://thermoflowcalculator.netlify.app/imagens/arenito.jpeg",
		  thumbnail: "https://thermoflowcalculator.netlify.app/thumbnail/arenito.jpeg",
		  description: "O arenito é uma rocha sedimentar utilizada em construções históricas e modernas, com isolamento térmico moderado."
		},
		{
		  name: "Tijolo",
		  type: "Alvenaria",
		  density: "1600-1900",
		  thermalConductivityDry: "0.6-0.7",
		  thermalConductivityWet: "0.9-1.2",
		  image: "https://thermoflowcalculator.netlify.app/imagens/tijolo.jpeg   ",
		  thumbnail: "https://thermoflowcalculator.netlify.app/thumbnail/tijolo.jpeg ",
		  description: "O tijolo é um dos principais elementos de alvenaria, com propriedades térmicas que variam conforme a umidade e composição."
		},
		{
		  name: "Tijolo de Areia-Cal",
		  type: "Alvenaria",
		  density: 1900,
		  thermalConductivityDry: 0.9,
		  thermalConductivityWet: 1.4,
		  image: "https://thermoflowcalculator.netlify.app/imagens/tijoloCinza.jpeg ",
		  thumbnail: "https://thermoflowcalculator.netlify.app/thumbnail/tijoloCinza.jpeg",
		  description: "Esse tipo de tijolo é feito de areia e cal, oferecendo maior resistência e condutividade térmica em ambientes úmidos."
		},
		{
		  name: "Concreto de Cascalho",
		  type: "Concreto",
		  density: "2300-2500",
		  thermalConductivityDry: 2.0,
		  thermalConductivityWet: 2.0,
		  image: "https://thermoflowcalculator.netlify.app/imagens/concretoCascalho.jpg ",
		  thumbnail: "https://thermoflowcalculator.netlify.app/thumbnail/Concretocascalho.jpg",
		  description: "O concreto com cascalho é denso e possui boa condutividade térmica, utilizado em fundações e estruturas robustas."
		},
		{
		  name: "Concreto Leve",
		  type: "Concreto",
		  density: "1600-1900",
		  thermalConductivityDry: "0.7-0.9",
		  thermalConductivityWet: "1.2-1.4",
		  image: "https://thermoflowcalculator.netlify.app/imagens/concretoLeve.jpeg ",
		  thumbnail: "https://thermoflowcalculator.netlify.app/thumbnail/concretoLeve.jpg",
		  description: "Utilizado em construções que exigem menor peso, o concreto leve tem menor condutividade térmica e boa eficiência energética."
		},
		{
		  name: "Vidro",
		  type: "Inorgânico",
		  density: 2500,
		  thermalConductivityDry: 0.8,
		  thermalConductivityWet: 0.8,
		  image: "https://thermoflowcalculator.netlify.app/imagens/vidro.jpeg ",
		  thumbnail: "https://thermoflowcalculator.netlify.app/thumbnail/vidro.avif",
		  description: "O vidro é um material transparente com boa condutividade térmica, utilizado em janelas e sistemas de isolamento."
		},
		{
		  name: "Lã de Vidro",
		  type: "Inorgânico",
		  density: 150,
		  thermalConductivityDry: 0.04,
		  thermalConductivityWet: null,
		  image: "https://thermoflowcalculator.netlify.app/imagens/laVidro.jpeg ",
		  thumbnail: "https://thermoflowcalculator.netlify.app/thumbnail/laDeVidro.jpeg",
		  description: "Material isolante leve e poroso, a lã de vidro é eficiente na retenção de calor e no isolamento acústico."
		},
		{
		  name: "Madeira Folhosa",
		  type: "Madeira",
		  density: 800,
		  thermalConductivityDry: 0.17,
		  thermalConductivityWet: 0.23,
		  image: "https://thermoflowcalculator.netlify.app/imagens/madeiraFolhada.jpeg",
		  thumbnail: "https://thermoflowcalculator.netlify.app/thumbnail/madeiraFolhosa.jpeg",
		  description: "Madeiras folhosas são duras e densas, com boas propriedades térmicas e resistência natural."
		},
		{
		  name: "Madeira Leve",
		  type: "Madeira",
		  density: 550,
		  thermalConductivityDry: 0.14,
		  thermalConductivityWet: 0.17,
		  image: "https://thermoflowcalculator.netlify.app/imagens/madeiraLeve.jpeg ",
		  thumbnail: "https://thermoflowcalculator.netlify.app/thumbnail/madeiraLeve.jpeg",
		  description: "A madeira leve é utilizada em construções temporárias e interiores, oferecendo isolamento térmico moderado."
		},
		{
		  name: "Poliéster",
		  type: "Sintético",
		  density: 1200,
		  thermalConductivityDry: 0.17,
		  thermalConductivityWet: null,
		  image: "https://thermoflowcalculator.netlify.app/imagens/poliester.jpeg ",
		  thumbnail: "https://thermoflowcalculator.netlify.app/thumbnail/poliester.jpeg",
		  description: "Polímero sintético usado em aplicações têxteis e isolamentos, com baixa condutividade térmica."
		},
		{
		  name: "Polietileno/Polipropileno",
		  type: "Sintético",
		  density: 930,
		  thermalConductivityDry: 0.17,
		  thermalConductivityWet: null,
		  image: "https://thermoflowcalculator.netlify.app/imagens/polietileno.jpeg",
		  thumbnail: "https://thermoflowcalculator.netlify.app/thumbnail/polipropileno.jpeg",
		  description: "Plásticos comuns em isolamentos e embalagens, apresentam boa resistência química e baixa condutividade térmica."
		},
		{
		  name: "Água",
		  type: "Líquido",
		  density: 1000,
		  thermalConductivityDry: 0.58,
		  thermalConductivityWet: null,
		  image: "https://thermoflowcalculator.netlify.app/imagens/agua.jpeg ",
		  thumbnail: "https://thermoflowcalculator.netlify.app/thumbnail/agua.jpeg",
		  description: "A água possui alta capacidade térmica, sendo utilizada em sistemas de aquecimento e resfriamento."
		},
		{
		  name: "Gelo",
		  type: "Sólido",
		  density: 900,
		  thermalConductivityDry: 2.2,
		  thermalConductivityWet: null,
		  image: "https://thermoflowcalculator.netlify.app/imagens/gelo.jpeg ",
		  thumbnail: "https://thermoflowcalculator.netlify.app/thumbnail/gelo.jpeg",
		  description: "O gelo é uma forma sólida da água, com alta condutividade térmica e aplicado em conservação térmica e estudos climáticos."
		},
		{
		  name: "Solo Florestal",
		  type: "Solo",
		  density: 1450,
		  thermalConductivityDry: 0.8,
		  thermalConductivityWet: null,
		  image: "https://thermoflowcalculator.netlify.app/imagens/solo.jpeg ",
		  thumbnail: "https://thermoflowcalculator.netlify.app/thumbnail/solo.jpeg",
		  description: "Composto por matéria orgânica e minerais, o solo florestal possui condutividade térmica variável e influencia o balanço térmico do ambiente."
		}
	  ];
	  // Resposta principal com cabeçalho CORS
	  return new Response(JSON.stringify(data), {
		status: 200,
		headers: {
		  "Content-Type": "application/json",
		  "Access-Control-Allow-Origin": "*", 
		},
	  });
	},
  };
  