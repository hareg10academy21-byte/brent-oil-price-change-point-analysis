import axios from "axios";

const API = axios.create({
    baseURL: "http://127.0.0.1:5000/api",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

// Historical price data
export const getPrices = async () => {
    try {
        return await API.get("/prices");
    } catch (error) {
        console.error("Error fetching price data:", error);
        throw error;
    }
};

// Major geopolitical and economic events
export const getEvents = async () => {
    try {
        return await API.get("/events");
    } catch (error) {
        console.error("Error fetching event data:", error);
        throw error;
    }
};

// Bayesian change point analysis results
export const getChangePoints = async () => {
    try {
        return await API.get("/changepoints");
    } catch (error) {
        console.error("Error fetching change point data:", error);
        throw error;
    }
};

// Dashboard metrics
export const getMetrics = async () => {
    try {
        return await API.get("/metrics");
    } catch (error) {
        console.error("Error fetching dashboard metrics:", error);
        throw error;
    }
};

export default API;