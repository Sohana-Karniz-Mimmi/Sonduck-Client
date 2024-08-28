import React from 'react';
import Container from './../Shared/Container';

const FAQs = () => {
    return (
        <div className='pt-5'>
            <Container>
                <button className='text-xl px-3 py-2  font-inter font-light border rounded-md text-primary border-primary bg-rose-100'>FAQs</button>
                <h1 className='text-5xl font-inter py-3'>Frequently Asked Questions</h1>
                <p className='font-inter text-xl'>We understand that you may have some questions about sunduckfilm. We have compiled a list of frequently asked questions to help you get the information you need. If you have any other questions, please do not hesitate to contact us.</p>
                <section className='flex py-56  rounded bg-white'>
                    <div className='w-1/2 px-2'>A</div>
                    <div className='w-1/2 px-2'>B</div>
                </section>
            </Container>
        </div>
    );
};

export default FAQs;