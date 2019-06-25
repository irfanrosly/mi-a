import React from "react"
import { StyleSheet, Text, View, StatusBar, Button } from "react-native"
import { Ionicons } from "@expo/vector-icons"

import { Header } from "../components"
import { Colors } from "../constants"
const DetailScreen = props => (
	<View style={styles.container}>
		<StatusBar barStyle="light-content" />
		<Header title="Singapore, Singapore" />
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<View>
				{props.data.weather[0].main === "Rain" ? (
					<Ionicons name="md-rainy" size={60} />
				) : (
					<Ionicons name="md-cloudy" size={60} />
				)}
			</View>
			<Text style={{ fontSize: 30 }}>{props.timeConverter(props.data.dt)}</Text>
			<Text style={{ fontSize: 30 }}>
				{props.temperatureConverter(props.data.main.temp)} {"\u2109"}
			</Text>
			<Button
				onPress={props.goBack}
				title="Back"
				color={Colors.RED}
				accessibilityLabel="Learn more about this purple button"
			/>
		</View>
	</View>
)

export default DetailScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff"
	}
})
