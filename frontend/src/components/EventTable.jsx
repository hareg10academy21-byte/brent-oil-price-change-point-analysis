function EventTable({ events, onSelectEvent }) {
    return (
        <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4">
                Major Events
            </h2>

            <table className="w-full">
                <thead>
                    <tr className="border-b">
                        <th className="text-left p-2">
                            Event
                        </th>

                        <th className="text-left p-2">
                            Date
                        </th>

                        <th className="text-left p-2">
                            Category
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {events.map((event, index) => (
                        <tr
                            key={index}
                            onClick={() => onSelectEvent(event)}
                            className="cursor-pointer hover:bg-gray-100 border-b"
                        >
                            <td className="p-2">
                                {event.event}
                            </td>

                            <td className="p-2">
                                {event.date}
                            </td>

                            <td className="p-2">
                                {event.category}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EventTable;