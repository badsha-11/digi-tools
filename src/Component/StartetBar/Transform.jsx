import React from 'react';

const Transform = () => {
    return (
        <div className=' bg-linear-to-r from-[#4f39f6] to-[#9514fa] py-28'>
            <div className='w-11/12 mx-auto text-white text-center space-y-4'>
                <h2 className='font-extrabold text-5xl'>Ready to Transform Your Workflow?</h2>
                <p>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>

                <div className='mt-10 flex items-center justify-center gap-2.5'>
                    <button className='btn bg-white text-[#9514fa] rounded-full'>Explore Products</button>
                    <button className='btn bg-transparent text-white border rounded-full'>View Pricing</button>
                </div>
                <p>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Transform;