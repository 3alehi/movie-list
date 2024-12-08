import React from 'react';
 interface GenresBoxProps{
    name : string
 }
const GenresBox: React.FC<GenresBoxProps> = ({name}) => {
    return (
        <div className='bg-bg-black'>
            {name}
        </div>
    );
};

export default GenresBox;