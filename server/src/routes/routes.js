const { loginUser, logoutUser } = require('../services/login');
const { createDiet, getDietList, getAllDiets, createRootDiet, deleteDiet, updateDiet, getUserDietReports } =require('../services/diet');
const { securize, securizeAdmin } = require('./routes.business');

module.exports = (app) => {
  app.post('/login', loginUser);
  app.post('/logout', securize, logoutUser);
  app.post('/diet', securize, createDiet);
  app.post('/diet/:userId', securizeAdmin, createRootDiet);
  app.delete('/diet/:id', securizeAdmin, deleteDiet);
  app.put('/diet/:id', securizeAdmin, updateDiet);
  app.get('/diet-list', securize, getDietList);
  app.get('/all-diets', securizeAdmin, getAllDiets);
  app.get('/report-count', securizeAdmin, getUserDietReports);
}