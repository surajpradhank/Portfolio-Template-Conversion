import React from "react";

const PortfolioSection = () => (

    <section className="page-section portfolio" id="portfolio">
        <div className="container">

            <h2
                className="page-section-heading text-center text-uppercase text-secondary mb-0"
            >
                Portfolio
            </h2>

            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>

            <div className="row justify-content-center">

                <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1" >
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white">
                                <i className="fas fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img className="img-fluid"
                            src='/images/portfolio/cabin.png'
                            alt="..."
                        />
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mb-5">
                    <div
                        className="portfolio-item mx-auto"
                        data-bs-toggle="modal"
                        data-bs-target="#portfolioModal2"
                    >
                        <div
                            className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
                        >
                            <div
                                className="portfolio-item-caption-content text-center text-white"
                            >
                                <i className="fas fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img
                            className="img-fluid"
                            src="/images/portfolio/cake.png"
                            alt="..."
                        />
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mb-5">
                    <div
                        className="portfolio-item mx-auto"
                        data-bs-toggle="modal"
                        data-bs-target="#portfolioModal3"
                    >
                        <div
                            className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
                        >
                            <div
                                className="portfolio-item-caption-content text-center text-white"
                            >
                                <i className="fas fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img
                            className="img-fluid"
                            src="/images/portfolio/circus.png"
                            alt="..."
                        />
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                    <div
                        className="portfolio-item mx-auto"
                        data-bs-toggle="modal"
                        data-bs-target="#portfolioModal4"
                    >
                        <div
                            className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
                        >
                            <div
                                className="portfolio-item-caption-content text-center text-white"
                            >
                                <i className="fas fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img
                            className="img-fluid"
                            src="/images/portfolio/game.png"
                            alt="..."
                        />
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                    <div
                        className="portfolio-item mx-auto"
                        data-bs-toggle="modal"
                        data-bs-target="#portfolioModal5"
                    >
                        <div
                            className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
                        >
                            <div
                                className="portfolio-item-caption-content text-center text-white"
                            >
                                <i className="fas fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img
                            className="img-fluid"
                            src="/images/portfolio/safe.png"
                            alt="..."
                        />
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div
                        className="portfolio-item mx-auto"
                        data-bs-toggle="modal"
                        data-bs-target="#portfolioModal6"
                    >
                        <div
                            className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
                        >
                            <div
                                className="portfolio-item-caption-content text-center text-white"
                            >
                                <i className="fas fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img
                            className="img-fluid"
                            src="/images/portfolio/submarine.png"
                            alt="..."
                        />
                    </div>
                </div>
            </div>
        </div>

        {/* // Portfolio Modal 1 */}
        <div
            class="portfolio-modal modal fade"
            id="portfolioModal1"
            tabindex="-1"
            aria-labelledby="portfolioModal1"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0">
                        <button
                            class="btn-close"
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    {/* // Portfolio Modal - Title */}
                                    <h2
                                        class="portfolio-modal-title text-secondary text-uppercase mb-0"
                                    >
                                        Log Cabin
                                    </h2>
                                    {/* // Icon Divider */}
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon">
                                            <i class="fas fa-star"></i>
                                        </div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    {/* // Portfolio Modal - Image */}
                                    <img
                                        class="img-fluid rounded mb-5"
                                        src="/images/portfolio/cabin.png"
                                        alt="..."
                                    />
                                    {/* // Portfolio Modal - Text */}
                                    <p class="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Mollitia neque assumenda ipsam nihil, molestias magnam,
                                        recusandae quos quis inventore quisquam velit asperiores,
                                        vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                                        Nam.
                                    </p>
                                    <button class="btn btn-primary" data-bs-dismiss="modal">
                                        <i class="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* // Portfolio Modal 2 */}
        <div
            class="portfolio-modal modal fade"
            id="portfolioModal2"
            tabindex="-1"
            aria-labelledby="portfolioModal2"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0">
                        <button
                            class="btn-close"
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    {/* // Portfolio Modal - Title */}
                                    <h2
                                        class="portfolio-modal-title text-secondary text-uppercase mb-0"
                                    >
                                        Tasty Cake
                                    </h2>
                                    {/* // Icon Divider */}
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon">
                                            <i class="fas fa-star"></i>
                                        </div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    {/* // Portfolio Modal - Image */}
                                    <img
                                        class="img-fluid rounded mb-5"
                                        src="/images/portfolio/cake.png"
                                        alt="..."
                                    />
                                    {/* // Portfolio Modal - Text */}
                                    <p class="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Mollitia neque assumenda ipsam nihil, molestias magnam,
                                        recusandae quos quis inventore quisquam velit asperiores,
                                        vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                                        Nam.
                                    </p>
                                    <button class="btn btn-primary" data-bs-dismiss="modal">
                                        <i class="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* // Portfolio Modal 3 */}
        <div
            class="portfolio-modal modal fade"
            id="portfolioModal3"
            tabindex="-1"
            aria-labelledby="portfolioModal3"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0">
                        <button
                            class="btn-close"
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    {/* // Portfolio Modal - Title */}
                                    <h2
                                        class="portfolio-modal-title text-secondary text-uppercase mb-0"
                                    >
                                        Circus Tent
                                    </h2>
                                    {/* // Icon Divider */}
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon">
                                            <i class="fas fa-star"></i>
                                        </div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    {/* // Portfolio Modal - Image */}
                                    <img
                                        class="img-fluid rounded mb-5"
                                        src="/images/portfolio/circus.png"
                                        alt="..."
                                    />
                                    {/* // Portfolio Modal - Text */}
                                    <p class="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Mollitia neque assumenda ipsam nihil, molestias magnam,
                                        recusandae quos quis inventore quisquam velit asperiores,
                                        vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                                        Nam.
                                    </p>
                                    <button class="btn btn-primary" data-bs-dismiss="modal">
                                        <i class="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* // Portfolio Modal 4 */}
        <div
            class="portfolio-modal modal fade"
            id="portfolioModal4"
            tabindex="-1"
            aria-labelledby="portfolioModal4"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0">
                        <button
                            class="btn-close"
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    {/* // Portfolio Modal - Title */}
                                    <h2
                                        class="portfolio-modal-title text-secondary text-uppercase mb-0"
                                    >
                                        Controller
                                    </h2>
                                    {/* // Icon Divider */}
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon">
                                            <i class="fas fa-star"></i>
                                        </div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    {/* // Portfolio Modal - Image */}
                                    <img
                                        class="img-fluid rounded mb-5"
                                        src="/images/portfolio/game.png"
                                        alt="..."
                                    />
                                    {/* // Portfolio Modal - Text */}
                                    <p class="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Mollitia neque assumenda ipsam nihil, molestias magnam,
                                        recusandae quos quis inventore quisquam velit asperiores,
                                        vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                                        Nam.
                                    </p>
                                    <button class="btn btn-primary" data-bs-dismiss="modal">
                                        <i class="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* // Portfolio Modal 5 */}
        <div
            class="portfolio-modal modal fade"
            id="portfolioModal5"
            tabindex="-1"
            aria-labelledby="portfolioModal5"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0">
                        <button
                            class="btn-close"
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    {/* // Portfolio Modal - Title */}
                                    <h2
                                        class="portfolio-modal-title text-secondary text-uppercase mb-0"
                                    >
                                        Locked Safe
                                    </h2>
                                    {/* // Icon Divider */}
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon">
                                            <i class="fas fa-star"></i>
                                        </div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    {/* // Portfolio Modal - Image */}
                                    <img
                                        class="img-fluid rounded mb-5"
                                        src="/images/portfolio/safe.png"
                                        alt="..."
                                    />
                                    {/* // Portfolio Modal - Text */}
                                    <p class="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Mollitia neque assumenda ipsam nihil, molestias magnam,
                                        recusandae quos quis inventore quisquam velit asperiores,
                                        vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                                        Nam.
                                    </p>
                                    <button class="btn btn-primary" data-bs-dismiss="modal">
                                        <i class="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* // Portfolio Modal 6 */}
        <div
            class="portfolio-modal modal fade"
            id="portfolioModal6"
            tabindex="-1"
            aria-labelledby="portfolioModal6"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0">
                        <button
                            class="btn-close"
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    {/* // Portfolio Modal - Title */}
                                    <h2
                                        class="portfolio-modal-title text-secondary text-uppercase mb-0"
                                    >
                                        Submarine
                                    </h2>
                                    {/* // Icon Divider */}
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon">
                                            <i class="fas fa-star"></i>
                                        </div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    {/* // Portfolio Modal - Image */}
                                    <img
                                        class="img-fluid rounded mb-5"
                                        src="/images/portfolio/submarine.png"
                                        alt="..."
                                    />
                                    {/* // Portfolio Modal - Text */}
                                    <p class="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Mollitia neque assumenda ipsam nihil, molestias magnam,
                                        recusandae quos quis inventore quisquam velit asperiores,
                                        vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                                        Nam.
                                    </p>
                                    <button class="btn btn-primary" data-bs-dismiss="modal">
                                        <i class="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>


)

export default PortfolioSection