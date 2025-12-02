import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-center py-4 text-gray-500 text-sm mt-auto">
      <p>
        Built with ❤️ by{' '}
        <a
          href="https://github.com/ShehrozHanif"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          ShehrozHanif
        </a>
      </p>
      <p className="mt-1">
        Powered by <span className="font-semibold">Gemini</span>
      </p>
    </footer>
  );
};

export default Footer;
