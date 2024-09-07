## SnapTix
**SnapTix** is an online ticketing system designed for handling event ticket sales. The platform allows users to manage events, purchase tickets, and provides an administrative interface for event management.

### Features
- **User Authentication**: Secure authentication system with JWT tokens and multi-factor authentication.
- **Event Management**: Agents can create, update, and delete events with details such as title, description, date, time, price, and a thumbnail image.
- **Ticket Purchasing**: Customers can browse events, view event details, and purchase tickets.
- **Admin Panel**: Admins can manage users, events, and overall system operations.
- **Real-time Chat**: Chat functionality for real-time support or inquiries.

### Technologies Used
- **Frontend**: React.js (with Tailwind CSS for styling)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (for storing user, event, and ticket information)
- **Authentication**: JWT (JSON Web Tokens) with multi-factor authentication via email tokens.
- **Real-time Updates**: WebSockets for real-time chat functionality.
- **Cloud Storage**: Firebase Cloud Storage for image storage.

### Installation

To run SnapTix locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/ayeshag7/SnapTix.git
   cd SnapTix
