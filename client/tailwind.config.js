

/** @type {import('tailwindcss').Config} */
export default {
  content: ["public/*/*.jsx"],
  theme: {
    extend: {},
  },
  plugins: [
    
  ],
}


// for Home
module.exports = {
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

// for Category Filters - for sidebar
module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

// for Product 
module.exports = {
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

// for Signin
module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
  ],
}




// https://tailwindcss.com/docs/configuration
