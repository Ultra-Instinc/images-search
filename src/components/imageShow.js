// single image
const ImageShow = ({ image }) => {
	return (
		<div className=' w-[350px] h-[350px]'>
			<img
				className='image w-[100%] h-[100%] p-2 '
				src={image.urls.small}
				alt=''
			/>
		</div>
	);
};

export default ImageShow;
