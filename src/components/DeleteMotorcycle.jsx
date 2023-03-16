/* eslint-disable react/no-unescaped-entities */
import React from 'react';

function DeleteMotorcycle() {
  return (
    <div>
      <h2>DeleteMotorcycle</h2>
      <p>
        When the user clicks the "Delete item" link in the
        navigation panel they can see a list of all items with title and "Delete" button.
      </p>
      <p>
        When the user clicks the "Delete" button, the selected item is marked as
        removed and does not show on the main list anymore.
      </p>
    </div>
  );
}

export default DeleteMotorcycle;
