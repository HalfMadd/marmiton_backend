import Categorie from '../models/Categorie';

class CategorieController{

	static async list(request, response){

		let status = 200;
		let body = {};

		try{
			let categories = await Categorie.find();
			body = {categories, 'message': 'List Categories'};
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
			let categorie = await Categorie.create({
				nom: request.body.nom,
				role: request.body.role
			});

			body = {categorie, 'message': 'Categorie created'}

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
			let categorie = await Categorie.findById(id);
			body = {categorie, 'message': 'Details'};

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
			await Categorie.deleteOne({_id: id});

			body = {categorie, 'message': 'Delete'};
 
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
			let categorie = await Categorie.findById(id);
			await categorie.update(req.body)

			body = {categorie, 'message': 'Update'};

		}catch (error){
			status = 500;
			body = {'message': error.message};
		}

		return response.status(200).json(body);
	}
}	

export default CategorieController;