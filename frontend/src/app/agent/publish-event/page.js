"use client";

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

  const datePickerRef = useRef(null); // Ref to focus DatePicker on calendar icon click
  const fileInputRef = useRef(null);  // Ref for file input reset

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
  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can perform API submission or any other action
    console.log("Event Data:", formData);

    // Clear the form after submission
    setFormData({
      title: '',
      description: '',
      thumbnail: null,
      startDate: new Date(),
      time: '',
      price: '',
    });

    // Clear file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-12">
      <div className="w-full max-w-3xl bg-white rounded-lg p-8 border border-[#003060] shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Publish an Event</h2>

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
                onChange={(date) => setFormData({ ...formData, startDate: date })}
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
