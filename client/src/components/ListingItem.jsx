import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';

export default function ListingItem({ listing }) {
  // Safely destructuring the properties to avoid undefined errors
  const {
    _id,
    imageUrls = [],
    name,
    address,
    description,
    offer,
    discountPrice,
    regularPrice,
    type,
    bedrooms,
    bathrooms
  } = listing;

  return (
    <div className='bg-gray-200 shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
      <Link to={`/listing/${_id}`}>
        <img
          src={
            imageUrls[0] ||
            'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg'
          }
          alt='listing cover'
          className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'
        />
        <div className='p-3 flex flex-col gap-2 w-full'>
          <p className='truncate text-lg font-semibold text-customDarkPurple'>
            {name}
          </p>
          <div className='flex items-center gap-1'>
            <MdLocationOn className='h-4 w-4 text-customPurple' />
            <p className='text-sm text-customPurple truncate w-full'>
              {address}
            </p>
          </div>
          <p className='text-sm text-customGrey2 line-clamp-2'>
            {description}
          </p>
          <p className='text-customGrey2 mt-2 font-semibold '>
            ₹
            {offer && discountPrice !== undefined
              ? discountPrice.toLocaleString('en-US')
              : regularPrice !== undefined
              ? regularPrice.toLocaleString('en-US')
              : 'N/A'} {/* Fallback for when both prices are undefined */}
            {type === 'rent' && ' / month'}
          </p>
          <div className='text-customDarkPurple flex gap-4'>
            <div className='font-bold text-xs'>
              {bedrooms > 1
                ? `${bedrooms} beds `
                : `${bedrooms} bed `}
            </div>
            <div className='font-bold text-xs'>
              {bathrooms > 1
                ? `${bathrooms} baths `
                : `${bathrooms} bath `}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

