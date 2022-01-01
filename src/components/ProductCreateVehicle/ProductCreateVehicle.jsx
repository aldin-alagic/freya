import React from 'react';

import { Form, FormRow, InputLabel } from '../../lib/style/generalStyles';
import Select from 'react-select';
import { colors } from '../../lib/style/theme';
import { fuelTypeOptions, transmissionOptions } from '../../lib/mock/vehicle';
import { ProductCreateVehicleWrapper, Inner, ProductCreateVehicleBlock } from './ProductCreateVehicleStyles';

const ProductCreateVehicle = () => {
	const steps = [{ title: 'Vehicle' }, { title: 'Issue' }, { title: 'Solution' }, { title: 'Review' }, { title: 'Finish' }];
	const brands = [
		{ value: 'Audi', label: 'Audi' },
		{ value: 'BMW', label: 'BMW' },
		{ value: 'Mercedes', label: 'Mercedes' },
	];
	const models = [
		{ value: '3', label: '3' },
		{ value: '5', label: '5' },
	];
	const variants = [{ value: 'M', label: 'M' }];
	const years = [
		{ value: '2000', label: '2000' },
		{ value: '2001', label: '2001' },
		{ value: '2002', label: '2002' },
	];

	return (
		<ProductCreateVehicleWrapper>
			<Inner>
				<Form fullWidth>
					<InputLabel htmlFor="brand">Vehicle</InputLabel>
					<FormRow isInline>
						<Select
							id="brand"
							placeholder="Brand"
							label="Brand"
							options={brands}
							menuPortalTarget={document.body}
							styles={{
								menuPortal: (base) => ({ ...base, zIndex: 9999 }),
								control: (provided) => ({
									...provided,
									borderColor: colors.grey,
									borderRadius: 4,
									height: 56,
									marginRight: 16,
									marginBottom: 8,
									width: 230,
									boxShadow: 'none',
									'&:hover': {
										borderColor: colors.blue,
									},
									'&:focus': {
										borderColor: colors.blue,
									},
								}),
							}}
							isSearchable
							isClearable
						/>
						<Select
							id="model"
							placeholder="Model"
							label="Model"
							options={models}
							menuPortalTarget={document.body}
							styles={{
								menuPortal: (base) => ({ ...base, zIndex: 9999 }),
								control: (provided) => ({
									...provided,
									borderColor: colors.grey,
									borderRadius: 4,
									height: 56,
									width: 230,
									marginRight: 16,
									marginBottom: 8,
									boxShadow: 'none',
									'&:hover': {
										borderColor: colors.blue,
									},
									'&:focus': {
										borderColor: colors.blue,
									},
								}),
							}}
							isSearchable
							isClearable
						/>
						<Select
							id="variant"
							placeholder="Variant"
							label="Variant"
							options={variants}
							menuPortalTarget={document.body}
							styles={{
								menuPortal: (base) => ({ ...base, zIndex: 9999 }),
								control: (provided) => ({
									...provided,
									borderColor: colors.grey,
									borderRadius: 4,
									height: 56,
									width: 230,
									marginRight: 16,
									marginBottom: 8,
									boxShadow: 'none',
									'&:hover': {
										borderColor: colors.blue,
									},
									'&:focus': {
										borderColor: colors.blue,
									},
								}),
							}}
							isSearchable
							isClearable
						/>
						<Select
							id="years"
							placeholder="Years"
							label="Years"
							options={years}
							menuPortalTarget={document.body}
							styles={{
								menuPortal: (base) => ({ ...base, zIndex: 9999 }),
								control: (provided) => ({
									...provided,
									borderColor: colors.grey,
									borderRadius: 4,
									height: 56,
									width: 230,
									marginBottom: 8,
									boxShadow: 'none',
									'&:hover': {
										borderColor: colors.blue,
									},
									'&:focus': {
										borderColor: colors.blue,
									},
								}),
							}}
							isMulti
							isSearchable
							isClearable
						/>
					</FormRow>
					<FormRow isInline>
						<ProductCreateVehicleBlock>
							<InputLabel htmlFor="fuelType">Fuel Type</InputLabel>
							{fuelTypeOptions && (
								<Select
									id="fuelType"
									placeholder="Fuel Type"
									label="Fuel Type"
									options={fuelTypeOptions}
									menuPortalTarget={document.body}
									styles={{
										menuPortal: (base) => ({ ...base, zIndex: 9999 }),
										control: (provided) => ({
											...provided,
											borderColor: colors.grey,
											borderRadius: 4,
											height: 56,
											width: 230,
											marginRight: 16,
											marginBottom: 8,
											boxShadow: 'none',
											'&:hover': {
												borderColor: colors.blue,
											},
											'&:focus': {
												borderColor: colors.blue,
											},
										}),
									}}
									isSearchable
									isClearable
								/>
							)}
						</ProductCreateVehicleBlock>
						<ProductCreateVehicleBlock>
							<InputLabel htmlFor="transmissionType">Transmission Type</InputLabel>
							{transmissionOptions && (
								<Select
									id="transmissionType"
									placeholder="Transmission Type"
									label="Transmission Type"
									options={transmissionOptions}
									menuPortalTarget={document.body}
									styles={{
										menuPortal: (base) => ({ ...base, zIndex: 9999 }),
										control: (provided) => ({
											...provided,
											borderColor: colors.grey,
											borderRadius: 4,
											height: 56,
											width: 230,
											marginBottom: 8,
											boxShadow: 'none',
											'&:hover': {
												borderColor: colors.blue,
											},
											'&:focus': {
												borderColor: colors.blue,
											},
										}),
									}}
									isSearchable
									isClearable
								/>
							)}
						</ProductCreateVehicleBlock>
					</FormRow>
				</Form>
			</Inner>
		</ProductCreateVehicleWrapper>
	);
};

export default ProductCreateVehicle;
