import { Mfooter, MfooterLink, MfooterTitle } from "./maz/footer";

export function Footer() {
  return (
    <Mfooter variant="default" className="relative">
      <div className="mr-240">
        <MfooterTitle className="flex items-center text-center">My Information</MfooterTitle>
        <div className="flex flex-col items-start ml-5 gap-2">
          <MfooterLink href="#">
            <i className="fa-solid fa-envelope mr-1"></i>
            email
          </MfooterLink>
          <MfooterLink href="#">
            <i className="fa-brands fa-facebook mr-1"></i>
            facebook
          </MfooterLink>
          <MfooterLink href="#">
            <i className="fa-brands fa-instagram mr-1"></i>
            instagram
          </MfooterLink>
          <MfooterLink href="#">
            <i className="fa-brands fa-twitter mr-1"></i>
            twitter
          </MfooterLink>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <MfooterLink href="#">About</MfooterLink>
        <MfooterLink href="#">Contact</MfooterLink>
        <MfooterLink href="#">Project</MfooterLink>
        <MfooterLink href="#">skill</MfooterLink>
      </div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
        <p>© 2024 - All rights reserved</p>
      </div>
    </Mfooter>
  );
}
