import { all, takeLatest, take } from "redux-saga/effects"

// Redux files
import { PlaygroundTypes } from "../redux/playground"
import { WeatherTypes } from "../redux/weather"
// Saga files
import { playgroundTestSaga } from "./playground"
import { getWeatherSaga } from "./weather"

import API from "../utils/api"

const api = API.create()

export default function* rootSaga() {
	yield all([
		takeLatest(PlaygroundTypes.PLAYGROUND1, playgroundTestSaga, api),
		takeLatest(WeatherTypes.GET_WEATHER_REQUEST, getWeatherSaga, api)
	])
}
