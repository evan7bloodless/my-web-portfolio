// import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

export const HomeIcon = ({ size = 24, className }: IconProps) => (
  <svg 
    width={size} height={size} viewBox="0 0 24 24" className={className}
    xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" 
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
  >
    <path d="M9 21v-7.4c0-.56 0-.84.11-1.05.1-.19.25-.34.44-.44.21-.11.49-.11 1.05-.11h2.8c.56 0 .84 0 1.05.11.19.1.34.25.44.44.11.21.11.49.11 1.05V21m-3.98-18.24L4.24 8.04c-.45.35-.68.53-.84.75-.15.2-.25.42-.32.65-.07.26-.07.55-.07 1.13v7.23c0 1.12 0 1.68.22 2.11.19.37.5.68.87.87.43.22.99.22 2.11.22h11.6c1.12 0 1.68 0 2.11-.22.37-.19.68-.5.87-.87.22-.43.22-.99.22-2.11v-7.23c0-.58 0-.87-.07-1.13-.07-.23-.17-.45-.32-.65-.16-.22-.39-.4-.84-.75l-6.78-5.28c-.35-.27-.53-.41-.72-.46a1.27 1.27 0 0 0-.52 0c-.19.05-.37.19-.72.46z"/>
  </svg>
);

export const UserIcon = ({ size = 24, className }: IconProps) => (
  <svg 
    width={size} height={size} viewBox="0 0 24 24" className={className}
    xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" 
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
  >
    <path d="M20 21c0-2.76-3.58-5-8-5s-8 2.24-8 5M12 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
  </svg>
);

export const CaseIcon = ({ size = 24, className }: IconProps) => (
  <svg 
    width={size} height={size} viewBox="0 0 32 32" className={className}
    xmlns="http://www.w3.org/2000/svg" fill="currentColor"
  >
    <path d="M28.16 28H3.84a2 2 0 0 1-2-2V10.2a2 2 0 0 1 2-2H28.16a2 2 0 0 1 2 2V26a2 2 0 0 1-2 2zM3.84 10.2V26h24.32V10.2z"/>
    <rect x="12.6" y="-0.56" width="6.8" height="26.33" rx="1" transform="rotate(90 16 12.6)" />
    <path d="M28.16 17H3.84a2 2 0 0 1-2-2V10.2a2 2 0 0 1 2-2H28.16a2 2 0 0 1 2 2V15a2 2 0 0 1-2 2zM3.84 10.2V15h24.32V10.2z"/>
    <rect x="13.91" y="13.62" width="4.19" height="4.77" rx="1" transform="rotate(90 16 16)" />
    <path d="M17.38 19.09h-2.76a2 2 0 0 1-2-2v-2.18a2 2 0 0 1 2-2h2.76a2 2 0 0 1 2 2v2.18a2 2 0 0 1-2 2zm-2.76-4.18V17h2.76v-2.09z"/>
    <path d="M23.62 10.2H8.38V6.32a3 3 0 0 1 3-3h9.24a3 3 0 0 1 3 3v3.88zm-13.24-2h11.24V6.32a1 1 0 0 0-1-1H11.38a1 1 0 0 0-1 1z"/>
  </svg>
);

export const EmailIcon = ({ size = 24, className }: IconProps) => (
  <svg 
    width={size} height={size} viewBox="0 0 32 32" className={className}
    xmlns="http://www.w3.org/2000/svg" fill="currentColor"
  >
    <path d="M28 3.75H4c-1.79 0-3.25 1.46-3.25 3.25v18c0 1.79 1.46 3.25 3.25 3.25h24c1.79 0 3.25-1.46 3.25-3.25v-18c0-1.79-1.46-3.25-3.25-3.25zM4 6.25h24c.22 0 .42.1.55.25L16 15.46 3.45 6.5c.13-.15.33-.25.55-.25zM28 25.75H4c-.41 0-.75-.34-.75-.75v-15.57l12.02 8.59c.25.15.58.23.88.23s.63-.08.88-.23L28.75 9.43V25c0 .41-.34.75-.75.75z"/>
  </svg>
);