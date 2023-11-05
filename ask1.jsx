var NewComponent = React.createClass({
    render: function () {
        return (
            <div>
                <meta charSet="utf-8" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                <title>SNU Query</title>
                <meta content name="description" />
                <meta content name="keywords" />
                {/* Fav icons Arin */}
                <link href="assets/img/favicon.png" rel="icon" />
                <link href="assets/img/favicon.png" rel="apple-touch-icon" />
                {/* Google Fonts */}
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
                {/* Vendor CSS Files */}
                <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
                <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
                <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
                <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
                <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
                {/* Template Main CSS File */}
                <link href="assets/css/style.css" rel="stylesheet" />
                {/* ======= Top Bar =======
    <section id="topbar" class="d-flex align-items-center">
      <div class="container d-flex justify-content-center justify-content-md-between">
        <div class="contact-info d-flex align-items-center">
          <i class="bi bi-envelope-fill"></i><a href="mailto:contact@example.com">snu.query@snu.edu.in</a>
          <i class="bi bi-phone-fill phone-icon"></i> +91 9686657675
        </div>
        <div class="social-links d-none d-md-block">
          <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
          <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
          <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
          <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></i></a>
        </div>
      </div>
    </section> */}
                {/* ======= Header ======= */}
                <header id="header" className="d-flex align-items-center">
                    <div className="container d-flex align-items-center justify-content-between">
                        <h1 className="logo"><a href="index.html"><img src="/assets/img/logo.png" height={500} /></a></h1>
                        {/* Uncomment below if you prefer to use an image logo */}
                        <a href="index.html" className="logo"> <alt="" className="img-fluid" /></a>
                        <div className="search-box">
                            <form action className="search">
                                <span className="icon-large"><i className="ri-search-line" /></span>
                                <input type="search" placeholder="What's on your mind today ?" />
                                <button type="Submit"><img src="/assets/img/snuglass.png" height={30} /></button>
                            </form>
                        </div>
                        <nav id="navbar" className="navbar">
                            <ul>
                                <li><a className="nav-link scrollto active" href="/index.html">Home</a></li>
                                {/* <li><a class="nav-link scrollto" href="#about">About</a></li> */}
                                <li><a className="nav-link scrollto" href="#services">Ask</a></li>
                                {/* <li><a class="nav-link scrollto" href="#team">Awards</a></li> */}
                                {/* <li><a class="nav-link scrollto" href="#pricing">Hostels</a></li> */}
                                {/*<li><a class="nav-link scrollto" href="#team">Team</a></li> */}
                                <li className="dropdown"><a href="#"><span>Campus</span> <i className="bi bi-chevron-down" /></a>
                                    <ul>
                                        <li><a href="#">Faculty</a></li>
                                        {/* <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li> */}
                                        <li><a href="#">Hostels</a></li>
                                        <li><a href="#">Events</a></li>
                                        <li><a href="#">Resource Bank</a></li>
                                    </ul>
                                </li>
                                {/* <li><a class="nav-link scrollto" href="#contact">Contact</a></li> */}
                                <li><a className="nav-link scrollto">Account</a></li>
                            </ul>
                            <i className="bi bi-list mobile-nav-toggle" />
                        </nav>{/* .navbar */}
                    </div>
                </header>{/* End Header */}
            </div>
        );
    }
});