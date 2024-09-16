import { useDispatch, useSelector } from 'react-redux';
import { selectCateogries } from '../../store/category/category.selector';
import { useEffect } from 'react';
import { fetchCategoriesStart } from '../../store/category/category.slice';
import TextInput from '../../components/text-input/text-input.component';
import Form from '../../components/form/form.component';
import WithHomeButton from '../../components/with-home-button/with-home-button.component';
import FloatInput from '../../components/float-input/float-input.component';
import { DimensionsContainer } from './add-product.styles';
import TextArea from '../../components/text-area/text-area.component';
import FileInput from '../../components/file-input/file-input.component';
import RadioChoice from '../../components/radio-choice/radio-choice.component';
import WithLabel from '../../components/with-label/with-label.component';
import SelectOption from '../../components/select-option/select-option.component';

const AddProduct = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCategoriesStart());
	}, [dispatch]);

	const categories = useSelector(selectCateogries);
	return (
		<WithHomeButton>
			<Form title='Add Product' buttonText='add' onSubmit={() => {}}>
				<TextInput label='Code' name='code' placeholder='code' disabled />
				<TextInput label='Name' name='name' placeholder='name' />
				<RadioChoice
					choices={['KG', 'G']}
					label='Unit'
					name='weight-unit'
					onChoiceChange={() => {}}
					selectedChoice='KG'
					preChoiceElement={<FloatInput placeholder='Weight' name='weight' />}
				/>
				<WithLabel
					label='Dimensions'
					element={
						<DimensionsContainer>
							<FloatInput placeholder='Length' name='length' />
							&times;
							<FloatInput placeholder='Width' name='width' />
							&times;
							<FloatInput placeholder='Height' name='height' />
						</DimensionsContainer>
					}
				/>
				<label htmlFor='category'>Category</label>
				<SelectOption options={categories} name='category' />
				{/* <label>Variations</label> */}
				<FileInput label='Images' name='images' onFileChange={() => {}} />
				<TextArea label='Description' name='description' />
			</Form>
		</WithHomeButton>
	);
};

export default AddProduct;
