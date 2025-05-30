const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src="/UDS_foundation_logo_neg-on-DarkBlue_rgb.png"
              alt="German University of Digital Science Foundation"
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Shaping the future of digital education and innovation.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">About Us</a></li>
              <li><a href="/programs" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">Programs</a></li>
              <li><a href="/team" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">Team</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="/get-involved" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">Get Involved</a></li>
              <li><a href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">Contact</a></li>
              <li><a href="/privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <div className="space-y-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">Email: contact@german-uds.de</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Location: Berlin, Germany</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} German University of Digital Science Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;