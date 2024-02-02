import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';
const Card = {
  baseStyle: (props: StyleFunctionProps) => ({
    p: '22px',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    position: 'relative',
    minWidth: '0px',
    wordWrap: 'break-word',
    bg: mode('#ffffff', 'gray.700')(props),
    backgroundClip: 'border-box',
    boxShadow: '0px 3.5px 5.5px rgba(0, 0, 0, 0.02)',
    borderRadius: '15px',
  }),
};

export const CardComponent = {
  components: {
    Card,
  },
};
