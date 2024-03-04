import { FunctionComponent, SVGProps } from "react";

export type MenuItem = {
  url?: string;
  name: string;
  active?: boolean;
  icon?: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
  key?: string;
};
