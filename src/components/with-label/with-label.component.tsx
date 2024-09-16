import React from 'react';
import { Label, WithLabelContainer } from './with-label.styles';
import { snakeCase } from '../../utilities/helper.utility';

type WithLabelProps = {
    label: string;
    element: React.ReactElement;
};

const WithLabel = ({ label, element }: WithLabelProps) => {
    const id = `${snakeCase(label)}_${crypto.getRandomValues(new Uint16Array(1))[0]}`;
    return (
        <WithLabelContainer>
            <Label htmlFor={id}>{label}</Label>
            {React.cloneElement(element, { id })}
        </WithLabelContainer>
    );
};

export default WithLabel;