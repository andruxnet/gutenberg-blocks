/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
 import { registerBlockType } from '@wordpress/blocks';

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
 registerBlockType( 'customberg/large-numbered-list', {
   /**
    * @see ./edit.js
    */
   edit: Edit,
   /**
    * @see ./save.js
    */
   save,
   /**
    * block preview
    */
   example: {
     innerBlocks: [
       {
         name: 'customberg/large-numbered-list-row',
         attributes: {
           heading: 'What is Lorem Ipsum?',
           paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
         },
       },
       {
         name: 'customberg/large-numbered-list-row',
         attributes: {
           heading: 'Where does it come from?',
           paragraph: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
         },
       },
       {
         name: 'customberg/large-numbered-list-row',
         attributes: {
           heading: 'Why do we use it?',
           paragraph: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
         },
       },
     ],
   }
 } );

// register child specific blocks for this block
import RowEdit from './children/row/edit';
import RowSave from './children/row/save';

registerBlockType( 'customberg/large-numbered-list-row', {
  edit: RowEdit,
  save: RowSave
});
