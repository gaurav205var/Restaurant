// import React from "react";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import { Box, Typography } from "@mui/material";
// const Footer = () => {
//   return (
//     <>
//       <Box
//         sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
//       >
//         <Box
//           sx={{
//             my: 3,
//             "& svg": {
//               fontSize: "60px",
//               cursor: "pointer",
//               mr: 2,
//             },
//             "& svg:hover": {
//               color: "goldenrod",
//               transform: "translateX(5px)",
//               transition: "all 400ms",
//             },
//           }}
//         >
//           {/* icons */}
//           <InstagramIcon />
//           <TwitterIcon />
//           <GitHubIcon />
//           <YouTubeIcon />
//         </Box>
//         <Typography
//           variant="h5"
//           sx={{
//             "@media (max-width:600px)": {
//               fontSize: "1rem",
//             },
//           }}
//         >
//           All Rights Reserved &copy; Resturant
//         </Typography>
//       </Box>
//     </>
//   );
// };

// export default Footer;

import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter
      bgColor="black"
      className="text-center text-lg-start text-white py-3"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-2 p-lg-4 border-bottom">
        <div className="me-2 me-lg-5 d-none d-lg-block h-20">
          <span>Connect with us on social media:</span>
        </div>

        <div>
          <a href="/" className="me-2 me-lg-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="/" className="me-2 me-lg-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="/" className="me-2 me-lg-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-3">
          <MDBRow className="mt-2">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-3">
              <h6 className="text-uppercase fw-bold mb-3">
                <MDBIcon icon="utensils" className="me-2" />
                Food Delight
              </h6>
              <p>
                Explore a world of delicious flavors with Food Delight. We bring
                you the best in culinary experiences.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-3">
              <h6 className="text-uppercase fw-bold mb-3">Explore</h6>
              <p>
                <a href="/" className="text-reset">
                  Menu
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Our Chefs
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Specials
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Catering
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-3">
              <h6 className="text-uppercase fw-bold mb-3">Useful Links</h6>
              <p>
                <a href="/" className="text-reset">
                  Order Online
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  Contact Us
                </a>
              </p>
              <p>
                <a href="/" className="text-reset">
                  FAQs
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-3">
              <h6 className="text-uppercase fw-bold mb-3">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                123 Food Street, Cityville, USA
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-2 me-md-3" />
                info@fooddelight.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-2 me-md-3" /> +91 22 1234
                5678
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-2 p-lg-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © {new Date().getFullYear()} Food Delight. All rights reserved.
      </div>
    </MDBFooter>
  );
};

export default Footer;
