import React, { useState } from 'react';

import Section from "../../components/Section/Section";
import Modal from './../../components/Modal/Modal';
import { Button } from './../../lib/style/generalStyles';

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalToggle = () => {
    console.log("click", isModalVisible);
    setIsModalVisible(!isModalVisible);
  };

  const handleModalClose = () => {
    console.log("clickClose", isModalVisible);
    setIsModalVisible(false);
  };
  
  return (
      <Section title="Main">
      <Button onClick={handleModalToggle}>Modal</Button>
       {isModalVisible && (
        <Modal title="Filtriraj" onClose={handleModalClose}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          tristique, ex sit amet semper elementum, libero nisl condimentum
          dolor, a dictum risus lectus quis justo. Quisque consequat ut lorem
          vitae commodo. Nunc dictum quam dui, auctor fermentum libero viverra
          consequat. Pellentesque luctus posuere lacus non suscipit. Praesent
          scelerisque auctor lorem, vitae ultricies ligula imperdiet sed.
          Aliquam eu fringilla elit. Pellentesque semper eros at mattis ornare.
          Ut finibus venenatis turpis id ullamcorper. Donec sit amet magna
          faucibus, posuere lorem in, sollicitudin turpis. Duis pellentesque
          quam quam, eu tempus tortor pretium in. Sed efficitur pellentesque
          ante, eget semper purus interdum ac. Integer lacinia, velit dapibus
          congue consectetur, nisi justo
        </Modal>
      )}
      </Section>
  );
}

export default Home;
