import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faTable, faTools, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "SQL",
    "Python",
    "Tableau",
    "Power BI",
    "Advanced Excel",
    "Data Mining",
    "Statistical Analysis"
];

const labelsSecond = [
    "Agile (Scrum)",
    "Waterfall",
    "Kanban",
    "Risk Assessment",
    "Workflow Optimization",
    "Scope Management"
];

const labelsThird = [
    "Jira",
    "Confluence",
    "MS Visio",
    "Lucidchart",
    "BPMN Tools",
    "Salesforce",
    "ETL Processes",
    "AWS",
    "Azure"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faTable} size="3x"/>
                    <h3>Data Analysis & Visualization</h3>
                    <p>Proficient in data analysis and visualization using tools like SQL, Python, Tableau, and Power BI.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faProjectDiagram} size="3x"/>
                    <h3>Project Management</h3>
                    <p>Experienced in Agile (Scrum), Waterfall, and Kanban methodologies to manage projects effectively.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faTools} size="3x"/>
                    <h3>Tools & Platforms</h3>
                    <p>Hands-on experience with tools like Jira, Confluence, MS Visio, Lucidchart, and Salesforce.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;