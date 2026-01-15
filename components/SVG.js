import React from 'react'

export default function SVG({ name, hover = false }) {
  if (hover) {
    // hover svg
    switch (name) {
      case 'email':
        break
      case 'linkedin':
        break
      case 'phone':
        break
    }
  } else {
    // non-hover svg
    switch (name) {
      case 'email':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 94.87 94.87"
            aria-hidden="true"
          >
            <path d="M66.73,65.81a18.91,18.91,0,0,1-7.8,7,26.77,26.77,0,0,1-11.65,2.28q-12.36,0-19.17-6.62T21.3,49.84a33.25,33.25,0,0,1,3.46-15.3,26.79,26.79,0,0,1,9.81-10.8,27.07,27.07,0,0,1,14.67-4,26.42,26.42,0,0,1,12.54,2.91A21.31,21.31,0,0,1,70.43,31,24.94,24.94,0,0,1,73.57,43.7,26.88,26.88,0,0,1,72,53.11a15.12,15.12,0,0,1-4.5,6.55,10.35,10.35,0,0,1-6.75,2.41,6.72,6.72,0,0,1-4.62-1.46,5.12,5.12,0,0,1-1.65-4V56.3q-3.68,6.15-10.33,6.15a9.87,9.87,0,0,1-7.76-3.17q-2.82-3.16-2.82-8.74a19.8,19.8,0,0,1,1.81-8.46,15.51,15.51,0,0,1,5.13-6.27A12.54,12.54,0,0,1,48,33.43a9.65,9.65,0,0,1,5.77,1.68A9.24,9.24,0,0,1,57.1,39.9l1-5.71h2.28L56.65,55a8.6,8.6,0,0,0-.12,1.33,3.43,3.43,0,0,0,1.14,2.75,4.66,4.66,0,0,0,3.16,1,7.86,7.86,0,0,0,5.29-2,13.44,13.44,0,0,0,3.68-5.67A24.31,24.31,0,0,0,71.16,44a24.07,24.07,0,0,0-2.66-11.5,19,19,0,0,0-7.67-7.76A23.91,23.91,0,0,0,49,21.9a24.55,24.55,0,0,0-12.93,3.43,23.84,23.84,0,0,0-9,9.81,31.79,31.79,0,0,0-3.3,14.77Q23.77,61,30,67t17.52,6a25,25,0,0,0,9.82-1.71,17,17,0,0,0,6.84-5.45ZM55.83,46.36A14.46,14.46,0,0,0,56,43.82a8.62,8.62,0,0,0-2.25-6.08A7.58,7.58,0,0,0,48,35.46a10.23,10.23,0,0,0-5.93,1.87,13.31,13.31,0,0,0-4.34,5.32,18.07,18.07,0,0,0-1.64,7.83c0,3.25.69,5.72,2.09,7.41a7.42,7.42,0,0,0,6.08,2.53,9.49,9.49,0,0,0,7.19-3q2.88-3,4-8.87Z" />
          </svg>
        )
        break
      case 'linkedin':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 94.87 94.87"
            aria-hidden="true"
          >
            <path
              d="M70.84,69.36h-9V68.6c0-5.07,0-10.14,0-15.2a12,12,0,0,0-.5-3.21,4.4,4.4,0,0,0-4.89-3.32c-3.09.22-4.7,1.81-5.08,5.07a22.36,22.36,0,0,0-.15,2.59c0,4.68,0,9.37,0,14.06v.75H42.47V39.51h8.34v3.84l.11,0c.18-.24.35-.5.54-.74a8.11,8.11,0,0,1,4.75-2.79,16.41,16.41,0,0,1,8,.16,8,8,0,0,1,5.94,6.13,22.29,22.29,0,0,1,.71,5.91c0,5.6,0,11.19,0,16.78C70.87,69,70.85,69.15,70.84,69.36Z"
              style={{
                fill: 'none',
                stroke: '#000',
                strokeMiterlimit: '10',
                strokeWidth: '2.5px',
              }}
            />
            <path
              d="M36.44,69.35H26V39.5H36.44Z"
              style={{
                fill: 'none',
                stroke: '#000',
                strokeMiterlimit: '10',
                strokeWidth: '2.5px',
              }}
            />
            <path
              d="M31.19,34a5.24,5.24,0,1,1,5.29-5.2A5.22,5.22,0,0,1,31.19,34Z"
              style={{
                fill: 'none',
                stroke: '#000',
                strokeMiterlimit: '10',
                strokeWidth: '2.5px',
              }}
            />
          </svg>
        )
        break
      case 'phone':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 94.87 94.87"
            aria-hidden="true"
          >
            <path
              d="M37.13,57.74C41.39,62,55.91,74.42,62.77,73.34c8.5-1.33,10.26-7.26,10.62-10A2.51,2.51,0,0,0,72.45,61c-2-1.58-6.78-5.3-11.41-9a1.77,1.77,0,0,0-2.35.13l-3.14,3.15C52.3,58.38,47,53,44.37,50.5c-2.35-2.45-5.44-9.11-4.82-11.18l3.15-3.14a1.77,1.77,0,0,0,.13-2.35c-3.7-4.63-7.42-9.38-9-11.41a2.51,2.51,0,0,0-2.29-.94c-2.75.36-8.68,2.11-10,10.62C20.45,39,33,53.4,37.13,57.74Z"
              style={{
                fill: 'none',
                stroke: '#000',
                strokeMiterlimit: '10',
                strokeWidth: '2.5px',
              }}
            />
          </svg>
        )
        break
      case 'sign1':
        return (
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 76.95 82.17"
            aria-hidden="true"
          >
            <polyline
              points="1.35 0.65 38.55 78.68 75.59 0.65"
              style={{
                fill: 'none',
                stroke: '#000',
                strokeMiterlimit: '10',
                strokeWidth: '3px',
              }}
            />
            <path
              d="M14.28,49.42c6.7,6.7,13.07,8.33,25.6,1.58,10-5.39,17.36-.12,23.38,5.9"
              style={{
                fill: 'none',
                stroke: '#000',
                strokeMiterlimit: '10',
                strokeWidth: '3px',
              }}
            />
            <path
              d="M9,16.45c8.15,17.17,12.62,13.54,21.87,13,10.79-.68,23.14,16.66,34.83-8"
              style={{
                fill: 'none',
                stroke: '#000',
                strokeMiterlimit: '10',
                strokeWidth: '3px',
              }}
            />
          </svg>
        )
        break
      case 'sign2':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 83.51 48.71"
            aria-hidden="true"
          >
            <polyline
              points="26.95 39.44 2.83 24.35 26.95 9.26"
              style={{
                fill: 'none',
                stroke: '#000',
                strokeMiterlimit: '10',
                strokeWidth: '3px',
              }}
            />
            <polyline
              points="56.56 9.26 80.68 24.35 56.56 39.44"
              style={{
                fill: 'none',
                stroke: '#000',
                strokeMiterlimit: '10',
                strokeWidth: '3px',
              }}
            />
            <line
              x1="49.11"
              y1="0.44"
              x2="34.4"
              y2="48.27"
              style={{
                fill: 'none',
                stroke: '#000',
                strokeMiterlimit: '10',
                strokeWidth: '3px',
              }}
            />
          </svg>
        )
        break
      case 'sign3':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 79.84 84.52"
            aria-hidden="true"
          >
            <polyline
              points="16.89 50.69 16.89 83.02 62.95 83.02 62.95 50.69"
              style={{
                fill: 'none',
                stroke: '#000',
                strokeMiterlimit: '10',
                strokeWidth: '3px',
              }}
            />
            <line
              x1="16.89"
              y1="70.78"
              x2="62.95"
              y2="70.78"
              style={{
                fill: 'none',
                stroke: '#000',
                strokeMiterlimit: '10',
                strokeWidth: '3px',
              }}
            />
            <line
              x1="39.92"
              y1="55.85"
              x2="39.92"
              y2="65.13"
              style={{
                fill: 'none',
                stroke: '#000',
                strokeMiterlimit: '10',
                strokeWidth: '3px',
              }}
            />
            <line
              x1="28.41"
              y1="55.85"
              x2="28.41"
              y2="65.13"
              style={{
                fill: 'none',
                stroke: '#000',
                strokeMiterlimit: '10',
                strokeWidth: '3px',
              }}
            />
            <line
              x1="51.43"
              y1="55.85"
              x2="51.43"
              y2="65.13"
              style={{
                fill: 'none',
                stroke: '#000',
                strokeMiterlimit: '10',
                strokeWidth: '3px',
              }}
            />
            <path
              d="M60.07,13.91a18.27,18.27,0,1,1-8.26,34.57"
              style={{
                fill: 'none',
                stroke: '#000',
                strokeMiterlimit: '10',
                strokeWidth: '3px',
              }}
            />
            <path
              d="M28.48,48.25a18.27,18.27,0,1,1-8.71-34.34"
              style={{
                fill: 'none',
                stroke: '#000',
                strokeMiterlimit: '10',
                strokeWidth: '3px',
              }}
            />
            <path
              d="M19.6,28.56a21.16,21.16,0,1,1,41.48-5.9,20.88,20.88,0,0,1-.84,5.9"
              style={{
                fill: 'none',
                stroke: '#000',
                strokeMiterlimit: '10',
                strokeWidth: '3px',
              }}
            />
          </svg>
        )
        break
      case 'sign4':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 66.8 71.33"
            aria-hidden="true"
          >
            <path d="M34.19,62.21l2.32-2.74,1.77,3.12c4.73,8.34,13.56,9.75,19.84,6.83a15,15,0,0,0,7.95-18.25,14.35,14.35,0,0,0-6.56-8.25c-5.08-3-10.39-2.89-16.23.28l-3.69,2V31.71q0-8.14,0-16.3A15,15,0,0,0,13.83,4.59c-.29.28-.59.53-.89.78l-2,1.76L9.26,5.53C6,2.36,3,.64,0,.25v3C5.94,4.86,9.54,9.17,9.55,15l0,38.22h3c0-3.12,0-6.22,0-9.32,0-9.38,0-19.08,0-28.58a12.25,12.25,0,0,1,4.66-9.76A11.74,11.74,0,0,1,27.31,3.24c6,1.45,9.44,6.15,9.47,12.91,0,9.72,0,19.59,0,29.14v5.2a6,6,0,0,1-.63,3C32.79,59.39,29,66,21.13,68.39v2.94C26.33,70.36,30.18,67,34.19,62.21ZM52.06,43.66a12.14,12.14,0,0,1-.21,24.27h-.29A12,12,0,0,1,43,64.17a13.13,13.13,0,0,1-3.43-9.6C39.81,48.75,45.91,43.43,52.06,43.66Z" />
          </svg>
        )
        break
      case 'hamburger':
        return (
          <svg
            viewBox="0 0 700 700"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <g xmlns="http://www.w3.org/2000/svg">
              <path d="m588 140h-476c-7.7305 0-14-6.2695-14-14v-28c0-7.7305 6.2695-14 14-14h476c7.7305 0 14 6.2695 14 14v28c0 7.7305-6.2695 14-14 14zm14 154v-28c0-7.7305-6.2695-14-14-14h-476c-7.7305 0-14 6.2695-14 14v28c0 7.7305 6.2695 14 14 14h476c7.7305 0 14-6.2695 14-14zm0 168v-28c0-7.7305-6.2695-14-14-14h-476c-7.7305 0-14 6.2695-14 14v28c0 7.7305 6.2695 14 14 14h476c7.7305 0 14-6.2695 14-14z" />
              <use
                x="70"
                y="644"
                xlinkHref="#v"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="90.550781"
                y="644"
                xlinkHref="#e"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="104.359375"
                y="644"
                xlinkHref="#b"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="123.347656"
                y="644"
                xlinkHref="#a"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="142.242188"
                y="644"
                xlinkHref="#d"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="155.628906"
                y="644"
                xlinkHref="#b"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="174.617188"
                y="644"
                xlinkHref="#h"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="204.410156"
                y="644"
                xlinkHref="#g"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="224.453125"
                y="644"
                xlinkHref="#k"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="252.453125"
                y="644"
                xlinkHref="#j"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="280.3125"
                y="644"
                xlinkHref="#c"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="299.550781"
                y="644"
                xlinkHref="#i"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="319.484375"
                y="644"
                xlinkHref="#a"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="338.378906"
                y="644"
                xlinkHref="#f"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="367.554688"
                y="644"
                xlinkHref="#f"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="396.730469"
                y="644"
                xlinkHref="#a"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="415.625"
                y="644"
                xlinkHref="#h"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="445.414062"
                y="644"
                xlinkHref="#u"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="455.835937"
                y="644"
                xlinkHref="#t"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="475.875"
                y="644"
                xlinkHref="#g"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="495.921875"
                y="644"
                xlinkHref="#a"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="514.8125"
                y="644"
                xlinkHref="#s"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="70"
                y="672"
                xlinkHref="#r"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="82.183594"
                y="672"
                xlinkHref="#e"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="95.992188"
                y="672"
                xlinkHref="#c"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="115.226562"
                y="672"
                xlinkHref="#f"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="154.152344"
                y="672"
                xlinkHref="#d"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="167.535156"
                y="672"
                xlinkHref="#i"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="187.46875"
                y="672"
                xlinkHref="#b"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="216.207031"
                y="672"
                xlinkHref="#q"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="239.640625"
                y="672"
                xlinkHref="#c"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="258.878906"
                y="672"
                xlinkHref="#p"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="278.8125"
                y="672"
                xlinkHref="#o"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="308.492188"
                y="672"
                xlinkHref="#n"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="329.015625"
                y="672"
                xlinkHref="#e"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="342.820312"
                y="672"
                xlinkHref="#c"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="362.058594"
                y="672"
                xlinkHref="#m"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="371.65625"
                y="672"
                xlinkHref="#b"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="390.648438"
                y="672"
                xlinkHref="#l"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
              <use
                x="407.242188"
                y="672"
                xlinkHref="#d"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              />
            </g>
          </svg>
        )
        break
      case 'resume':
        return (
          <svg
            viewBox="0 0 934 934"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect />
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M163.281,681.889l0,-625.214c0,-8.054 6.53,-14.583 14.584,-14.583l608.522,-0c8.055,-0 14.584,6.529 14.584,14.583l-0,787.5c-0,8.054 -6.529,14.584 -14.584,14.584l-444.889,-0l-0,-166.453c-0,-5.753 -4.664,-10.417 -10.417,-10.417l-167.8,-0Zm235.127,53.478l315.353,-0c5.749,-0 10.417,-4.668 10.417,-10.417c-0,-5.749 -4.668,-10.417 -10.417,-10.417l-315.353,0c-5.749,0 -10.417,4.668 -10.417,10.417c0,5.749 4.668,10.417 10.417,10.417Zm-96.301,-136.061c1.692,-0.775 2.778,-2.465 2.778,-4.327c0,-1.861 -1.086,-3.552 -2.778,-4.326c-10.028,-4.586 -17.444,-16.802 -19.715,-31.736c-0.354,-2.324 -2.353,-4.042 -4.704,-4.042c-2.351,0 -4.35,1.718 -4.703,4.042c-2.272,14.934 -9.688,27.15 -19.715,31.736c-1.693,0.774 -2.779,2.465 -2.779,4.326c0,1.862 1.086,3.552 2.779,4.327c10.027,4.586 17.443,16.802 19.715,31.735c0.353,2.325 2.352,4.042 4.703,4.042c2.351,0 4.35,-1.717 4.704,-4.042c2.271,-14.933 9.687,-27.149 19.715,-31.735Zm39.531,-482.171c-67.264,0 -121.875,54.611 -121.875,121.875c0,67.265 54.611,121.875 121.875,121.875c67.265,0 121.875,-54.61 121.875,-121.875c0,-67.264 -54.61,-121.875 -121.875,-121.875Zm-67.667,199.937c2.487,-24.314 12.114,-52.608 41.665,-63.742c-11.765,-8.914 -22.798,-23.035 -22.798,-38.919c-0,-26.934 21.866,-48.801 48.8,-48.801c26.934,-0 48.801,21.867 48.801,48.801c0,15.884 -11.034,30.005 -22.798,38.919c29.551,11.134 39.177,39.428 41.665,63.742c0,0 -13.851,24.623 -67.668,24.623c-44.048,0 -67.667,-24.623 -67.667,-24.623Zm28.136,152.263c1.692,-0.774 2.778,-2.465 2.778,-4.326c0,-1.862 -1.086,-3.553 -2.778,-4.327c-10.028,-4.586 -17.444,-16.802 -19.715,-31.736c-0.354,-2.324 -2.353,-4.042 -4.704,-4.042c-2.351,0 -4.35,1.718 -4.703,4.042c-2.272,14.934 -9.688,27.15 -19.715,31.736c-1.693,0.774 -2.779,2.465 -2.779,4.327c0,1.861 1.086,3.552 2.779,4.326c10.027,4.586 17.443,16.802 19.715,31.736c0.353,2.324 2.352,4.042 4.703,4.042c2.351,-0 4.35,-1.718 4.704,-4.042c2.271,-14.934 9.687,-27.15 19.715,-31.736Zm422.071,-246.797c-0,-5.753 -4.664,-10.417 -10.417,-10.417l-183.718,0c-5.753,0 -10.417,4.664 -10.417,10.417l0,66.667c0,5.753 4.664,10.416 10.417,10.416l183.718,0c5.753,0 10.417,-4.663 10.417,-10.416l-0,-66.667Zm-325.77,382.858l315.353,-0c5.749,-0 10.417,-4.668 10.417,-10.417c-0,-5.749 -4.668,-10.416 -10.417,-10.416l-315.353,-0c-5.749,-0 -10.417,4.667 -10.417,10.416c0,5.749 4.668,10.417 10.417,10.417Zm0,-129.971l315.353,0c5.749,0 10.417,-4.667 10.417,-10.416c-0,-5.749 -4.668,-10.417 -10.417,-10.417l-315.353,-0c-5.749,-0 -10.417,4.668 -10.417,10.417c0,5.749 4.668,10.416 10.417,10.416Zm-77.744,227.297l0,147.812l-147.811,-147.812l147.811,0Z"
            />
          </svg>
        )
        break
      case 'origin':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1.5"
            clipRule="evenodd"
            viewBox="0 0 748 730"
            aria-hidden="true"
          >
            <path
              id="Icon-BioOrigin"
              fill="none"
              d="M.361 0h745.833v729.167H.361z"
            ></path>
            <path
              fill="none"
              stroke="#000"
              strokeWidth="41.67"
              d="M373.202 44.945c2.661-8.06 110.983 144.826 110.983 224.009 0 130.088-90.181 135.011-110.983 135.313-46.418.675-118.898-30.63-98.766-143.457 10.693-59.928 63.807-109.985 98.766-215.865M688.76 432.528c17.5-1.635-21.342 99.604-105.82 138.05-62.412 28.404-150.997 13.012-163.366-7.233-12.368-20.244-23.519-101.221 64.611-130.817 50.325-16.901 156.886 4.455 204.575 0M104.812 376.279c-11.092-.738-1.938 123.12 61.268 163.129 64.154 40.609 138.712 0 138.712 0s25.2-68.457-34.793-111.192c-24.845-17.698-97.018-47.405-165.187-51.937"
            ></path>
            <path
              fill="none"
              stroke="#000"
              strokeWidth="41.67"
              d="M183.928 455.453c34.213 38.951 87.547 59.343 123.136 89.554"
            ></path>
            <path
              fill="none"
              stroke="#000"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeWidth="41.67"
              d="M307.064 545.007c27.005 22.925 48.591 51.505 55.933 98.139"
            ></path>
            <path
              fill="none"
              stroke="#000"
              strokeWidth="41.67"
              d="M569.08 494.011c-39.741 30.707-101.366 35.936-140.416 61.22-7.193 4.658-14.045 9.714-20.432 15.347"
            ></path>
            <path
              fill="none"
              stroke="#000"
              strokeLinecap="butt"
              strokeWidth="41.67"
              d="M408.232 570.578c-22.916 20.211-39.866 47.862-45.235 91.286"
            ></path>
            <path
              fill="none"
              stroke="#000"
              strokeWidth="41.67"
              d="M382.899 205.292c6.593 117.635-4.202 158.183-13.125 212.442"
            ></path>
            <path
              fill="none"
              stroke="#000"
              strokeLinecap="butt"
              strokeWidth="41.67"
              d="M369.774 417.734c-7.994 50.684-14.485 112.841-5.625 254.547"
            ></path>
            <path
              fill="none"
              stroke="#000"
              strokeWidth="41.67"
              d="M53.679 683.642c57.346 4.167 83.65-7.142 96.865-17.611s39.519-17.611 69.783-17.611c30.263 0 56.567 7.142 69.782 17.611s39.519 17.611 69.782 17.611c30.264 0 56.568-7.142 69.783-17.611s39.519-17.611 69.782-17.611 56.567 7.142 69.782 17.611 43.686 17.611 94.783 17.611"
            ></path>
          </svg>
        )
        break
      case 'house':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1.5"
            clipRule="evenodd"
            viewBox="0 0 748 730"
            aria-hidden="true"
          >
            <path
              id="Icon-BioHome"
              fill="none"
              d="M1.285 0h745.833v729.167H1.285z"
            ></path>
            <path
              fill="none"
              stroke="#000"
              strokeWidth="41.67"
              d="M618.809 323.476V694.79H129.595V323.476M632.354 34.377v200.254l-108.405-93.744V34.377z"
            ></path>
            <path
              fill="none"
              stroke="#000"
              strokeWidth="41.67"
              d="M723.427 310.976H24.976S351.543 34.377 374.202 34.377s349.225 276.599 349.225 276.599M296.947 537.333c0-44.491 34.617-80.611 77.255-80.611s77.255 36.12 77.255 80.611V694.79h-154.51z"
            ></path>
          </svg>
        )
        break
      case 'likes':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1.5"
            clipRule="evenodd"
            viewBox="0 0 748 730"
            aria-hidden="true"
          >
            <path id="Icon-BioLikes" fill="none" d="M1.13 0h745.833v729.167H1.13z"></path>
            <path
              fill="none"
              stroke="#000"
              strokeWidth="41.67"
              d="M373.358 662.073S184.354 498.424 103.576 397.629C29.497 305.193 39.227 96.26 221.079 96.26c111.837 0 153.656 155.156 153.656 155.156S415.177 96.26 527.014 96.26c181.852 0 191.582 208.933 117.503 301.369-80.778 100.795-269.782 264.444-269.782 264.444z"
            ></path>
          </svg>
        )
        break
    }
  }

  return <></>
}
