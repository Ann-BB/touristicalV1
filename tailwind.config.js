/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // Some useful comment
    extend: {
      fontFamily: {
        'light': ['NoToSans-Light', 'Montserrat-Light'],
        'regular': ['NoToSans-Regular', 'Montserrat-Regular'],
        'medium': ['NoToSans-Medium', 'Montserrat-Medium'],
        'bold': ['NoToSans-Bold', 'Montserrat-Bold'],        
        'semiBold': ['NoToSans-SemiBold', 'Montserrat-SemiBold'],
        'extraBold': ['NoToSans-ExtraBold', 'Montserrat-ExtraBold'],
      },
    },
  },
  variants: {
    // Some useful comment
  },
  plugins: [
    // Some useful comment
  ]
}

