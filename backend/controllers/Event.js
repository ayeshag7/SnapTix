
import Event from '../models/Event.js';

// Publish Event
export const publishEvent = async (req, res) => {
  const { title, description, thumbnail, date, time, price, createdBy } =
    req.body;
  if (
    !title ||
    !description ||
    !thumbnail ||
    !date ||
    !time ||
    !price ||
    !createdBy
  ) {
    return res
      .status(400)
      .json({ success: false, message: 'All fields are required' });
  }
  try {
    const event = await Event.create({
      title,
      description,
      thumbnail,
      date,
      time,
      price,
      createdBy: createdBy, // The agent who is publishing the event
    });

    res.status(201).json({ success: true, event });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Update Event
export const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { title, description, thumbnail, date, time, price } = req.body;

  try {
    let event = await Event.findById(id);

    if (!event) {
      return res
        .status(404)
        .json({ success: false, message: 'Event not found' });
    }

    // // Ensure the agent updating the event is the creator
    // if (event.createdBy.toString() !== req.user._id.toString()) {
    //   return res.status(401).json({ success: false, message: 'Unauthorized' });
    // }

    event = await Event.findByIdAndUpdate(
      id,
      { title, description, thumbnail, date, time, price },
      { new: true }
    );

    res.status(200).json({ success: true, event });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete Event
export const deleteEvent = async (req, res) => {
  const { id } = req.params;

  try {
    const event = await Event.findById(id);

    if (!event) {
      return res
        .status(404)
        .json({ success: false, message: 'Event not found' });
    }

    // Ensure the agent deleting the event is the creator
    // if (event.createdBy.toString() !== req.user._id.toString()) {
    //   return res.status(401).json({ success: false, message: 'Unauthorized' });
    // }

    await Event.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: 'Event deleted' });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
