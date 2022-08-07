import moment from "moment"

const getCaloriesValueSum = (value1: number, diet: UserDiet) => {
 return value1 + parseFloat(diet.calories);
}

export const calculateTodayDietSum = (dietList: UserDiet[]) => {
  const today = moment(new Date()).format('MM-DD-YYYY');
  return dietList
   .filter(item => !item.isCheatDiet && today === moment(new Date(item.consumedAt)).format('MM-DD-YYYY'))
   .reduce(getCaloriesValueSum, 0);
}

export const groupDietListBasedOnDates = (dietList: UserDiet[]) => {
  return dietList.filter(item => !item.isCheatDiet).reduce((prev: any, current) => {
    const date = moment(new Date(current.consumedAt)).format('MM-DD-YYYY');
      if(prev[date]) {
        prev[date] = getCaloriesValueSum(prev[date], current);
      } else {
        prev[date] = getCaloriesValueSum(0, current);
      }
      return prev
  }, [])
}

export const isValueUndefined = (val: any) => val === undefined;