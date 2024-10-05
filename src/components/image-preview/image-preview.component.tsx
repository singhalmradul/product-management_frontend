import {
	ImagePreviewContainer,
	Image,
	RemoveButton,
	ImageContainer,
} from './image-prevview.styles';

type ImagePreviewProps = {
	images: string[];
	onRemove?: (src: string) => void;
};

const ImagePreview = ({ images, onRemove }: ImagePreviewProps) => {
	return (
		<ImagePreviewContainer>
			{images.map((image) => (
				<ImageContainer key={image}>
					{onRemove && (
						<RemoveButton onClick={() => onRemove(image)}>&times;</RemoveButton>
					)}
					<Image src={image} alt='preview' />
				</ImageContainer>
			))}
		</ImagePreviewContainer>
	);
};

export default ImagePreview;
