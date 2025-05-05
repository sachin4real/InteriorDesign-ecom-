import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-12">
      <div className="grid md:grid-cols-4 gap-6">
        <div>
          <h3 className="text-lg font-bold mb-2">VivaDecor</h3>
          <p className="text-sm">Design your perfect space with our professional interior design solutions.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Our Services</h4>
          <ul className="space-y-1 text-sm">
            <li>Interior design</li>
            <li>Lighting design</li>
            <li>Outdoor styling</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact Us</h4>
          <ul className="space-y-1 text-sm">
            <li>Email: info@vivadecor.com</li>
            <li>Phone: +123 456 7890</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Newsletter</h4>
          <p className="text-sm">Join our newsletter for design inspiration.</p>
        </div>
      </div>
      <p className="text-center text-xs mt-8">&copy; 2025 VivaDecor. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
