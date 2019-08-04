import { ValueTransformer } from "typeorm";

export const objectConverter: ValueTransformer = {
  from: (dbValue): object => {
    let object: object;

    try {
      object = JSON.parse(dbValue);
    } catch {
      object = {};
    }

    return object;
  },
  to: (entityValue): string => {
    let str: string;

    try {
      str = JSON.stringify(entityValue);
    } catch {
      str = "{}";
    }

    return str;
  }
};
