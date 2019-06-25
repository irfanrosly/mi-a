import React from "react"
import { createStackNavigator } from "react-navigation"

// import MainScreen from "../screens/Main/MainScreen";
import Home from "../containers/Home"
import Detail from "../containers/Detail"
export default createStackNavigator(
	{
		Home: Home,
		Detail: Detail
	},
	{
		initialRouteName: "Home",
		headerMode: "none",
		navigationOptions: {
			gesturesEnabled: false
		}
	}
)
