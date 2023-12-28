import React from 'react'
import { Button, Spinner } from 'react-bootstrap'

export default function loading() {
  return (
    <div className='text-center'>
      <Button variant="secondary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    </div>
  )
}
