# Brent Oil Price Change Point Analysis – Analysis Workflow

## Objective

The objective of this project is to investigate how major geopolitical events, economic crises, international sanctions, and OPEC policy decisions have influenced Brent crude oil prices over time. The analysis aims to identify significant structural changes in the price series and determine whether these changes align with important real-world events.

## Data Source

The project uses historical daily Brent crude oil prices from May 20, 1987, to September 30, 2022. An additional dataset containing major geopolitical and economic events is prepared to compare with the detected change points.

## Planned Analysis Steps

### 1. Data Loading

Load the Brent oil price dataset and the events dataset using Python and Pandas.

### 2. Data Cleaning

* Check for missing values.
* Convert the Date column into datetime format.
* Sort observations by date.
* Verify data types.

### 3. Exploratory Data Analysis (EDA)

* Plot Brent oil prices over time.
* Calculate summary statistics.
* Identify periods of unusually high or low prices.
* Examine possible outliers.

### 4. Time Series Analysis

Investigate important properties of the time series, including:

* Long-term trend
* Stationarity
* Volatility
* Seasonality (if present)

Perform statistical tests such as the Augmented Dickey–Fuller (ADF) test to evaluate stationarity.

### 5. Event Dataset Preparation

Prepare a structured dataset containing major geopolitical, economic, and OPEC-related events that may influence oil prices.

### 6. Bayesian Change Point Modeling

Apply a Bayesian Change Point model using PyMC to detect structural breaks in the Brent oil price series. Estimate the timing of change points and quantify uncertainty using Bayesian inference.

### 7. Event Comparison

Compare detected change points with the dates of major geopolitical and economic events to evaluate possible relationships.

### 8. Interpretation

Interpret the detected changes in terms of changes in average price levels and volatility. Discuss whether the identified changes correspond to historical events.

### 9. Reporting

Present the findings through visualizations, tables, and a written report that clearly communicates the results to investors, policymakers, and energy sector stakeholders.

## Expected Outputs

* Clean Brent oil price dataset
* Structured historical events dataset
* Time series visualizations
* Stationarity and volatility analysis
* Bayesian change point estimates
* Comparison between detected change points and historical events
* Final report with recommendations
