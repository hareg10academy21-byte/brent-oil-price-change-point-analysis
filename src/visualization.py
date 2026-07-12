import matplotlib.pyplot as plt


def plot_price(df):
    """
    Plot Brent Oil Prices.
    """

    plt.figure(figsize=(14,6))

    plt.plot(
        df["Date"],
        df["Price"]
    )

    plt.title("Brent Oil Prices")

    plt.xlabel("Date")

    plt.ylabel("USD per Barrel")

    plt.grid(True)

    plt.show()