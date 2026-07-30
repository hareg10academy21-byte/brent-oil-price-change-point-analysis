// import { useEffect, useState } from "react";

// import Sidebar from "./components/Sidebar";
// import MetricsCards from "./components/MetricsCards";
// import PriceChart from "./components/PriceChart";
// import EventTable from "./components/EventTable";
// import DateFilter from "./components/DateFilter";
// import ChangePointCard from "./components/ChangePointCard";

// import {
//     getPrices,
//     getEvents,
//     getChangePoints,
//     getMetrics
// } from "./services/api";

// function App() {
//     const [prices, setPrices] = useState([]);
//     const [filteredPrices, setFilteredPrices] = useState([]);
//     const [events, setEvents] = useState([]);
//     const [changePoints, setChangePoints] = useState([]);
//     const [metrics, setMetrics] = useState(null);

//     const [selectedEvent, setSelectedEvent] = useState(null);
//     const [view, setView] = useState("dashboard");

//     useEffect(() => {
//         getPrices().then((res) => {
//             setPrices(res.data);
//             setFilteredPrices(res.data);
//         });

//         getEvents().then((res) => {
//             setEvents(res.data);
//         });

//         getChangePoints().then((res) => {
//             setChangePoints(res.data);
//         });

//         getMetrics().then((res) => {
//             setMetrics(res.data);
//         });
//     }, []);

//     const applyFilter = (start, end) => {
//         if (!start || !end) {
//             setFilteredPrices(prices);
//             return;
//         }

//         const filtered = prices.filter(
//             (item) => item.date >= start && item.date <= end
//         );

//         setFilteredPrices(filtered);
//     };

//     return (
//         <div className="flex">
//             <Sidebar 
//     setView={setView}
//     view={view}
// />

//             <main className="flex-1 bg-gray-100 p-8">
//                 <h1 className="text-3xl font-bold mb-8">
//                     Brent Oil Analytics Dashboard
//                 </h1>

//                 {metrics && (
//                     <MetricsCards metrics={metrics} />
//                 )}

//                 <div className="my-8">
//                     <DateFilter onApply={applyFilter} />
//                 </div>

//                 <PriceChart
//     data={filteredPrices}
//     events={events}
//     changePoints={changePoints}
//     selectedEvent={selectedEvent}
// />

//                 <div className="mt-8">
//                     <EventTable
//                         events={events}
//                         onSelectEvent={setSelectedEvent}
//                     />
//                 </div>

//                 {selectedEvent && (
//                     <div className="bg-white rounded-xl shadow p-6 mt-6">
//                         <h2 className="text-xl font-bold mb-4">
//                             Selected Event
//                         </h2>

//                         <p>
//                             <strong>Event:</strong> {selectedEvent.event}
//                         </p>

//                         <p>
//                             <strong>Date:</strong> {selectedEvent.date}
//                         </p>

//                         <p>
//                             <strong>Category:</strong> {selectedEvent.category}
//                         </p>

//                         <p className="mt-2">
//                             {selectedEvent.description}
//                         </p>
//                     </div>
//                 )}

//                 <div className="mt-8">
//                     {
//     changePoints.map((point,index)=>(
//         <ChangePointCard
//             key={index}
//             changePoint={point}
//         />
//     ))
// }
//                 </div>
//             </main>
//         </div>
//     );
// }

// export default App;
import { useEffect, useState } from "react";

import Sidebar from "./components/Sidebar";
import MetricsCards from "./components/MetricsCards";
import PriceChart from "./components/PriceChart";
import EventTable from "./components/EventTable";
import DateFilter from "./components/DateFilter";
import ChangePointCard from "./components/ChangePointCard";

import {
    getPrices,
    getEvents,
    getChangePoints,
    getMetrics
} from "./services/api";


function App() {

    const [prices, setPrices] = useState([]);
    const [filteredPrices, setFilteredPrices] = useState([]);

    const [events, setEvents] = useState([]);
    const [changePoints, setChangePoints] = useState([]);

    const [metrics, setMetrics] = useState(null);

    const [selectedEvent, setSelectedEvent] = useState(null);

    const [view, setView] = useState("dashboard");


    useEffect(() => {

        getPrices()
            .then((res) => {
                setPrices(res.data);
                setFilteredPrices(res.data);
            });


        getEvents()
            .then((res) => {
                setEvents(res.data);
            });


        getChangePoints()
            .then((res) => {
                setChangePoints(res.data);
            });


        getMetrics()
            .then((res) => {
                setMetrics(res.data);
            });


    }, []);



    const applyFilter = (start, end) => {

        if (!start || !end) {
            setFilteredPrices(prices);
            return;
        }


        const filtered = prices.filter(
            (item) =>
                item.date >= start &&
                item.date <= end
        );


        setFilteredPrices(filtered);

    };



    return (

        <div className="flex">


            <Sidebar
                setView={setView}
                view={view}
            />



            <main className="flex-1 bg-gray-100 p-8">


                <h1 className="text-3xl font-bold mb-8">
                    Brent Oil Analytics Dashboard
                </h1>



                {/* DASHBOARD VIEW */}

                {view === "dashboard" && (

                    <>

                        {metrics && (
                            <MetricsCards
                                metrics={metrics}
                            />
                        )}



                        <div className="my-8">

                            <DateFilter
                                onApply={applyFilter}
                            />

                        </div>



                        <PriceChart

                            data={filteredPrices}

                            events={events}

                            changePoints={changePoints}

                            selectedEvent={selectedEvent}

                        />



                        <div className="mt-8">

                            <EventTable

                                events={events}

                                onSelectEvent={setSelectedEvent}

                            />

                        </div>



                        {selectedEvent && (

                            <div className="bg-white rounded-xl shadow p-6 mt-6">

                                <h2 className="text-xl font-bold mb-4">
                                    Selected Event
                                </h2>


                                <p>
                                    <strong>Event:</strong>{" "}
                                    {selectedEvent.event}
                                </p>


                                <p>
                                    <strong>Date:</strong>{" "}
                                    {selectedEvent.date}
                                </p>


                                <p>
                                    <strong>Category:</strong>{" "}
                                    {selectedEvent.category}
                                </p>


                                <p className="mt-2">
                                    {selectedEvent.description}
                                </p>


                            </div>

                        )}



                        <div className="mt-8">

                            <ChangePointCard

                                changePoint={changePoints[0]}

                            />

                        </div>


                    </>

                )}






                {/* HISTORICAL PRICES VIEW */}

                {view === "prices" && (

                    <>

                        <h2 className="text-2xl font-bold mb-6">

                            Historical Brent Oil Prices

                        </h2>



                        <PriceChart

                            data={filteredPrices}

                            events={[]}

                            changePoints={[]}

                        />


                    </>

                )}






                {/* EVENTS VIEW */}

                {view === "events" && (

                    <>

                        <h2 className="text-2xl font-bold mb-6">

                            Major Events

                        </h2>



                        <EventTable

                            events={events}

                            onSelectEvent={setSelectedEvent}

                        />


                    </>

                )}






                {/* CHANGE POINTS VIEW */}

                {view === "changes" && (

                    <>

                        <h2 className="text-2xl font-bold mb-6">

                            Bayesian Change Point Analysis

                        </h2>



                        {

                            changePoints.map((point, index) => (

                                <ChangePointCard

                                    key={index}

                                    changePoint={point}

                                />

                            ))

                        }


                    </>

                )}



            </main>


        </div>

    );

}


export default App;