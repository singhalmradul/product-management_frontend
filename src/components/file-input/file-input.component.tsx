import React, { useEffect, useState } from 'react';
import { FileInputContainer, Input, Label } from './file-input.styles';
import { randomId, snakeCase } from '../../utilities/helper.utility';
import ImagePreview from '../image-preview/image-preview.component';

type FileInutProps = Omit<
	React.InputHTMLAttributes<HTMLInputElement>,
	'type | id | onChange'
> & {
	onFilesChange: (files: File[]) => void;
	onFileRemove: (src: string) => void;
	label: string;
	initialPreview?: string[];
};

const FileInput = ({
	label,
	onFilesChange,
	onFileRemove,
	initialPreview,
	...otherProps
}: FileInutProps) => {
	const [preview, setPreview] = useState<string[]>(initialPreview ?? []);
	const [files, setFiles] = useState<File[]>([]);
	const [selectedFilesPreview, setSelectedFilesPreview] = useState<string[]>(
		[]
	);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const addedFiles = event.target.files;
		if (addedFiles) {
			const filesArray = Array.from(addedFiles);
			const newFiles = files.concat(filesArray);
			onFilesChange(newFiles);
			setFiles(newFiles);
			setSelectedFilesPreview((prevPreview) =>
				prevPreview.concat(filesArray.map((file) => URL.createObjectURL(file)))
			);
		}
	};

	const handleFileRemove = (src: string) => {
		const newPreviews = preview.filter((preview) => preview !== src);
		setPreview(newPreviews);
		onFileRemove(src);
	};

	const handleSelectedFileRemove = (src: string) => {
		const index = selectedFilesPreview.indexOf(src);
		const newFiles = files.filter((_, i) => i !== index);
		const newPreviews = selectedFilesPreview.filter(
			(preview) => preview !== src
		);
		setFiles(newFiles);
		setSelectedFilesPreview(newPreviews);
		onFilesChange(newFiles);
	};

	const handleRemove = (src: string) => {
		if (preview.includes(src)) {
			handleFileRemove(src);
		} else {
			handleSelectedFileRemove(src);
		}
	};

	const id = `${snakeCase(label)}_${randomId()}`;
	return (
		<FileInputContainer>
			<Label htmlFor={id}>{label}</Label>
			{[...preview, ...selectedFilesPreview].length > 0 && (
				<ImagePreview
					images={[...preview, ...selectedFilesPreview]}
					onRemove={handleRemove}
				/>
			)}
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
