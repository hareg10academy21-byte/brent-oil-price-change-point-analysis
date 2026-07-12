import pandas as pd


def load_brent_data(file_path):
    """
    Load Brent Oil Prices dataset.

    Parameters
    ----------
    file_path : str
        Path to the CSV file.

    Returns
    -------
    pandas.DataFrame
        Clean DataFrame with parsed Date column.
    """

    # Load dataset
    df = pd.read_csv(file_path)

    # Convert Date column
    # Handles mixed date formats
    df["Date"] = pd.to_datetime(
        df["Date"],
        format="mixed"
    )

    # Sort chronologically
    df = df.sort_values("Date")

    # Reset index
    df.reset_index(
        drop=True,
        inplace=True
    )

    return df