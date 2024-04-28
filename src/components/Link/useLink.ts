export interface LinkProps {
  href: string;
  label: string;
}

export const useLink = (props: LinkProps) => {
  return {
    ...props,
  };
};
