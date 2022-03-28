import styled from "styled-components";

export const ContainerTableData = styled.table`
    border-collapse: collapse;
    th, tr, td{
        border: solid 1px rgb(120, 120, 120);
    }
    td{
        color: rgb(120, 120, 120);
    }
    th{
        color: rgb(90, 90, 90);
    }
    .row-number{
        padding: 0.8rem 1rem;
    }
    .row-name{
        padding:  0.8rem 0.4rem ;
        text-align: start;
        width: 200px;
    }
    .row-participation{
        padding:  0.8rem 0.4rem ;
        text-align: center;
    }
`
