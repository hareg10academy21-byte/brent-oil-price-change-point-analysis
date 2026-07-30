import {
    BarChart3,
    TrendingUp,
    CalendarDays,
    Activity
} from "lucide-react";


function Sidebar({
    setView,
    view
}) {


    const menuItems = [

        {
            name: "Dashboard",
            value: "dashboard",
            icon: BarChart3
        },

        {
            name: "Historical Prices",
            value: "prices",
            icon: TrendingUp
        },

        {
            name: "Events",
            value: "events",
            icon: CalendarDays
        },

        {
            name: "Change Points",
            value: "changes",
            icon: Activity
        }

    ];



    return (

        <aside
            className="
                w-full
                md:w-64
                bg-gray-900
                text-white
                min-h-screen
                p-5
            "
        >


            <h1
                className="
                    text-2xl
                    font-bold
                    mb-8
                    text-center
                "
            >
                📈 Brent Analytics
            </h1>



            <nav>

                <ul
                    className="
                        space-y-3
                    "
                >

                    {
                        menuItems.map((item)=>{


                            const Icon = item.icon;


                            return (

                                <li key={item.value}>


                                    <button

                                        onClick={()=>
                                            setView(item.value)
                                        }

                                        className={`
                                            w-full
                                            flex
                                            items-center
                                            gap-3
                                            px-4
                                            py-3
                                            rounded-lg
                                            transition
                                            ${
                                                view === item.value

                                                ?
                                                "bg-blue-600 text-white"

                                                :

                                                "hover:bg-gray-800 text-gray-300"
                                            }
                                        `}

                                    >

                                        <Icon size={20}/>


                                        <span>
                                            {item.name}
                                        </span>


                                    </button>


                                </li>

                            );

                        })
                    }


                </ul>


            </nav>


        </aside>

    );

}


export default Sidebar;