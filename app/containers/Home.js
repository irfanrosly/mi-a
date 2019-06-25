import React from "react"
import { connect } from "react-redux"
import moment from "moment"

import HomeScreen from "../screens/HomeScreen"
import WeatherActions from "../redux/weather"
import { Spinner } from "../components"

let data = require("./data.json")
class Home extends React.Component {
	componentDidMount = () => {
		this.props.getWeather()
	}

	kelvinToCelcius = value => {
		return (value = Math.round(((value - 273.15) * 9) / 5 + 32))
	}

	convertUnix = time => {
		return (time = moment.unix(time).format("D MMM YYYY h:mm A"))
	}

	render() {
		return this.props.data.city ? (
			<HomeScreen
				data={this.props.data}
				temperatureConverter={this.kelvinToCelcius}
				timeConverter={this.convertUnix}
			/>
		) : (
			<Spinner />
		)
	}
}

const mapStateToProps = state => ({
	data: state.weather.data
})

const mapDispatchToProps = dispatch => {
	return {
		getWeather: () => dispatch(WeatherActions.getWeatherRequest())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)
