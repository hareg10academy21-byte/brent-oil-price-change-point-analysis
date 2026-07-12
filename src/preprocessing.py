import pandas as pd


def inspect_data(df):
    """
    Print basic dataset information.
    """

    print("\nShape")
    print(df.shape)

    print("\nColumns")
    print(df.columns)

    print("\nMissing Values")
    print(df.isnull().sum())

    print("\nSummary Statistics")
    print(df.describe())


def check_duplicates(df):
    """
    Return duplicate rows.
    """

    return df[df.duplicated()]


def set_date_index(df):
    """
    Set Date column as index.
    """

    df = df.copy()

    df.set_index("Date", inplace=True)

    return df