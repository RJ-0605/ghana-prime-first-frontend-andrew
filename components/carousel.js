import { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";

const overlayStyle = {
	background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.8) 80%)"
}

export default function Slider() {
	const [scrollDistance, setScrollDistance] = useState(0);
	const [initialDistance, setinitialDistance] = useState(0);
	const [isAtRightEnd, setIsAtRightEnd] = useState(false);
	const [isAtLeftEnd, setIsAtLeftEnd] = useState(false);
	const carouselRef = useRef(null);
	const ccWidthRef = useRef(null);
	const permittedScrollDistance = useRef(null);


	const handleSwipe = (eventData) => {
		setScrollDistance(() => initialDistance + eventData.deltaX)
		console.log("User Swiped!", { eventData });
	}


	const handleSwiped = () => {
		setScrollDistance(currDistance => {
			let cardsSwiped = Math.round(currDistance / 240); // number of cards the user actually swiped
			let recalculatedSwipeDistance = 240 /* size of one card + it's margin */ * cardsSwiped;

			if (recalculatedSwipeDistance > 0) {
				recalculatedSwipeDistance = 0
			}

			if (recalculatedSwipeDistance < permittedScrollDistance.current) {
				recalculatedSwipeDistance = permittedScrollDistance.current;
			}

			setIsAtLeftEnd(recalculatedSwipeDistance >= 0);
			setIsAtRightEnd(recalculatedSwipeDistance <= permittedScrollDistance.current);

			setinitialDistance(recalculatedSwipeDistance);
			return recalculatedSwipeDistance;
		});
	}


	const refPassThrough = (el) => {
		// call useSwipeable ref prop with el
		handlers.ref(el);

		// set myRef el so you can access it yourself
		carouselRef.current = el;
	}


	const handlers = useSwipeable({
		onSwiping: handleSwipe,
		onSwiped: handleSwiped,
		ref: carouselRef,
		preventDefaultTouchmoveEvent: true,
		trackMouse: true,
	});


	useEffect(() => {
		ccWidthRef.current = carouselRef.current.children[0].clientWidth;
		permittedScrollDistance.current = carouselRef.current.clientWidth - ccWidthRef.current
		setIsAtLeftEnd(scrollDistance >= 0);
		setIsAtRightEnd(scrollDistance <= permittedScrollDistance.current);
	}, [])

	return (
		<div  {...handlers} ref={refPassThrough} className="cc-wrapper w-full overflow-x-hidden relative">
			<div id="cc" className="cc w-min whitespace-nowrap space-x-4 transition-transform ease-linear" style={{ transform: `translateX(${scrollDistance}px)` }}>
				<div className="h-72 w-56 bg-gray-500 inline-block relative cursor-pointer" >
					<img className="w-full h-full object-cover absolute top-0 left-0 z-0" src="images/accra_central.jpg" alt="accra central drone view" />
					<div style={overlayStyle} className="relative z-10 h-full bg-red-400 text-white flex items-end">
						<p className="p-4 text-3xl">Accra</p>
					</div>
				</div>
				<div className="h-72 w-56 bg-gray-500 inline-block relative cursor-pointer" >
					<img className="w-full h-full object-cover absolute top-0 left-0 z-0" src="images/kumasi.jpg" alt="A Drone view of Accra Central" />
					<div style={overlayStyle} className="relative z-10 h-full bg-red-400 text-white flex items-end">
						<p className="p-4 text-3xl">Kumasi</p>
					</div>
				</div>
				<div className="h-72 w-56 bg-gray-500 inline-block relative cursor-pointer" >
					<img className="w-full h-full object-cover absolute top-0 left-0 z-0" src="images/central_region.jpg" alt="A site from Central Region, Ghana" />
					<div style={overlayStyle} className="relative z-10 h-full bg-red-400 text-white flex items-end">
						<p className="p-4 text-3xl">Central</p>
					</div>
				</div>
				<div className="h-72 w-56 bg-gray-500 inline-block relative cursor-pointer" >
					<img className="w-full h-full object-cover absolute top-0 left-0 z-0" src="images/eastern_region.jpg" alt="A site from Eastern Region, Ghana" />
					<div style={overlayStyle} className="relative z-10 h-full bg-red-400 text-white flex items-end">
						<p className="p-4 text-3xl">Eastern</p>
					</div>
				</div>
				<div className="h-72 w-56 bg-gray-500 inline-block relative cursor-pointer" >
					<img className="w-full h-full object-cover absolute top-0 left-0 z-0" src="images/western_region.jpg" alt="A site from Western Region, Ghana" />
					<div style={overlayStyle} className="relative z-10 h-full bg-red-400 text-white flex items-end">
						<p className="p-4 text-3xl">Western</p>
					</div>
				</div>
				<div className="h-72 w-56 bg-gray-500 inline-block relative cursor-pointer" >
					<img className="w-full h-full object-cover absolute top-0 left-0 z-0" src="images/accra_central.jpg" alt="accra central drone view" />
					<div style={overlayStyle} className="relative z-10 h-full bg-red-400 text-white flex items-end">
						<p className="p-4 text-3xl">Accra</p>
					</div>
				</div>
				<div className="h-72 w-56 bg-gray-500 inline-block relative cursor-pointer" >
					<img className="w-full h-full object-cover absolute top-0 left-0 z-0" src="images/accra_central.jpg" alt="accra central drone view" />
					<div style={overlayStyle} className="relative z-10 h-full bg-red-400 text-white flex items-end">
						<p className="p-4 text-3xl">Accra</p>
					</div>
				</div>
				<div className="h-72 w-56 bg-gray-500 inline-block relative cursor-pointer" >
					<img className="w-full h-full object-cover absolute top-0 left-0 z-0" src="images/accra_central.jpg" alt="accra central drone view" />
					<div style={overlayStyle} className="relative z-10 h-full bg-red-400 text-white flex items-end">
						<p className="p-4 text-3xl">Accra</p>
					</div>
				</div>
				<div className="h-72 w-56 bg-gray-500 inline-block relative cursor-pointer" >
					<img className="w-full h-full object-cover absolute top-0 left-0 z-0" src="images/accra_central.jpg" alt="accra central drone view" />
					<div style={overlayStyle} className="relative z-10 h-full bg-red-400 text-white flex items-end">
						<p className="p-4 text-3xl">Accra</p>
					</div>
				</div>
				<div className="h-72 w-56 bg-gray-500 inline-block relative cursor-pointer" >
					<img className="w-full h-full object-cover absolute top-0 left-0 z-0" src="images/accra_central.jpg" alt="accra central drone view" />
					<div style={overlayStyle} className="relative z-10 h-full bg-red-400 text-white flex items-end">
						<p className="p-4 text-3xl">Accra</p>
					</div>
				</div>

			</div>

			{!isAtLeftEnd && (
				<button
					className="cc-prev w-16 h-8 rounded-none bg-gray-400 absolute top-2/4 left-0 transform -translate-y-2/4 -translate-x-6"
					onClick={() => {
						handleSwipe({ deltaX: 200 });
						handleSwiped();
					}}
				>
					<svg xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "auto" }} height="100%" viewBox="0 0 20 20" fill="white">
						<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
					</svg>
				</button>
			)}

			{ !isAtRightEnd && (
				<button
					className="cc-next w-16 h-8 rounded-none bg-gray-400 absolute top-2/4 right-0 transform -translate-y-2/4 translate-x-6"
					onClick={() => {
						handleSwipe({ deltaX: -200 });
						handleSwiped()
					}}
				>
					<svg xmlns="http://www.w3.org/2000/svg" style={{ marginRight: "auto" }} height="100%" viewBox="0 0 20 20" fill="white">
						<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
					</svg>
				</button>
			)}
		</div >
	)
}