import { render } from '@wordpress/element';

import Block from './Block';

window.addEventListener( 'DOMContentLoaded', () => {
  const elements = document.querySelectorAll(
    '[class^=wp-block-customberg-]'
  );

  if ( elements ) {
    Array.from( elements ).forEach( element => {
      const attributes = { ...element.dataset };

      Object.keys( attributes ).forEach( ( key ) => {
        try {
          attributes[ key ] = JSON.parse( attributes[ key ] );
        }
        catch (err) {
          // do nothing
        }
      } );

      render(
        <Block inFront={ true } { ...attributes } />,
        element
      );
    })
  }
} );
