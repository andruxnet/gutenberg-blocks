import { useState } from '@wordpress/element';

import { __ } from '@wordpress/i18n';

import {
	useBlockProps,
	BlockControls,
	RichText,
	MediaUpload,
	InnerBlocks,
	__experimentalBlockVariationPicker as BlockVariationPicker,
	__experimentalLinkControl as LinkControl
} from '@wordpress/block-editor';

import {
	ToolbarGroup,
	ToolbarButton
} from '@wordpress/components';

import variations from "./variations";

import { link, image } from '@wordpress/icons';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();
	const {
		text,
		backgroundImage,
	} = attributes;

	if ( ! attributes.layout ) {
		return (
			<BlockVariationPicker
				icon="columns"
				label={ __( 'Choose variation' ) }
				instructions={ __( 'Select a variation to start with.' ) }
				onSelect={ ( variation ) => setAttributes( { layout: variation.name } ) }
				variations={ variations }
			/>
		);
	}

	const TEMPLATE_TWO_COLUMN = [
		[ 'core/columns', { templateLock: 'all' },
			[
				[ 'core/column', { templateLock: 'all', style: { spacing: { padding: { right: '25px' } } } }, [
					[ 'core/paragraph', { placeholder: __( 'Some text here' ), textColor: 'white', fontSize: 'large', align: 'right' } ],
				] ],
				[ 'core/column', { templateLock: 'all', verticalAlignment: 'center' }, [
					[ 'core/buttons', { templateLock: 'all', layout: { type: 'flex', justifyContent: 'center' } }, [
						[ 'core/button', { text: 'Learn More', width: 50, className: 'is-style-outline', textColor: 'white', fontSize: 'large' } ],
						[ 'core/button', { text: 'Apply Now', width: 50, className: 'is-style-fill', fontSize: 'large' } ]
					] ]
				] ]
			]
		],
	];
	const ALLOWED_BLOCKS = [ 'customberg/blue-button' ];

	const onImageSelect = ( data ) => {
		setAttributes( { backgroundImage: data.sizes.full.url } )
	}

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
		switch ( attributes.layout ) {
			case 'cta-two-columns':
				return (
					<InnerBlocks template={ TEMPLATE_TWO_COLUMN } templateLock="all" />
				)
			default:
				// defaults to original one column layout
				return (
					<>
						<RichText
							className="wp-block-customberg-call-to-action__text"
							tagName="header"
							value={ text }
							onChange={ ( data ) =>
								setAttributes( { text: data } )
							}
							allowedFormats={ [] }
						/>
						<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
					</>
				);
		}
	}

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<MediaUpload
						onSelect={onImageSelect}
						type="image"
						value={ backgroundImage }
						render={({ open }) => (
							<ToolbarButton
								icon={ image }
								label={ __( 'Set Background Image', 'customberg' ) }
								onClick={ open }
							/>
						) }
					/>
					<ToolbarButton
						icon={ 'no-alt' }
						title={ __( 'Remove Background Image', 'customberg' ) }
						onClick={ () => {
							setAttributes( { backgroundImage: null } )
						}}
					/>
					<ToolbarButton
						icon={ 'admin-settings' }
						title={ __( 'Show More Settings', 'customberg' ) }
						onClick={ () => {
							// Open the block settings sidebar if closed, else close
							const isSidebarOpened = wp.data.select( 'core/edit-post' ).isEditorSidebarOpened();

							if ( !isSidebarOpened ) {
								wp.data.dispatch( 'core/edit-post' ).openGeneralSidebar('edit-post/block');
							} else {
								wp.data.dispatch( 'core/edit-post' ).closeGeneralSidebar('edit-post/block');
							}
						 } }
					/>
				</ToolbarGroup>
			</BlockControls>
			<div { ...blockProps } style={ wrapperStyles }>
				{ renderLayout() }
			</div>
		</>
	);
}
