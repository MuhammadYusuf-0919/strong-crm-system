import { Box, useStyleConfig, BoxProps } from "@chakra-ui/react";

interface CardBodyProps extends BoxProps {
  variant: string;
}

const CardBody: React.FC<CardBodyProps> = ({ variant, children, ...rest }) => {
  const styles = useStyleConfig("CardBody", { variant });

  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
};

export default CardBody;
