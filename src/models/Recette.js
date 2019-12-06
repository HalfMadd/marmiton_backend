import {Schema, model} from 'mongoose';

const recetteSchema = new Schema({


	name: {
		type: String,
		required: true
	},
	contenu: {
		type: String,
		required: true
	},
	categories: {
		type: Array
	},
	ingredients: {
		type: Array
	},
	user_id: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
});

const Recette = model('Recette', recetteSchema);

export default Recette;