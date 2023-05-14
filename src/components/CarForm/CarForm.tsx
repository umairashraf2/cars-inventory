import React from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { useForm } from "react-hook-form";
import {
	chooseName,
	choosePrice,
	chooseDescription,
	chooseHorsepower,
	chooseDimension,
	chooseEfficiency,
	chooseProdCost,
	chooseSeries,
	chooseSpeed,
	chooseWeight,
	CarState,
} from "../../redux/slices/rootSlice";
import { Button } from "@mui/material";
import { Input } from "../sharedComponents/Input";
import { serverCalls } from "../../api";

interface CarFormProps {
	id?: string;
	closeModal: () => void;
	data?: {};
}

export const CarForm = (props: CarFormProps) => {
	const dispatch = useDispatch();
	const store = useStore();
	const name = useSelector<CarState>((state) => state.name);
	const { register, handleSubmit } = useForm({});

	const onSubmit = async (data: any, event: any) => {
		if (props.id!) {
			await serverCalls.update(props.id!, data);
			event.target.reset();
		} else {
			dispatch(chooseName(data.name));
			dispatch(choosePrice(data.price));
			dispatch(chooseHorsepower(data.horsepower));
			dispatch(chooseDescription(data.description));
			dispatch(chooseProdCost(data.cost_of_production));
			dispatch(chooseDimension(data.dimensions));
			dispatch(chooseWeight(data.weight));
			dispatch(chooseEfficiency(data.fuel_efficiency));
			dispatch(chooseSeries(data.series));
			dispatch(chooseSpeed(data.max_speed));
			await serverCalls.create(store.getState());
		}
		props.closeModal();
		window.location.reload();
	};
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="name">Car Name</label>
				<Input {...register("name")} name="name" placeholder="Name" />
				<div>
					<label htmlFor="price">Price</label>
					<Input
						{...register("price")}
						name="price"
						placeholder="Price"
					/>
				</div>
				<div>
					<label htmlFor="horsepower">Horsepower</label>
					<Input
						{...register("horsepower")}
						name="horsepower"
						placeholder="Horsepower"
					/>
				</div>
				<div>
					<label htmlFor="fuel_efficiency">Fuel Efficiency</label>
					<Input
						{...register("fuel_efficiency")}
						name="fuel_efficiency"
						placeholder="Fuel Efficiency"
					/>
				</div>
				<div>
					<label htmlFor="description">Description</label>
					<Input
						{...register("description")}
						name="description"
						placeholder="Description"
					/>
				</div>
				<div>
					<label htmlFor="dimensions">Dimensions</label>
					<Input
						{...register("dimensions")}
						name="dimensions"
						placeholder="Dimensions"
					/>
				</div>
				<div>
					<label htmlFor="max_speed">Max Speed</label>
					<Input
						{...register("max_speed")}
						name="max_speed"
						placeholder="Max Speed"
					/>
				</div>
				<div>
					<label htmlFor="weight">Weight</label>
					<Input
						{...register("weight")}
						name="weight"
						placeholder="Weight"
					/>
				</div>
				<div>
					<label htmlFor="cost_of_production">
						Cost Of Production
					</label>
					<Input
						{...register("cost_of_production")}
						name="cost_of_production"
						placeholder="Cost Of Production"
					/>
				</div>
				<div>
					<label htmlFor="series">Series</label>
					<Input
						{...register("series")}
						name="series"
						placeholder="Series"
					/>
				</div>
				<Button type="submit">Submit</Button>
			</form>
		</div>
	);
};
