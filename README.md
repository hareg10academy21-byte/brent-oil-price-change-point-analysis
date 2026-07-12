# Brent Oil Price Change Point Analysis and Statistical Modeling

## Project Overview

This project analyzes the impact of major geopolitical events, OPEC policy decisions, economic shocks, and international conflicts on Brent crude oil prices using Bayesian Change Point Analysis.

The objective is to identify structural changes in historical Brent oil prices and investigate whether these changes coincide with significant real-world events.

## Business Problem

The global oil market is highly volatile. Investors, policymakers, and energy companies need reliable analysis to understand how major events affect oil prices in order to improve investment decisions, policy development, and operational planning.

## Objectives

* Analyze historical Brent oil prices.
* Investigate time series characteristics such as trend, stationarity, and volatility.
* Build a Bayesian Change Point model using PyMC.
* Compare detected change points with major geopolitical and economic events.
* Generate insights for stakeholders through statistical analysis and visualization.

## Project Structure

```text
├── .vscode/
├── .github/
│   └── workflows/
├── data/
├── docs/
├── notebooks/
├── scripts/
├── src/
├── tests/
├── README.md
├── requirements.txt
└── .gitignore
```

## Technologies

* Python
* Pandas
* NumPy
* Matplotlib
* Seaborn
* SciPy
* Statsmodels
* PyMC
* ArviZ
* Jupyter Notebook

## Project Workflow

1. Data Collection
2. Data Cleaning
3. Exploratory Data Analysis
4. Time Series Analysis
5. Bayesian Change Point Analysis
6. Event Comparison
7. Visualization
8. Final Report
## Project Data

This project uses two datasets:

### Brent Oil Prices

Location:

data/BrentOilPrices.csv


Contains daily Brent crude oil prices from 1987 to 2022.

### Historical Events Dataset

Location:
data/events.csv


Contains 15 major geopolitical, economic, and OPEC-related events used for comparison with detected change points.

Columns:

- Event
- Start_Date
- Category
- Description

## Author

Haregeweyn Ataklt
Software Engineering Student
