import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation"

import MenuScreen from "../screens/MenuScreen";
import StartGameScreen from "../screens/StartGameScreen";
import GameScreen from "../screens/GameScreen";
import GameOverScreen from "../screens/GameOverScreen";


const MealsNavigator = createStackNavigator({
    StartGame: StartGameScreen,
    Menu: MenuScreen,
    MealDetail: MealDetailScreen,
});

export default createAppContainer(MealsNavigator);

