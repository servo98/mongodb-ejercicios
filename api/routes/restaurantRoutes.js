import express from 'express';
import { restaurantController } from '../controllers/index.js';

const router = express.Router();

router.get('/allRestaurants', restaurantController.getAllRestaurants);
router.get('/first5', restaurantController.first5);

router.get('/get6to10', restaurantController.get6to10);

router.get('/getScoreGreater90', restaurantController.getScoreGreater90);

router.get(
  '/getScoreGreater80lessthan100',
  restaurantController.getScoreGreater80lessthan100
);
router.get('/americanGreater70', restaurantController.americanGreater70);

router.get('/firtsWithoutID', restaurantController.firtsWithoutID);

router.get('/allRestaurantNames', restaurantController.allRestaurantNames);

export default router;
