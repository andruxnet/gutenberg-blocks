import {
	useBlockProps,
	InnerBlocks
} from '@wordpress/block-editor';

export default function Edit( { attributes, setAttributes } ) {
	const TEMPLATE = [
		[ 'customberg/simple-rich-text', { tag: 'h3', placeholder: 'Heading here...' } ],
		[ 'customberg/simple-rich-text', { placeholder: 'Text here...' } ],
	];

	return (
		<div { ...useBlockProps() }>
			<InnerBlocks
				template={ TEMPLATE }
			/>
		</div>
	);
}
