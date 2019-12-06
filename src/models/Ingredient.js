import {Schema, model} from 'mongoose';

const ingredientSchema = new Schema({

	name: {
		type: String,
		required: true
	}
});

const Ingredient = model('Ingredient', ingredientSchema);

export default Ingredient;