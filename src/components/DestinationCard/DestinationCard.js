// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const DestinationCard = ({ destination }) => {
//   const {
//     id,
//     name,
//     description,
//     images = [],
//     price,
//     duration,
//     rating,
//     highlights,
//     category,
//   } = destination;

//   const placeholderImages = [
//     "https://picsum.photos/600/400?random=1",
//     "https://picsum.photos/600/400?random=2",
//     "https://picsum.photos/600/400?random=3",
//   ];

//   const gallery = images.length >= 0 ? images : placeholderImages;

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % gallery.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [gallery.length]);

//   const renderStars = (rating) => {
//     const stars = [];
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 !== 0;

//     for (let i = 0; i < fullStars; i++) {
//       stars.push(
//         <svg
//           key={i}
//           className="w-4 h-4 text-yellow-400 fill-current"
//           viewBox="0 0 20 20"
//         >
//           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//         </svg>
//       );
//     }

//     if (hasHalfStar) {
//       stars.push(
//         <svg
//           key="half"
//           className="w-4 h-4 text-yellow-400 fill-current"
//           viewBox="0 0 20 20"
//         >
//           <defs>
//             <linearGradient id="halfStar">
//               <stop offset="50%" stopColor="#fbbf24" />
//               <stop offset="50%" stopColor="#e5e7eb" />
//             </linearGradient>
//           </defs>
//           <path
//             fill="url(#halfStar)"
//             d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
//           />
//         </svg>
//       );
//     }

//     const emptyStars = 5 - Math.ceil(rating);
//     for (let i = 0; i < emptyStars; i++) {
//       stars.push(
//         <svg
//           key={`empty-${i}`}
//           className="w-4 h-4 text-gray-300 fill-current"
//           viewBox="0 0 20 20"
//         >
//           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//         </svg>
//       );
//     }

//     return stars;
//   };

//   return (
//     <div className="card group overflow-hidden flex flex-col rounded-2xl shadow-md">
//       {/* Image Carousel */}
//       <div className="relative h-64 w-full overflow-hidden flex-shrink-0">
//         {gallery.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             alt={`${name}-${index}`}
//             className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
//               index === currentIndex ? "opacity-100" : "opacity-0"
//             }`}
//           />
//         ))}

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

//         {/* Category Badge */}
//         <div className="absolute top-4 left-4">
//           <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full uppercase tracking-wider">
//             {category}
//           </span>
//         </div>

//         {/* Price */}
//         <div className="absolute top-4 right-4">
//           <span className="px-3 py-1 bg-yellow-400 text-gray-800 text-sm font-bold rounded-full">
//             {price}
//           </span>
//         </div>

//         {/* Rating */}
//         <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
//           <div className="flex">{renderStars(rating)}</div>
//           <span className="text-sm font-semibold text-gray-800 ml-1">
//             {rating}
//           </span>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-6 flex-1 flex flex-col">
//         <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
//           {name}
//         </h3>

//         <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
//           {description}
//         </p>

//         {/* Duration */}
//         <div className="flex items-center gap-2 mb-4 text-primary-600">
//           <svg
//             className="w-4 h-4"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//             />
//           </svg>
//           <span className="text-sm font-medium">{duration}</span>
//         </div>

//         {/* Highlights */}
//         <div className="mb-6">
//           <h4 className="text-sm font-semibold text-gray-700 mb-2">
//             Highlights:
//           </h4>
//           <div className="flex flex-wrap gap-2">
//             {highlights.slice(0, 3).map((highlight, index) => (
//               <span
//                 key={index}
//                 className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
//               >
//                 {highlight}
//               </span>
//             ))}
//             {highlights.length > 3 && (
//               <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md">
//                 +{highlights.length - 3} more
//               </span>
//             )}
//           </div>
//         </div>
//                 {/* Actions */}
//                 <div className="flex gap-3">
//           <Link to={`/domestic/${id}`} className="flex-1 btn-primary text-center py-2">
//             View Itinerary
//           </Link>
//           <button className="flex-1 btn-outline py-2">Book Now</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DestinationCard;



import React, { useState, useEffect, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";

// Lazy-load the image component
const LazyImage = lazy(() => import('../LazyImage/LazyImage'));

const DestinationCard = ({ destination }) => {
  const navigate = useNavigate();

  const {
    id,
    name,
    description,
    images = [],
    price,
    duration,
    rating,
    highlights,
    category,
  } = destination;

  const placeholderImages = [
    "https://picsum.photos/600/400?random=1",
    "https://picsum.photos/600/400?random=2",
    "https://picsum.photos/600/400?random=3",
  ];

  const gallery = images.length > 0 ? images : placeholderImages;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % gallery.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [gallery.length]);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="halfStar">
              <stop offset="50%" stopColor="#fbbf24" />
              <stop offset="50%" stopColor="#e5e7eb" />
            </linearGradient>
          </defs>
          <path fill="url(#halfStar)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return stars;
  };

  const handleBookNow = () => {
    navigate("/contact");
  };

  const pdfPath = `/itineraries/${id}.pdf`;

  return (
    <div className="card group overflow-hidden flex flex-col rounded-2xl shadow-md">
      {/* Image Carousel */}
      <div className="relative h-64 w-full overflow-hidden flex-shrink-0">
        <Suspense
          fallback={
            <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center text-gray-500">
              Loading...
            </div>
          }
        >
          {gallery.map((img, index) => (
            <LazyImage
              key={index}
              src={img}
              alt={`${name}-${index}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </Suspense>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full uppercase tracking-wider">
            {category}
          </span>
        </div>

        {/* Price */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-yellow-400 text-gray-800 text-sm font-bold rounded-full">
            {price}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
          <div className="flex">{renderStars(rating)}</div>
          <span className="text-sm font-semibold text-gray-800 ml-1">
            {rating}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
          {name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
          {description}
        </p>

        {/* Duration */}
        <div className="flex items-center gap-2 mb-4 text-primary-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm font-medium">{duration}</span>
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
            Highlights:
          </h4>
          <div className="flex flex-wrap gap-2">
            {highlights.slice(0, 3).map((highlight, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                {highlight}
              </span>
            ))}
            {highlights.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md">
                +{highlights.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          <a href={pdfPath} target="_blank" rel="noopener noreferrer" className="flex-1 btn-primary text-center py-2">
            View Itinerary
          </a>
          <button onClick={handleBookNow} className="flex-1 btn-outline py-2">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;