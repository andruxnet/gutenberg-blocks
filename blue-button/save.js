import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { post, buttonText } = attributes;

	return (
		<div { ...useBlockProps.save() }>
			<a
				href={ post?.url ?? '#' }
				className="blue-button"
				target={ post?.opensInNewTab ? '_blank' : '_self' }
				rel="noopener"
			>
				{ buttonText }
			</a>
		</div>
	);
}
