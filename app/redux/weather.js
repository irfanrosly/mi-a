import { createReducer, createActions } from "reduxsauce"
import Immutable from "seamless-immutable"

const { Types, Creators } = createActions({
	getWeatherRequest: null,
	getWeatherRequestSuccess: ["payload"],
	getWeatherRequestFail: ["payload"]
})

export const WeatherTypes = Types
export default Creators

const INITIAL_STATE = Immutable({
	text: "Weather Redux",
	data: {},
	loading: false
})

const getWeatherRequest = (state, action) => {
	return state.merge({
		loading: true
	})
}

const getWeatherRequestSuccess = (state, action) => {
	return state.merge({
		data: action.payload,
		loading: false
	})
}

const getWeatherRequestFail = (state, action) => {
	return state.merge({
		data: action.payload,
		loading: false
	})
}

export const weather = createReducer(INITIAL_STATE, {
	[Types.GET_WEATHER_REQUEST]: getWeatherRequest,
	[Types.GET_WEATHER_REQUEST_SUCCESS]: getWeatherRequestSuccess,
	[Types.GET_WEATHER_REQUEST_FAIL]: getWeatherRequestFail
})
