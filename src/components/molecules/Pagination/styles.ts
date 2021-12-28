import styled from "styled-components";
import Pagination from "./index";

const StyledPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 0;

  .pagination__prev {
    flex-grow: 1;
    text-align: left;
  }

  .pagination__next {
    flex-grow: 1;
    text-align: right;
  }

  .pagination__prev-link,
  .pagination__next-link {
    color: #539bf5;
    font-size: 1rem;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: 4px 12px;
    border-radius: 6px;
    transition: border-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);

    @media screen and (max-width: 567px) {
      display: none;
    }

    &:hover,
    &:focus {
      border-color: #444c56;
      transition-duration: 0.1s;
      outline: 0;
    }

    &.-disable {
      pointer-events: none;
      color: #545d68;
    }
  }

  .pagination__list-container {
    margin: 0;

    li {
      display: inline-block;
      margin: 5px;

      a,
      span {
        min-width: 32px;
        font-size: 1rem;
        color: #adbac7;
        vertical-align: middle;
        font-weight: normal;
        line-height: 1rem;
        display: inline;
        padding: 4px 10px;
        border: 1px solid transparent;
        border-radius: 6px;
        transition: border-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);

        &:hover,
        &:focus {
          border-color: #444c56;
          transition-duration: 0.1s;
        }
      }

      a.selected {
        color: #cdd9e5;
        background-color: #316dca;
        border-color: transparent;
        pointer-events: none;
      }

      span {
        pointer-events: none;

        &:hover,
        &:focus {
          border-color: transparent;
        }
      }
    }
  }
`;

export default StyledPagination;
