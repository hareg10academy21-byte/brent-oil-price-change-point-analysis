# Brent Oil Price Analytics Dashboard

## Overview

This project analyzes Brent crude oil prices using Bayesian Change Point Detection and visualizes the results through an interactive dashboard.

## Project Structure

backend/
    Flask API

frontend/
    React Dashboard

notebooks/
    Analysis

data/
    Brent oil data
    Events

## Features

Historical Price Visualization

Bayesian Change Point Detection

Major Event Timeline

Interactive Dashboard

Date Range Filter

Key Metrics

## Backend API

GET /api/prices

GET /api/events

GET /api/changepoints

GET /api/metrics

## Technologies

Python

Flask

React

Recharts

PyMC

Pandas

## Run Backend

cd backend

python app.py

## Run Frontend

cd frontend

npm install

npm run dev