// the container of images (ImageShow)
import ImageShow from "./imageShow";

const ImageList = ({ images }) => {
	const renderedImages = images.map((image) => {
		return (
			<ImageShow
				image={image}
				key={image.id}
			/>
		);
	});
	return (
		<div className='grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 '>
			{renderedImages}
		</div>
	);
};

export default ImageList;
