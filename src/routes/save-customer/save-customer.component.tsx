import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import {
	CustomerRequestObject,
	toCustomerRequestObject,
} from '../../store/customer/customer.types';

import {
	fetchCustomerByIdStart,
	saveCustomerStart,
} from '../../store/customer/customer.slice';

import Form from '../../components/form/form.component';
import TextArea from '../../components/text-area/text-area.component';
import TextInput from '../../components/text-input/text-input.component';
import { selectCustomer } from '../../store/customer/customer.selector';
import NumberInput from '../../components/number-input/number-input.component';
import WithLabel from '../../components/with-label/with-label.component';

const SaveCustomer = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const INITIAL_CATEGORY_STATE: CustomerRequestObject = {
		name: '',
		gstin: '',
		email: '',
		phoneNumber: '',
		description: '',
	};


	const selectedCustomer = useSelector(selectCustomer);

	const [customer, setCustomer] = useState<CustomerRequestObject>(
		id && selectedCustomer
			? toCustomerRequestObject(selectedCustomer)
			: INITIAL_CATEGORY_STATE
	);

	const [saving, setSaving] = useState(false);

	useEffect(() => {
		if (id) {
			dispatch(fetchCustomerByIdStart(id));
		}
	}, [id]); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		if (saving && selectedCustomer) {
			window.confirm('Customer saved! Would you like to view it?')
				? navigate(`/customers/${id}`)
				: navigate('/');
		}
	}, [saving, selectedCustomer, id]); // eslint-disable-line react-hooks/exhaustive-deps

	const handleChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = event.target;
		setCustomer({ ...customer, [name]: value });
	};

	const handleSubmit = () => {
		dispatch(saveCustomerStart({ customer, id }));
		setSaving(true);
	};

	return (
		<Form
			title='Save Customer'
			buttonText='save'
			onSubmit={handleSubmit}
			buttonDisabled={!customer.name.trim()}
		>
			<TextInput
				label='Name'
				name='name'
				onChange={handleChange}
				value={customer.name}
			/>
			<TextInput
				label='GSTIN'
				name='gstin'
				onChange={handleChange}
				value={customer.gstin}
			/>
			<TextInput
				label='Email'
				type='email'
				name='email'
				onChange={handleChange}
				value={customer.email}
			/>
			<WithLabel
				label='Phone Number'
				element={
					<NumberInput
						name='phoneNumber'
						onChange={handleChange}
						value={customer.phoneNumber}
					/>
				}
			/>
			<TextArea
				label='Description'
				onChange={handleChange}
				name='description'
				value={customer.description}
			/>
		</Form>
	);
};

export default SaveCustomer;
