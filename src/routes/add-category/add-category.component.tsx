import { useState } from 'react';
import FileInput from '../../components/file-input/file-input.component';
import Form from '../../components/form/form.component';
import RadioChoice from '../../components/radio-choice/radio-choice.component';
import TextArea from '../../components/text-area/text-area.component';
import TextInput from '../../components/text-input/text-input.component';
import WithHomeButton from '../../components/with-home-button/with-home-button.component';
import { CategoryRequestObject } from '../../store/category/category.types';
import { useDispatch } from 'react-redux';
import { addCategoryStart } from '../../store/category/category.slice';

const AddCategory = () => {
	const [category, setCategory] = useState<CategoryRequestObject>({
		name: '',
		unitPreference: 'KG',
		images: [],
		description: '',
	});

	const dispatch = useDispatch();

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
		<WithHomeButton>
			<Form title='Add Category' buttonText='add' onSubmit={handleSubmit}>
				<TextInput label='Name' name='name' onChange={handleChange} />
				<RadioChoice
					label='Unit Preference'
					choices={['KG', 'PCS', 'BOXES']}
					selectedChoice='KG'
					onChoiceChange={handleChange}
					name='unitPreference'
				/>
				<FileInput
					label='Images'
					onFileChange={handleFileChange}
					name='images'
				/>
				<TextArea
					label='Description'
					onChange={handleChange}
					name='description'
				/>
			</Form>
		</WithHomeButton>
	);
};

export default AddCategory;
