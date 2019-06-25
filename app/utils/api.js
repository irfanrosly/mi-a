import apisauce from "apisauce"

// define the api

const create = () => {
	const apiPlayground = apisauce.create({
		baseURL: "https://api.github.com",
		headers: { Accept: "application/vnd.github.v3+json" }
	})

	const getUser = username => {
		return apiPlayground.get(`/users/${username}`)
	}

	return {
		getUser
	}
}

export default { create }
