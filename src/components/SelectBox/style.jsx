import styled from "styled-components";

export const SelectContainer = styled.div`
  position: relative;
`;

export const HiddenSelect = styled.select`
  display: none;
`;

export const SelectSelected = styled.div`
  background-color: transparent;
  color: #000;
  padding: 8px 16px;
  border: 2px solid rgb(182, 181, 181);
  border-radius: 10px;
  cursor: pointer;
  position: relative;

  &:after {
    position: absolute;
    content: "";
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: #000 transparent transparent transparent;
  }

  &.select-arrow-active:after {
    border-color: transparent transparent #000 transparent;
    top: 7px;
  }
`;

export const SelectItems = styled.div`
  position: absolute;
  background-color: #fff;
  border: 2px solid rgb(182, 181, 181);
  border-radius: 10px;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 2;

  &.select-hide {
    display: none;
  }

  div, .select-selected {
    color: #000;
    padding: 8px 16px;
    border: 1px solid transparent;
    border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
    cursor: pointer;

    &:hover, &.same-as-selected {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;
