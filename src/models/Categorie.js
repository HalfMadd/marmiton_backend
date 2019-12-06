import {Schema, model} from 'mongoose';

const categorieSchema = new Schema({

	nom: {
		type: String,
		required: true
	}
});

const Categorie = model('Categorie', categorieSchema);

export default Categorie;