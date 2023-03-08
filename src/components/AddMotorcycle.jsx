/* eslint-disable react/no-unescaped-entities */
import React from 'react';

function AddMotorcycle() {
  return (
    <div>
      <h2 className="font-noto text-2xl underline">AddMotorcycle Page</h2>
      <p>
        When the user clicks the "Add item" (AddMotorcycle) link in the
        navigation panel they can see a form for adding a new item.
      </p>
      <p>
        Make sure that the "Add item" (AddMotorcycle) and "Delete item" (DeleteMotorcycle)
        links are accessible only by users who are admins.
      </p>
    </div>
  );
}

export default AddMotorcycle;
