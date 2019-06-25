import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { Colors } from "../constants"
const ListItem = props => (
	<View
		style={{
			height: 100,
			borderBottomWidth: 0.5,
			borderBottomColor: Colors.GREY,
			paddingHorizontal: 20,
			paddingTop: 20,
			flexDirection: "row"
		}}
	>
		<View style={{ flex: 0.8 }}>
			<Text style={{ fontWeight: "bold" }}>{props.timeConverter(props.date)}</Text>
			<Text style={{ marginVertical: 3 }}>
				{props.temperatureConverter(props.minTemperature)} -{" "}
				{props.temperatureConverter(props.maxTemperature)}
			</Text>
			<Text style={{ color: Colors.GREY }}>{props.condition}</Text>
		</View>
		<View
			style={{
				flex: 0.2,
				alignItems: "flex-end",
				justifyContent: "center"
			}}
		>
			<TouchableOpacity onPress={() => alert(props.date)}>
				<MaterialIcons name="chevron-right" size={40} color={Colors.RED} />
			</TouchableOpacity>
		</View>
	</View>
)

export default ListItem
