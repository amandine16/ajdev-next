import { useState } from 'react';
import Layout from '../components/layout/Layout'
export const getServerSideProps = (context) => {
  console.log('sid', context)
  const contextTest = 'e'
  return { props: { contextTest } };
}

export default function Home(props) {
  return (
    <Layout >
      <div className='bg-white'>

        <div id="services" className='h-[500px] w-full'>services</div>
        <div id="fefe" className='h-[500px] w-full'>fefe</div>
        <div id="fefe" className='h-[500px] w-full'>fefe</div>
        <div id="fefe" className='h-[500px] w-full'>services</div>
        <div id="dashboard">dashboard</div>
        <div id="dashboard"></div>
        <div id="dashboard"></div>
        <div id="dashboard"></div>
        <div id="dashboard"></div>
      </div>
    </Layout>
  )
}
