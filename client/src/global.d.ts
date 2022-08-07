
declare interface AuthState {
  isLoggedIn: boolean;
  user: UserProfile | null;
  error: Error | string | null;
  isAdmin: boolean;
}

declare enum AppRoutePaths {
  LOGIN = '/login',
  HOME = '',
  REPORT = '/report'
}

declare interface AppComponentProps {
  component?: JSX.Element
  children?: JSX.Element;
}

declare interface AppRoute {
    pathName: string;
    name: string;
}

declare interface ILoginFormInput {
  email: string;
  password: string;
}

declare interface UserProfile {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
  thresholdCalories: number;
  token: string;
}

declare interface ErrorResponse {
  message: string;
}

declare interface ICalorieFormInput {
  name: string;
  calories: number;
  consumedAt: Date;
  isCheatDiet: boolean;
}

declare interface UserDiet {
  id: number;
  name: string;
  calories: string;
  consumedAt: Date | string;
  isCheatDiet: boolean;
}

declare interface AdminDietList extends UserDiet{
  user: IUser
}

declare interface IUser {
  id: number;
  name: string;
}

declare interface DietListParams {
  startDate: string;
  endDate: string;
}

declare interface IAdminReportCount {
  lastWeekEntriesCount: number;
  secondLastWeekEntriesCount: number;
  todayEntriesCount: number;
  lastSevenDaysSumCalResponse: ILastSevenDaysSumCal[]
}

declare interface ILastSevenDaysSumCal {
  totalCalories: string;
  user: IUser
}

declare interface ITableColumn {
  accessor: string;
  header: string;
  format?: (value: any) => any 
}