import { Outlet } from 'react-router-dom';
import {
	ContentWrapper,
    NavigationBarContainer,
    NavigationLink,
	PageContainer,
} from './navigation-bar.styles';


const NavigationBar = () => (
    <PageContainer>
        <ContentWrapper>
            <Outlet />
        </ContentWrapper>
        <NavigationBarContainer aria-label="Main Navigation">
            <NavigationLink to='/' aria-label='Home'>Home</NavigationLink>
        </NavigationBarContainer>
    </PageContainer>
);

export default NavigationBar;
