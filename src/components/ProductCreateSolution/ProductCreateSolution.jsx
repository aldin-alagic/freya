import React from 'react';

import { Bold, Form, FormRow, InputLabel, InputText } from '../../lib/style/generalStyles';
import CreatableSelect from 'react-select/creatable';
import {
	ProductCreateSolutionWrapper,
	Inner,
	List,
	ListItem,
	ListItemValue,
	ListItemValueButton,
	ProductCreateSolutionItem,
} from './ProductCreateSolutionStyles';
import Attachments from '../Attachments/Attachments';
import Notification from '../Notification/Noification';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Editor } from 'react-draft-wysiwyg';
import { FaTimes } from 'react-icons/fa';
import { colors } from '../../lib/style/theme';

const ProductCreateSolution = () => {
	return (
		<ProductCreateSolutionWrapper>
			<Inner>
				<Form fullWidth>
					<FormRow>
						<InputLabel htmlFor="solutionTitle">Solution Title</InputLabel>
						<InputText id="solutionTitle" />
					</FormRow>
					<FormRow inline>
						<ProductCreateSolutionItem>
							<InputLabel htmlFor="tools">Required Tools</InputLabel>
							<CreatableSelect
								id="tools"
								placeholder="Required Tools"
								label="Required Tools"
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
						</ProductCreateSolutionItem>
						<ProductCreateSolutionItem>
							<InputLabel htmlFor="parts">Required Parts</InputLabel>
							<CreatableSelect
								id="parts"
								placeholder="Required Parts"
								label="Required Parts"
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
						</ProductCreateSolutionItem>
					</FormRow>
					<FormRow>
						<InputLabel htmlFor="solutionDescription">Solution Description</InputLabel>
						<Editor
							id="solutionDescription"
							placeholder="Describe your solution for the issue so the buyer can solve the issue..."
							wrapperClassName="demo-wrapper"
							editorClassName="editor"
						/>
					</FormRow>
					<FormRow>
						<InputLabel htmlFor="attachments">Solution Attachments</InputLabel>
						<Attachments />
					</FormRow>
					<FormRow>
						<Notification isWarning>
							Everything in this section except the title will be
							<Bold> hidden </Bold> from clients until they had
							<Bold> purchased</Bold> your solution.
						</Notification>
					</FormRow>
				</Form>
			</Inner>
		</ProductCreateSolutionWrapper>
	);
};

export default ProductCreateSolution;
