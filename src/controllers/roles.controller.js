import Role from '../models/Role';

class RoleController{

	static async list(request, response){

		let status = 200;
		let body = {};

		try{
			let roles = await Role.find();
			body = {roles, 'message': 'List Roles'};
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
			let role = await Role.create({
				name: request.body.name,
				role: request.body.role
			});

			body = {role, 'message': 'Role created'}

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
			let role = await Role.findById(id);
			body = {role, 'message': 'Details'};

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
			await Role.deleteOne({_id: id});

			body = {role, 'message': 'Delete'};
 
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
			let role = await Role.findById(id);
			await role.update(req.body)

			body = {role, 'message': 'Update'};

		}catch (error){
			status = 500;
			body = {'message': error.message};
		}

		return response.status(200).json(body);
	}
}	

export default RoleController;