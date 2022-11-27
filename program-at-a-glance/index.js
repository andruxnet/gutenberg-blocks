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
registerBlockType( 'customberg/program-at-a-glance', {
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
		attributes: {
			backgroundImage: 'https://picsum.photos/800/300',
			title: 'My Title',
			subtitle: 'My subtitle',
			note1: 'Note number 1',
			note2: 'Note number 2'
		},
	},
} );

// register child specific blocks for this block
import RowEdit from './children/row/edit';
import RowSave from './children/row/save';

registerBlockType( 'customberg/program-at-a-glance-row', {
	edit: RowEdit,
	save: RowSave
});
/**
 * Registering block style definitions.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-styles/
 */
wp.blocks.registerBlockStyle( 'customberg/program-at-a-glance', [
    {
        name: 'grey',
        label: 'Grey Theme',
        isDefault: true
    },
    {
        name: 'blue',
        label: 'Blue Theme',
    }
] );
