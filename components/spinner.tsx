// Spinner.tsx

import React from 'react';

const Spinner: React.FC = () => (
  <svg
    className="animate-spin h-5 w-5 mb-6 text-gray-500 "
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.004 8.004 0 014 12H0c0 6.627 5.373 12 12 12v-4c-2.582 0-4.95-.998-6.758-2.709l1.414-1.414zM12 20c2.582 0 4.95-.998 6.758-2.709l-1.414-1.414A7.963 7.963 0 0112 18v2zm8-8a8 8 0 01-8 8v4c6.627 0 12-5.373 12-12h-4zm-16 0a7.963 7.963 0 01-2.344-5.656L1.414 8.93A7.963 7.963 0 014 6H2c0 2.582.998 4.95 2.709 6.758l1.415-1.414z"
    ></path>
  </svg>
);

export default Spinner;
