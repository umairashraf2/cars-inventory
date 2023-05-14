import { createSlice } from "@reduxjs/toolkit";

export interface CarState {
	name: string;
	price: number;
	description: string;
	horsepower: number;
	fuel_efficiency: number;
	max_speed: string;
	dimensions: string;
	weight: string;
	cost_of_production: number;
	series: string;
}

const initialState: CarState = {
	name: "Car McCarFace",
	price: 0,
	description: "",
	horsepower: 0,
	fuel_efficiency: 0,
	max_speed: "",
	dimensions: "",
	weight: "",
	cost_of_production: 0,
	series: "",
};

const rootSlice = createSlice({
	name: "root",
	initialState,
	reducers: {
		chooseName: (state, action) => {
			state.name = action.payload;
		},
		choosePrice: (state, action) => {
			state.price = action.payload;
		},
		chooseDescription: (state, action) => {
			state.description = action.payload;
		},
		chooseHorsepower: (state, action) => {
			state.horsepower = action.payload;
		},
		chooseEfficiency: (state, action) => {
			state.fuel_efficiency = action.payload;
		},
		chooseSpeed: (state, action) => {
			state.max_speed = action.payload;
		},
		chooseDimension: (state, action) => {
			state.dimensions = action.payload;
		},
		chooseWeight: (state, action) => {
			state.weight = action.payload;
		},
		chooseProdCost: (state, action) => {
			state.cost_of_production = action.payload;
		},
		chooseSeries: (state, action) => {
			state.series = action.payload;
		},
	},
});

//Export Reducer
export const reducer = rootSlice.reducer;
export const {
	chooseName,
	choosePrice,
	chooseDescription,
	chooseHorsepower,
	chooseEfficiency,
	chooseSpeed,
	chooseDimension,
	chooseWeight,
	chooseProdCost,
	chooseSeries,
} = rootSlice.actions;
