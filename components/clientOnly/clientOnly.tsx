import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function ClientOnly({ children }: Props) {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return <>{children}</>;
}
