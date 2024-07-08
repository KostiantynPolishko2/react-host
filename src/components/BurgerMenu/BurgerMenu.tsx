import React, { FC, Component, useState } from 'react';
import { BurgerMenuWrapper } from './BurgerMenu.styled';
import './BurgerMenu.css';
import Hamburger from 'hamburger-react';

interface BurgerMenuProps {}


const BurgerMenu: FC<BurgerMenuProps> = (): React.FunctionComponentElement<BurgerMenuProps> => {

   const [isOpen, setOpen] = useState(false);

   const hideShowBurger = (e: React.FormEvent<HTMLElement>):void => {
      const links = e.currentTarget.nextElementSibling as HTMLElement;
      links.style.display = isOpen? 'none' : 'block';
   }

   return (
      <BurgerMenuWrapper className='topnav'>
         <div style={{backgroundColor: 'grey', width: 'fit-content', height: 51 + 'px', float: 'left'}} onClick={hideShowBurger}>
            <Hamburger color='whitesmoke' background-color='grey' rounded
            toggled={isOpen} toggle={setOpen}/>
         </div>
         
         <div id="myLinks">
               <a href="#news">Number</a>
               <a href="#contact">VinCode</a>
               <a href="#about">MarkModel</a>
               <a href="#about">Region</a>
               <a href="#about">Price</a>
         </div>
         <a href="#home" className="active">Compare</a>
      </BurgerMenuWrapper>
     );
}

export default BurgerMenu;