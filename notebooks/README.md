# Task 2: Bayesian Change Point Analysis of Brent Oil Prices

## Project Overview

This project applies **Bayesian Change Point Detection** to historical Brent crude oil prices to identify significant structural changes in the market. The analysis aims to detect periods where the statistical behavior of oil prices changed and relate these changes to major geopolitical, economic, and OPEC-related events.

The model is implemented using **PyMC**, a Bayesian probabilistic programming framework, and uses Markov Chain Monte Carlo (MCMC) sampling to estimate the posterior distribution of the change point.

---

# Objectives

The objectives of this task are to:

- Detect significant change points in Brent oil prices.
- Estimate the timing of structural breaks using Bayesian inference.
- Quantify changes in the average market behavior before and after the detected change point.
- Compare detected change points with major historical events.
- Generate probabilistic insights for investors, policymakers, and energy analysts.

---

# Dataset

The dataset contains historical daily Brent crude oil prices.

**Features**

| Column | Description |
|---------|-------------|
| Date | Observation date |
| Price | Brent crude oil price (USD per barrel) |

Dataset Period:

- 20 May 1987
- 30 September 2022

---

# Methodology

The analysis follows these steps:

1. Load and preprocess the dataset.
2. Convert dates to datetime format.
3. Compute log prices and daily log returns.
4. Explore price and return behavior.
5. Build a Bayesian Change Point Model using PyMC.
6. Estimate the posterior distribution of the change point.
7. Evaluate convergence using MCMC diagnostics.
8. Compare detected change points with historical events.
9. Interpret the statistical and economic significance of the results.

---

# Bayesian Change Point Model

The Bayesian model assumes that the average return changes at one unknown point in time.

Model parameters include:

- **tau** – unknown change point
- **mu1** – mean return before the change point
- **mu2** – mean return after the change point
- **sigma** – common standard deviation

The model uses:

- DiscreteUniform prior for the change point
- Normal priors for the means
- HalfNormal prior for volatility
- Normal likelihood for observed log returns

Posterior inference is performed using the No-U-Turn Sampler (NUTS).

---

# Model Diagnostics

Model quality is evaluated using:

- Trace plots
- Posterior distributions
- R-hat statistics
- Effective Sample Size (ESS)
- Posterior summaries

A well-converged model should have:

- R-hat close to 1.0
- Stable trace plots
- High effective sample sizes

---

# Expected Outputs

The analysis produces:

- Historical Brent oil price visualization
- Daily log return plot
- Posterior distribution of the change point
- Trace plots
- Posterior distributions of model parameters
- Estimated change point date
- Comparison between detected change point and historical events

---

# Historical Event Comparison

Detected change points are compared with major geopolitical and economic events such as:

- Gulf War
- Iraq War
- Global Financial Crisis
- Arab Spring
- OPEC Production Cut Agreements
- COVID-19 Pandemic
- Russia–Ukraine Conflict

The comparison provides evidence of temporal association between important events and structural changes in Brent oil prices.

---

# Assumptions

- The return series contains one dominant structural change.
- Daily log returns follow a Normal distribution.
- Market behavior changes at a single unknown point.
- Historical events are used to explain potential associations rather than prove causality.

---

# Limitations

- Bayesian change point detection identifies statistical changes but cannot prove causal relationships.
- Some market reactions occur gradually rather than immediately.
- Brent oil prices are influenced by many interacting factors including supply, demand, exchange rates, inflation, and global economic conditions.
- The single change point model may not capture multiple structural changes occurring throughout the dataset.

---

# Technologies Used

- Python
- Pandas
- NumPy
- Matplotlib
- Seaborn
- PyMC
- ArviZ
- Jupyter Notebook

---

# Repository Structure

```
BrentOilPriceAnalysis/
│
├── data/
│   ├── BrentOilPrices.csv
│   └── events.csv
│
├── notebooks/
│   ├── task1_eda.ipynb
│   └── task2_change_point_model.ipynb
│
├── src/
│   ├── data_loader.py
│   ├── preprocessing.py
│   └── statistics.py
│
├── README.md
├── requirements.txt
└── .gitignore
```

---

# Future Work

Possible improvements include:

- Multiple Bayesian change point models
- Time-varying volatility models
- Markov Switching Models
- Bayesian Structural Time Series
- VAR models with macroeconomic variables
- Incorporating GDP, inflation, exchange rates, and production data

---

# Conclusion

Bayesian Change Point Detection provides a probabilistic framework for identifying structural breaks in Brent oil prices. The model helps quantify shifts in market behavior and offers valuable insights for understanding how geopolitical, economic, and policy-related events influence global oil markets. These findings support better investment decisions, policy formulation, and energy market analysis.

---