import Recette from "../models/Recette";

class RecetteController{

	static async list(request, response){

		let status = 200;
		let body = {};

		try{
			let recettes = await Recette.find();
			body = {recettes};
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
			let recette = await Recette.create({
				name: request.body.name,
				contenu: request.body.contenu,
				categories: request.body.categories,
				ingredients: request.body.ingredients,
				user_id: request.body.user_id
			});

			body = {recette, 'message': 'Recette created'}

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
			let recette = await Recette.findById(id);
			body = {recette, 'message': 'Details'};

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
			await Recette.deleteOne({_id: id});

			body = {'message': 'Delete'};

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
			let recette = await Recette.findById(id);
			await recette.update(request.body);

			body = {recette, 'message': 'Update'};

		}catch (error){
			status = 500;
			body = {'message': error.message};
		}

		return response.status(200).json(body);
	}
}	

export default RecetteController;