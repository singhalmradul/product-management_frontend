import { ChangeEvent, useCallback, useEffect, useState } from 'react';

import debounce from 'lodash.debounce';

import { QuantityUnit } from '../../store/types';
import { OrderProduct } from '../../store/order/order.types';

import Button from '../button/button.component';
import NumberInput from '../number-input/number-input.component';
import RadioChoice from '../radio-choice/radio-choice.component';
import { ProductCardContainer, ProductInfo } from './product-card.styles';

type ProductCardProps = {
	orderProduct: OrderProduct;
	handleChange: (orderProduct: OrderProduct) => void;
};

const ProductCard = ({
	orderProduct: {
		product,
		quantity: { amount, unit },
	},
	handleChange,
}: ProductCardProps) => {

	const { KG, PCS, BOXES } = QuantityUnit;
	const { id, name, code, unitPreference } = product;

	const [quantityAmount, setQuantityAmount] = useState(amount);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const setAmount = useCallback(
		debounce((amount: number) => {
			handleChange({ product, quantity: { amount, unit } });
		}, 300),
		[amount]
	);

	useEffect(() => {
		if (quantityAmount !== null && quantityAmount !== amount) {
			setAmount(quantityAmount);
		}
	}, [quantityAmount, amount]); // eslint-disable-line react-hooks/exhaustive-deps

	const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newAmount = event.target.value ? Number(event.target.value) : null;
		setQuantityAmount(newAmount);
	};

	const handleUnitChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newUnit = event.target.value as QuantityUnit;
		handleChange({ product, quantity: { amount, unit: newUnit } });
	};

	const handleRemove = () => {
		handleChange({ product, quantity: { amount: -1, unit } });
	};

	return (
		<ProductCardContainer>
			<ProductInfo>
				{name} ({code})
			</ProductInfo>
			<NumberInput
				placeholder='quantity'
				onChange={handleQuantityChange}
				value={quantityAmount ?? ''}
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
