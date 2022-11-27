import {
	useBlockProps,
	InnerBlocks
} from '@wordpress/block-editor';

import './editor.scss';

export default function Edit() {
	const ALLOWED_BLOCKS = [
		'customberg/large-numbered-list-row',
	];

	return (
		<div { ...useBlockProps() }>
			<InnerBlocks
				allowedBlocks={ ALLOWED_BLOCKS }
				orientation="vertical"
				renderAppender={ () => (
					<InnerBlocks.ButtonBlockAppender />
				) }
			/>
		</div>
	);
}
