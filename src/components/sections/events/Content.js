import React, { Component } from 'react';
import Scheduler, { Resource } from 'devextreme-react/scheduler';
import { data, resourcesData } from '../../../data/calendar/calendar.js';
const currentDate = new Date();
const views = ['month'];

class Content extends Component {
    render() {
        return (
            <section className="section-padding event-calender bg-light-theme">
                <div className="container-fluid custom-container">
                    <div className="row">
                        <div className="col-12">
                            <Scheduler
                                dataSource={data}
                                views={views}
                                defaultCurrentView="month"
                                defaultCurrentDate={currentDate}
                                firstDayOfWeek={0}
                                startDayHour={9}
                            >
                                <Resource
                                    dataSource={resourcesData}
                                    fieldExpr="serviceId"
                                    label="Select Service"
                                />
                            </Scheduler>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;