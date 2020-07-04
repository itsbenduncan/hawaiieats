import React from 'react';
import './Resources.css';

const Resources = () => {
    return (
        <div className="resources">
            <div className="resources-main">
                <div className="producers-container">
                    <h1 id="heading">Local Producers</h1>
                    <button className="btn">
                        <a target="_blank" href="https://gofarmhawaii.org/find-your-farmer/">Find a farmer</a>
                    </button>
                </div>
                <div className="orgs-container">
                    <h1 id="heading">Organizations</h1>
                    <button className="btn">
                        <a target="_blank" href="https://www.kokuahawaiifoundation.org/">Kokua Foundation</a>
                    </button>
                    <button className="btn">
                        <a target="_blank" href="https://kohalacenter.org/hpsi">Hawai`i Public Seed Foundation</a>
                    </button>
                    <button className="btn">
                        <a target="_blank" href="https://malamakauai.org/">Malama Kauai</a>
                    </button>
                    <button className="btn">
                        <a target="_blank" href="https://alohaharvest.org/">Aloha Harvest</a>
                    </button>
                </div>
                <div className="policy-container">
                    <h1 id="heading">Policy Article</h1>
                    <div className="policy">
                    There is no disputing that Hawai`i’s excessive reliance on imported food goods is an unsustainable system. 
                    In order to make Hawai`i more resilient and independent, we implore the state to offer economic and funding 
                    incentives for local food producers. Large scale farming and ranching has been a viable income for many years. 
                    Recently however, mass production has shown to be a grave competitor. Through multiple financial and economic 
                    programs, we can begin to address this issue and create a more sustainable food ecosystem. Detailed below are 
                    suggestions for policy-makers to take action:
                    </div>
                    <ul className="policy-list">
                        <li>Striking the income tax on goods sold at farmers markets.</li>
                        <li>State sponsored funding for organizations looking to research or implement sustainable and organic farming practices.</li>
                        <li>Lower sales tax on local food goods at markets, or higher sales tax on select imported goods that can be found locally.</li>
                        <li>State Grant: Eligibility will be for those not producing one of the top three food products (ranked by quantity).</li>
                    </ul>
                </div>
                <div className="references">
                    <h1 id="heading">References</h1>
                    <ul id="references-list">
                        <li>1.	Schwartz, J. D. (2019). Water in plain sight: Hope for a thirsty world. New York: St. Martins Press.</li>
                        <li>2.	Seufert, V., Ramankutty, N., & Mayerhofer, T. (2017). What is this thing called organic? – How organic farming is codified in regulations. Food Policy, 68, 10-20. doi:10.1016/j.foodpol.2016.12.009</li>
                        <li>3.	Khan, S. S., Arita, S., Howitt, R., & Leung, P. (2018). A calibrated model of local food system of Hawaii: What are the economic implications of the states food goals and policies? Natural Resource Modeling, 32(1). doi:10.1111/nrm.12196</li>
                        <li>4.	Loke, M. K., & Leung, P. (2013). Competing food concepts - Implications for Hawaii, USA. Food and Energy Security, 2(3), 174-184. doi:10.1002/fes3.33</li>
                        <li>5.	Local Foods Production. (n.d.). Retrieved June 25, 2020, from <a id="reference-link" target="_blank" href="https://dashboard.hawaii.gov/stat/goals/5xhf-begg/vey8-efit/8pd6-pzhu">https://dashboard.hawaii.gov/stat/goals/5xhf-begg/vey8-efit/8pd6-pzhu</a></li>
                        <li>6.	Winter, K., Beamer, K., Vaughan, M., Friedlander, A., Kido, M., Whitehead, A., . . . Nyberg, B. (2018). The Moku System: Managing Biocultural Resources for Abundance within Social-Ecological Regions in Hawaiʻi. Sustainability, 10(10), 3554. doi:10.3390/su10103554</li>
                        <li>7.	Anonymous. Reducing Emissions from the Shipping Sector. 16 Feb. 2017, <a id="reference-link"target="_blank" href="https://ec.europa.eu/clima/policies/transport/shipping_en">ec.europa.eu/clima/policies/transport/shipping_en</a></li>
                        <li>8.	Birch, L., Savage, J. S., & Ventura, A. (2007). Influences on the Development of Children's Eating Behaviours: From Infancy to Adolescence. Canadian journal of dietetic practice and research: a publication of Dietitians of Canada = Revue canadienne de la pratique et de la recherche en dietetique : une publication des Dietetistes du Canada, 68(1), s1–s56.</li>
                        <li>9.	Kent, George. “Food Security in Hawai‘i.” Food and Power in Hawai'i, 2016, doi:10.21313/hawaii/9780824858537.003.0003.</li>
                        <li>10.	Latest Population Estimate Data. May 2020, <a id="reference-link" target="_blank" href="https://census.hawaii.gov/home/population-estimate/">census.hawaii.gov/home/population-estimate/</a></li>
                        <li>11.	MSU Food Literacy and Engagement Poll: Wave II. 8 Feb. 2019, <a id="reference-link" target="_blank" href="https://www.canr.msu.edu/news/msu-food-literacy-and-engagement-poll-wave-ii">www.canr.msu.edu/news/msu-food-literacy-and-engagement-poll-wave-ii</a></li>
                        <li>12.	Ritchie, Hannah. Food Production Is Responsible for One-Quarter of the World's Greenhouse Gas Emissions. 6 Nov. 2019, <a id="reference-link" target="_blank" href="https://ourworldindata.org/food-ghg-emissions">ourworldindata.org/food-ghg-emissions</a></li>
                        <li>13.	Ritchie, Hannah. You Want to Reduce the Carbon Footprint of Your Food? Focus on What You Eat, Not Whether Your Food Is Local. 24 Jan. 2020, <a id="reference-link" target="_blank" href="https://ourworldindata.org/food-choice-vs-eating-local">ourworldindata.org/food-choice-vs-eating-local</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Resources;