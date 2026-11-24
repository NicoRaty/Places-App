import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

interface LoginModalProps {
  show: boolean;
  onHide: () => void;
}

function LoginModal({ show, onHide }: LoginModalProps) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Log in</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="loginEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" autoComplete="username" autoFocus />
          </Form.Group>
          <Form.Group controlId="loginPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" autoComplete="current-password" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" type="submit">
          Log in
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginModal;