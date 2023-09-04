import axios from "axios";

export default async function searchImages(term) {
	const response = await axios.get("https://api.unsplash.com/search/photos", {
		headers: {
			Authorization: "Client-ID fPCsDtYgK8DYeWe5PO3L3CyZozvqqUWzXMMSZ0l6zkM",
		},
		params: {
			query: term,
		},
	});
	return response.data.results;
}
