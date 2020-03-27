

class Communicators {

		static baseURL="https://cubes-d7e5d.firebaseio.com/people.json";
	

	static Fetch = () => {

		return fetch(Communicators.baseURL)
				.then(response => response.json())

	}

	static Post = (data) => {

		return 	fetch(Communicators.baseURL,{
				method: "POST",
				body: JSON.stringify(data)
		})
	}
}

export {Communicators};