import { HomeButton, WithHomeButtonContainer } from './with-home-button.styles';

type WithHomeButtonProps = {
    children: React.ReactNode;
};

const WithHomeButton = ({ children }: WithHomeButtonProps) => {
    return (
        <WithHomeButtonContainer>
            {children}
            <HomeButton to='/'>Home</HomeButton>
        </WithHomeButtonContainer>
    );
};

export default WithHomeButton;