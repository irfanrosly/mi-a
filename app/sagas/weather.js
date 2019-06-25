import WeatherActions from "../redux/weather"
import { call, put } from "redux-saga/effects"

export function* getWeatherSaga(api, action) {
	const response = yield call(api.getWeather)
	if (response.ok) {
		yield put(WeatherActions.getWeatherRequestSuccess(response.data))
	}
}
