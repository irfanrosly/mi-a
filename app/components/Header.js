import React from "react"
import { View, Text } from "react-native"
import { Colors } from "../constants"
const Header = props => (
	<View
		style={{
			flex: 0.1,
			backgroundColor: Colors.RED,
			alignItems: "center",
			justifyContent: "center",
			paddingTop: 20
		}}
	>
		<Text style={{ fontWeight: "bold", color: Colors.WHITE }}>{props.title}</Text>
	</View>
)

export default Header
