import { getLocalData } from 'src/helpers/storage';
import { CalorieTextStyled } from './CalorieText.styled';

interface Props {
    calories: number;
}

export const CalorieText = ({ calories }: Props ) => {
    const user: UserProfile = getLocalData('user');
    return (
        <CalorieTextStyled 
            threshold={user?.thresholdCalories} 
            cal={calories}>{calories?.toFixed(3)} kcal
       </CalorieTextStyled>
    )
}

