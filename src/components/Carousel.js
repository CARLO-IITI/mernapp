import React from 'react';

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}> {/* objectFit: "contain !important" is used to make the image fit in the carousel */}
                <div className="carousel-inner" id='carousel'>

                    <div className="carousel-caption d-none d-md-block" style={{ zIndex: "10" }}>
                        <div className="d-flex justify-content-center">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /*value={search} onChange={(e) => { setSearch(e.target.value) }}} *//>
                            <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                        </div>
                    </div>

                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900x700/?pasta" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900x700/?pizza" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}
