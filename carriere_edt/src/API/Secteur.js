const express = require('express');
const app = express();
const port = 3000;

const sectors = {
    aeronautique: [
        { name: "Airbus", location: "Blagnac, Haute-Garonne, France", employees: "Entre 50 et 250 salariés", offers: "8 offres" },
        { name: "Dassault Aviation", location: "Saint-Cloud, France", employees: "Entre 10 000 et 50 000 salariés", offers: "12 offres" },
        { name: "Thales Avionics", location: "Bordeaux, France", employees: "Plus de 10 000 salariés", offers: "20 offres" },
        { name: "Turbomeca", location: "Bordes, France", employees: "Entre 500 et 1000 salariés", offers: "5 offres" },
        { name: "Latécoère", location: "Toulouse, France", employees: "Entre 1000 et 5000 salariés", offers: "10 offres" },
        { name: "Safran Electronics & Defense", location: "Eragny-sur-Oise, France", employees: "Entre 1000 et 5000 salariés", offers: "15 offres" },
        { name: "Groupe Latecoere", location: "Toulouse, France", employees: "Entre 1000 et 5000 salariés", offers: "10 offres" },
        { name: "MBDA France", location: "Bourg-la-Reine, France", employees: "Plus de 10 000 salariés", offers: "25 offres" }
    ],
    tech: [
        { name: "Capgemini", location: "Paris, France", employees: "Plus de 100 000 salariés", offers: "50 offres" },
        { name: "Dassault Systèmes", location: "Vélizy-Villacoublay, France", employees: "Plus de 10 000 salariés", offers: "15 offres" },
        { name: "Ubisoft", location: "Montreuil, France", employees: "Plus de 10 000 salariés", offers: "30 offres" },
        { name: "OVHcloud", location: "Roubaix, France", employees: "Plus de 10 000 salariés", offers: "20 offres" },
        { name: "Criteo", location: "Paris, France", employees: "Plus de 10 000 salariés", offers: "25 offres" },
        { name: "Dailymotion", location: "Paris, France", employees: "Entre 1000 et 5000 salariés", offers: "10 offres" },
        { name: "Blizzard Entertainment", location: "Versailles, France", employees: "Plus de 10 000 salariés", offers: "30 offres" },
        { name: "Société Générale", location: "Paris, France", employees: "Plus de 100 000 salariés", offers: "50 offres" }
    ],
    distribution: [
        { name: "Carrefour", location: "Massy, France", employees: "Plus de 10 000 salariés", offers: "40 offres" },
        { name: "Auchan Retail", location: "Villeneuve-d'Ascq, France", employees: "Plus de 10 000 salariés", offers: "35 offres" },
        { name: "Leclerc", location: "Ivry-sur-Seine, France", employees: "Plus de 10 000 salariés", offers: "30 offres" },
        { name: "Intermarché", location: "Bondoufle, France", employees: "Plus de 10 000 salariés", offers: "25 offres" },
        { name: "Casino Group", location: "Saint-Étienne, France", employees: "Plus de 10 000 salariés", offers: "20 offres" },
        { name: "Lidl", location: "Strasbourg, France", employees: "Plus de 10 000 salariés", offers: "15 offres" },
        { name: "Decathlon", location: "Villeneuve-d'Ascq, France", employees: "Plus de 10 000 salariés", offers: "10 offres" },
        { name: "Fnac Darty", location: "Ivry-sur-Seine, France", employees: "Plus de 10 000 salariés", offers: "10 offres" }
    ],
    food: [
        { name: "Danone", location: "Paris, France", employees: "Plus de 100 000 salariés", offers: "50 offres" },
        { name: "Lactalis", location: "Laval, France", employees: "Plus de 100 000 salariés", offers: "45 offres" },
        { name: "Nestlé France", location: "Noisiel, France", employees: "Plus de 100 000 salariés", offers: "40 offres" },
        { name: "Ferrero", location: "Mont-Saint-Aignan, France", employees: "Plus de 100 000 salariés", offers: "35 offres" },
        { name: "Kraft Heinz Company", location: "Rueil-Malmaison, France", employees: "Plus de 100 000 salariés", offers: "30 offres" },
        { name: "Bonduelle", location: "Renescure, France", employees: "Plus de 10 000 salariés", offers: "25 offres" },
        { name: "Mars, Incorporated", location: "Haguenau, France", employees: "Plus de 10 000 salariés", offers: "20 offres" },
        { name: "Mondelez International", location: "Clichy, France", employees: "Plus de 10 000 salariés", offers: "15 offres" }
    ],
    industrie: [
        { name: "Renault", location: "Boulogne-Billancourt, France", employees: "Plus de 100 000 salariés", offers: "55 offres" },
        { name: "Peugeot", location: "Paris, France", employees: "Plus de 100 000 salariés", offers: "50 offres" },
        { name: "Air Liquide", location: "Paris, France", employees: "Plus de 100 000 salariés", offers: "45 offres" },
        { name: "Saint-Gobain", location: "Courbevoie, France", employees: "Plus de 100 000 salariés", offers: "40 offres" },
        { name: "Michelin", location: "Clermont-Ferrand, France", employees: "Plus de 100 000 salariés", offers: "35 offres" },
        { name: "L'Oréal", location: "Clichy, France", employees: "Plus de 100 000 salariés", offers: "30 offres" },
        { name: "Schneider Electric", location: "Rueil-Malmaison, France", employees: "Plus de 100 000 salariés", offers: "25 offres" },
        { name: "ArcelorMittal", location: "Paris, France", employees: "Plus de 100 000 salariés", offers: "20 offres" }
    ],
    sante: [
        { name: "Sanofi", location: "Paris, France", employees: "Plus de 100 000 salariés", offers: "60 offres" },
        { name: "Bayer", location: "Lyon, France", employees: "Plus de 100 000 salariés", offers: "55 offres" },
        { name: "GSK", location: "Marly-le-Roi, France", employees: "Plus de 100 000 salariés", offers: "50 offres" },
        { name: "Roche", location: "Boulogne-Billancourt, France", employees: "Plus de 100 000 salariés", offers: "45 offres" },
        { name: "Novo Nordisk", location: "Paris, France", employees: "Plus de 100 000 salariés", offers: "40 offres" },
        { name: "Merck", location: "Lyon, France", employees: "Plus de 100 000 salariés", offers: "35 offres" },
        { name: "Abbott", location: "Rungis, France", employees: "Plus de 100 000 salariés", offers: "30 offres" },
        { name: "AstraZeneca", location: "Paris, France", employees: "Plus de 100 000 salariés", offers: "25 offres" }
    ],
};

app.get('/api/sectors', (req, res) => {
    res.json(sectors);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
