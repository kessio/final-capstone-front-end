/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/items/addItemApiCall';

function AddMotorcycle() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addItem({ name, model, description, price, image }));
    setName('');
    setModel('');
    setDescription('');
    setPrice('');
    setImage('');
  };



 /* const [formData, setFormData] = useState(null);
  // const message = useSelector(allMessages);
  // const status = useSelector(allStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isTokenSet = useToken();

  const handleAddMotorcycle = (motorcycle) => {
    dispatch(addMotorcycle(motorcycle));
  };

  const checkAuthUser = () => {
    if (!isTokenSet) navigate('/');
  };

  useEffect(() => {
    checkAuthUser();
  }, [isTokenSet, navigate]);

  // const navigateDeletePage = () => {
  // if (message === 'Motorcycle has been successfully created') navigate('/deleteitem');
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData();
    if (form.name.value && form.description.value
      && form.price.value && form.model.value && form.image.value) {
      formData.append('motorcycle[name]', form.name.value);
      formData.append('motorcycle[description]', form.description.value);
      formData.append('motorcycle[price]', form.price.value);
      formData.append('motorcycle[model]', form.model.value);
      formData.append('motorcycle[image]', form.image.value);
      setFormData(formData);
    }
  };

  useEffect(() => {
    if (formData) {
      handleAddMotorcycle(formData);
    }
  }, [formData]);

  /* useEffect(() => {
    navigateDeletePage();
  }, [message]);
  */
  return (
    <div>

      <div className="md:grid md:grid-cols-3 md:gap-6 md:ml-60">
        <div className="mt-5 md:col-span-2 md:mt-5">
          <form onSubmit={handleSubmit}>
            <div className="shadow sm:overflow-hidden sm:rounded-md md:mt-10">
              <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-3 gap-6">

                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Name
                    </label>
                    <div className="mt-2 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                        className="block w-full flex-1
                    rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset
                  ring-gray-300 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-3 sm:col-span-2">
                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                    <div className="mt-2 flex rounded-md shadow-sm">
                      <input 
                      type="number" 
                      name="price" 
                      id="price" 
                      value={price}
                      onChange={(event) => setPrice(event.target.value)}
                      required className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>

                  <div className="col-span-3 sm:col-span-2">
                    <label htmlFor="model" className="block text-sm font-medium leading-6 text-gray-900">Model</label>
                    <div className="mt-2 flex rounded-md shadow-sm">
                      <input 
                      type="text" 
                      name="model" 
                      id="model" 
                      value={model}
                      onChange={(event) => setModel(event.target.value)}
                      required className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
                  <div className="mt-2">
                    <textarea 
                    id="description" 
                    name="description" 
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    rows="3" 
                    className="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6" placeholder="you@example.com" />
                  </div>
                </div>

                <div className="col-span-3 sm:col-span-2">
                  <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">Image Url</label>
                  <div className="mt-2 flex rounded-md shadow-sm">
                    <input 
                    type="text" 
                    name="image" 
                    id="image" 
                    value={image}
                    onChange={(event) => setImage(event.target.value)}
                    required className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
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

  );
}

export default AddMotorcycle;
