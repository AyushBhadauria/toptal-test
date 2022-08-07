module.exports = (user, token) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    isAdmin: user.is_admin,
    thresholdCalories: user.threshold_calories,
    token
})