import { useState } from "react";
import SearchBar from "./components/searchBar";
import searchImages from "./api";
import ImageList from "./components/imageList";

function App() {
	const [images, setImages] = useState([]);

	const handleSubmit = async (term) => {
		const result = await searchImages(term);
		setImages(result);
	};

	return (
		<div className='  min-h-screen h-auto w-[100%]  '>
			<div className='flex flex-col items-center gap-3 '>
				<SearchBar onSubmit={handleSubmit} />
				<ImageList images={images} />
			</div>
		</div>
	);
}

export default App;
