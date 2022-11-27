import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { tag, content } = attributes;

	return (
		<RichText.Content
			{ ...useBlockProps.save() }
			tagName={ tag }
			value={ content }
		/>
	);
}
