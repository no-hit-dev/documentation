function LogomarkPaths() {
  return (
    <g fill="none" stroke="#38BDF8" strokeLinejoin="round" strokeWidth={3}>
      <path d="M10.308 5L18 17.5 10.308 30 2.615 17.5 10.308 5z" />
      <path d="M18 17.5L10.308 5h15.144l7.933 12.5M18 17.5h15.385L25.452 30H10.308L18 17.5z" />
    </g>
  )
}

export function Logomark(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 36 36" fill="none" {...props}>
      <LogomarkPaths />
    </svg>
  )
}

export function Logo(props) {
  return (
    <svg className="fill-black h-7" id="Calque_2" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 599.65 139.43">
      <defs>
        <linearGradient id="Dégradé_sans_nom_38" x1="0" y1="69.72" x2="110.6" y2="69.72" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ec4899" />
          <stop offset=".5" stopColor="#ef4444" />
          <stop offset="1" stopColor="#eab308" />
        </linearGradient>
      </defs>
      <g id="Calque_1-2">
        <path className="cls-1" d="m156.01,90.67c0-20.05,15.39-34.39,36.1-34.39,11.5,0,21.09,4.18,27.36,11.78l-9.88,9.12c-4.46-5.13-10.07-7.79-16.72-7.79-12.45,0-21.28,8.74-21.28,21.28s8.83,21.28,21.28,21.28c6.65,0,12.26-2.66,16.72-7.89l9.88,9.12c-6.27,7.7-15.87,11.88-27.46,11.88-20.62,0-36.01-14.34-36.01-34.39Z" />
        <path className="cls-1" d="m229.82,57.42h15.39v66.5h-15.39V57.42Z" />
        <path className="cls-1" d="m260.98,57.42h30.21c21.76,0,36.67,13.11,36.67,33.25s-14.92,33.25-36.67,33.25h-30.21V57.42Zm29.45,53.87c13.21,0,21.85-7.89,21.85-20.62s-8.64-20.62-21.85-20.62h-14.06v41.23h14.06Z" />
        <path className="cls-1" d="m390.94,111.57v12.35h-51.49V57.42h50.25v12.35h-34.96v14.44h30.88v11.97h-30.88v15.39h36.2Z" />
        <path className="cls-1" d="m445.56,123.92l-12.82-18.53h-14.16v18.53h-15.39V57.42h28.79c17.76,0,28.88,9.21,28.88,24.13,0,9.97-5.04,17.29-13.68,21l14.92,21.38h-16.53Zm-14.44-53.96h-12.54v23.18h12.54c9.4,0,14.15-4.37,14.15-11.59s-4.75-11.59-14.15-11.59Z" />
        <path className="cls-1" d="m469.79,91.24h26.88v11.88h-26.88v-11.88Z" />
        <path className="cls-1" d="m508.83,94.66v-37.24h15.39v36.67c0,12.63,5.51,17.86,14.82,17.86s14.82-5.23,14.82-17.86v-36.67h15.2v37.24c0,19.57-11.21,30.4-30.12,30.4s-30.12-10.83-30.12-30.4Z" />
        <path className="cls-1" d="m584.26,57.42h15.39v66.5h-15.39V57.42Z" />
        <path className="#Dégradé_sans_nom_38" d="m110.58,55.93c0-1.06-.24-2.08-.57-3.05-1.44-4.26-4.81-6.6-9.32-6.6-4.8,0-9.61-.01-14.41.02-.85,0-1.13-.19-1.18-1.14-.06-1.11-.08-9.73.11-12.93.04-.61.21-.91.81-1.13.88-.32,1.63-.9,2.35-1.53,1.7-1.49,3-3.28,3.61-5.43.53-1.87.3-3.73-.35-5.64-1.83-5.46-8.52-8.63-13.66-7.13-.75.22-1.06.06-1.07-.8-.02-2.07-.86-3.84-2.22-5.38-1.88-2.13-4.25-3.47-6.93-4.32-4.4-1.4-8.7-1.02-12.94.7-1.85.75-3.32,2-4.67,3.41-.92.97-1.83,1.94-2.02,3.36-.07.55-.47.68-1.01.67-1.66-.03-3.33-.11-4.93.49-.46.17-.6,0-.66-.4-.09-.65-.25-1.29-.53-1.88-1.31-2.71-3.4-4.66-6.14-5.77-1.66-.67-3.35-1.32-5.21-1.4-2.48-.11-4.88.17-7.15,1.19-3.21,1.44-5.74,3.58-6.81,7.07-.19.62-.46.76-1.03.71-3.12-.26-6.1.3-8.84,1.8C2.33,12.71.03,15.54,0,19.71c-.02,3.03,1.38,5.65,3.81,7.21,1.96,1.26,1.87,2.78,1.87,4.53,0,30.95,0,61.9,0,92.85,0,.36-.17,3.91.08,5.25,1.01,5.33,5.95,9.97,11.86,9.89,9.18-.13,18.37-.03,27.55-.03h0c8.95,0,17.91-.03,26.86,0,2.26.01,4.38-.29,6.43-1.32,3.71-1.87,5.94-4.86,6.45-8.92.55-4.35.15-8.75.18-13.12,0-.94.29-1.15,1.18-1.15,4.93.04,9.87.04,14.8.01,2.05-.01,3.95-.5,5.57-1.87,2.55-2.15,3.97-4.73,3.96-8.19-.07-16.31-.04-32.62-.03-48.92ZM18.13,29.44c3.4-1.14,6.15-3.03,7.6-6.47.39-.92,2.02-1.46,2.85-.96.38.22.23.58.17.88-.29,1.41-.43,2.8-.08,4.24.62,2.6,1.54,4.92,3.85,6.58,2.94,2.1,5.84,2.2,8.85.12,2.26-1.56,3.41-3.71,3.76-6.37.07-.51.17-1.02.24-1.53.1-.69.59-.68,1.1-.63,2.85.3,5.32-.67,7.62-2.22.5-.34,1.27-.95,1.7-1.38.45-.44.99-.47,1.5-.3,2.48.82,5.01.51,7.54.45,1.09-.03,2.09-.41,3.09-.73.87-.28,1.12-.16,1.14.81.03,2.05.83,3.84,1.97,5.55,1.41,2.11,3.25,3.4,5.39,4.16v93.45c0,3.27-2.65,5.91-5.91,5.91H20.33c-3.27,0-5.91-2.65-5.91-5.91V30.05c1.25-.05,2.49-.2,3.71-.61Zm80.39,37.4c-.08.41-.06,18.9-.05,27.72,0,2.61-1.1,4.55-3.41,5.79-.68.36-1.41.47-2.17.47-2.21,0-4.43-.03-6.64.02-.63.02-1.14-.47-1.14-1.1.03-6.4-.02-19.21-.04-19.21,0-6.3,0-12.6,0-18.9,0-.69.56-1.24,1.25-1.24,2.19,0,4.37-.02,6.56.01,3.35.04,6.01,3.36,5.64,6.45Z" />
      </g>
    </svg>


  )
}