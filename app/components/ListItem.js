import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { Entypo } from "@expo/vector-icons"
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
			<Text style={{ fontWeight: "bold" }}>{props.timeConverter(props.data.dt)}</Text>
			<Text style={{ marginVertical: 3 }}>
				{props.temperatureConverter(props.data.main.temp_max)} -{" "}
				{props.temperatureConverter(props.data.main.temp_min)}
			</Text>
			<Text style={{ color: Colors.GREY }}>{props.data.weather[0].main}</Text>
		</View>
		<View
			style={{
				flex: 0.2,
				alignItems: "flex-end",
				justifyContent: "center"
			}}
		>
			<TouchableOpacity onPress={() => props.nav(props.data)}>
				<Entypo name="chevron-right" size={30} color={Colors.RED} />
			</TouchableOpacity>
		</View>
	</View>
)

export default ListItem
