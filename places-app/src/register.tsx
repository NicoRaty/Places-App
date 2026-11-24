import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


interface RegisterModalProps {
  show: boolean;
  onHide: () => void;
}

async function Register(userName: string, password: string) {

  const response = await fetch('http://localhost:3000/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: userName, password }),
  });

  if (!response.ok) {
    throw new Error('Registration failed');
  }

  return response.json();
}

async function handleRegisterClick() {
  const userNameInput = document.getElementById('Registername') as HTMLInputElement;
  const passwordInput = document.getElementById('registerPassword') as HTMLInputElement;

  await Register(userNameInput.value, passwordInput.value);
}

function RegisterModal({ show, onHide }: RegisterModalProps) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="Registername">
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
        <Button variant="primary" type="submit" onClick={() => {handleRegisterClick(); onHide();}}>
          Register
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RegisterModal;