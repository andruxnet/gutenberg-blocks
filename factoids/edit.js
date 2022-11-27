import {
	useBlockProps,
	RichText
} from '@wordpress/block-editor';

import {
	MenuGroup,
	MenuItem,
	Dropdown,
	Dashicon,
} from '@wordpress/components';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();
	const { items } = attributes;
	const icons = [
		'admin-home'
	];

	const updateItems = ( index, key, value ) => {
		const updatedItems = items.map( ( item, idx ) => {
			if ( idx === index ) {
				item[ key ] = value;
			}

			return item;
		} );

		setAttributes( { items: updatedItems } );
	}

	return (
		<div { ...blockProps }>
			<ul className="wp-block-customberg-factoids__wrapper">
				{ items.map( ( item, index ) => (
					<li key={ index } className="wp-block-customberg-factoids__wrapper__item">
						<div key={ index }>
							<Dropdown
								className="my-container-class-name"
								contentClassName="my-popover-content-classname"
								position="bottom right"
								renderToggle={ ( { onToggle } ) => (
									<Dashicon
										key={ item.icon }
										className="wp-block-customberg-factoids__wrapper__item__icon"
										icon={ item.icon }
										onClick={ () => {
											onToggle();
										} }
									/>
								) }
								renderContent={ ( { onClose } ) => (
									<MenuGroup>
										{ icons.map( ( icon ) => (
											<MenuItem
												isSelected={ index === 2 }
												onClick={ () => {
													updateItems( index, 'icon', icon );
													onClose();
												} }
											>
												<Dashicon
													className="wp-block-customberg-factoids__wrapper__item__menu-icon"
													icon={ item.icon }
												/>
											</MenuItem>
										) ) }
									</MenuGroup>
								) }
							/>
							<RichText
								className="wp-block-customberg-factoids__wrapper__item__title"
								value={ item.title }
								placeholder="Title goes here"
								onChange={ ( data ) =>  updateItems( index, 'title', data ) }
								allowedFormats={ [] }
							/>
							<RichText
								className="wp-block-customberg-factoids__wrapper__item__subtitle"
								value={ item.subtitle }
								placeholder="Text goes here"
								onChange={ ( data ) =>  updateItems( index, 'subtitle', data ) }
								allowedFormats={ [] }
							/>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
