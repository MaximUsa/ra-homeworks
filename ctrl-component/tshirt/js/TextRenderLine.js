const TextRenderLine = ({value, onChange}) => {

	const onChangeText = (event) => {
		event.currentTarget.value = event.currentTarget.value.replace(/[^a-zA-Z+\n\s]+/gi, "").toLowerCase();
		onChange(event.currentTarget.value)
	};

	return (
		<div className="type-text">
			<textarea
				name="text"
				id="font-text"
				cols="30"
				rows="2"
				placeholder="Введите то что вы хотите напечатать"
				onChange={onChangeText}
				value={value}
			>
			</textarea>
		</div>
	);
};
