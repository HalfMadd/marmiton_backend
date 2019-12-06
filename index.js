import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './src/routes/routes';
import database from './src/models/database';

// Création serveur
const app = express();

// Config serveur avec Cors et BodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors({origin: true}));

//utilisation routes
app.use('/', router);

// Lancement serveur
const port = 3001;

database()
	.then(async () => {
		console.log('Database server is connected');
		app.listen(port, () => {
			console.log(`Serveur lancé sur le port ${port}...`);
		});
	});

export default app;