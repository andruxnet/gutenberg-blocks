const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, ToggleControl } = wp.components;

const extendedBlockSettings = (settings) => {
	if (settings.name !== 'core/list') {
		return settings
	}

	return {
		...settings,
		attributes: {
			...settings.attributes,
			useCustomBulletColor: {
				type: 'boolean',
				default: false
			}
		},
		edit(props) {
			const { useCustomBulletColor } = props.attributes;

			if (! useCustomBulletColor) {
				return settings.edit(props);
			}

			return (
				<div className="custom-bullet-color">
					{ settings.edit(props) }
				</div>
			)
		},
		save(props) {
			const { useCustomBulletColor } = props.attributes;

			if (! useCustomBulletColor) {
				return settings.save(props);
			}

			return (
				<div className="custom-bullet-color">
					{ settings.save(props) }
				</div>
			)
		}
	}
}

addFilter(
	'blocks.registerBlockType',
	'customberg-extend/list',
	extendedBlockSettings
);

const withInspectorControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {

		const {
			attributes,
			setAttributes,
			name,
			isSelected
		} = props;

		const { useCustomBulletColor } = attributes;

		return (
			<Fragment>
				<BlockEdit {...props} />
				{ isSelected && name === 'core/list' && (
					<InspectorControls>
						<PanelBody title={ __( 'Custom Bullet Points' ) } initialOpen={ false }>
							<ToggleControl
								label={ __( 'Use custom colored bullets' ) }
								checked={ !! useCustomBulletColor }
								onChange={ () => setAttributes( {  useCustomBulletColor: ! useCustomBulletColor } ) }
							/>
						</PanelBody>
					</InspectorControls>
				) }
			</Fragment>
		);
	};
}, 'withInspectorControls');

addFilter(
	'editor.BlockEdit',
	'customberg-extend/list',
	withInspectorControls
);
