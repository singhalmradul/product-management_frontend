import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { QuantityUnit } from '../../store/types';
import { CategoryRequestObject } from '../../store/category/category.types';

import { addCategoryStart } from '../../store/category/category.slice';

import FileInput from '../../components/file-input/file-input.component';
import Form from '../../components/form/form.component';
import RadioChoice from '../../components/radio-choice/radio-choice.component';
import TextArea from '../../components/text-area/text-area.component';
import TextInput from '../../components/text-input/text-input.component';

const SaveCategory = () => {
	const { id } = useParams();
	const { KG, PCS, BOXES } = QuantityUnit;

	const INITIAL_CATEGORY_STATE: CategoryRequestObject = {
		name: '',
		unitPreference: KG,
		images: [],
		description: '',
	};

	const [category, setCategory] = useState<CategoryRequestObject>(
		INITIAL_CATEGORY_STATE
	);

	const dispatch = useDispatch();

	const handleChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = event.target;
		setCategory({ ...category, [name]: value });
	};

	const handleFileChange = (files: File[]) => {
		setCategory({ ...category, images: files });
	};

	const handleSubmit = () => {
		dispatch(addCategoryStart(category));
	};

	return (
		<Form title='Add Category' buttonText='add' onSubmit={handleSubmit} buttonDisabled={!category.name}
		>
			<TextInput label='Name' name='name' onChange={handleChange} />
			<RadioChoice
				label='Unit Preference'
				choices={[KG, PCS, BOXES]}
				selectedChoice={KG}
				onChoiceChange={handleChange}
				name='unitPreference'
			/>
			<FileInput label='Images' onFileChange={handleFileChange} name='images' />
			<TextArea
				label='Description'
				onChange={handleChange}
				name='description'
			/>
		</Form>
	);
};

export default SaveCategory;
