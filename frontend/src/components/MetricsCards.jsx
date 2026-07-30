function MetricCard({
    title,
    value,
    description
}) {

    return (

        <div className="bg-white rounded-xl shadow p-5">

            <h3 className="text-gray-500 font-semibold">
                {title}
            </h3>


            <p className="text-3xl font-bold mt-2">
                {value}
            </p>


            {
                description && (

                    <p className="text-sm text-gray-400 mt-2">
                        {description}
                    </p>

                )
            }

        </div>

    );

}



function MetricsCards({
    metrics
}) {


    if (!metrics) {
        return null;
    }


    return (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


            <MetricCard

                title="Average Price"

                value={`$${metrics.average_price}`}

                description="Average Brent oil price"

            />



            <MetricCard

                title="Volatility"

                value={`${metrics.volatility}%`}

                description="Price fluctuation level"

            />



            <MetricCard

                title="Event Price Change"

                value={`${metrics.event_price_change}%`}

                description="Price movement around major events"

            />


        </div>

    );

}


export default MetricsCards;