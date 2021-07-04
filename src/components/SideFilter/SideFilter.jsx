import React, { useEffect, useState } from "react";

import { SideFilterWrapper, Buttons } from "./SideFilterStyles";
import {
  Button,
  ButtonOutline,
  FormRow,
  InputLabel,
  SearchBar,
  Select,
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
        <Select>
          <SelectOption value="">Select car brand</SelectOption>
        </Select>
      </FormRow>
      <FormRow>
        <InputLabel>Model</InputLabel>
        <Select>
          <SelectOption value="">Select car model</SelectOption>
        </Select>
      </FormRow>
      <FormRow>
        <InputLabel>Year</InputLabel>
        <Select>
          <SelectOption value="">Select car year</SelectOption>
        </Select>
      </FormRow>
      <FormRow>
        <InputLabel>Variant</InputLabel>
        <Select>
          <SelectOption value="">Select car variant</SelectOption>
        </Select>
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
