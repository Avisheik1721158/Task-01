import React from 'react';

const Home1 = () => {
    return (
        <div>
            <div class="navbar  bg-base-100">
                <div class="navbar-start">

                    <div class="flex-1">
                        <a class=" normal-case text-accent text-2xl font-semibold">Home/Writing Assistant</a>
                    </div>
                </div>
                <div class="navbar-end hidden lg:flex  ">
                    <button class="py-2 px-10  border-2 bg-primary text-white ">Save</button>
                    <button class="mx-12 py-2 px-10  border-2 bg-primary text-white ">Filter</button>


                </div>

            </div>
        </div>
    );
};

export default Home1;