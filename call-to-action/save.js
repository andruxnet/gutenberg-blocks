import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();
	const {
		text,
		backgroundImage,
		layout
	} = attributes;

	const wrapperStyles = backgroundImage
	? { backgroundImage: `url(${backgroundImage})` }
	: {}

	if (backgroundImage) {
		blockProps.className += ' has-background-image'
	}
	else {
		blockProps.className += ' no-background-image'
	}

	const renderLayout = () => {
		switch ( layout ) {
			case 'cta-two-columns':
				return (
					<InnerBlocks.Content />
				)
			default:
				// defaults to original one column layout
				return (
					<>
						<header className="wp-block-customberg-call-to-action__text">{ text }</header>
						<InnerBlocks.Content />
					</>
				);
		}
	}

	return (
		<div { ...blockProps } style={ wrapperStyles }>
			{ renderLayout() }
		</div>
	);
}
