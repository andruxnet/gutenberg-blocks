import {
	useBlockProps,
	RichText
} from '@wordpress/block-editor';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { tag, content, placeholder } = attributes;

	return (
		<RichText
			{ ...useBlockProps() }
			tagName={ tag }
			value={ content }
			allowedFormats={ [] }
			onChange={ ( value ) => setAttributes( { content: value } ) }
			placeholder={ placeholder }
		/>
	);
}
