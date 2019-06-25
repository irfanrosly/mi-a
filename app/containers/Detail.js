import React from "react"
import { connect } from "react-redux"
import moment from "moment"

import DetailScreen from "../screens/DetailScreen"

class Detail extends React.Component {
	kelvinToCelcius = value => {
		return (value = Math.round(((value - 273.15) * 9) / 5 + 32))
	}

	convertUnix = time => {
		return (time = moment.unix(time).format("ddd, D MMM YYYY h:mm A"))
	}

	goBack = () => {
		this.props.navigation.goBack()
	}

	render() {
		return (
			<DetailScreen
				data={this.props.navigation.state.params.params}
				temperatureConverter={this.kelvinToCelcius}
				timeConverter={this.convertUnix}
				goBack={this.goBack}
			/>
		)
	}
}

const mapStateToProps = state => ({
	// data: state.weather.data
})

const mapDispatchToProps = dispatch => {
	return {
		// getWeather: () => dispatch(WeatherActions.getWeatherRequest())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Detail)
