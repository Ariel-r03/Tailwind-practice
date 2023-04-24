import React from 'react'
import {card} from '../assets'
import styles,{layout} from '../style'
import Button from './Button'
const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className='sm:block hidden' /> in few easy steps.
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Consequatur ad pariatur repellendus ducimus accusamus 
          iure cupiditate sint ab esse atque officia totam excepturi, 
          sapiente aspernatur architecto qui omnis et ipsum.
        </p>

        <button className='mt-10'><Button/></button>
      </div>

      <div className={layout.sectionImg}>
        <img className='w-[100%] h-[100%]' src={card} alt="card" />
      </div>

    </section>
  )
}

export default CardDeal