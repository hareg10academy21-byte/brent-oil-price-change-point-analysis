import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    ReferenceLine,
    ReferenceDot
} from "recharts";


function PriceChart({
    data,
    events = [],
    changePoints = [],
    selectedEvent
}) {


    return (

        <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-bold mb-4">
                Brent Oil Price Trend
            </h2>


            <ResponsiveContainer
                width="100%"
                height={350}
            >

                <LineChart data={data}>


                    <XAxis
                        dataKey="date"
                    />


                    <YAxis />


                    <Tooltip />


                    <Line

                        type="monotone"

                        dataKey="price"

                        strokeWidth={3}

                        dot={false}

                    />


                    {/* Dynamic Change Points */}

                    {
                        changePoints.map((point,index)=>(

                            <ReferenceLine

                                key={index}

                                x={point.date}

                                stroke="red"

                                strokeDasharray="5 5"

                                label="Change Point"

                            />

                        ))
                    }



                    {/* Event Highlights */}

                    {
                        events.map((event,index)=>(

                            <ReferenceLine

                                key={index}

                                x={event.date}

                                stroke="green"

                                strokeDasharray="3 3"

                                label={{
                                    value:event.event,
                                    angle:-45,
                                    position:"top"
                                }}

                            />

                        ))
                    }



                    {/* Selected Event Highlight */}

                    {
                        selectedEvent && (

                            <ReferenceDot

                                x={selectedEvent.date}

                                y={selectedEvent.price}

                                r={8}

                            />

                        )
                    }


                </LineChart>


            </ResponsiveContainer>


        </div>

    );

}


export default PriceChart;