// Importer les modules nécessaires
const express = require('express');
const cors = require('cors');

// Initialiser l'application Express
const app = express();
const port = 3000;

// Utiliser CORS pour permettre les requêtes cross-origin
app.use(cors());

// Données fictives pour les secteurs
const sectorsData = {
  aeronautique: [
    { name: 'Secteur A1', location: 'Location A1' },
    { name: 'Secteur A2', location: 'Location A2' },
    { name: 'Secteur A3', location: 'Location A3' },
  ],
  tech: [
    { name: 'Secteur T1', location: 'Location T1' },
    { name: 'Secteur T2', location: 'Location T2' },
    { name: 'Secteur T3', location: 'Location T3' },
  ],
  distribution: [
    { name: 'Secteur D1', location: 'Location D1' },
    { name: 'Secteur D2', location: 'Location D2' },
    { name: 'Secteur D3', location: 'Location D3' },
  ],
  aliments_et_boissons: [
    { name: 'Secteur AB1', location: 'Location AB1' },
    { name: 'Secteur AB2', location: 'Location AB2' },
    { name: 'Secteur AB3', location: 'Location AB3' },
  ],
  industrie: [
    { name: 'Secteur I1', location: 'Location I1' },
    { name: 'Secteur I2', location: 'Location I2' },
    { name: 'Secteur I3', location: 'Location I3' },
  ],
  sante: [
    { name: 'Secteur S1', location: 'Location S1' },
    { name: 'Secteur S2', location: 'Location S2' },
    { name: 'Secteur S3', location: 'Location S3' },
  ],
};

// Définir la route pour récupérer les secteurs
app.get('/api/sectors', (req, res) => {
  res.json(sectorsData);
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
