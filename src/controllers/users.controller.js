import User from '../models/User';

class UserController{

	static async list(request, response){

		let status = 200;
		let body = {};

		try{
			let users = await User.find();
			body = {users, 'message': 'List Users'};
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
			let user = await User.create({
				name: request.body.name,
				role: request.body.role,
				mdp: request.body.mdp
			});

			body = {user, 'message': 'User created'}

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
			let user = await User.findById(id);
			body = {user, 'message': 'Details'};

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
			await User.deleteOne({_id: id});

			body = {user, 'message': 'Delete'};
 
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
			let user = await User.findById(id);
			await user.update(req.body)

			body = {user, 'message': 'Update'};

		}catch (error){
			status = 500;
			body = {'message': error.message};
		}

		return response.status(200).json(body);
	}
}	

export default UserController;