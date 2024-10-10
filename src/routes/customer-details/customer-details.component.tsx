import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import Spinner from '../../components/spinner/spinner.component';
import Detail from '../../components/detail/detail.component';
import Button from '../../components/button/button.component';
import {
	selectCustomer,
	selectCustomerIsLoading,
} from '../../store/customer/customer.selector';
import { deleteCustomerStart, fetchCustomerByIdStart } from '../../store/customer/customer.slice';
import Page from '../../components/page/page.component';

const CustomerDetails = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();

	const customer = useSelector(selectCustomer);
	const isLoading = useSelector(selectCustomerIsLoading);

	const [deleting, setDeleting] = useState(false);

	useEffect(() => {
		if (id && customer?.id !== id) {
			if (deleting) {
				navigate('/');
			} else {
				dispatch(fetchCustomerByIdStart(id));
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id, customer, deleting]);

	const handleDelete = () => {
		if (window.confirm('Are you sure you want to delete this customer?')) {
			dispatch(deleteCustomerStart(id!));
			setDeleting(true);
		}
	};

	if (isLoading || !customer) {
		return <Spinner />;
	}

	return (
		<Page title='Customer Details'>
			<Detail label='Name' value={customer.name} />
			<Detail label='PhoneNumber' value={customer.phoneNumber} />
			<Detail label='Email' value={customer.email} />
			<Detail label='GSTIN' value={customer.gstin} />
			<Detail label='Description' value={customer.description} />
			<Button linkTo='edit'>Edit</Button>
			<Button onClick={handleDelete}>Delete</Button>
		</Page>
	);
};

export default CustomerDetails;
