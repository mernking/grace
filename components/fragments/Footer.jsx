import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 text-center text-xs text-text w-full border-t border-secondary flex flex-col items-center gap-4">
      <div className="flex flex-wrap justify-center gap-6 mb-2">
        {/* Social Icons */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:scale-110 transition text-text"
        >
          <svg
            height="24"
            width="24"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.311h3.588l-.467 3.696h-3.121V24h6.116c.73 0 1.323-.593 1.323-1.326V1.326C24 .593 23.407 0 22.675 0z" />
          </svg>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:scale-110 transition text-text"
        >
          <svg
            height="24"
            width="24"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12,2.2c3.2,0,3.6,0,4.9,0.1c1.2,0.1,1.9,0.2,2.4,0.4c0.6,0.2,1,0.4,1.5,0.9c0.4,0.4,0.7,0.9,0.9,1.5c0.2,0.5,0.3,1.2,0.4,2.4C21.8,8.4,21.8,8.8,21.8,12s0,3.6-0.1,4.9c-0.1,1.2-0.2,1.9-0.4,2.4c-0.2,0.6-0.4,1-0.9,1.5c-0.4,0.4-0.9,0.7-1.5,0.9c-0.5,0.2-1.2,0.3-2.4,0.4C15.6,21.8,15.2,21.8,12,21.8s-3.6,0-4.9-0.1c-1.2-0.1-1.9-0.2-2.4-0.4c-0.6-0.2-1-0.4-1.5-0.9c-0.4-0.4-0.7-0.9-0.9-1.5c-0.2-0.5-0.3-1.2-0.4-2.4C2.2,15.6,2.2,15.2,2.2,12s0-3.6,0.1-4.9c0.1-1.2,0.2-1.9,0.4-2.4c0.2-0.6,0.4-1,0.9-1.5c0.4-0.4,0.9-0.7,1.5-0.9c0.5-0.2,1.2-0.3,2.4-0.4C8.4,2.2,8.8,2.2,12,2.2z M12,0C8.7,0,8.3,0,7.1,0.1C5.8,0.2,4.8,0.4,4,0.7C3.1,1,2.3,1.4,1.6,2.1C1,2.8,0.6,3.6,0.3,4.5C0,5.3-0.2,6.3,0,7.6C0,8.8,0,9.2,0,12s0,3.2,0.1,4.4c0.2,1.3,0.4,2.3,0.7,3.1c0.3,0.9,0.7,1.7,1.4,2.4c0.7,0.7,1.5,1.1,2.4,1.4c0.9,0.3,1.9,0.5,3.1,0.7c1.2,0.1,1.6,0.1,4.4,0.1s3.2,0,4.4-0.1c1.3-0.2,2.3-0.4,3.1-0.7c0.9-0.3,1.7-0.7,2.4-1.4c0.7-0.7,1.1-1.5,1.4-2.4c0.3-0.9,0.5-1.9,0.7-3.1c0.1-1.2,0.1-1.6,0.1-4.4s0-3.2-0.1-4.4c-0.2-1.3-0.4-2.3-0.7-3.1c-0.3-0.9-0.7-1.7-1.4-2.4c-0.7-0.7-1.5-1.1-2.4-1.4c-0.9-0.3-1.9-0.5-3.1-0.7C15.2,0.1,14.8,0,12,0z M12,5.8c-3.4,0-6.2,2.8-6.2,6.2s2.8,6.2,6.2,6.2s6.2-2.8,6.2-6.2S15.4,5.8,12,5.8z M12,15.8c-2.1,0-3.8-1.7-3.8-3.8s1.7-3.8,3.8-3.8s3.8,1.7,3.8,3.8S14.1,15.8,12,15.8z M18.5,4.9c0,0.8-0.6,1.4-1.4,1.4s-1.4-0.6-1.4-1.4S16.3,3.5,17.1,3.5S18.5,4.1,18.5,4.9z" />
          </svg>
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="hover:scale-110 transition text-text"
        >
          <svg
            height="24"
            width="24"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M23.498 6.186a3.005 3.005 0 0 0-2.115-2.128C19.19 3.494 12 3.494 12 3.494s-7.19 0-9.383.564A3.005 3.005 0 0 0 .502 6.186C0 8.381 0 12 0 12s0 3.619.502 5.814a3.005 3.005 0 0 0 2.115 2.128C4.81 20.506 12 20.506 12 20.506s7.19 0 9.383-.564a3.005 3.005 0 0 0 2.115-2.128C24 15.619 24 12 24 12s0-3.619-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </a>
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="hover:scale-110 transition text-text"
        >
          <svg
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.521.151-.175.2-.298.3-.497.099-.199.05-.373-.025-.521-.074-.148-.669-1.612-.917-2.216-.242-.58-.487-.502-.669-.51-.172-.008-.373-.01-.573-.01-.198 0-.521.075-.793.373-.272.298-1.04 1.016-1.04 2.479s1.064 2.875 1.213 3.074c.149.199 2.095 3.199 5.077 4.184.709.189 1.262.303 1.694.388.712.135 1.362.116 1.875.07.573-.054 1.758-.719 2.006-1.414.248-.695.248-1.289.174-1.414-.073-.125-.271-.198-.567-.347m-5.421 5.591h-.001a10.054 10.054 0 0 1-5.096-1.4l-.365-.217-3.781 1.048 1.012-3.687-.237-.378a10.075 10.075 0 0 1 6.555-15.477C12.29 0 13.109.006 13.839.026c5.13.149 9.147 4.31 8.998 9.439a9.957 9.957 0 0 1-9.983 9.977" />
          </svg>
        </a>
      </div>
      <div className="flex flex-wrap justify-center gap-5 mb-2 text-sm">
        <a href="/" className="hover:text-primary transition">
          Home
        </a>
        <a href="/service" className="hover:text-primary transition">
          Services
        </a>
        <a href="/projects" className="hover:text-primary transition">
          Projects
        </a>
        {/* <a href="/blog" className="hover:text-primary transition">
          Blog
        </a> */}
        <a href="/contact" className="hover:text-primary transition">
          Contact
        </a>
      </div>
      <div>
        © {new Date().getFullYear()} BoundlessBolt. All rights reserved.
      </div>
    </footer>
  );
}
