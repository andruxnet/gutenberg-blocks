import {
	useBlockProps,
	InnerBlocks,
	RichText
} from '@wordpress/block-editor';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const ALLOWED_BLOCKS = [
		'customberg/program-at-a-glance-row',
	];

	const { title, subtitle, disclaimer, additionalDisclaimer } = attributes;

	return (
		<div { ...useBlockProps() }>
			<RichText
				tagName="h2"
				value={ title }
				placeholder="Title here..."
				onChange={ (title) => setAttributes({ title }) }
				allowedFormats={ [] }
			/>
			<RichText
				tagName="h3"
				value={ subtitle }
				placeholder="Subtitle here..."
				onChange={ (subtitle) => setAttributes({ subtitle }) }
				allowedFormats={ [] }
			/>
			<InnerBlocks
				allowedBlocks={ ALLOWED_BLOCKS }
				orientation="vertical"
				renderAppender={ () => (
					<InnerBlocks.ButtonBlockAppender />
				) }
			/>
			<RichText
				tagName="p"
				className="disclaimer"
				value={ disclaimer }
				placeholder="Disclaimer here..."
				onChange={ ( disclaimer ) => setAttributes({ disclaimer }) }
				allowedFormats={ [] }
			/>
			<RichText
				tagName="p"
				className="disclaimer"
				value={ additionalDisclaimer }
				placeholder="Additional disclaimer here..."
				onChange={ ( additionalDisclaimer ) => setAttributes({ additionalDisclaimer }) }
				allowedFormats={ [] }
			/>
		</div>
	);
}
