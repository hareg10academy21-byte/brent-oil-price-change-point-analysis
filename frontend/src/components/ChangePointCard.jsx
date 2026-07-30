import { useState } from "react";


function ChangePointCard({ changePoint }) {

    const [expanded, setExpanded] = useState(false);


    if (!changePoint) {
        return null;
    }


    const impact = Number(changePoint.impact);


    return (

        <div
            onClick={() => setExpanded(!expanded)}
            className="
                bg-white 
                rounded-xl 
                shadow-md 
                p-6 
                mt-6 
                cursor-pointer
                hover:shadow-xl
                transition
                border
            "
        >

            <div className="flex justify-between items-center">


                <div>

                    <h2 className="text-xl font-bold">
                        📊 Detected Change Point
                    </h2>

                    <p className="text-gray-500 mt-1">
                        Click to view detailed analysis
                    </p>

                </div>



                <div
                    className={`
                        px-4 
                        py-2 
                        rounded-full 
                        font-semibold
                        ${
                            impact >= 0
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }
                    `}
                >

                    {impact >= 0 ? "+" : ""}
                    {impact}%

                </div>


            </div>



            {
                expanded && (

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">


                        <div className="bg-gray-50 p-4 rounded-lg">

                            <p className="text-gray-500">
                                Change Date
                            </p>

                            <p className="font-bold text-lg">
                                {changePoint.date}
                            </p>

                        </div>



                        <div className="bg-gray-50 p-4 rounded-lg">

                            <p className="text-gray-500">
                                Market Impact
                            </p>

                            <p className="font-bold text-lg">
                                {impact}%
                            </p>

                        </div>



                        <div className="bg-gray-50 p-4 rounded-lg">

                            <p className="text-gray-500">
                                Before Mean Price
                            </p>

                            <p className="font-bold text-lg">

                                ${changePoint.before_mean}

                            </p>

                        </div>



                        <div className="bg-gray-50 p-4 rounded-lg">

                            <p className="text-gray-500">
                                After Mean Price
                            </p>

                            <p className="font-bold text-lg">

                                ${changePoint.after_mean}

                            </p>

                        </div>


                    </div>

                )
            }


        </div>

    );

}


export default ChangePointCard;