import React from "react"
import { StyleSheet, Text, View, FlatList, StatusBar } from "react-native"

import { Header, ListItem } from "../components"
import { Colors } from "../constants"
const HomeScreen = props => (
	<View style={styles.container}>
		<StatusBar backgroundColor="" barStyle="light-content" />
		<Header title={`${props.data.city.name}, ${props.data.city.name}`} />
		<View style={{ flex: 0.2, alignItems: "center", paddingTop: 20 }}>
			<Text style={{ fontWeight: "bold", fontSize: 20 }}>
				{props.timeConverter(props.data.list[0].dt)} SGT
			</Text>
			<Text style={{ fontSize: 40, marginTop: 10 }}>
				{props.temperatureConverter(props.data.list[0].main.temp)}
			</Text>
			<Text style={{ fontSize: 20, marginTop: 10, color: Colors.GREY }}>
				{props.data.list[0].weather[0].main}
			</Text>
		</View>
		<View style={{ flex: 0.7 }}>
			<FlatList
				data={props.data.list}
				renderItem={({ item }) => (
					<ListItem
						date={item.dt}
						maxTemperature={item.main.temp_max}
						minTemperature={item.main.temp_min}
						condition={item.weather[0].main}
						temperatureConverter={props.temperatureConverter}
						timeConverter={props.timeConverter}
					/>
				)}
				keyExtractor={(item, index) => index.toString()}
			/>
		</View>
	</View>
)

export default HomeScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff"
	}
})
