import React, { useState } from 'react';
import { FileInputContainer, Input, Label } from './file-input.styles';
import { snakeCase } from '../../utilities/helper.utility';
import ImagePreview from '../image-preview/image-preview.component';

type FileInutProps = Omit<
	React.InputHTMLAttributes<HTMLInputElement>,
	'type | id | onChange'
> & {
	onFileChange: (files: File[]) => void;
	label: string;
};

const FileInput = ({ label, onFileChange, ...otherProps }: FileInutProps) => {
	const [preview, setPreview] = useState<string[]>([]);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files;
		if (files) {
			const filesArray = Array.from(files);
			setPreview(filesArray.map((file) => URL.createObjectURL(file)));
			onFileChange(filesArray);
		}
	};

	const id = `${snakeCase(label)}_${
		crypto.getRandomValues(new Uint16Array(1))[0]
	}`;
	return (
		<FileInputContainer>
			<Label htmlFor={id}>{label}</Label>
			{preview.length > 0 && <ImagePreview images={preview} />}
			<Input
				type='file'
				id={id}
				onChange={handleFileChange}
				multiple
				{...otherProps}
			/>
		</FileInputContainer>
	);
};

export default FileInput;
