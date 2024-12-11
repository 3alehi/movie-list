import React from "react";

interface StarRatingProps {
  imdbRating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ imdbRating }) => {
  const MAX_RATING = 10;
  const normalizedRating = (imdbRating / MAX_RATING) * 5; 

  return (
    <div className="flex space-x-1">
      {Array.from({ length: 5 }, (_, index) => {
        const fillPercentage = Math.max(0, Math.min(1, normalizedRating - index));
        return (
          <svg
            key={index}
            width="23"
            height="22"
            viewBox="0 0 23 22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id={`grad-${index}`}>
                <stop offset={`${fillPercentage * 100}%`} stopColor="#E50000" />
                <stop offset={`${fillPercentage * 100}%`} stopColor="#999999" />
              </linearGradient>
            </defs>
            <path
              d="M11.5 0L15.6545 6.28187L22.9127 8.2918L18.2221 14.1841L18.5534 21.7082L11.5 19.068L4.44658 21.7082L4.77793 14.1841L0.0873222 8.2918L7.34553 6.28187L11.5 0Z"
              fill={`url(#grad-${index})`} // اعمال گرادیانت برای نمایش پر و خالی
            />
          </svg>
        );
      })}
      <p className="my-1">      {normalizedRating}
      </p>
    </div>
  );
};

export default StarRating;
