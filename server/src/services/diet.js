const moment = require('moment');
const { db } = require('./../models');
const { 
  mapDietList,
  mapAdminDietList,
  buildDietBody,
  buildUpdateDietBody,
  mapDietReportResponse
} = require('./../mappers/dietResponse');
const { dateRangeForWeek, dateRangeForDate, dateRangeForLastSevenDays } = require('./diet.business')

const createDiet = async (request, response) => {
    try {
      const body = buildDietBody(request.user.id, request.body);
      await db.user_diets.create(body);
    
      response.sendStatus(204);
    } catch(error) {
      response.status(500).send({ message: error.message })
    }
}

const createRootDiet = async (request, response) => {
  try {
    const body = buildDietBody(request.params.userId, request.body);
    await db.user_diets.create(body);
  
    response.sendStatus(204);
  } catch(error) {
    response.status(500).send({ message: error.message })
  }
}

const deleteDiet = async (request, response) => {
  try {
    await db.user_diets.destroy({ where: { id: request.params.id } });
    response.sendStatus(204);
  } catch(error) {
    response.status(500).send({ message: error.message })
  }
}

const updateDiet = async (request, response) => {
  try {
    const updateBody = buildUpdateDietBody(request.body);
    await db.user_diets.update(updateBody, { where: { id: request.params.id } });
    response.sendStatus(204);
  } catch(error) {
    response.status(500).send({ message: error.message })
  }
}

const getDietList = async (request, response) => {
  try {
    const { startDate, endDate } = request.query;
    const where = { user_id: request.user.id };
    if(startDate && endDate) {
       where.consumed_at = {
         $between: [
          moment(startDate).startOf('day').format(),
          moment(endDate).endOf('day').format(),
        ]
      }
    }
   
    const list = await db.user_diets.findAll({ where, order: [['consumed_at', 'desc']] }); 
    response.json(mapDietList(list));
  } catch(error) {
    response.status(500).send({ message: error.message })
  }
}

const getAllDiets = async (request, response) => {
  try {  
    const list = await db.user_diets.findAll({ 
      order: [['id', 'desc']],
      include: [{
        model: db.users,
        as: 'user',
        attributes: ['id', 'name']
      }]
    }); 
    response.json(mapAdminDietList(list));
  } catch(error) {
    response.status(500).json({message: error.message})
  }
}

const getUserDietReports = async(request, response) => {
  try {
   const lastWeekOneRange = dateRangeForWeek(1);
   const lastWeekTwoRange = dateRangeForWeek(2);
   const todayRange = dateRangeForDate();
   const lastSevenDaysRange = dateRangeForLastSevenDays();
   const lastWeekCountPromise = db.user_diets.count({ where: { createdAt: {  $between: lastWeekOneRange }}});
   const secondLastWeekCountPromise = db.user_diets.count({ where: { createdAt: {  $between: lastWeekTwoRange }}});
   const todayCountPromise = db.user_diets.count({ where: { createdAt: {  $between: todayRange }}});
   const lastSevenDaysSumCalPromise = db.users.findAll({ 
    attributes: ['id', 'name'],
    include: [{
      attributes: [[db.sequelize.fn('sum', db.sequelize.col('calories')), 'totalCalories']],
      model: db.user_diets,
      as: 'diets',
      where: { createdAt: {  $between: lastSevenDaysRange }},
    }],
    group: ['users.id', 'diets.id'],
  });

   const [lastWeekEntriesCount, secondLastWeekEntriesCount, todayEntriesCount, lastSevenDaysSumCalResponse] = await Promise.all([
    lastWeekCountPromise,
    secondLastWeekCountPromise,
    todayCountPromise,
    lastSevenDaysSumCalPromise
  ]);

   response.json(mapDietReportResponse({
    lastWeekEntriesCount,
    secondLastWeekEntriesCount,
    todayEntriesCount,
    lastSevenDaysSumCalResponse
  }));

  } catch(error) {
    response.status(500).json({message: error.message})
  }
}

module.exports = {
    createDiet,
    getDietList,
    getAllDiets,
    createRootDiet,
    deleteDiet,
    updateDiet,
    getUserDietReports
}