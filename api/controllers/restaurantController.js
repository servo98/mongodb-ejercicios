import { Restaurant } from '../models/index.js';

const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    return res.json({
      msg: 'Restaurantes obtenidos',
      data: restaurants,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al buscar restaurantes',
      error,
    });
  }
};

const first5 = async (rqe, res) => {
  try {
    const restaurants = await Restaurant.find().limit(5);
    return res.json({
      msg: 'Restaurantes obtenidos',
      data: restaurants,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al buscar restaurantes',
      error,
    });
  }
};

const get6to10 = async (req, res) => {
  try {
    const restaurants = await Restaurant.find().limit(5).skip(5);
    return res.json({
      msg: 'Restaurantes obtenidos',
      data: restaurants,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al buscar restaurantes',
      error,
    });
  }
};

const getScoreGreater90 = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({
      grades: {
        $elemMatch: {
          score: {
            $gt: 90,
          },
        },
      },
    });
    return res.json({
      msg: 'Restaurantes obtenidos',
      data: restaurants,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al buscar restaurantes',
      error: error.message,
    });
  }
};

const getScoreGreater80lessthan100 = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({
      grades: {
        $elemMatch: {
          score: {
            $gt: 80,
            $lt: 100,
          },
        },
      },
    });
    return res.json({
      msg: 'Restaurantes obtenidos',
      data: restaurants,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al buscar restaurantes',
      error: error.message,
    });
  }
};

const americanGreater70 = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({
      cuisine: 'American ',
      grades: {
        $elemMatch: {
          score: {
            $gt: 70,
          },
        },
      },
    });
    return res.json({
      msg: 'Restaurantes obtenidos',
      data: restaurants,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al buscar restaurantes',
      error: error.message,
    });
  }
};

const firtsWithoutID = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({}, { _id: 0 }).limit(1);
    return res.json({
      msg: 'Restaurantes obtenidos',
      data: restaurants,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al buscar restaurantes',
      error: error.message,
    });
  }
};

const allRestaurantNames = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({}, { name: 1, _id: 0 });

    return res.json({
      msg: 'Restaurantes obtenidos',
      data: restaurants.map((restaurant) => {
        return restaurant.name;
      }),
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al buscar restaurantes',
      error: error.message,
    });
  }
};

export {
  getAllRestaurants,
  first5,
  get6to10,
  getScoreGreater90,
  getScoreGreater80lessthan100,
  americanGreater70,
  firtsWithoutID,
  allRestaurantNames,
};
