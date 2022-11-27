import { useBlockProps } from '@wordpress/block-editor';

const ICONS_URL = '/wp-content/plugins/customberg/assets/icons/';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();
	const { items } = attributes;

	if ( ! items ) {
		return null;
	}

	return (
		<div { ...blockProps }>
			<ul className="wp-block-customberg-factoids__wrapper">
				{ items.map( ( item, index ) => (
					<li key={ index } className="wp-block-customberg-factoids__wrapper__item">
						<div>
							<img
								className="wp-block-customberg-factoids__wrapper__item__icon"
								src={ ICONS_URL + item.icon }
								onClick={ () => {
									onToggle();
								} }
							/>
							<div className="wp-block-customberg-factoids__wrapper__item__title">
								{ item.title }
							</div>
							<div className="wp-block-customberg-factoids__wrapper__item__subtitle">
								{ item.subtitle }
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
