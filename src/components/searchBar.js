import { useState } from "react";
const SearchBar = ({ onSubmit }) => {
	const [term, setTerm] = useState("");
	const handleFormSubmit = (e) => {
		e.preventDefault();
		onSubmit(term);
	};

	const handleChange = (e) => {
		setTerm(e.target.value);
	};

	return (
		<div className=' w-full text-white/70'>
			<form
				action=''
				onSubmit={handleFormSubmit}
				className='flex flex-col lg:flex-row lg:m-3 items-center justify-around mx-auto mb-2 gap-3 pb-1'>
				<label
					htmlFor=''
					className=' text-4xl '>
					<span className='  text-5xl '>Enter Search Term</span>
				</label>
				<input
					type='text'
					onChange={handleChange}
					value={term}
					className='p-1 lg:p-3 text-4xl rounded-lg text-center  bg-slate-700 focus:ring-blue-900 h-2/3'
				/>
			</form>
			<hr />
		</div>
	);
};

export default SearchBar;
