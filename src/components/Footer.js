import React from "react";

function Footer() {
  return (
    <footer className="bg-blackBG side py-4 flex-col md:flex-row gap-4 flex justify-between items-center">
      <p>&copy; {new Date().getFullYear()}, TFBooks by Ezekiel.</p>
      <p>All rights reserved.</p>
    </footer>
  );
}

export default Footer;
