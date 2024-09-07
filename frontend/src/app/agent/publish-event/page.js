'use client';

import { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AiOutlineCalendar } from 'react-icons/ai'; // Import calendar icon

const PublishEventPage = () => {
  // State for the form fields
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    thumbnail: null,
    startDate: new Date(),
    time: '',
    price: '',
  });

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const datePickerRef = useRef(null); // Ref to focus DatePicker on calendar icon click
  const fileInputRef = useRef(null); // Ref for file input reset

  // Handle input change for text fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file input change for thumbnail
  const handleThumbnailChange = (e) => {
    setFormData({ ...formData, thumbnail: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous messages
    setErrorMessage(null);
    setSuccessMessage(null);

    // Create FormData object to handle file uploads
    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('thumbnail', formData.thumbnail);
    data.append('date', formData.startDate.toISOString().split('T')[0]); // Format date as YYYY-MM-DD
    data.append('time', formData.time);
    data.append('price', formData.price);
    data.append('createdBy', '66dbf07b899d051e6daa1f0f'); 
console.log(data)
    try {
      const response = await fetch('http://localhost:4000/event/publish', {
        method: 'POST',
        body: data, // Use FormData object to send data
      });
      console.log(response)

      const result = await response.json();

if (result.success) {
      // If the request was successful, show the success message and event details
      setSuccessMessage(`Event "${result.event.title}" published successfully!`);

      // Clear the form after submission
      setFormData({
        title: '',
        description: '',
        thumbnail: null,
        startDate: new Date(),
        time: '',
        price: '',
      });
    }
       else {
        setErrorMessage(result.message || 'Failed to publish the event.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred while publishing the event.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-12">
      <div className="w-full max-w-3xl bg-white rounded-lg p-8 border border-[#003060] shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Publish an Event
        </h2>

        {/* Success and Error Messages */}
        {successMessage && (
          <p className="text-green-500 text-sm mb-4">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Event Title */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Title of Event <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-primary-600 focus:border-primary-600"
              placeholder="Enter event title"
              required
            />
          </div>

          {/* Event Description */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-primary-600 focus:border-primary-600"
              placeholder="Enter event description"
              rows={4}
              required
            />
          </div>

          {/* Event Thumbnail */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Thumbnail <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="thumbnail"
              ref={fileInputRef} // Attach the ref for file input reset
              onChange={handleThumbnailChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-primary-600 focus:border-primary-600"
              accept="image/*"
              required
            />
          </div>

          {/* Event Date with Calendar Icon */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Date <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <DatePicker
                selected={formData.startDate}
                onChange={(date) =>
                  setFormData({ ...formData, startDate: date })
                }
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-primary-600 focus:border-primary-600"
                dateFormat="MMMM d, yyyy"
                ref={datePickerRef} // Attach the ref to the DatePicker component
                required
              />
              {/* Calendar Icon */}
              <AiOutlineCalendar
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#fe542b]" // Change icon color to match button
                size={24}
                onClick={() => datePickerRef.current.setFocus()} // Click icon to open DatePicker
              />
            </div>
          </div>

          {/* Event Time */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Time <span className="text-red-500">*</span>
            </label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-primary-600 focus:border-primary-600"
              required
            />
          </div>

          {/* Event Price */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Price <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-primary-600 focus:border-primary-600"
              placeholder="Enter event price"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#fe542b] text-white py-3 rounded-lg hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium"
          >
            Publish Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default PublishEventPage;
