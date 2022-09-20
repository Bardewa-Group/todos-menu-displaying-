import React from 'react';
import Menu from './Menu-Api';
import Menu_card from './Menu-card';
import Nav from './Nav';
import UseReducer from './UseReducer';
import Todos from './Todos';

const category_list = [
  ...new Set(Menu.map((x) => {
    return (x.category)
  }))
];


const Resturant = () => {

  const [menu_data, set_menu_data] = React.useState(Menu);

  return (
    <>
      <Nav category_list={category_list}
        set_menu_data={set_menu_data}
        Menu={Menu} />

      <Menu_card menu_data={menu_data} />
      
      <UseReducer />
      <Todos />
      
    </>
  )
}

export default Resturant 