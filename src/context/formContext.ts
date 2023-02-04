import React from "react";
import { getNewTableData } from "../hook/getNewTableData";
import { IData } from "../hook/useTableData";

export const dataContext = React.createContext<IData | undefined>({result: []});