import React from 'react'
import { HeadingPrimary } from '@/app/components/Headings'
import { Button } from '@nextui-org/react'

const Blogs = () => {
  const headingButton = <Button variant='shadow' color='primary'> View All Blogs </Button>
  return (
    <section id='blogs' className='section-container section-blogs'>
      <HeadingPrimary title='Blogs' subtitle='Latest Posts' context={headingButton} />

    </section>
  )
}

export default Blogs