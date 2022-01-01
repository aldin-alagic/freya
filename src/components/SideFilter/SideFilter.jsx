import React, { useEffect, useState } from "react";

import { SideFilterWrapper, Buttons } from "./SideFilterStyles";
import {
  Button,
  ButtonOutline,
  FormRow,
  InputLabel,
  SearchBar,
  SelectControl,
  SelectOption,
} from "../../lib/style/generalStyles";

const SideFilter = ({ onClose, products, onFilteredItemsChange }) => {
  const [sideFilter, setSideFilter] = useState({
    search: "",
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onFilterChange = () => {
    let newSideFilter = { ...sideFilter };
    setSideFilter(newSideFilter);
  };

  return (
    <SideFilterWrapper>
      <FormRow>
        <InputLabel>Search</InputLabel>
        <SearchBar placeholder="Search..." />
      </FormRow>
      <FormRow>
        <InputLabel>Brand</InputLabel>
        <SelectControl>
          <SelectOption value="">Select car brand</SelectOption>
        </SelectControl>
      </FormRow>
      <FormRow>
        <InputLabel>Model</InputLabel>
        <SelectControl>
          <SelectOption value="">Select car model</SelectOption>
        </SelectControl>
      </FormRow>
      <FormRow>
        <InputLabel>Year</InputLabel>
        <SelectControl>
          <SelectOption value="">Select car year</SelectOption>
        </SelectControl>
      </FormRow>
      <FormRow>
        <InputLabel>Variant</InputLabel>
        <SelectControl>
          <SelectOption value="">Select car variant</SelectOption>
        </SelectControl>
      </FormRow>
      {onClose && (
        <Buttons>
          <Button onClick={onClose}>Show results</Button>
          <ButtonOutline
            onClick={() => {
              onFilteredItemsChange(products);
              onClose();
            }}
          >
            Close
          </ButtonOutline>
        </Buttons>
      )}
    </SideFilterWrapper>
  );
};

export default SideFilter;
