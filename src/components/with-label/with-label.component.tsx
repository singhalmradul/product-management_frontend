import React from 'react';
import { Label, WithLabelContainer } from './with-label.styles';
import { snakeCase } from '../../utilities/helper.utility';

type WithLabelProps = {
    label: string;
    element: React.ReactElement;
};

const WithLabel = ({ label, element }: WithLabelProps) => {
    const id = `${snakeCase(label)}`;
    return (
        <WithLabelContainer>
            <Label htmlFor={id}>{label}</Label>
            {React.cloneElement(element, { id })}
        </WithLabelContainer>
    );
};

export default WithLabel;