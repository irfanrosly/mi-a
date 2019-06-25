import React from "react"
import { createStackNavigator } from "react-navigation"

// import MainScreen from "../screens/Main/MainScreen";
import Home from "../containers/Home"

export default createStackNavigator(
	{
		Home: Home
	},
	{
		initialRouteName: "Home",
		headerMode: "none",
		navigationOptions: {
			gesturesEnabled: false
		}
	}
)
