import {
	useBlockProps,
	InnerBlocks
} from '@wordpress/block-editor';

export default function Edit( { attributes, setAttributes } ) {
	const TEMPLATE = [
		[ 'core/columns', {},
			[
				[ 'core/column', {}, [
					[ 'customberg/simple-rich-text', { className: 'column-desc', placeholder: 'Item description here' } ],
				]
				],
				[ 'core/column', {}, [
					[ 'customberg/simple-rich-text', { className: 'column-value', placeholder: 'Item value  here' } ],
				]
				],
			]
		],
	];

	return (
		<div { ...useBlockProps() }>
			<InnerBlocks
				template={ TEMPLATE }
				templateLock="all"
			/>
		</div>
	);
}
