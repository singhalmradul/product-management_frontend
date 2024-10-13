import { ChangeEvent, useCallback, useEffect, useState } from 'react';
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
import { ProductCardContainer, ProductInfo } from './product-card.styles';

type ProductCardProps = {
	orderProduct: OrderProduct;
};

const ProductCard = ({
	orderProduct: {
		product: { id, name, code, unitPreference },
		quantity: { amount, unit },
	},
}: ProductCardProps) => {
	const dispatch = useDispatch();

	const { KG, PCS, BOXES } = QuantityUnit;

	const [quantityAmount, setQuantityAmount] = useState(amount);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const setAmount = useCallback(
		debounce((amount: number) => {
			dispatch(modifyQuantityAmount({ id, amount }));
		}, 300),
		[]
	);

	useEffect(() => {
		quantityAmount && setAmount(quantityAmount);
	}, [amount]); // eslint-disable-line react-hooks/exhaustive-deps

	const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
		const amount = event.target.value ? Number(event.target.value) : null;
		setQuantityAmount(amount);
	};

	const handleUnitChange = (event: ChangeEvent<HTMLInputElement>) => {
		const unit = event.target.value as QuantityUnit;
		dispatch(modifyQuantityUnit({ id, unit }));
	};

	const handleRemove = () => {
		dispatch(removeProduct(id));
	};

	return (
		<ProductCardContainer>
			<ProductInfo>
				{name} ({code})
			</ProductInfo>
			<NumberInput
				placeholder='quantity'
				onChange={handleQuantityChange}
				value={quantityAmount}
			/>
			<RadioChoice<QuantityUnit>
				choices={[KG, PCS, BOXES]}
				label='Unit'
				name={`unit_${id}`}
				selectedChoice={unit ?? unitPreference}
				onChoiceChange={handleUnitChange}
			/>
			<Button onClick={handleRemove}>remove</Button>
		</ProductCardContainer>
	);
};

export default ProductCard;
