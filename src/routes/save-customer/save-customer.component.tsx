import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

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

	const INITIAL_CATEGORY_STATE: CustomerRequestObject = {
		name: '',
		gstin: '',
		email: '',
		phoneNumber: '',
		description: '',
	};

	const dispatch = useDispatch();

	const selectedCustomer = useSelector(selectCustomer);

	const [customer, setCustomer] = useState<CustomerRequestObject>(
		id && selectedCustomer
			? toCustomerRequestObject(selectedCustomer)
			: INITIAL_CATEGORY_STATE
	);

	useEffect(() => {
		if (id) {
			dispatch(fetchCustomerByIdStart(id));
		}
	}, [id]); // eslint-disable-line react-hooks/exhaustive-deps

	const handleChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = event.target;
		setCustomer({ ...customer, [name]: value });
	};

	const handleSubmit = () => {
		dispatch(saveCustomerStart({ customer, id }));
	};

	return (
		<Form
			title='Add Customer'
			buttonText='add'
			onSubmit={handleSubmit}
			buttonDisabled={!customer.name}
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
						size={10}
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
