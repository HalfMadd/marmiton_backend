import {Router} from 'express';
import RecetteController from '../controllers/recettes.controller';
import UserController from '../controllers/users.controller';
import IngredientController from '../controllers/ingredients.controller';
import CategorieController from '../controllers/categories.controller';
import RoleController from '../controllers/roles.controller';

const router = Router();

router.get('/hello', function(req, res){
	res.send("Hello2");
});

//routes recettes
router.get('/recettes', RecetteController.list);
router.post('/recettes', RecetteController.create);
router.get('/recettes/:id', RecetteController.details);
router.delete('/recettes/:id', RecetteController.delete);
router.put('/recettes/update/:id', RecetteController.update);

//routes users
router.get('/users', UserController.list);
router.post('/users', UserController.create);
router.get('/users/:id', UserController.details);
router.delete('/users/:id', UserController.delete);
router.put('/users/:id', UserController.update);

//routes ingredients
router.get('/ingredients', IngredientController.list);
router.post('/ingredients', IngredientController.create);
router.get('/ingredients/:id', IngredientController.details);
router.delete('/ingredients/:id', IngredientController.delete);
router.put('/ingredients/:id', IngredientController.update);

//routes categories
router.get('/categories', CategorieController.list);
router.post('/categories', CategorieController.create);
router.get('/categories/:id', CategorieController.details);
router.delete('/categories/:id', CategorieController.delete);
router.put('/categories/:id', CategorieController.update);

//routes roles
router.get('/roles', RoleController.list);
router.post('/roles', RoleController.create);
router.get('/roles/:id', RoleController.details);
router.delete('/roles/:id', RoleController.delete);
router.put('/roles/:id', RoleController.update);


export default router;