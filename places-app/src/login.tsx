import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

interface LoginModalProps {
  show: boolean;
  onHide: () => void;
}

async function loginUser(userName: string, password: string) {
  const response = await fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: userName, password }),
  });

  if (!response.ok) {
    throw new Error('Login failed:');
  }

  return response.json();
}

async function handleLoginCLick() {

  const userNameInput = document.getElementById('loginUsername') as HTMLInputElement;
  const passwordInput = document.getElementById('loginPassword') as HTMLInputElement;

  await loginUser(userNameInput.value, passwordInput.value);
}



function LoginModal({ show, onHide }: LoginModalProps) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Log in</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="loginUsername">
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
        <Button variant="primary" type="submit" onClick={() => {handleLoginCLick(); onHide();}}>
          Log in
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginModal;