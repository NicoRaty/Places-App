import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


interface RegisterModalProps {
  show: boolean;
  onHide: () => void;
}

function RegisterModal({ show, onHide }: RegisterModalProps) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="registerUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" autoComplete="username" autoFocus />
          </Form.Group>
          <Form.Group controlId="registerPassword">
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
          Register
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RegisterModal;