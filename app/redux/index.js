import { combineReducers } from "redux"
import { playground } from "./playground"
import { weather } from "./weather"

export default combineReducers({
	playground,
	weather
})
