import { useState } from 'react';
import FileInput from '../../components/file-input/file-input.component';
import Form from '../../components/form/form.component';
import RadioChoice from '../../components/radio-choice/radio-choice.component';
import TextArea from '../../components/text-area/text-area.component';
import TextInput from '../../components/text-input/text-input.component';
import { CategoryRequestObject } from '../../store/category/category.types';
import { useDispatch } from 'react-redux';
import { addCategoryStart } from '../../store/category/category.slice';
import { QuantityUnit } from '../../store/types';

const AddCategory = () => {

	const [category, setCategory] = useState<CategoryRequestObject>({
		name: '',
		unitPreference: QuantityUnit.KG,
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
			<Form title='Add Category' buttonText='add' onSubmit={handleSubmit}>
				<TextInput label='Name' name='name' onChange={handleChange} />
				<RadioChoice
					label='Unit Preference'
					choices={[QuantityUnit.KG, QuantityUnit.PCS, QuantityUnit.BOXES]}
					selectedChoice={QuantityUnit.KG}
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
	);
};

export default AddCategory;
