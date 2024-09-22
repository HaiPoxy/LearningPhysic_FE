import AdvancedCourses from '../../components/AdvancedCourses/AdvancedCourses';
import Slider from '../../components/Slider/Slider'
import BasicCourses from '../../components/BasicCourses/BasicCourses'

import InformationAndAdvice from '../../components/InformationAndAdvice/InformationAndAdvice';

function HomePage(props) {
    return (
        <>
            {/* <Header /> */}

            <Slider />
            <AdvancedCourses />
            <BasicCourses />
            <InformationAndAdvice />
            {/* <FooterComponent /> */}
        </>
    );
}

export default HomePage;
