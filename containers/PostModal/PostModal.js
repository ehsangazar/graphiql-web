import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'

const PostModal = ({
  show,
  handleClose
}) => {
  const [form,setForm] = useState({})
  const handleChange = (event,name) => {
    setForm({
      ...form,
      [name]:event.target.value
    })
  }
  const handleSubmit = (event) => {
    if (event) event.preventDefault()
    console.log('form',form)
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group controlId="formBasicTitle">
            <Form.Control
              onChange={(event) => handleChange(event, 'title')}
              type="Title"
              placeholder="Enter Title"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicURL">
            <Form.Control
              onChange={(event) => handleChange(event, 'url')}
              type="URL"
              placeholder="Enter URL"
              required
            />
          </Form.Group>
          <Form.Group controlId="FormBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={(event) => handleChange(event, 'description')}
              as="textarea"
              rows="3"
              required
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary" type="submit">
            Save changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default PostModal
