const buildDietBody = (userId, { name, calories, consumedAt, isCheatDiet }) => {
  return {
    name,
    calories,
    user_id: userId,
    consumed_at: consumedAt,
    is_cheat_diet: isCheatDiet,
    created_at: new Date(),
  }
}

const buildUpdateDietBody = ({ name, calories, consumedAt, isCheatDiet }) => {
  return {
    ...(name && { name }),
    ...(calories && { calories }),
    ...(consumedAt && { consumed_at: consumedAt }),
    ...(isCheatDiet && { is_cheat_diet: isCheatDiet }),
  }
}

const mapDietList = (list) => {
  return list.map(item => ({
    id: item.id,
    name: item.name,
    calories: item.calories,
    consumedAt: item.consumed_at,
    isCheatDiet: item.is_cheat_diet,
    createdAt: item.created_at
  }))
}

const mapAdminDietList = ({rows, count}) => {
  const data = rows.map(item => ({
    id: item.id,
    name: item.name,
    calories: item.calories,
    consumedAt: item.consumed_at,
    isCheatDiet: item.is_cheat_diet,
    user: item.user,
    created_at: item.created_at
  }))

  return {
    count,
    data,
  }
}

const mapDietReportResponse = ({ lastSevenDaysSumCalResponse, ...rest }) => {
  return {
     ...rest,
     userLastSevenDaysSumCal: lastSevenDaysSumCalResponse.map(user => ({
      id: user.id,
      name: user.name,
      totalCalories: parseFloat(user.diets[0].dataValues.totalCalories),
      averageCalories: (parseFloat(user.diets[0].dataValues.totalCalories) / 7)
     }))
  }
}

module.exports = {
    buildDietBody,
    mapDietList,
    mapAdminDietList,
    buildUpdateDietBody,
    mapDietReportResponse
}