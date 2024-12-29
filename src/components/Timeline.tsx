import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {/* Update this section to AIG, Business Analyst */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Mar 2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Business Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">AIG, NY</h4>
            <p>
              Tableau, Power BI Dashboards, SQL, Python, Stakeholder Workshops, Agile Project Management
            </p>
          </VerticalTimelineElement>

          {/* Update this section to Centillion Infotech, Business Analyst Intern */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2023 - Aug 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Business Analyst Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Centillion Infotech, TX</h4>
            <p>
              Python Automation, ETL Processes, Salesforce CRM Implementation, Statistical Analysis
            </p>
          </VerticalTimelineElement>

          {/* New item added for Smart Accommodation Navigator */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2022 - Dec 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Graduate Project: Smart Accommodation Navigator</h3>
            <h4 className="vertical-timeline-element-subtitle">NJIT, Newark, NJ</h4>
            <p>
              Market Research, Data Visualization, User Engagement Optimization
            </p>
          </VerticalTimelineElement>

          {/* Update this section to match Data Analyst Intern experience */}
        </VerticalTimeline>
      </div>
    </div>
  );
}
export default Timeline;