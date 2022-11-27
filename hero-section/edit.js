import { InnerBlocks } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit(props) {
	return (
		<>
			<InnerBlocks
				templateLock="all"
				template={[
					[ 'core/cover', {
						className: 'salvo-hero-section-cover',
						url: 'http://localhost:8080/wordpress/wp-content/uploads/2022/08/Skyscrapers-91744.mp4'
					}, [
						[ 'core/heading', {
							placeholder: 'Enter title',
							textColor: '#ffffff',
							level: 1,
							content: 'Title'
						} ],
						[ 'core/paragraph', {
							placeholder: 'Enter Subtitle',
							textColor: '#ffffff' ,
							content: 'Description of the video'
						} ],
						[ 'core/button', {
							placeholder: 'Enter button text',
							align: 'left',
							content: 'Our Services'
						} ],
					]]
				]}
				allowedBlocks={ [
					'core/paragraph',
					'core/cover',
					'core/group',
					'core/button',
					'core/heading'
				] }
			/>
		</>
	);
}
