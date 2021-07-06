import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div>
                
    <div class="main-wrap main">

    <header className="landing-header">
                    <Link to="/">
                            <img src="./logo.svg" />
                     </Link>
                </header>



<div class="main-content pt-0 bg-white ps-0 pe-0">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6 col-md-8 text-center default-page align-items-center d-flex">
                <div class="card border-0 text-center d-block p-0">
                    <img src="images/bg-43.png" alt="icon" class="w200 mb-4 ms-auto me-auto pt-md-5" />
                    <h1 class="fw-700 text-grey-900 display3-size display4-md-size">Oops! It looks like you're lost.</h1>
                    <p class="text-grey-500 font-xsss">The page you're looking for isn't available. Try to search again or use the go to.</p>
                    <Link to="/dashboard" class="p-3 w175 bg-current text-white d-inline-block text-center fw-600 font-xssss rounded-3 text-uppercase ls-3">Dashboard</Link>
                </div>
            </div>
        </div>
    </div> 
</div>


</div>

        </div>
    )
}
