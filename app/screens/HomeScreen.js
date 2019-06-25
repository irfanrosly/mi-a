import React from "react"
import { StyleSheet, Text, View, FlatList, StatusBar } from "react-native"

import { Header, ListItem } from "../components"
import { Colors } from "../constants"
const HomeScreen = props => (
	<View style={styles.container}>
		<StatusBar backgroundColor="" barStyle="light-content" />
		<Header title="Singapore, Singapore" />
		<View style={{ flex: 0.2, alignItems: "center", paddingTop: 20 }}>
			<Text style={{ fontWeight: "bold", fontSize: 20 }}>Wed, 11 Jan 2017 01:00 PM SGT</Text>
			<Text style={{ fontSize: 40, marginTop: 10 }}>82</Text>
			<Text style={{ fontSize: 20, marginTop: 10, color: Colors.GREY }}>ThunderStorm</Text>
		</View>
		<View style={{ flex: 0.7 }}>
			<FlatList
				data={props.data}
				renderItem={({ item }) => (
					<ListItem date={item.date} temp={item.temp} condition={item.condition} />
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
