import React from "react";
import { FilterValue } from "../types";
import { FILTERS_BUTTONS } from "../consts";

interface Props {
  filterSeleced: FilterValue;
  onFilterChange: (filter: FilterValue) => void;
}

export const Filters: React.FC<Props> = ({ filterSeleced, onFilterChange }) => {
  return (
    <ul className="filters">
      {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
        const isSelected = key === filterSeleced;
        const className = isSelected ? "selected" : "";
        return (
          <li key={key}>
            <a
              href={href}
              className={className}
              onClick={(event) => {
                event?.preventDefault();
                onFilterChange(key as FilterValue);
              }}
            >
              {literal}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
