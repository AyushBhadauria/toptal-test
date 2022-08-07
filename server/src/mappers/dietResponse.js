const buildDietBody = (userId, { name, calories, consumedAt, isCheatDiet }) => {
  return {
    name,
    calories,
    user_id: userId,
    consumed_at: consumedAt,
    is_cheat_diet: isCheatDiet
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
  }))
}

const mapAdminDietList = (list) => {
  return list.map(item => ({
    id: item.id,
    name: item.name,
    calories: item.calories,
    consumedAt: item.consumed_at,
    isCheatDiet: item.is_cheat_diet,
    user: item.user,
    createdAt: item.createdAt
  }))
}

module.exports = {
    buildDietBody,
    mapDietList,
    mapAdminDietList,
    buildUpdateDietBody
}