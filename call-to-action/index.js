/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
 import { registerBlockType, registerBlockVariation } from '@wordpress/blocks';

 /**
  * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
  * All files containing `style` keyword are bundled together. The code used
  * gets applied both to the front of your site and to the editor.
  *
  * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
  */
 import './style.scss';

 /**
  * Internal dependencies
  */
 import Edit from './edit';
 import save from './save';

 /**
  * Every block starts by registering a new block type definition.
  *
  * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
  */
 registerBlockType( 'customberg/call-to-action', {
     /**
      * @see ./edit.js
      */
     edit: Edit,
     /**
      * @see ./save.js
      */
     save
 } );

  registerBlockVariation(
    'customberg/call-to-action', {
      name: 'text-with-two-buttons',
      title: 'Text with two buttons',
      scope: ['block'],
      icon: 'smiley',
      innerBlocks: [
        ['core/column', {}, [
          ['core/heading', { level: 2, placeholder: 'Project Title' }],
        ]],
        ['core/column', {}, [
          ['customberg/blue-button', { buttonText: 'button 1' }],
          ['customberg/blue-button', { buttonText: 'button 2' }],
        ]],
      ],
    }
  );
