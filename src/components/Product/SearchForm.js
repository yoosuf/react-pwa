import React from 'react';
import PropTypes  from 'prop-types';

export default function SearchForm({ products }) {

  return (
    <div>

      <form onSubmit="">

        <input type="search" id="q" name="q" />

        <input type="submit" />

      </form>

    </div>
  );
}

SearchForm.propTypes = {
  products: PropTypes.array.isRequired
}
