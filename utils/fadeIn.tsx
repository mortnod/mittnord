/** @jsxImportSource theme-ui */

type Props = {
  duration?: number;
  delay?: number;
  children?: React.ReactNode;
};

const FadeIn = ({ duration = 300, delay = 0, children }: Props) => {
  return (
    <div
      sx={{
        '@keyframes fadeIn': {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },

        '@media (prefers-reduced-motion: no-preference)': {
          animationName: 'fadeIn',
          animationFillMode: 'backwards',
          animationDuration: `${duration}ms`,
          animationDelay: `${delay}ms`,
        },
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
