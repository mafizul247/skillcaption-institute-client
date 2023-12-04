import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import TeamMember from '../TeamMember/TeamMember';
import Comments from '../Comments/Comments';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - Skillcation Institute</title>
            </Helmet>
            <Banner />
            <PopularClasses />
            <PopularInstructors />
            <TeamMember />
            <Comments />
        </div>
    );
};

export default Home;