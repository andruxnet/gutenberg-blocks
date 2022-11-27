import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { title, subtitle, disclaimer, additionalDisclaimer } = attributes;

	return (
		<div { ...useBlockProps.save() }>
			<h2>{ title }</h2>
			<h3>{ subtitle }</h3>
			<InnerBlocks.Content />
			<div class="disclaimer">
				<p>{ disclaimer }</p>
			</div>
			<div className="disclaimer">
				<p>{ additionalDisclaimer }</p>
			</div>
		</div>
	);
}
