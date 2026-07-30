import { useState } from "react";

function DateFilter({ onApply }) {
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");

    return (
        <div className="bg-white p-5 rounded-xl shadow mb-6 flex flex-wrap gap-4 items-end">
            <div>
                <label className="block font-semibold mb-2">
                    Start Date
                </label>

                <input
                    type="date"
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                    className="border rounded px-3 py-2"
                />
            </div>

            <div>
                <label className="block font-semibold mb-2">
                    End Date
                </label>

                <input
                    type="date"
                    value={end}
                    onChange={(e) => setEnd(e.target.value)}
                    className="border rounded px-3 py-2"
                />
            </div>

            <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded transition"
                onClick={() => onApply(start, end)}
            >
                Apply
            </button>
        </div>
    );
}

export default DateFilter;