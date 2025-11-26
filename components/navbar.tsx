"use client";

import {
  Mnavbar,
  MnavbarContainer,
  MnavbarBrand,
  MnavbarMenu,
  MnavbarItem,
  MnavbarToggle,
} from '@/components/maz/navbar';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Mnavbar>
      <MnavbarContainer>
        <MnavbarBrand>Brand</MnavbarBrand>

        <MnavbarMenu>
          <MnavbarItem active href="#">Home</MnavbarItem>
          <MnavbarItem href="#">About</MnavbarItem>
          <MnavbarItem href="#">Services</MnavbarItem>
          <MnavbarItem href="#">Contact</MnavbarItem>
          <MnavbarItem href="#">projects</MnavbarItem>
          <MnavbarItem href="#">skills</MnavbarItem>
        </MnavbarMenu>

        <MnavbarToggle
          isOpen={isOpen}
          onToggle={() => setIsOpen(!isOpen)}
        />
      </MnavbarContainer>
    </Mnavbar>
  );
}
