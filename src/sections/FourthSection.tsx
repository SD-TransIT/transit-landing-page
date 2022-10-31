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
            description: `Get a clear overview of your organization with transIT dahsboard. The visual reports will provide you data about deliveries done by your driver, on-time delivery drivers and point deliveries.`,
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
            description: `The Manual Input Forms can be used to Add, Update, and Delete data records in the tool. 
Enter all the details needed to track your data related to transport, drivers, orders and customers.`,
            title: 'Manual Input',
            alt: 'delivered package'
        },
        {
            img: warehouse,
            description: `TransIT helps to upload data in the tool using excel.
You can download the csv template file directly from the page to make sure all your data are in place.
Drag and drop the file or browse the excel file on the local computer to upload it.`,
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
                            <div key={idx} className='features-field'>
                                <div className="fourth-images">
                                    <img src={features.img} alt={features.alt} />
                                </div>
                                <div className="description-field">
                                    <div className="features-title">
                                        <p>{features.title}</p>
                                    </div>
                                    <div className="small-text-field-fourth">
                                        <p>{features.description}</p>
                                    </div>
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
