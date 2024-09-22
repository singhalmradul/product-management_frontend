import { ImagePreviewContainer, ImageContainer } from './image-prevview.styles';

type ImagePreviewProps = {
    images: string[];
};

const ImagePreview = ({ images }: ImagePreviewProps) => {
    return (
        <ImagePreviewContainer>
            {images.map((image, index) => (
                <ImageContainer key={index} src={image} alt='preview' />
            ))}
        </ImagePreviewContainer>
    );
};

export default ImagePreview;