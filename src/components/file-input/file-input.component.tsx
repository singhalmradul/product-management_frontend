import React, { useState } from 'react';
import {
	FileInputContainer,
	FilePreview,
	FilesPreview,
	Input,
	Label,
} from './file-input.styles';
import { snakeCase } from '../../utilities/helper.utility';

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
			<FilesPreview>
				{preview.map((previewUrl) => (
					<FilePreview src={previewUrl} key={previewUrl} />
				))}
			</FilesPreview>
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
