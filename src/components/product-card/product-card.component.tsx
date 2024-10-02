import { ChangeEvent, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import debounce from 'lodash.debounce';

import { QuantityUnit } from '../../store/types';
import { OrderProduct } from '../../store/order/order.types';

import {
	modifyQuantityAmount,
	modifyQuantityUnit,
	removeProduct,
} from '../../store/order/order.slice';

import Button from '../button/button.component';
import NumberInput from '../number-input/number-input.component';
import RadioChoice from '../radio-choice/radio-choice.component';

type ProductCardProps = {
	orderProduct: OrderProduct;
};

const ProductCard = ({
	orderProduct: {
		product: { id, name, code, unitPreference },
		quantity,
	},
}: ProductCardProps) => {
	const dispatch = useDispatch();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const handleQuantityChange = useCallback(
		debounce((event: ChangeEvent<HTMLInputElement>) => {
			const amount = Number(event.target.value);
			dispatch(modifyQuantityAmount({ id, amount }));
		}, 300),
		[]
	);

	const handleUnitChange = (event: ChangeEvent<HTMLInputElement>) => {
		const unit = event.target.value as QuantityUnit;
		dispatch(modifyQuantityUnit({ id, unit }));
	};

	const handleRemove = () => {
		dispatch(removeProduct(id));
	};

	return (
		<div className='product'>
			<h3 className='product-info'>
				{name} ({code})
			</h3>
			<NumberInput placeholder='quantity' onChange={handleQuantityChange} />
			<RadioChoice
				choices={[QuantityUnit.KG, QuantityUnit.PCS, QuantityUnit.BOXES]}
				label='Unit'
				name={`unit_${id}`}
				selectedChoice={unitPreference}
				onChoiceChange={handleUnitChange}
			/>
			<Button onClick={handleRemove}>remove</Button>
		</div>
	);
};

export default ProductCard;
