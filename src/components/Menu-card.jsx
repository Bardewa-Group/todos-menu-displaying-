import React from 'react'
const Menu_card = ({ menu_data }) => {

  return (

    <section className='main-card--cointainer'>
      {menu_data.map((data) => {
        const {id, image, name, category, price, description} = data
        return (
          <>
            <div className="card-container" key={id}>
              <div className="card">

                <div className="card-body">
                  <span className="card card-circle subtle">{id}</span>
                  <span className="card-author subtle">{category}</span>
                  <h2 className="card-title">{name}</h2>
                  <span className="card-description subtle">{description}</span>
                  <div className="card-read">Read</div>
                </div>

                <img src={image} className='card-media' />
                <span className="card-tag subtle">Order Now</span>
              </div>
            </div>
          </>
        )
      })}

    </section>

  )
}

export default Menu_card 