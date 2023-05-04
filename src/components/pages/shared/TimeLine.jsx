import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FcBiohazard } from 'react-icons/fc'
const data = [
    {
        id: 1,
        title: '1.	Tell us the differences between uncontrolled and controlled components.',
        description: 'Uncontrolled and controlled components refer to different ways of managing state . Uncontrolled component are manage their own state . And controlled component elements that store their state in the React state means that value is control by react.',
        icon: 'https://i.ibb.co/Lr2x9cf/management.png'
    },
    {
        id: 2,
        title: '2 . How to validate React props using PropTypes',
        description: 'PropTypes is a React built in library. It is allow us to define the expected data type and requirements for each prop passed to a component. By using it we can error early and and prevent the unexpected behavior on our component .',
        icon: 'https://i.ibb.co/sWBRgLD/atom-1.png'
    },
    {
        id: 3,
        title: '3. Tell us the difference between nodejs and express js.',
        description: 'Node js is a runtime for run JavaScript code outside of a browser. Express js is a framework based on node js. It is used for building web applications and APIs.',
        icon: 'https://i.ibb.co/BVFS30b/node-js.png'
    },
    {
        id: 4,
        title: '4. What is a custom hook, and why will you create a custom hook?',
        description: 'Custom hook is a way to make reusable a part of code that contains stateful logic, and it is created to improve the modularity and maintainability of your code.',
        icon: 'https://i.ibb.co/7gLGpZw/fishing-hook.png'
    }
]
const TimeLine = () => {
    return (
        <div>
            <VerticalTimeline lineColor='#2AAFC0' animate>
                {
                    data.map(item => {
                        return (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<img className='' src={item.icon} />}
                                key={item.id}
                            >
                                <h3 className="vertical-timeline-element-title font-bold">{item.title}</h3>
                                <p>
                                    {item.description}
                                </p>
                            </VerticalTimelineElement>
                        );
                    })
                }

            </VerticalTimeline>
        </div>
    );
};

export default TimeLine;