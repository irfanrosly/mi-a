import React from "react"
import { connect } from "react-redux"

import HomeScreen from "../screens/HomeScreen"

let data = [
	{ date: "11 Jan 2017, Wed", temp: "79-84", condition: "thunderstorm" },
	{ date: "11 Jan 2017, Wed", temp: "79-84", condition: "thunderstorm" },
	{ date: "11 Jan 2017, Wed", temp: "79-84", condition: "thunderstorm" },
	{ date: "11 Jan 2017, Wed", temp: "79-84", condition: "thunderstorm" },
	{ date: "11 Jan 2017, Wed", temp: "79-84", condition: "thunderstorm" },
	{ date: "11 Jan 2017, Wed", temp: "79-84", condition: "thunderstorm" },
	{ date: "11 Jan 2017, Wed", temp: "79-84", condition: "thunderstorm" },
	{ date: "11 Jan 2017, Wed", temp: "79-84", condition: "thunderstorm" },
	{ date: "11 Jan 2017, Wed", temp: "79-84", condition: "thunderstorm" },
	{ date: "11 Jan 2017, Wed", temp: "79-84", condition: "thunderstorm" }
]
class Home extends React.Component {
	componentDidMount = () => {
		// alert(this.props.test)
	}
	render() {
		return <HomeScreen data={data} />
	}
}

const mapStateToProps = state => ({
	test: state.playground.text
})

const mapDispatchToProps = dispatch => {
	return {
		// getStudent: (year, classs) => dispatch(StudentActions.getStudent(year, classs)),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)
