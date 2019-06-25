import React from "react"
import { View, ActivityIndicator } from "react-native"
import { Colors } from "../constants"
const Spinner = () => (
	<View
		style={{
			flex: 1,
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: Colors.WHITETINT
		}}
	>
		<ActivityIndicator size="large" color={Colors.RED} />
	</View>
)

export default Spinner
