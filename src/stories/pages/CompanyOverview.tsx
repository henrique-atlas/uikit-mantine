import React from 'react'
import { Flex, Title, createStyles } from '@mantine/core';
import { HeaderSimple } from '../../layout/Header/Header';
import { NavbarSimpleColored } from '../../layout/Sidebar/Sidebar';
import { CompanyOverviewContent } from '../../Pages/CompanyOverview';

const links = [
  {link: 'www.google.com', label: 'Dashboard'},
  {link: 'www.pudim.com', label: 'Customer'},
  {link: 'www.pudim.com.br', label: 'People'},
  {link: 'www.pudim.br', label: 'Payroll'},
  {link: 'pudim.com.br', label: 'Countries'},
  {link: 'pudim.com.br', label: 'Reporting'},
  {link: 'pudim.com.br', label: 'Project Hub'},
  {link: 'pudim.com.br', label: 'Settings'},
];

const useStyles = createStyles(() => ({
  title: {
    backgroundColor: '#F1F5F9',
  },
}));

export const CompanyOverview = () => {
  const { classes } = useStyles();
  return (
    <section>
      <HeaderSimple links={links} />
      <Flex>
        <NavbarSimpleColored />
        <Flex direction="column">
          <Title className={classes.title} py={18} pl={32} weight={500} size={22} order={3}>
            Company Overview
          </Title>
          <CompanyOverviewContent />
        </Flex>
      </Flex>
    </section>
  );
};
