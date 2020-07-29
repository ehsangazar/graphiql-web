import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import { gql, useMutation } from '@apollo/client'

const CREATE_POST = gql`
  mutation CREATE_POST($url: String!, $title: String!, $description: String!) {
    createPost(url: $url, title: $title, description: $description) {
      title
      id
      description
      url
    }
  }
`

const PostModal = ({ show, handleClose, handleSuccess }) => {
  const [form, setForm] = useState({})
  const [addPost] = useMutation(CREATE_POST)

  const handleChange = (event, name) => {
    setForm({
      ...form,
      [name]: event.target.value,
    })
  }
  const handleSubmit = async (event) => {
    if (event) event.preventDefault()
    await addPost({
      variables: {
        title: form.title,
        url: form.url,
        description: form.description,
      },
    })
    handleSuccess()
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Add Post</Modal.Title>
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
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default PostModal
