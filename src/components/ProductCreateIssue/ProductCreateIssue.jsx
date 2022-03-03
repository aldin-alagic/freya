import React, { useState } from 'react';

import { Form, FormRow, InputLabel, InputText, TextArea } from '../../lib/style/generalStyles';
import Select from 'react-select';
import { colors } from '../../lib/style/theme';
import { ProductCreateIssueWrapper, Inner, IssueTypeOptions, IssueTypeOptionsItem } from './ProductCreateIssueStyles';
import { issueTypes, issueTypeOptions } from '../../lib/mock/issue';
import Attachments from '../Attachments/Attachments';

const ProductCreateIssue = () => {
	const [selectedIssue, setSelectedIssue] = useState("Body and exterior");

	return (
		<ProductCreateIssueWrapper>
			<Inner>
				<Form fullWidth>
					<InputLabel htmlFor="issueCategory">Issue Category</InputLabel>
					<FormRow>
						<Select
							id="issueCategory"
							placeholder="Issue Category"
							label="Issue Category"
							options={issueTypes}
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
									width: 350,
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
						<IssueTypeOptions>
							{selectedIssue &&
								issueTypeOptions[selectedIssue].map((issueType) => (
								<IssueTypeOptionsItem key={issueType}>
									{issueType}
								</IssueTypeOptionsItem>
							))}
						</IssueTypeOptions>
					</FormRow>
					<FormRow>
						<InputLabel htmlFor="issueCode">Issue Code</InputLabel>
						<InputText id="issueCode"/>	
					</FormRow>
					<FormRow>
						<InputLabel htmlFor="issueDescription">Issue Description</InputLabel>
						<TextArea id="issueCode" />
					</FormRow>
					<FormRow>
						<InputLabel htmlFor="attachments">Issue Attachments</InputLabel>
						<Attachments />
					</FormRow>
				</Form>
			</Inner>
		</ProductCreateIssueWrapper>
	);
};

export default ProductCreateIssue;
