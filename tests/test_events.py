import pandas as pd


def test_events_dataset():

    events = pd.read_csv(
        "data/events.csv"
    )

    assert not events.empty

    assert len(events) >= 10

    required_columns = {
        "Event",
        "Start_Date",
        "Category",
        "Description"
    }

    assert required_columns.issubset(
        events.columns
    )