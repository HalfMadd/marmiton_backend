import Ingredient from '../models/Ingredient';

class IngredientController{

	static async list(request, response){

		let status = 200;
		let body = {};

		try{
			let ingredients = await Ingredient.find();
			body = {ingredients, 'message': 'List Ingredients'};
		}catch (error) {
			status = 500;
			body = {'message': error.message};
		}

		return response.status(200).json(body);
	}

	static async create(request, response){
		let status = 200;
		let body = {};

		try{
			let ingredient = await Ingredient.create({
				name: request.body.name,
				role: request.body.role
			});

			body = {ingredient, 'message': 'Ingredient created'}

		}catch (error) {
			status = 500;
			body = {'message': error.message};
		}

		return response.status(200).json(body);
	}

	static async details(request, response){
		let status = 200;
		let body = {};

		console.log(request.params);

		try{
			let id = request.params.id;
			let ingredient = await Ingredient.findById(id);
			body = {ingredient, 'message': 'Details'};

		}catch (error){
			status = 500;
			body = {'message': error.message};
		}

		return response.status(200).json(body);
	}

	static async delete(request, response){
		let status = 200;
		let body = {};

		console.log(request.params);

		try{
			let id = request.params.id;
			await Ingredient.deleteOne({_id: id});

			body = {ingredient, 'message': 'Delete'};
 
		}catch (error){
			status = 500;
			body = {'message': error.message};
		}

		return response.status(200).json(body);
	}

	static async update(request, response){
		let status = 200;
		let body = {};

		console.log(request.params);

		try{
			let id = request.params.id;
			let ingredient = await Ingredient.findById(id);
			await ingredient.update(req.body)

			body = {ingredient, 'message': 'Update'};

		}catch (error){
			status = 500;
			body = {'message': error.message};
		}

		return response.status(200).json(body);
	}
}	

export default IngredientController;