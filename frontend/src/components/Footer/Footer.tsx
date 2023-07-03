import React, { useEffect, useState } from 'react';

function Footer() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const isAtBottom = window.innerHeight
      + window.pageYOffset >= document.body.offsetHeight;
      setShowFooter(isAtBottom);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    showFooter && (
      <footer className="py-4 text-center fixed bottom-0">
        <div className="container mx-auto">
          <p className="text-sm">
            &copy;
            {' '}
            {currentYear}
            {' '}
            Marcelo Henrique.
          </p>
        </div>
      </footer>
    )
  );
}

export default Footer;
