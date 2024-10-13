import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { QuantityUnit } from '../../store/types';
import {
	CategoryRequestObject,
	toCategoryRequestObject,
} from '../../store/category/category.types';

import {
	fetchCategoryByIdStart,
	saveCategoryStart,
} from '../../store/category/category.slice';

import FileInput from '../../components/file-input/file-input.component';
import Form from '../../components/form/form.component';
import RadioChoice from '../../components/radio-choice/radio-choice.component';
import TextArea from '../../components/text-area/text-area.component';
import TextInput from '../../components/text-input/text-input.component';
import { selectCategory } from '../../store/category/category.selector';

const SaveCategory = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { KG, PCS, BOXES } = QuantityUnit;

	const INITIAL_CATEGORY_STATE: CategoryRequestObject = {
		name: '',
		unitPreference: KG,
		images: [],
		newImages: [],
		description: '',
	};

	const selectedCategory = useSelector(selectCategory);

	const [saving, setSaving] = useState(false);

	const [category, setCategory] = useState<CategoryRequestObject>(
		id && selectedCategory
			? toCategoryRequestObject(selectedCategory)
			: INITIAL_CATEGORY_STATE
	);

	useEffect(() => {
		if (id) {
			dispatch(fetchCategoryByIdStart(id));
		}
	}, [id]); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		if (saving && selectedCategory) {
			window.confirm('Category saved! Would you like to view it?')
				? navigate(`/categories/${id}`)
				: navigate('/');
		}
	}, [saving, selectedCategory, id]); // eslint-disable-line react-hooks/exhaustive-deps

	const handleChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = event.target;
		setCategory({ ...category, [name]: value });
	};

	const handleFileChange = (files: File[]) => {
		setCategory({ ...category, newImages: files });
	};

	const handleSubmit = () => {
		dispatch(saveCategoryStart({ category, id }));
		setSaving(true);
	};

	const handleRemoveImage = (src: string) => {
		setCategory({
			...category,
			images: category.images.filter((image) => image !== src),
		});
	};

	return (
		<Form
			title='Add Category'
			buttonText='add'
			onSubmit={handleSubmit}
			buttonDisabled={!category.name}
		>
			<TextInput
				label='Name'
				name='name'
				onChange={handleChange}
				value={category.name}
			/>
			<RadioChoice<QuantityUnit>
				label='Unit Preference'
				choices={[KG, PCS, BOXES]}
				selectedChoice={category.unitPreference}
				onChoiceChange={handleChange}
				name='unitPreference'
			/>
			<FileInput
				label='add images'
				onFilesChange={handleFileChange}
				name='images'
				initialPreview={category.images}
				onFileRemove={handleRemoveImage}
			/>
			<TextArea
				label='Description'
				onChange={handleChange}
				name='description'
				value={category.description}
			/>
		</Form>
	);
};

export default SaveCategory;
