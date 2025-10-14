# IT305 Advanced Web Applications - Activity 3: Login Form

A modern, responsive React.js login form demonstrating proper use of React Components and Props.

## 🎯 Project Overview

This project showcases a professional login interface built with React.js, featuring:
- **Component-based architecture** with reusable components
- **Props handling** for data flow between components
- **Form validation** with user-friendly error messages
- **Modern UI/UX design** with Tailwind CSS
- **Responsive design** that works on all devices
- **Smooth animations** and interactive elements

## 🧩 Component Structure

```
/src
├── components/
│   ├── InputField.jsx    # Reusable input component with props
│   ├── Button.jsx        # Reusable button component with props
│   └── LoginForm.jsx     # Main login form component
├── App.jsx               # Root component
├── index.css            # Global styles and animations
└── App.css              # Component-specific styles
```

## 🚀 Features

### Functional Requirements ✅
- **Login Interface**: Username and password input fields
- **Login Button**: Triggers mock authentication
- **Show/Hide Password**: Toggle visibility for better UX
- **Form Validation**: Prevents empty fields with styled error messages
- **Mock Authentication**: Accepts `admin` / `12345` credentials

### React Components ✅
- **LoginForm**: Main component containing the form logic
- **InputField**: Reusable input component with props (label, type, value, onChange, error, showPasswordToggle)
- **Button**: Reusable button component with props (text, onClick, variant, loading, size)
- **App**: Root component that renders the entire application

### Props Usage ✅
- Input values and handlers passed between components
- Button customization (text, style, loading state)
- Success message display using props
- Error handling and validation feedback

### Design Requirements ✅
- **Modern UI**: Clean, minimal design with professional appearance
- **Gradient Background**: Animated blob background with smooth transitions
- **Centered Card**: Login form with soft shadows and rounded corners
- **Hover Effects**: Interactive buttons and input focus effects
- **Responsive Design**: Optimized for desktop and mobile devices

## 🎨 Design Features

- **Color Palette**: Modern pastel colors (#6C63FF, #FF6584, #F3F4F6)
- **Animations**: Smooth entrance animations and loading states
- **Glassmorphism**: Subtle transparency effects
- **Typography**: Clean, readable fonts with proper hierarchy
- **Accessibility**: Proper focus states and ARIA labels

## 🛠️ Technologies Used

- **React.js**: Functional components with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and development server
- **ESLint**: Code linting and quality assurance

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd login-act
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 🧪 Testing the Login

### Demo Credentials
- **Username**: `admin`
- **Password**: `12345`

### Expected Behavior
1. **Empty Fields**: Shows validation errors
2. **Wrong Credentials**: Displays "Invalid username or password"
3. **Correct Credentials**: Shows "Welcome, admin! You have successfully logged in"
4. **Password Toggle**: Click the eye icon to show/hide password

## 📱 Responsive Design

The login form is fully responsive and adapts to:
- **Desktop**: Full-size card with animations
- **Tablet**: Optimized spacing and sizing
- **Mobile**: Compact layout with touch-friendly elements

## 🎯 Educational Value

This project demonstrates:
- **Component Composition**: Building complex UIs from simple components
- **Props Drilling**: Passing data and functions between components
- **State Management**: Using React hooks for form state
- **Event Handling**: Form submission and input changes
- **Validation Logic**: Client-side form validation
- **Modern Styling**: Professional UI/UX design principles

## 📄 Code Documentation

All components include comprehensive JSDoc comments explaining:
- Component purpose and functionality
- Props interface and types
- Usage examples
- Implementation details

## 🚀 Deployment

The project is ready for deployment to:
- **GitHub Pages**: Static hosting
- **Netlify**: Continuous deployment
- **Vercel**: React-optimized hosting
- **Any static hosting service**

## 📝 License

This project is created for educational purposes as part of IT305 Advanced Web Applications course.

---

**IT305 – Advanced Web Applications**  
*Activity 3: React Components and Props*