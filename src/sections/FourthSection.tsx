import React, { useState } from "react";

import FeaturesNavButton from '../components/FeaturesNavButton'
import reportTruck from '../images/report-truck.jpg'
import womenInTruck from '../images/women-in-truck.jpg'
import deliveredPackage from '../images/package.jpg'
import warehouse from '../images/warehouse.jpg'

import { RiLineChartLine, RiFileChartLine, RiSurveyLine, RiFileExcelLine } from 'react-icons/ri' 

import '../styles/fourthSection.css';


const FourthSection = () => {
    const [currentFeature, setCurrentFeature] = useState<string>('Dashboard')

    const featuresNavButtons = [
        {
            label: 'Dashboard',
            icon: <RiLineChartLine />
        },
        {
            label: 'Reports',
            icon: <RiFileChartLine />
        },
        {
            label: 'Manual Input',
            icon: <RiSurveyLine />
        },
        {
            label: 'Excel Upload',
            icon: <RiFileExcelLine />
        }
    ]

    const featuresDescriptions = [
        {
            img: reportTruck,
            description: `Through the supply of constant information, TransIT creates an “instant report card” that
enables distribution managers to better track shipments, make data-driven decisions, optimize distribution resources and assets, and use historical data to show trends over time.`,
            title: 'Dashboard',
            alt: 'truck'
        },
        {
            img: womenInTruck,
            description: `Through the supply of constant information, TransIT creates an “instant report card” that
enables distribution managers to better track shipments, make data-driven decisions, optimize distribution resources and assets, and use historical data to show trends over time.`,
            title: 'Reports',
            alt: 'women in truck'
        },
        {
            img: deliveredPackage,
            description: `Through the supply of constant information, TransIT creates an “instant report card” that
enables distribution managers to better track shipments, make data-driven decisions, optimize distribution resources and assets, and use historical data to show trends over time.`,
            title: 'Manual Input',
            alt: 'delivered package'
        },
        {
            img: warehouse,
            description: `Through the supply of constant information, TransIT creates an “instant report card” that
enables distribution managers to better track shipments, make data-driven decisions, optimize distribution resources and assets, and use historical data to show trends over time.`,
            title: 'Excel Upload',
            alt: 'warehouse'
        },
    ]

    return (
        <div className="container-fourth">
            <div className="">
                <div className="big-text-field-fourth">
                   <p>TransIT Features</p>
                </div>
                <div className="features-nav-button">
                    {featuresNavButtons.map((button, idx) => {
                        return (
                            <FeaturesNavButton onClick={(event: any) => setCurrentFeature(event.target.textContent)} label={button.label} icon={button.icon} key={idx} />
                            )
                        })}
                </div>
            </div>
            <div>
                {featuresDescriptions.map((features, idx) => {
                    if (currentFeature === features.title) {
                        return (
                            <div key={idx}>
                                <div className="fourth-images">
                                    <img src={features.img} alt={features.alt} width='283px' height='262px' />
                                </div>
                                <div className="features-title">
                                    <p>{features.title}</p>
                                </div>
                                <div className="small-text-field-fourth">
                                    <p>{features.description}</p>
                                </div>
                            </div>
                        )
                    }
                    })}
            </div>
        </div>
    )
}

export default FourthSection