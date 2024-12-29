import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import p1 from '../assets/images/p1.webp';
import p2 from '../assets/images/p2.webp';
import p3 from '../assets/images/p3.webp';
import p4 from '../assets/images/p4.webp';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <img src={p1} className="zoom" alt="thumbnail" width="100%" />
                    <h2>Sentiment Insights Engine</h2>
                    <p>
                        Developed a sentiment analysis system using Python and NLTK, enabling marketing teams to predict audience preferences with 90% accuracy. Improved campaign targeting by 20% by leveraging sentiment trends.
                    </p>
                </div>
                <div className="project">
                    <img src={p2} className="zoom" alt="thumbnail" width="100%" />
                    <h2>Smart Accommodation Navigator</h2>
                    <p>
                        Conducted extensive market research and implemented data visualization techniques to highlight trending rental locations. Increased user engagement by 25% by streamlining the property search process.
                    </p>
                </div>
                <div className="project">
                    <img src={p3} className="zoom" alt="thumbnail" width="100%" />
                    <h2>LocalBites Delivery Optimizer</h2>
                    <p>
                        Utilized SQL and Tableau to analyze order patterns, optimizing delivery routes and reducing delays by 20%. Improved delivery accuracy and vendor satisfaction.
                    </p>
                </div>
                <div className="project">
                    <img src={p4} className="zoom" alt="thumbnail" width="100%" />
                    <h2>Customer Retention Analytics Tool</h2>
                    <p>
                        Built an analytics tool using Python and Power BI to identify customer churn patterns, enabling a proactive retention strategy. Reduced churn rates by 15% through data-driven recommendations.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Project;