import React from "react";
import { IData } from "../hook/useTableData";

export const dataContext = React.createContext<IData | undefined | null>({result: []});