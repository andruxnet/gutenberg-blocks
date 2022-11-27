import { useState } from '@wordpress/element';

import { __ } from '@wordpress/i18n';

import {
	useBlockProps,
	BlockControls,
	RichText,
	URLPopover,
	__experimentalLinkControl as LinkControl
} from '@wordpress/block-editor';

import {
	ToolbarGroup,
	ToolbarButton
} from '@wordpress/components';

import { link } from '@wordpress/icons';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();
	const { buttonText, post } = attributes;
	const [ showLinkControl, setShowLinkControl ] = useState( false );

	const onChangeButtonText = ( data ) => {
		setAttributes( { buttonText: data } )
	}

	const onChangeUrl = ( data ) => {
		// we clear the `title` because for some reason it's not being updated when we select a new URL
		const newData = { ...data, title: '' };

		setAttributes( { post: newData } )
	}

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon={ link }
						title={ __( 'Set Request Information URL', 'customberg' ) }
						onClick={ () => { setShowLinkControl( true ) } }
					>
						{ showLinkControl && (
							<URLPopover className="page-header-link-control" onClose={ () => setShowLinkControl( false ) }>
								<p>Include a <strong>full</strong> URL. Example: https://nu.edu</p>
								<LinkControl
									value={ post }
									onChange={ onChangeUrl }
								/>
							</URLPopover>
						) }
					</ToolbarButton>
				</ToolbarGroup>
			</BlockControls>
			<div { ...blockProps }>
				<div className="button-wrapper">
					<RichText
						tagName="a"
						className="blue-button"
						value={ buttonText }
						onChange={ onChangeButtonText }
						allowedFormats={ [] }
					/>
				</div>
			</div>
		</>
	);
}
