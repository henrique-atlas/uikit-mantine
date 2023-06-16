import React from "react"
import { HeaderSimple } from "../../layout/Header/Header"
import { NavbarSimpleColored } from "../../layout/Header/Sidebar/Sidebar"

const links = [
  {link: 'www.google.com' , label: 'google'},
  {link: 'www.pudim.com.br', label: 'pudim'}
]

export const CompanyOverview = () => (
  <section>
    <HeaderSimple links={links} />
    <NavbarSimpleColored />
  </section>
);
