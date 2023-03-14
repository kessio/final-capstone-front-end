import React, { useState }from 'react';
import { useDispatch } from 'react-redux';
import { postData } from '../redux/addItem/addItem';

const AddMotorcycle = () => {
  const dispatch = useDispatch();
  //const [formData, setFormData] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData();
    if (form.name.value && form.description.value && form.price.value && form.model.value && form.image.files[0]) {
      formData.append('motorcycle[name]', form.name.value);
      formData.append('motorcycle[description]', form.description.value);
      formData.append('motorcycle[price]', form.price.value);
      formData.append('motorcycle[model]', form.model.value);
      formData.append('motorcycle[image]', form.image.files[0]);
    }
    dispatch(postData(formData));
    //setFormData(formData);
  };
  return (
<div>

<div className="md:grid md:grid-cols-3 md:gap-6 md:ml-60">
    <div className="mt-5 md:col-span-2 md:mt-5">
      <form onSubmit={handleSubmit}>
        <div className="shadow sm:overflow-hidden sm:rounded-md md:mt-10">
          <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
            <div className="grid grid-cols-3 gap-6">

              <div className="col-span-3 sm:col-span-2">
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                <div className="mt-2 flex rounded-md shadow-sm">
                  <input type="text" name="name" id="name" required className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"/>
                </div>
              </div>

              <div className="col-span-3 sm:col-span-2">
                <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                <div className="mt-2 flex rounded-md shadow-sm">
                  <input type="text" name="price" id="price" required className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
              </div>

              <div className="col-span-3 sm:col-span-2">
                <label htmlFor="model" className="block text-sm font-medium leading-6 text-gray-900">Model</label>
                <div className="mt-2 flex rounded-md shadow-sm">
                  <input type="text" name="model" id="model" required className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
              <div className="mt-2">
                <textarea id="description" name="description" rows="3" className="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6" placeholder="you@example.com"></textarea>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
              <div className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                <div className="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="image" className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Upload image</span>
                      <input id="image" name="image" type="file" accept="image/*" required className="sr-only" />
                    </label>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
            
          </div>
          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button type="submit" className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Save</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

  )
}

export default AddMotorcycle;
