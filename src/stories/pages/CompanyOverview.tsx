import React from "react"
import { HeaderSimple } from "../../layout/Header/Header"
import { NavbarSimpleColored } from "../../layout/Sidebar/Sidebar"
import { Container, Flex, Title } from "@mantine/core";
import { CompanyOverviewContent } from "../../Pages/CompanyOverview";

const links = [
  {link: 'www.google.com', label: 'Dashboard'},
  {link: 'www.pudim.com', label: 'Customer'},
  {link: 'www.pudim.com.br', label: 'People'},
  {link: 'www.pudim.br', label: 'Payroll'},
  {link: 'pudim.com.br', label: 'Countries'},
  {link: 'pudim.com.br', label: 'Reporting'},
  {link: 'pudim.com.br', label: 'Project Hub'},
  {link: 'pudim.com.br', label: 'Settings'},
  {link: 'pudim.com.br', label: 'More'},
];

export const CompanyOverview = () => (
  <section>
    <HeaderSimple links={links} />
    <Flex>
      <NavbarSimpleColored />
      <Flex direction="column">
        <Title order={3}>Company Overview</Title>
        <CompanyOverviewContent />
      </Flex>
    </Flex>
  </section>
);
