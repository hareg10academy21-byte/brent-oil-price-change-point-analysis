from statsmodels.tsa.stattools import adfuller


def adf_test(series):
    """
    Perform Augmented Dickey-Fuller Test.
    """

    result = adfuller(series)

    print("ADF Statistic :", result[0])

    print("p-value :", result[1])

    print("Critical Values")

    for key, value in result[4].items():

        print(key, value)