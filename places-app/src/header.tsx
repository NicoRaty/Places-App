import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export interface HeaderProps {
  brandName?: string;
  brandHref?: string;
  onLoginClick?: () => void;
  onSignupClick?: () => void;
}

export default function Header({
  brandName = 'BrandName',
  brandHref = '#home',
  onLoginClick,
  onSignupClick,
}: HeaderProps) {
  return (
    <Navbar expand="lg" bg="body-tertiary" sticky="top" className="border-bottom">
      <Container>
        <Navbar.Brand href={brandHref}>{brandName}</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />

        <Navbar.Collapse id="main-navbar-nav" className="justify-content-end">
          <div className="d-flex gap-2 mt-2 mt-lg-0">
            <Button
              variant="outline-secondary"
              size="sm"
              type="button"
              onClick={onLoginClick}
            >
              Log in
            </Button>
            <Button
              variant="primary"
              size="sm"
              type="button"
              onClick={onSignupClick}
            >
              Sign up
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}