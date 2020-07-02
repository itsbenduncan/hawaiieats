import React from 'react';
import Chart from "react-google-charts";
import './About.css';

const About = () => {
    return (
        <div className="about">
            <div className="about-title">About</div>
                <div className="about-text">
                    <span>Historically, the Hawaiian Islands have shown the ability to be a completely sustainable food production source for human populations. According to the United States Department of Agriculture, the State of Hawaii imported 92% of its food in 2014. This figure has seen no significant increase in the following years to the current date. This means that the population of approximately 1.4 million people are dependent on the vast majority of its food to be imported to the islands.</span>
                    <br></br>
                    <Chart
                        id="foodsource"
                        width={'500px'}
                        height={'300px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Source', 'Percent'],
                            ['Imported', 92],
                            ['Locally Sourced', 8],
                        ]}
                        options={{
                            title: 'Source of Hawaii Food',
                        }}
                        rootProps={{ 'data-testid': '1' }}
                    />
                    <br></br>
	                <span>Regardless of importation, as things are now, a notable portion of the population does not know the source of the majority of shelf items at their local grocery store. Food production is responsible for a quarter of the world’s global carbon emissions. This number can drastically change with the acknowledgment and support of sustainable food sources.</span>
                    <br></br>
	                <span>Hawaii cannot be sustainable by a source of food from shipping containers. By supporting our local economy, we can cut our climate impacts, benefit local businesses, and strengthen the resiliency of the world’s most remote island population. Additionally, if we are not purchasing locally sourced goods, being cognizant of how and where food items are produced can have a significant impact. This media campaign's effort is to educate our community on the benefits of locally sourced food goods and the knowledge of imported food sources.</span>
                </div>
        </div>
    )
}

export default About;