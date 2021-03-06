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
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.87 94.87" aria-hidden="true">
						<path d="M66.73,65.81a18.91,18.91,0,0,1-7.8,7,26.77,26.77,0,0,1-11.65,2.28q-12.36,0-19.17-6.62T21.3,49.84a33.25,33.25,0,0,1,3.46-15.3,26.79,26.79,0,0,1,9.81-10.8,27.07,27.07,0,0,1,14.67-4,26.42,26.42,0,0,1,12.54,2.91A21.31,21.31,0,0,1,70.43,31,24.94,24.94,0,0,1,73.57,43.7,26.88,26.88,0,0,1,72,53.11a15.12,15.12,0,0,1-4.5,6.55,10.35,10.35,0,0,1-6.75,2.41,6.72,6.72,0,0,1-4.62-1.46,5.12,5.12,0,0,1-1.65-4V56.3q-3.68,6.15-10.33,6.15a9.87,9.87,0,0,1-7.76-3.17q-2.82-3.16-2.82-8.74a19.8,19.8,0,0,1,1.81-8.46,15.51,15.51,0,0,1,5.13-6.27A12.54,12.54,0,0,1,48,33.43a9.65,9.65,0,0,1,5.77,1.68A9.24,9.24,0,0,1,57.1,39.9l1-5.71h2.28L56.65,55a8.6,8.6,0,0,0-.12,1.33,3.43,3.43,0,0,0,1.14,2.75,4.66,4.66,0,0,0,3.16,1,7.86,7.86,0,0,0,5.29-2,13.44,13.44,0,0,0,3.68-5.67A24.31,24.31,0,0,0,71.16,44a24.07,24.07,0,0,0-2.66-11.5,19,19,0,0,0-7.67-7.76A23.91,23.91,0,0,0,49,21.9a24.55,24.55,0,0,0-12.93,3.43,23.84,23.84,0,0,0-9,9.81,31.79,31.79,0,0,0-3.3,14.77Q23.77,61,30,67t17.52,6a25,25,0,0,0,9.82-1.71,17,17,0,0,0,6.84-5.45ZM55.83,46.36A14.46,14.46,0,0,0,56,43.82a8.62,8.62,0,0,0-2.25-6.08A7.58,7.58,0,0,0,48,35.46a10.23,10.23,0,0,0-5.93,1.87,13.31,13.31,0,0,0-4.34,5.32,18.07,18.07,0,0,0-1.64,7.83c0,3.25.69,5.72,2.09,7.41a7.42,7.42,0,0,0,6.08,2.53,9.49,9.49,0,0,0,7.19-3q2.88-3,4-8.87Z" />
					</svg>
				)
				break
			case 'linkedin':
				return (
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.87 94.87" aria-hidden="true">
						<path
							d="M70.84,69.36h-9V68.6c0-5.07,0-10.14,0-15.2a12,12,0,0,0-.5-3.21,4.4,4.4,0,0,0-4.89-3.32c-3.09.22-4.7,1.81-5.08,5.07a22.36,22.36,0,0,0-.15,2.59c0,4.68,0,9.37,0,14.06v.75H42.47V39.51h8.34v3.84l.11,0c.18-.24.35-.5.54-.74a8.11,8.11,0,0,1,4.75-2.79,16.41,16.41,0,0,1,8,.16,8,8,0,0,1,5.94,6.13,22.29,22.29,0,0,1,.71,5.91c0,5.6,0,11.19,0,16.78C70.87,69,70.85,69.15,70.84,69.36Z"
							style={{ fill: 'none', stroke: '#000', strokeMiterlimit: '10', strokeWidth: '2.5px' }}
						/>
						<path
							d="M36.44,69.35H26V39.5H36.44Z"
							style={{ fill: 'none', stroke: '#000', strokeMiterlimit: '10', strokeWidth: '2.5px' }}
						/>
						<path
							d="M31.19,34a5.24,5.24,0,1,1,5.29-5.2A5.22,5.22,0,0,1,31.19,34Z"
							style={{ fill: 'none', stroke: '#000', strokeMiterlimit: '10', strokeWidth: '2.5px' }}
						/>
					</svg>
				)
				break
			case 'phone':
				return (
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.87 94.87" aria-hidden="true">
						<path
							d="M37.13,57.74C41.39,62,55.91,74.42,62.77,73.34c8.5-1.33,10.26-7.26,10.62-10A2.51,2.51,0,0,0,72.45,61c-2-1.58-6.78-5.3-11.41-9a1.77,1.77,0,0,0-2.35.13l-3.14,3.15C52.3,58.38,47,53,44.37,50.5c-2.35-2.45-5.44-9.11-4.82-11.18l3.15-3.14a1.77,1.77,0,0,0,.13-2.35c-3.7-4.63-7.42-9.38-9-11.41a2.51,2.51,0,0,0-2.29-.94c-2.75.36-8.68,2.11-10,10.62C20.45,39,33,53.4,37.13,57.74Z"
							style={{ fill: 'none', stroke: '#000', strokeMiterlimit: '10', strokeWidth: '2.5px' }}
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
							style={{ fill: 'none', stroke: '#000', strokeMiterlimit: '10', strokeWidth: '3px' }}
						/>
						<path
							d="M14.28,49.42c6.7,6.7,13.07,8.33,25.6,1.58,10-5.39,17.36-.12,23.38,5.9"
							style={{ fill: 'none', stroke: '#000', strokeMiterlimit: '10', strokeWidth: '3px' }}
						/>
						<path
							d="M9,16.45c8.15,17.17,12.62,13.54,21.87,13,10.79-.68,23.14,16.66,34.83-8"
							style={{ fill: 'none', stroke: '#000', strokeMiterlimit: '10', strokeWidth: '3px' }}
						/>
					</svg>
				)
				break
			case 'sign2':
				return (
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83.51 48.71" aria-hidden="true">
						<polyline
							points="26.95 39.44 2.83 24.35 26.95 9.26"
							style={{ fill: 'none', stroke: '#000', strokeMiterlimit: '10', strokeWidth: '3px' }}
						/>
						<polyline
							points="56.56 9.26 80.68 24.35 56.56 39.44"
							style={{ fill: 'none', stroke: '#000', strokeMiterlimit: '10', strokeWidth: '3px' }}
						/>
						<line
							x1="49.11"
							y1="0.44"
							x2="34.4"
							y2="48.27"
							style={{ fill: 'none', stroke: '#000', strokeMiterlimit: '10', strokeWidth: '3px' }}
						/>
					</svg>
				)
				break
			case 'sign3':
				return (
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79.84 84.52" aria-hidden="true">
						<polyline
							points="16.89 50.69 16.89 83.02 62.95 83.02 62.95 50.69"
							style={{ fill: 'none', stroke: '#000', strokeMiterlimit: '10', strokeWidth: '3px' }}
						/>
						<line
							x1="16.89"
							y1="70.78"
							x2="62.95"
							y2="70.78"
							style={{ fill: 'none', stroke: '#000', strokeMiterlimit: '10', strokeWidth: '3px' }}
						/>
						<line
							x1="39.92"
							y1="55.85"
							x2="39.92"
							y2="65.13"
							style={{ fill: 'none', stroke: '#000', strokeMiterlimit: '10', strokeWidth: '3px' }}
						/>
						<line
							x1="28.41"
							y1="55.85"
							x2="28.41"
							y2="65.13"
							style={{ fill: 'none', stroke: '#000', strokeMiterlimit: '10', strokeWidth: '3px' }}
						/>
						<line
							x1="51.43"
							y1="55.85"
							x2="51.43"
							y2="65.13"
							style={{ fill: 'none', stroke: '#000', strokeMiterlimit: '10', strokeWidth: '3px' }}
						/>
						<path
							d="M60.07,13.91a18.27,18.27,0,1,1-8.26,34.57"
							style={{ fill: 'none', stroke: '#000', strokeMiterlimit: '10', strokeWidth: '3px' }}
						/>
						<path
							d="M28.48,48.25a18.27,18.27,0,1,1-8.71-34.34"
							style={{ fill: 'none', stroke: '#000', strokeMiterlimit: '10', strokeWidth: '3px' }}
						/>
						<path
							d="M19.6,28.56a21.16,21.16,0,1,1,41.48-5.9,20.88,20.88,0,0,1-.84,5.9"
							style={{ fill: 'none', stroke: '#000', strokeMiterlimit: '10', strokeWidth: '3px' }}
						/>
					</svg>
				)
				break
			case 'sign4':
				return (
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66.8 71.33" aria-hidden="true">
						<path d="M34.19,62.21l2.32-2.74,1.77,3.12c4.73,8.34,13.56,9.75,19.84,6.83a15,15,0,0,0,7.95-18.25,14.35,14.35,0,0,0-6.56-8.25c-5.08-3-10.39-2.89-16.23.28l-3.69,2V31.71q0-8.14,0-16.3A15,15,0,0,0,13.83,4.59c-.29.28-.59.53-.89.78l-2,1.76L9.26,5.53C6,2.36,3,.64,0,.25v3C5.94,4.86,9.54,9.17,9.55,15l0,38.22h3c0-3.12,0-6.22,0-9.32,0-9.38,0-19.08,0-28.58a12.25,12.25,0,0,1,4.66-9.76A11.74,11.74,0,0,1,27.31,3.24c6,1.45,9.44,6.15,9.47,12.91,0,9.72,0,19.59,0,29.14v5.2a6,6,0,0,1-.63,3C32.79,59.39,29,66,21.13,68.39v2.94C26.33,70.36,30.18,67,34.19,62.21ZM52.06,43.66a12.14,12.14,0,0,1-.21,24.27h-.29A12,12,0,0,1,43,64.17a13.13,13.13,0,0,1-3.43-9.6C39.81,48.75,45.91,43.43,52.06,43.66Z" />
					</svg>
				)
				break
			case 'hamburger':
				return (
					<svg viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
						<g xmlns="http://www.w3.org/2000/svg">
							<path d="m588 140h-476c-7.7305 0-14-6.2695-14-14v-28c0-7.7305 6.2695-14 14-14h476c7.7305 0 14 6.2695 14 14v28c0 7.7305-6.2695 14-14 14zm14 154v-28c0-7.7305-6.2695-14-14-14h-476c-7.7305 0-14 6.2695-14 14v28c0 7.7305 6.2695 14 14 14h476c7.7305 0 14-6.2695 14-14zm0 168v-28c0-7.7305-6.2695-14-14-14h-476c-7.7305 0-14 6.2695-14 14v28c0 7.7305 6.2695 14 14 14h476c7.7305 0 14-6.2695 14-14z" />
							<use x="70" y="644" xlinkHref="#v" xmlnsXlink="http://www.w3.org/1999/xlink" />
							<use x="90.550781" y="644" xlinkHref="#e" xmlnsXlink="http://www.w3.org/1999/xlink" />
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
							<use x="280.3125" y="644" xlinkHref="#c" xmlnsXlink="http://www.w3.org/1999/xlink" />
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
							<use x="415.625" y="644" xlinkHref="#h" xmlnsXlink="http://www.w3.org/1999/xlink" />
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
							<use x="475.875" y="644" xlinkHref="#g" xmlnsXlink="http://www.w3.org/1999/xlink" />
							<use
								x="495.921875"
								y="644"
								xlinkHref="#a"
								xmlnsXlink="http://www.w3.org/1999/xlink"
							/>
							<use x="514.8125" y="644" xlinkHref="#s" xmlnsXlink="http://www.w3.org/1999/xlink" />
							<use x="70" y="672" xlinkHref="#r" xmlnsXlink="http://www.w3.org/1999/xlink" />
							<use x="82.183594" y="672" xlinkHref="#e" xmlnsXlink="http://www.w3.org/1999/xlink" />
							<use x="95.992188" y="672" xlinkHref="#c" xmlnsXlink="http://www.w3.org/1999/xlink" />
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
							<use x="187.46875" y="672" xlinkHref="#b" xmlnsXlink="http://www.w3.org/1999/xlink" />
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
							<use x="278.8125" y="672" xlinkHref="#o" xmlnsXlink="http://www.w3.org/1999/xlink" />
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
							<use x="371.65625" y="672" xlinkHref="#b" xmlnsXlink="http://www.w3.org/1999/xlink" />
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
		}
	}

	return <></>
}
