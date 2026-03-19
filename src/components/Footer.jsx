import React from "react";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 mt-5">
      <div className="container text-center">
        <h6 className="mb-2">HECHO PA' MI</h6>
        <div className="d-flex justify-content-center gap-3 mb-3">
          <a
            href="https://www.instagram.com/hechopami.uy/?igsh=YWRraHVnMzYwZnV4#"
            target="_blank"
            rel="noreferrer"
            className="text-white fs-5"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@hechopami_"
            target="_blank"
            rel="noreferrer"
            className="text-white fs-5"
          >
            <FaTiktok />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=%2B598091507106&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
            className="text-white fs-5"
          >
            <FaWhatsapp />
          </a>
        </div>

        <p className="small text-secondary mb-0">© 2026 Hecho Pa' Mi</p>
      </div>
    </footer>
  );
};

export default Footer;
