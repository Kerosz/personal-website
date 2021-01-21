import Layout from '@components/layout';
import useActiveLink from '@hooks/use-active-link';
import { Text } from '@lib/ui';

export default function Blog() {
  const linkRef = useActiveLink('/blog');

  return <Text ref={linkRef}>Blog</Text>;
}

Blog.Layout = Layout;
