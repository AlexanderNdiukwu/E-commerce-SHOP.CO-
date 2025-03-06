import View from '../ButtonComponent/View';
import { useState } from 'react';

const Categorystyle = ({ CategoryCall }) => {
    let [clicked, SetClicked] = useState('');

    let styleData = [
        { style: 'Casual' },
        { style: 'Party' },
        { style: 'Former' },
        { style: 'Gym' },
    ];

    let click = (x) => {
        SetClicked(x);
        CategoryCall(x); 
        // console.log('this is being clicked ')
    };

    return (
        <div>
            <div className="py-10">
                <div className="py-4">
                    <p className="text-xl font-bold">Dress Style</p>
                </div>
                <div className="text-base text-[#00000099] h-full grid gap-5">
                    {styleData.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => click(item.style)}
                            className={`hover:bg-[#f0f0f0] cursor-pointer ${item.style === clicked ? 'bg-black text-white rounded-3xl px-2 font-bold py-1' : ''}`}
                        >
                            {item.style}
                        </div>
                    ))}
                    <div className='bg-black text-white overflow-hidden rounded-4xl border-2'>
                        <View view='Apply Filter' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categorystyle;